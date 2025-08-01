
"use client";

import { useState, useEffect } from 'react';

// NOTE: Using Birdeye's public API. In a production app, you'd want to
// proxy this through your own backend to avoid rate limiting and expose an API key safely.
const SHADOW_TOKEN_ADDRESS = 'B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR';
const API_URL = `https://public-api.birdeye.so/defi/token_overview?address=${SHADOW_TOKEN_ADDRESS}`;

export interface ShadowStats {
    liquidity: number;
    marketCap: number;
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
                // The public API requires an `x-chain: solana` header.
                const response = await fetch(API_URL, {
                    headers: {
                        'x-chain': 'solana'
                    }
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || `API error: ${response.status}`);
                }

                const data = await response.json();

                if (data.success && data.data) {
                    setStats({
                        liquidity: data.data.liquidity,
                        marketCap: data.data.mc,
                        priceChange24h: data.data.priceChange24h,
                    });
                } else {
                    throw new Error(data.message || "Invalid data format from API.");
                }

            } catch (err) {
                console.error("Failed to fetch shadow stats:", err);
                setError(err instanceof Error ? err.message : "An unknown error occurred.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchStats();

        // Refetch every 60 seconds
        const intervalId = setInterval(fetchStats, 60000);

        return () => clearInterval(intervalId);
    }, []);

    return { stats, isLoading, error };
}
