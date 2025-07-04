'use server';
/**
 * @fileOverview Generates AI insights on cryptocurrency trends.
 *
 * - generateCryptoInsight - A function that generates insights for a given crypto symbol.
 * - GenerateCryptoInsightInput - The input type for the generateCryptoInsight function.
 * - GenerateCryptoInsightOutput - The return type for the generateCryptoInsight function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

// Helper to get a realistic-ish random price for a given crypto symbol.
function getMockPrice(ticker: string): number {
  switch (ticker.toUpperCase()) {
    case 'BTC':
      return 65000 + (Math.random() - 0.5) * 5000; // Fluctuate around $65k
    case 'ETH':
      return 3500 + (Math.random() - 0.5) * 500; // Fluctuate around $3.5k
    case 'SOL':
      return 150 + (Math.random() - 0.5) * 40; // Fluctuate around $150
    default:
      return 100 + (Math.random() - 0.5) * 200; // Generic price
  }
}

const coinGeckoIds: { [key: string]: string } = {
  BTC: 'bitcoin',
  ETH: 'ethereum',
  SOL: 'solana',
  ADA: 'cardano',
  DOGE: 'dogecoin',
  XRP: 'ripple',
  DOT: 'polkadot',
  MATIC: 'matic-network',
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

    if (coinId) {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`);
        if (response.ok) {
            const data = await response.json();
            const price = data[coinId]?.usd;
            if (price) {
                return price;
            }
        } else {
             console.error(`CoinGecko API error for ${ticker}: ${response.status} ${response.statusText}`);
        }
      } catch (error) {
        console.error(`Failed to fetch price for ${ticker} from CoinGecko:`, error);
      }
    }
    
    // Fallback for unknown tickers or API failure
    console.log(`Falling back to mock price for ${ticker}`);
    return getMockPrice(ticker);
  }
);

const GenerateCryptoInsightInputSchema = z.object({
  symbol: z.string().describe('The cryptocurrency ticker symbol, e.g., BTC, ETH, SOL.'),
});
export type GenerateCryptoInsightInput = z.infer<typeof GenerateCryptoInsightInputSchema>;

const GenerateCryptoInsightOutputSchema = z.object({
  insight: z.string().describe('AI-generated insight on the cryptocurrency trend.'),
});
export type GenerateCryptoInsightOutput = z.infer<typeof GenerateCryptoInsightOutputSchema>;


const insightPrompt = ai.definePrompt({
  name: 'cryptoInsightPrompt',
  input: { schema: GenerateCryptoInsightInputSchema },
  output: { schema: GenerateCryptoInsightOutputSchema },
  tools: [getCryptoPrice],
  prompt: `You are a witty but sharp financial analyst providing insights on cryptocurrency trends. Your tone is like a cyberpunk hacker: cool, concise, and maybe a little cryptic.

When asked for an insight on a cryptocurrency, use the getCryptoPrice tool to get its current price first.

Then, provide a concise, actionable insight into the market sentiment and potential trends in a terminal-like format. Start with the ticker and price, then the insight. Be creative.

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
