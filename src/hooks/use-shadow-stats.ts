
"use server";

export interface ShadowStats {
    price: number;
    marketCap: number;
    priceChange24h: number;
}

const SHADOW_CONTRACT_ADDRESS = 'B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR';

async function getLiveStats(): Promise<ShadowStats | null> {
    try {
        // 1. Get real-time price from Jupiter, a reliable source for Solana tokens
        const jupiterResponse = await fetch(`https://price.jup.ag/v4/price?ids=SHADOW`);
        if (!jupiterResponse.ok) {
            throw new Error(`Jupiter API error: ${jupiterResponse.statusText}`);
        }
        const jupiterData = await jupiterResponse.json();
        const price = jupiterData?.data?.SHADOW?.price;

        if (typeof price !== 'number') {
            throw new Error('Price not found in Jupiter response.');
        }

        // 2. Get Market Cap and 24h change from CoinGecko, a reliable public source
        const coingeckoResponse = await fetch(`https://api.coingecko.com/api/v3/simple/token_price/solana?contract_addresses=${SHADOW_CONTRACT_ADDRESS}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`);
        if (!coingeckoResponse.ok) {
            throw new Error(`CoinGecko API error: ${coingeckoResponse.statusText}`);
        }
        const coingeckoData = await coingeckoResponse.json();
        const tokenStats = coingeckoData[SHADOW_CONTRACT_ADDRESS.toLowerCase()];

        if (!tokenStats) {
             throw new Error('Token stats not found in CoinGecko response.');
        }
        
        const marketCap = tokenStats.usd_market_cap;
        const priceChange24h = tokenStats.usd_24h_change;

        if (typeof marketCap !== 'number' || typeof priceChange24h !== 'number') {
            throw new Error('Incomplete market data from CoinGecko.');
        }

        return {
            price,
            marketCap,
            priceChange24h,
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
