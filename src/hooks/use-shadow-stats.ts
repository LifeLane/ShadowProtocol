
"use client";

import { useState, useEffect } from 'react';

const SHADOW_TOKEN_ADDRESS = 'B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR';
const BINANCE_API_URL = `https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT`;
const COINGECKO_API_URL = `https://api.coingecko.com/api/v3/simple/token_price/solana?contract_addresses=${SHADOW_TOKEN_ADDRESS}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`;

export interface ShadowStats {
    liquidity: number;
    marketCap: number;
    price: number;
    priceChange24h: number;
}

export function useShadowStats() {
    const [stats, setStats] = useState<ShadowStats | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStats = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const [binanceRes, coingeckoRes] = await Promise.all([
                    fetch(BINANCE_API_URL),
                    fetch(COINGECKO_API_URL)
                ]);

                if (!binanceRes.ok) {
                    throw new Error(`Binance API error: ${binanceRes.status}`);
                }
                if (!coingeckoRes.ok) {
                    throw new Error(`CoinGecko API error: ${coingeckoRes.status}`);
                }

                const binanceData = await binanceRes.json();
                const coingeckoData = await coingeckoRes.json();

                const tokenData = coingeckoData[SHADOW_TOKEN_ADDRESS.toLowerCase()];

                if (!tokenData || !binanceData.price) {
                    throw new Error("Price or token data not found in API response.");
                }
                
                // Note: Liquidity data is not available from these public APIs without a key.
                // We'll use a placeholder or remove it if not essential. For now, let's use market cap as a proxy.
                const marketCap = tokenData.usd_market_cap || 0;

                setStats({
                    price: tokenData.usd,
                    marketCap: marketCap,
                    liquidity: marketCap, // Using market cap as a fallback for liquidity
                    priceChange24h: tokenData.usd_24h_change || 0,
                });

            } catch (err) {
                console.error("Failed to fetch shadow stats:", err);
                setError(err instanceof Error ? err.message : "An unknown error occurred.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchStats();
        const intervalId = setInterval(fetchStats, 60000); // Refetch every 60 seconds

        return () => clearInterval(intervalId);
    }, []);

    return { stats, isLoading, error };
}
