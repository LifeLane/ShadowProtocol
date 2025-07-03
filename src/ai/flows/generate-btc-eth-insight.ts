// src/ai/flows/generate-btc-eth-insight.ts
'use server';
/**
 * @fileOverview Generates AI insights on BTC/ETH trends and displays them in a terminal-like interface.
 *
 * - generateBtcEthInsight - A function that generates the BTC/ETH insights.
 * - GenerateBtcEthInsightInput - The input type for the generateBtcEthInsight function.
 * - GenerateBtcEthInsightOutput - The return type for the generateBtcEthInsight function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBtcEthInsightInputSchema = z.object({
  btcPrice: z.number().describe('The current price of Bitcoin.'),
  ethPrice: z.number().describe('The current price of Ethereum.'),
});
export type GenerateBtcEthInsightInput = z.infer<typeof GenerateBtcEthInsightInputSchema>;

const GenerateBtcEthInsightOutputSchema = z.object({
  insight: z.string().describe('AI-generated insight on BTC/ETH trends.'),
});
export type GenerateBtcEthInsightOutput = z.infer<typeof GenerateBtcEthInsightOutputSchema>;

export async function generateBtcEthInsight(input: GenerateBtcEthInsightInput): Promise<GenerateBtcEthInsightOutput> {
  return generateBtcEthInsightFlow(input);
}

const prompt = ai.definePrompt({
  name: 'btcEthInsightPrompt',
  input: {schema: GenerateBtcEthInsightInputSchema},
  output: {schema: GenerateBtcEthInsightOutputSchema},
  prompt: `You are a financial analyst providing insights on cryptocurrency trends, specifically Bitcoin (BTC) and Ethereum (ETH).

  Based on the current prices of BTC and ETH, provide a concise insight into the market sentiment and potential trends in a terminal-like format.

  Current BTC Price: {{{btcPrice}}}
Current ETH Price: {{{ethPrice}}}

  Insight:`,
});

const generateBtcEthInsightFlow = ai.defineFlow(
  {
    name: 'generateBtcEthInsightFlow',
    inputSchema: GenerateBtcEthInsightInputSchema,
    outputSchema: GenerateBtcEthInsightOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
