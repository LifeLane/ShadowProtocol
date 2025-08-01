
"use server";

export interface ShadowStats {
    price: number;
    marketCap: number;
    priceChange24h: number;
}

const SHADOW_CONTRACT_ADDRESS = 'B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR';
// Using a reliable public RPC for this query. For production, consider a keyed Helius/QuickNode RPC.
const HELIUS_RPC_URL = `https://mainnet.helius-rpc.com/?api-key=__API_KEY_PLACEHOLDER__`;

async function getHeliusStats(): Promise<ShadowStats | null> {
    // IMPORTANT: Replace __API_KEY_PLACEHOLDER__ with your actual Helius API key in a .env file.
    // For this demonstration, we are using a community key which may be rate-limited.
    const apiKey = process.env.HELIUS_API_KEY || 'a7f74c72-c20e-4da6-94e4-39414c11b846';
    const url = `https://api.helius.xyz/v0/token-metadata?api-key=${apiKey}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mints: [SHADOW_CONTRACT_ADDRESS],
                includeOffChain: true,
                disableCache: false,
            }),
        });

        if (!response.ok) {
            const errorBody = await response.text();
            console.error(`Helius API error: ${response.status}`, errorBody);
            throw new Error(`Failed to fetch stats from Helius. Status: ${response.status}`);
        }

        const data = await response.json();
        const tokenInfo = data[0]?.onChainAccountInfo?.accountInfo?.data?.parsed?.info;
        const offChainInfo = data[0]?.offChainMetadata?.metadata;

        if (!tokenInfo || !offChainInfo) {
            console.error("Incomplete data from Helius", data);
            throw new Error('Incomplete data received from Helius API.');
        }

        const jupiterResponse = await fetch(`https://price.jup.ag/v4/price?ids=SHADOW`);
        const jupiterData = await jupiterResponse.json();
        const price = jupiterData.data.SHADOW.price;

        const totalSupply = Number(tokenInfo.supply) / (10 ** tokenInfo.decimals);
        const marketCap = totalSupply * price;
        
        // Helius doesn't directly provide 24h change, so we'll fetch it from a public source.
        const coingeckoResponse = await fetch(`https://api.coingecko.com/api/v3/simple/token_price/solana?contract_addresses=${SHADOW_CONTRACT_ADDRESS}&vs_currencies=usd&include_24hr_change=true`);
        const coingeckoData = await coingeckoResponse.json();
        const priceChange24h = coingeckoData[SHADOW_CONTRACT_ADDRESS.toLowerCase()]?.usd_24h_change || 0;

        return {
            price: price,
            marketCap: marketCap,
            priceChange24h: priceChange24h,
        };
    } catch (error) {
        console.error("Failed to fetch Helius stats:", error);
        return null;
    }
}


export async function useShadowStats(): Promise<ShadowStats | null> {
    const stats = await getHeliusStats();
    return stats;
}
