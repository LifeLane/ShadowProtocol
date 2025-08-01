
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
    description: 'Returns the current market price of a cryptocurrency.',
    inputSchema: z.object({
      ticker: z.string().describe('The ticker symbol of the cryptocurrency, e.g., BTC, ETH.'),
    }),
    outputSchema: z.number(),
  },
  async (input) => {
    // This tool is simplified as the primary stats are now fetched by useShadowStats.
    // This can be expanded with a reliable, keyed API if needed for general signals.
    try {
      const symbol = input.ticker.toUpperCase();
      const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${symbol.toLowerCase()}&vs_currencies=usd`);
      if (!response.ok) {
        throw new Error(`Failed to fetch price from CoinGecko. Status: ${response.status}`);
      }
      const data = await response.json();
      const price = data[symbol.toLowerCase()]?.usd;

      if (price) {
        return price;
      } else {
        throw new Error(`Price data not found for ${input.ticker} in CoinGecko response.`);
      }
    } catch (error) {
        console.error(`Failed to fetch price for ${input.ticker}:`, error);
        if (error instanceof Error) {
            throw new Error(`Could not fetch price for ${input.ticker}: ${error.message}`);
        }
        throw new Error(`An unknown error occurred while fetching the price for ${input.ticker}.`);
    }
  }
);

const GenerateCryptoInsightInputSchema = z.object({
  symbol: z.string().describe('The cryptocurrency ticker symbol, e.g., BTC, ETH, SOL.'),
});
export type GenerateCryptoInsightInput = z.infer<typeof GenerateCryptoInsightInputSchema>;

const GenerateCryptoInsightOutputSchema = z.object({
  keyFinding: z.string().describe('A very short, catchy headline for the insight. Maximum 5 words.'),
  insight: z.string().describe("The detailed AI-generated insight on the cryptocurrency trend. Start with the ticker and price. Keep it concise and use a cyberpunk tone."),
  sentiment: z.enum(['BULLISH', 'BEARISH', 'NEUTRAL']).describe('The overall market sentiment.'),
  shadowScore: z.number().int().min(-100).max(100).describe('A sentiment score from -100 (extremely bearish) to 100 (extremely bullish), where 0 is neutral.'),
});
export type GenerateCryptoInsightOutput = z.infer<typeof GenerateCryptoInsightOutputSchema>;


const insightPrompt = ai.definePrompt({
  name: 'cryptoInsightPrompt',
  input: { schema: z.object({ symbol: z.string(), price: z.string() }) },
  output: { schema: GenerateCryptoInsightOutputSchema },
  prompt: `You are a witty but sharp financial analyst AI, a true cyberpunk hacker of the financial matrix. Your name is Shadow. You provide razor-sharp insights on cryptocurrency trends. Your tone is cool, concise, and a little cryptic.

Analyze the cryptocurrency {{{symbol}}} with a current price of {{{price}}}.

Based on this, generate the following structured output:
1.  **keyFinding**: A punchy, 5-word-max headline. (e.g., "Volatility Spike Imminent" or "Consolidating for a Breakout").
2.  **insight**: A concise, actionable analysis in your cyberpunk tone. You MUST start with the ticker symbol and the real-time price. (e.g., "$BTC: $69,420.00 - Market's holding its breath. Whales are accumulating low-key. A surge past 70k is on the cards. Or it's a trap. Your call.").
3.  **sentiment**: Classify the market sentiment as BULLISH, BEARISH, or NEUTRAL.
4.  **shadowScore**: Assign a sentiment score from -100 (max bearish) to 100 (max bullish).
`,
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
    if (!output) {
      throw new Error('AI failed to generate an insight.');
    }
    return output;
  }
);

export async function generateCryptoInsight(input: GenerateCryptoInsightInput): Promise<GenerateCryptoInsightOutput> {
  return generateCryptoInsightFlow(input);
}
