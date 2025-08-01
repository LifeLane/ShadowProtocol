
"use server";

const SHADOW_TOKEN_ADDRESS = 'B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR'; 
const COINMARKETCAP_API_URL = `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest`;

export interface ShadowStats {
    price: number;
    marketCap: number;
    priceChange24h: number;
}

export async function useShadowStats(): Promise<ShadowStats | null> {
    try {
        const apiKey = process.env.COINMARKETCAP_API_KEY;
        if (!apiKey || apiKey === 'YOUR_COINMARKETCAP_API_KEY') {
            throw new Error("CoinMarketCap API key is not configured.");
        }

        const response = await fetch(`${COINMARKETCAP_API_URL}?address=${SHADOW_TOKEN_ADDRESS}`, {
            headers: {
                'X-CMC_PRO_API_KEY': apiKey,
                'Accept': 'application/json',
            }
        });

        if (!response.ok) {
            const errorBody = await response.text();
            console.error(`CoinMarketCap API error: ${response.status}`, errorBody);
            throw new Error(`Failed to fetch price from CoinMarketCap. Status: ${response.status}`);
        }

        const data = await response.json();
        const tokenData = data.data?.[SHADOW_TOKEN_ADDRESS]?.[0];

        if (!tokenData || !tokenData.quote.USD) {
            throw new Error("SHADOW token data not found in CoinMarketCap API response for the given address.");
        }

        const quote = tokenData.quote.USD;

        return {
            price: quote.price || 0,
            marketCap: quote.market_cap || 0,
            priceChange24h: quote.percent_change_24h || 0,
        };

    } catch (err) {
        console.error("Failed to fetch shadow stats:", err);
        return null;
    }
}
