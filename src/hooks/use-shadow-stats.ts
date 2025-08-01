
"use server";

export interface ShadowStats {
    price: number;
    marketCap: number;
    priceChange24h: number;
}

const SHADOW_CONTRACT_ADDRESS = 'B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR';
const SOLANA_ASSET_PLATFORM = 'solana';

async function getCoinGeckoStats(): Promise<ShadowStats | null> {
    try {
        const url = `https://api.coingecko.com/api/v3/simple/token_price/${SOLANA_ASSET_PLATFORM}?contract_addresses=${SHADOW_CONTRACT_ADDRESS}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`;

        const response = await fetch(url);

        if (!response.ok) {
            const errorBody = await response.text();
            console.error(`CoinGecko API error: ${response.status}`, errorBody);
            throw new Error(`Failed to fetch stats from CoinGecko. Status: ${response.status}`);
        }

        const data = await response.json();
        const marketData = data[SHADOW_CONTRACT_ADDRESS.toLowerCase()];

        if (!marketData || marketData.usd === undefined || marketData.usd_market_cap === undefined || marketData.usd_24h_change === undefined) {
             throw new Error('Incomplete data received from CoinGecko API.');
        }

        return {
            price: marketData.usd,
            marketCap: marketData.usd_market_cap,
            priceChange24h: marketData.usd_24h_change,
        };
    } catch (error) {
        console.error("Failed to fetch CoinGecko stats:", error);
        return null; // Return null on any failure
    }
}


export async function useShadowStats(): Promise<ShadowStats | null> {
    const stats = await getCoinGeckoStats();
    return stats;
}
