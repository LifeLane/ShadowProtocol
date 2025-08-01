
"use server";

const SHADOW_TOKEN_TICKER = 'SHADOW'; 

export interface ShadowStats {
    price: number;
    marketCap: number;
    priceChange24h: number;
}

// Helper function to fetch from CoinGecko API
async function getCoinGeckoStats(ticker: string): Promise<Partial<ShadowStats>> {
    try {
        const searchResponse = await fetch(`https://api.coingecko.com/api/v3/search?query=${ticker}`);
        if (!searchResponse.ok) throw new Error('CoinGecko search failed.');
        const searchData = await searchResponse.json();
        const coinId = searchData.coins?.[0]?.id;
        if (!coinId) throw new Error('Coin not found on CoinGecko.');

        const statsResponse = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`);
        if (!statsResponse.ok) throw new Error('CoinGecko stats fetch failed.');
        const statsData = await statsResponse.json();
        
        const marketData = statsData[coinId];
        if (!marketData) throw new Error('Market data not found in CoinGecko response.');

        return {
            marketCap: marketData.usd_market_cap,
            priceChange24h: marketData.usd_24h_change,
        };
    } catch (error) {
        console.warn('CoinGecko fetch failed:', error);
        return {}; // Return empty object on failure
    }
}

async function getCryptoPrice(ticker: string): Promise<number> {
    const upperTicker = ticker.toUpperCase();
    
    // 1. Try Binance API (High volume, usually accurate)
    try {
      const binanceSymbol = `${upperTicker}USDT`;
      const response = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${binanceSymbol}`);
      if (response.ok) {
        const data = await response.json();
        if (data.price) {
          return parseFloat(data.price);
        }
      }
    } catch (error) {
      console.warn(`Binance API failed for ${ticker}, trying Polygon.`, error);
    }

    // 2. Fallback to Polygon API (Professional data provider)
    try {
      const polygonApiKey = process.env.POLYGON_API_KEY;
      if (!polygonApiKey || polygonApiKey === 'YOUR_POLYGON_API_KEY') {
        throw new Error('Price data source is temporarily unavailable. Please configure the Polygon API Key.');
      }
      const polygonSymbol = `X:${upperTicker}USD`;
      const response = await fetch(`https://api.polygon.io/v2/aggs/ticker/${polygonSymbol}/prev?adjusted=true&apiKey=${polygonApiKey}`);
      
      if (!response.ok) {
        const errorBody = await response.text();
        console.error(`Polygon API error for ${ticker}: ${response.status} ${response.statusText}`, errorBody);
        throw new Error(`Failed to fetch price from Polygon. Status: ${response.status}`);
      }

      const data = await response.json();
      const price = data.results?.[0]?.c;

      if (price) {
        return price;
      } else {
        throw new Error(`Price data not found for ${ticker} in Polygon API response.`);
      }
    } catch (error) {
      console.error(`Failed to fetch price for ${ticker} from all sources:`, error);
      if (error instanceof Error) {
        throw new Error(`Could not fetch price for ${ticker}: ${error.message}`);
      }
      throw new Error(`An unknown error occurred while fetching the price for ${ticker}.`);
    }
}


export async function useShadowStats(): Promise<ShadowStats | null> {
    try {
        const [price, geckoStats] = await Promise.all([
            getCryptoPrice(SHADOW_TOKEN_TICKER),
            getCoinGeckoStats(SHADOW_TOKEN_TICKER)
        ]);

        if (price === undefined || geckoStats.marketCap === undefined || geckoStats.priceChange24h === undefined) {
             throw new Error("Failed to retrieve all required stats.");
        }

        return {
            price,
            marketCap: geckoStats.marketCap,
            priceChange24h: geckoStats.priceChange24h,
        };

    } catch (err) {
        console.error("Failed to fetch shadow stats:", err);
        return null;
    }
}
