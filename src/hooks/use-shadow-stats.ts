
"use server";

export interface ShadowStats {
    price: number;
    marketCap: number;
    priceChange24h: number;
}

const SHADOW_CONTRACT_ADDRESS = 'B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR';

// This implementation uses a public, keyless Jupiter API endpoint.
// It fetches a list of tokens and finds SHADOW by its contract address.
async function getLiveStats(): Promise<ShadowStats | null> {
    try {
        const response = await fetch('https://token.jup.ag/v4/token-list');
        if (!response.ok) {
            throw new Error(`Jupiter Token List API error: ${response.statusText}`);
        }
        const tokenListData = await response.json();
        
        const shadowToken = tokenListData.find(
            (token: any) => token.address.toLowerCase() === SHADOW_CONTRACT_ADDRESS.toLowerCase()
        );

        if (!shadowToken || !shadowToken.price || !shadowToken.marketCap || !shadowToken.priceChange24h) {
             throw new Error('SHADOW token data not found or incomplete in Jupiter response.');
        }

        return {
            price: shadowToken.price,
            marketCap: shadowToken.marketCap,
            priceChange24h: shadowToken.priceChange24h,
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
