'use server';
/**
 * @fileOverview Generates AI insights on cryptocurrency trends.
 *
 * - generateCryptoInsight - A function that generates insights for a given crypto symbol.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const getCryptoPrice = ai.defineTool(
  {
    name: 'getCryptoPrice',
    description: 'Returns the current market price of a cryptocurrency using Binance and Polygon APIs.',
    inputSchema: z.object({
      ticker: z.string().describe('The ticker symbol of the cryptocurrency, e.g., BTC, ETH.'),
    }),
    outputSchema: z.number(),
  },
  async (input) => {
    const ticker = input.ticker.toUpperCase();
    
    // 1. Try Binance API
    try {
      const binanceSymbol = `${ticker}USDT`;
      const response = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${binanceSymbol}`);
      if (response.ok) {
        const data = await response.json();
        if (data.price) {
          return parseFloat(data.price);
        }
      }
    } catch (error) {
      console.warn(`Binance API failed for ${ticker}, trying Polygon.`, error);
    }

    // 2. Fallback to Polygon API
    try {
      const polygonApiKey = process.env.POLYGON_API_KEY;
      if (!polygonApiKey) {
        throw new Error('Polygon API key is not configured in .env file.');
      }
      const polygonSymbol = `X:${ticker}USD`;
      const response = await fetch(`https://api.polygon.io/v2/aggs/ticker/${polygonSymbol}/prev?adjusted=true&apiKey=${polygonApiKey}`);
      
      if (!response.ok) {
        const errorBody = await response.text();
        console.error(`Polygon API error for ${ticker}: ${response.status} ${response.statusText}`, errorBody);
        throw new Error(`Failed to fetch price from Polygon. Status: ${response.status}`);
      }

      const data = await response.json();
      const price = data.results?.[0]?.c;

      if (price) {
        return price;
      } else {
        throw new Error(`Price data not found for ${ticker} in Polygon API response.`);
      }
    } catch (error) {
      console.error(`Failed to fetch price for ${ticker} from all sources:`, error);
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

const CryptoInsightWithPriceInputSchema = z.object({
    symbol: z.string().describe('The cryptocurrency ticker symbol, e.g., BTC, ETH, SOL.'),
    price: z.string().describe('The current formatted price of the cryptocurrency.'),
});

const insightPrompt = ai.definePrompt({
  name: 'cryptoInsightPrompt',
  input: { schema: CryptoInsightWithPriceInputSchema },
  output: { schema: GenerateCryptoInsightOutputSchema },
  prompt: `You are a witty but sharp financial analyst providing insights on cryptocurrency trends. Your tone is like a cyberpunk hacker: cool, concise, and maybe a little cryptic.

Using the provided real-time price, provide a concise, actionable insight into the market sentiment and potential trends in a terminal-like format. Start with the ticker and the real-time price, then the insight.

Example:
$BTC: $67,401.12
Signal: Strong accumulation patterns detected. Whales are quiet. Suggests a potential surge. Monitor resistance at 68k.

Now, provide an insight for {{{symbol}}} which has a price of {{{price}}}.`,
});

const generateCryptoInsightFlow = ai.defineFlow(
  {
    name: 'generateCryptoInsightFlow',
    inputSchema: GenerateCryptoInsightInputSchema,
    outputSchema: GenerateCryptoInsightOutputSchema,
  },
  async (input) => {
    const price = await getCryptoPrice({ ticker: input.symbol });
    
    const formattedPrice = price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    const { output } = await insightPrompt({ symbol: input.symbol, price: formattedPrice });
    return output!;
  }
);

export async function generateCryptoInsight(input: GenerateCryptoInsightInput): Promise<GenerateCryptoInsightOutput> {
  return generateCryptoInsightFlow(input);
}
