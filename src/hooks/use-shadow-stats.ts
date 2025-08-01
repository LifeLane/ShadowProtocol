
"use client";

import { generateCryptoInsight } from "@/ai/flows/generate-btc-eth-insight";
import type { GenerateCryptoInsightOutput } from "@/ai/flows/generate-btc-eth-insight";

const SHADOW_TOKEN_ADDRESS = 'B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR';
const COINGECKO_API_URL = `https://api.coingecko.com/api/v3/simple/token_price/solana?contract_addresses=${SHADOW_TOKEN_ADDRESS}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`;

export interface ShadowStats {
    price: number;
    marketCap: number;
    priceChange24h: number;
}

export async function useShadowStats(symbol: string = 'SOL'): Promise<ShadowStats | null> {
    try {
        const [insightResult, coingeckoRes] = await Promise.all([
            generateCryptoInsight({ symbol }),
            fetch(COINGECKO_API_URL)
        ]);

        if (!coingeckoRes.ok) {
            console.error(`CoinGecko API error: ${coingeckoRes.status}`);
            // We can still proceed if we have the price from the insight flow
        }
        
        const coingeckoData = await coingeckoRes.json();
        const tokenData = coingeckoData[SHADOW_TOKEN_ADDRESS.toLowerCase()];

        if (!insightResult.price) {
            throw new Error("Price data not found in AI insight response.");
        }

        const marketCap = tokenData?.usd_market_cap || 0;
        const priceChange24h = tokenData?.usd_24h_change || 0;

        return {
            price: insightResult.price,
            marketCap: marketCap,
            priceChange24h: priceChange24h,
        };

    } catch (err) {
        console.error("Failed to fetch shadow stats:", err);
        return null;
    }
}
