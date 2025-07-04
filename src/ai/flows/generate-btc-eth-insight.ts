'use server';
/**
 * @fileOverview Generates AI insights on cryptocurrency trends.
 *
 * - generateCryptoInsight - A function that generates insights for a given crypto symbol.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const coinGeckoIds: { [key: string]: string } = {
  BTC: 'bitcoin',
  ETH: 'ethereum',
  SOL: 'solana',
  ADA: 'cardano',
  DOGE: 'dogecoin',
  XRP: 'ripple',
  DOT: 'polkadot',
  MATIC: 'matic-network',
  LINK: 'chainlink',
  LTC: 'litecoin',
  BCH: 'bitcoin-cash',
  XLM: 'stellar',
  AAVE: 'aave',
  UNI: 'uniswap',
};

const getCryptoPrice = ai.defineTool(
  {
    name: 'getCryptoPrice',
    description: 'Returns the current market price of a cryptocurrency.',
    inputSchema: z.object({
      ticker: z.string().describe('The ticker symbol of the cryptocurrency, e.g., BTC, ETH.'),
    }),
    outputSchema: z.number(),
  },
  async (input) => {
    const ticker = input.ticker.toUpperCase();
    const coinId = coinGeckoIds[ticker];

    if (!coinId) {
      throw new Error(`Unsupported token symbol: ${ticker}.`);
    }
    
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`);
      if (!response.ok) {
          const errorBody = await response.text();
          console.error(`CoinGecko API error for ${ticker}: ${response.status} ${response.statusText}`, errorBody);
          throw new Error(`Failed to fetch price from market data provider. Status: ${response.status}`);
      }
      const data = await response.json();
      const price = data[coinId]?.usd;
      if (price) {
          return price;
      } else {
          throw new Error(`Price data not found for ${ticker} in API response.`);
      }
    } catch (error) {
      console.error(`Failed to fetch price for ${ticker}:`, error);
      if (error instanceof Error) {
        throw new Error(`Could not fetch price for ${ticker}: ${error.message}`);
      }
      throw new Error(`An unknown error occurred while fetching the price for ${ticker}.`);
    }
  }
);

const GenerateCryptoInsightInputSchema = z.object({
  symbol: z.string().describe('The cryptocurrency ticker symbol, e.g., BTC, ETH, SOL.'),
});
type GenerateCryptoInsightInput = z.infer<typeof GenerateCryptoInsightInputSchema>;

const GenerateCryptoInsightOutputSchema = z.object({
  insight: z.string().describe('AI-generated insight on the cryptocurrency trend.'),
});
type GenerateCryptoInsightOutput = z.infer<typeof GenerateCryptoInsightOutputSchema>;


const insightPrompt = ai.definePrompt({
  name: 'cryptoInsightPrompt',
  input: { schema: GenerateCryptoInsightInputSchema },
  output: { schema: GenerateCryptoInsightOutputSchema },
  tools: [getCryptoPrice],
  prompt: `You are a witty but sharp financial analyst providing insights on cryptocurrency trends. Your tone is like a cyberpunk hacker: cool, concise, and maybe a little cryptic.

It is crucial that you first use the getCryptoPrice tool to get the current price for the requested cryptocurrency. This real-time price is the most important piece of data for your analysis.

Then, using that price, provide a concise, actionable insight into the market sentiment and potential trends in a terminal-like format. Start with the ticker and the real-time price you obtained, then the insight. Be creative and format the price to two decimal places.

Example:
$BTC: 67,401.12
Signal: Strong accumulation patterns detected. Whales are quiet. Suggests a potential surge. Monitor resistance at 68k.

Now, provide an insight for {{{symbol}}}.`,
});

const generateCryptoInsightFlow = ai.defineFlow(
  {
    name: 'generateCryptoInsightFlow',
    inputSchema: GenerateCryptoInsightInputSchema,
    outputSchema: GenerateCryptoInsightOutputSchema,
  },
  async (input) => {
    const { output } = await insightPrompt(input);
    return output!;
  }
);

export async function generateCryptoInsight(input: GenerateCryptoInsightInput): Promise<GenerateCryptoInsightOutput> {
  return generateCryptoInsightFlow(input);
}
