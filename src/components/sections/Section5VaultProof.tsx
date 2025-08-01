"use client"

import AnimatedSection from "@/components/common/AnimatedSection";
import { Lock } from "lucide-react";
import { motion } from "framer-motion";

const vaultsData = [
    { name: "Airdrop Vault Alpha", amount: "1B", unit: "SHADOW", url: "https://solscan.io/account/BUuvTwwdjugFjuiBq2bwqxPQhAnLDF5S8mVMzPg7UWSW" },
    { name: "Airdrop Vault Beta", amount: "1B", unit: "SHADOW", url: "https://solscan.io/account/84c6ox6diCx1246ZLk6DQX2dvs7RNofsuAQq7jcztMzK" },
    { name: "Stake Vault Dawn", amount: "1B", unit: "SHADOW", url: "https://solscan.io/account/EcapQWX8P9M7uLtLkYt89SPFmA1GCSrZTdr7M48zVSG3" },
    { name: "Stake Vault Zenith", amount: "1B", unit: "SHADOW", url: "https://solscan.io/account/B4RzXtzrpkJ5VgaEPrwPp2hQiYCZb9YtzF2khHQU2c8w" },
    { name: "Core Dev Vault", amount: "900M", unit: "SHADOW", url: "https://solscan.io/account/FRFW5VNevgATBzX9yNUBZcGoPa9A2YxbvDCiZJR66cb6" },
    { name: "Infra Vault Forge", amount: "750M", unit: "SHADOW", url: "https://solscan.io/account/6K5Z1ZVwLGdqiF8JcTUPDBSU7fUg4hg1MS5cmPiFHmgW" },
    { name: "R&D Vault Nexus", amount: "750M", unit: "SHADOW", url: "https://solscan.io/account/HT4K5HH8MmG2DD89kB5D9snyGBRUYhYByWf6qR4LvcZE" },
    { name: "Ecosystem Vault Rise", amount: "500M", unit: "SHADOW", url: "https://solscan.io/account/AwtpV9xB43eZ9FLFfU1SotB8SaPxdy478pvJZ5FnxLQ2" },
    { name: "Growth Vault Horizon", amount: "500M", unit: "SHADOW", url: "https://solscan.io/account/Bqswcxct2H1W51AVYedCMUUxF4kcZApDZwN2JEhX2r7r" },
    { name: "Reserve Vault Iron", amount: "500M", unit: "SHADOW", url: "https://solscan.io/account/6LUYctYcNTfp1HUMqcw5L3vLuG5Gdti1SWkemPH85En1" },
    { name: "Reserve Vault Echo", amount: "400M", unit: "SHADOW", url: "https://solscan.io/account/AMpoZ7n4rQNh5gGHwCehVhRtHNgU3YRRPqaZL6jvKtcM" },
    { name: "Governance Vault Sigil", amount: "400M", unit: "SHADOW", url: "https://solscan.io/account/8bh5SsWtM7BU11n2vwJetm59o4M2Dd3W5e8hC3GmXeoA" },
    { name: "Treasury Buffer Aegis", amount: "400M", unit: "SHADOW", url: "https://solscan.io/account/DeMJiqbaxNn71SP6ZgCbDuFtxmF1fLWgAt9RzPoSCpA8" },
    { name: "Treasury Buffer Shade", amount: "300M", unit: "SHADOW", url: "https://solscan.io/account/44dxXdzEpFMXqpQ9BHhDAzxCt6AY2XWuWAw24WNSSd8h" },
    { name: "Tactical Vault Ghost", amount: "150M", unit: "SHADOW", url: "https://solscan.io/account/EJ5gs2NxKS1ACxXh9NCXqVdLGifrvGQzchGiYkL2Kr9C" },
    { name: "Tactical Vault Phantom", amount: "100M", unit: "SHADOW", url: "https://solscan.io/account/4ePV3ZkQGK8qBPjGkcBPMCqmfoc9AR6miSJgqP42qF1L" },
    { name: "Expansion Vault Nova", amount: "75M", unit: "SHADOW", url: "https://solscan.io/account/7axcsHsmfTR7mLPXcWryV6fosxyETi2BCVHKB2gAuFvp" },
    { name: "Expansion Vault Pulse", amount: "75M", unit: "SHADOW", url: "https://solscan.io/account/HBxvs95QQ65EhDxXDJBd8RfzxpQJamwEx5Wnr4H5N2K9" },
    { name: "AI Reward Vault Core", amount: "50M", unit: "SHADOW", url: "https://solscan.io/account/7d5qWRFwAjVgQb1tPBuFNZvW1CM3BG1yVVDsbg4u4mxj" },
    { name: "Burn Reserve Vault", amount: "50M", unit: "SHADOW", url: "https://solscan.io/account/BeqL8z1jVwkg7xrT1ZQYCzt9XgAiy2fz7f88CjUFcTxy" }
];


const Section5VaultProof = () => {
    return (
        <AnimatedSection id="vault-proof" animationClassName="bg-quantum-flicker-pattern">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary glow mb-2">
                    Vault of Shadows — 99% of SHADOW Locked. Forever.
                </h2>
                <p className="text-accent glow-accent text-lg max-w-3xl mx-auto">
                    20 Locks. Zero Mint. Zero Dev Access. Every Vault Verified On-Chain. Only SHADOW That Serves Lives. The Rest Burns 🔥
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                {vaultsData.map((vault, index) => (
                    <VaultCard key={index} vault={vault} index={index} />
                ))}
            </div>
        </AnimatedSection>
    );
};

const VaultCard = ({ vault, index }: { vault: { name: string, amount: string, unit: string, url: string }, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="neon-card"
        >
            <h3 className="vault-title">{vault.name}</h3>
            <div className="vault-amount">{vault.amount}</div>
            <p className="vault-unit">{vault.unit}</p>
            <a href={vault.url} target="_blank" rel="noopener noreferrer" className="verify-btn">
                <Lock className="inline-block mr-2" size={16} /> Verify Lock
            </a>
        </motion.div>
    )
}

export default Section5VaultProof;
