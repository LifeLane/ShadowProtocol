
"use client"

import { useState } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Lock, Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";


const vaultData = [
  // Phase 1
  { name: "Airdrop Vault Alpha", phase: "Phase 1", amount: "1,000,000,000", url: "https://solscan.io/account/BUuvTwwdjugFjuiBq2bwqxPQhAnLDF5S8mVMzPg7UWSW" },
  { name: "Airdrop Vault Beta", phase: "Phase 1", amount: "1,000,000,000", url: "https://solscan.io/account/84c6ox6diCx1246ZLk6DQX2dvs7RNofsuAQq7jcztMzK" },
  { name: "Staking Vault Dawn", phase: "Phase 1", amount: "1,000,000,000", url: "https://solscan.io/account/EcapQWX8P9M7uLtLkYt89SPFmA1GCSrZTdr7M48zVSG3" },
  { name: "Staking Vault Zenith", phase: "Phase 1", amount: "1,000,000,000", url: "https://solscan.io/account/B4RzXtzrpkJ5VgaEPrwPp2hQiYCZb9YtzF2khHQU2c8w" },
  // Phase 2
  { name: "Core Dev Vault", phase: "Phase 2", amount: "900,000,000", url: "https://solscan.io/account/FRFW5VNevgATBzX9yNUBZcGoPa9A2YxbvDCiZJR66cb6" },
  { name: "Infra Vault Forge", phase: "Phase 2", amount: "750,000,000", url: "https://solscan.io/account/6K5Z1ZVwLGdqiF8JcTUPDBSU7fUg4hg1MS5cmPiFHmgW" },
  { name: "R&D Vault Nexus", phase: "Phase 2", amount: "750,000,000", url: "https://solscan.io/account/HT4K5HH8MmG2DD89kB5D9snyGBRUYhYByWf6qR4LvcZE" },
  { name: "Ecosystem Vault Rise", phase: "Phase 2", amount: "500,000,000", url: "https://solscan.io/account/AwtpV9xB43eZ9FLFfU1SotB8SaPxdy478pvJZ5FnxLQ2" },
  { name: "Growth Vault Horizon", phase: "Phase 2", amount: "500,000,000", url: "https://solscan.io/account/Bqswcxct2H1W51AVYedCMUUxF4kcZApDZwN2JEhX2r7r" },
   // Phase 3
  { name: "Reserve Vault Iron", phase: "Phase 3", amount: "500,000,000", url: "https://solscan.io/account/6LUYctYcNTfp1HUMqcw5L3vLuG5Gdti1SWkemPH85En1" },
  { name: "Reserve Vault Echo", phase: "Phase 3", amount: "400,000,000", url: "https://solscan.io/account/AMpoZ7n4rQNh5gGHwCehVhRtHNgU3YRRPqaZL6jvKtcM" },
  { name: "Governance Vault Sigil", phase: "Phase 3", amount: "400,000,000", url: "https://solscan.io/account/8bh5SsWtM7BU11n2vwJetm59o4M2Dd3W5e8hC3GmXeoA" },
  { name: "Treasury Buffer Aegis", phase: "Phase 3", amount: "400,000,000", url: "https://solscan.io/account/44dxXdzEpFMXqpQ9BHhDAzxCt6AY2XWuWAw24WNSSd8h" },
  { name: "Treasury Buffer Shade", phase: "Phase 3", amount: "300,000,000", url: "https://solscan.io/account/DeMJiqbaxNn71SP6ZgCbDuFtxmF1fLWgAt9RzPoSCpA8" },
  // Phase 4
  { name: "Tactical Vault Ghost", phase: "Phase 4", amount: "150,000,000", url: "https://solscan.io/account/EJ5gs2NxKS1ACxXh9NCXqVdLGifrvGQzchGiYkL2Kr9C" },
  { name: "Tactical Vault Phantom", phase: "Phase 4", amount: "100,000,000", url: "https://solscan.io/account/4ePV3ZkQGK8qBPjGkcBPMCqmfoc9AR6miSJgqP42qF1L" },
  { name: "Expansion Vault Nova", phase: "Phase 4", amount: "75,000,000", url: "https://solscan.io/account/7axcsHsmfTR7mLPXcWryV6fosxyETi2BCVHKB2gAuFvp" },
  { name: "Expansion Vault Pulse", phase: "Phase 4", amount: "75,000,000", url: "https://solscan.io/account/HBxvs95QQ65EhDxXDJBd8RfzxpQJamwEx5Wnr4H5N2K9" },
  { name: "AI Reward Vault Core", phase: "Phase 4", amount: "50,000,000", url: "https://solscan.io/account/7d5qWRFwAjVgQb1tPBuFNZvW1CM3BG1yVVDsbg4u4mxj" },
];

const getPhaseVaults = (phase: string) => vaultData.filter(v => v.phase === phase);


const Section5VaultProof = () => {
    return (
        <AnimatedSection id="vault-proof" className="bg-quantum-flicker-pattern">
            <Terminal title="VAULT_LOCK_MANIFEST.dat" className="w-full max-w-7xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary glow mb-2">
                        Vault of Shadows — Where SHADOW Is Locked, Forever.
                    </h2>
                    <p className="text-accent glow-accent text-lg max-w-3xl mx-auto">
                        20 Locks. 99% of SHADOW Secured. Mint Authority: None.
                        Your trust isn’t requested. It’s proven on-chain.
                    </p>
                </div>

                 <Tabs defaultValue="phase1" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
                        <TabsTrigger value="phase1">Phase 1 - Genesis</TabsTrigger>
                        <TabsTrigger value="phase2">Phase 2 - Development</TabsTrigger>
                        <TabsTrigger value="phase3">Phase 3 - Reserves</TabsTrigger>
                        <TabsTrigger value="phase4">Phase 4 - Tactical</TabsTrigger>
                    </TabsList>
                    <TabsContent value="phase1" className="mt-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {getPhaseVaults("Phase 1").map((vault, index) => (
                                <VaultCard key={index} vault={vault} index={index} />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="phase2" className="mt-6">
                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                            {getPhaseVaults("Phase 2").map((vault, index) => (
                                <VaultCard key={index} vault={vault} index={index} />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="phase3" className="mt-6">
                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                            {getPhaseVaults("Phase 3").map((vault, index) => (
                                <VaultCard key={index} vault={vault} index={index} />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="phase4" className="mt-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                            {getPhaseVaults("Phase 4").map((vault, index) => (
                                <VaultCard key={index} vault={vault} index={index} />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>

                <div className="text-center border-t border-dashed border-primary/30 pt-8 mt-8">
                     <p className="text-2xl font-bold text-primary glow mb-6">20 Vaults. 0 Dev Access. 100% On-Chain Proof.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                         <Button asChild size="lg" className="btn-shine">
                            <Link href="#tokenomics">
                                <Search className="mr-2" />
                                Explore All Vaults
                            </Link>
                        </Button>
                         <Button asChild size="lg" variant="outline" className="glow">
                             <Link href="https://solscan.io/" target="_blank">
                                Track Unlock Timeline
                            </Link>
                        </Button>
                    </div>
                </div>
            </Terminal>
        </AnimatedSection>
    );
};

const VaultCard = ({ vault, index }: { vault: typeof vaultData[0], index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Card className="bg-black/40 border-primary/30 h-full flex flex-col text-center card-animated-border group">
                <CardHeader>
                    <CardTitle className="text-lg text-accent glow-accent group-hover:text-primary transition-colors">{vault.name}</CardTitle>
                    <CardDescription>{vault.phase}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-2">
                    <p className="text-2xl font-bold text-primary glow">{parseInt(vault.amount, 10).toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">SHADOW</p>
                </CardContent>
                <CardFooter>
                     <Button asChild size="sm" className="w-full btn-shine">
                        <Link href={vault.url} target="_blank" rel="noopener noreferrer">
                            <Lock className="mr-2"/>
                            Verify Lock
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}


export default Section5VaultProof;

    