
"use server";

import { Connection, PublicKey } from '@solana/web3.js';
import { Liquidity, TokenAmount, Token, Percent } from '@raydium-io/raydium-sdk';

export interface ShadowStats {
    price: number;
    marketCap: number;
    priceChange24h: number;
}

const SHADOW_CONTRACT_ADDRESS = 'B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR';
const SOLANA_ASSET_PLATFORM = 'solana';

async function getLiveStats(): Promise<ShadowStats | null> {
    try {
        const coingeckoUrl = `https://api.coingecko.com/api/v3/simple/token_price/${SOLANA_ASSET_PLATFORM}?contract_addresses=${SHADOW_CONTRACT_ADDRESS}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`;

        const response = await fetch(coingeckoUrl, {
            headers: {
                'Accept': 'application/json'
            },
            next: { revalidate: 60 } // Revalidate every 60 seconds
        });

        if (!response.ok) {
            throw new Error(`CoinGecko API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        const tokenData = data[SHADOW_CONTRACT_ADDRESS.toLowerCase()];
        
        if (!tokenData || typeof tokenData.usd === 'undefined') {
            throw new Error('SHADOW token data not found in CoinGecko response.');
        }

        return {
            price: tokenData.usd,
            marketCap: tokenData.usd_market_cap,
            priceChange24h: tokenData.usd_24h_change,
        };

    } catch (error) {
        console.error("Failed to fetch live shadow stats:", error instanceof Error ? error.message : String(error));
        return null;
    }
}

export async function useShadowStats(): Promise<ShadowStats | null> {
    const stats = await getLiveStats();
    return stats;
}
