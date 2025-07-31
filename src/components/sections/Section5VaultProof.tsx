"use client"

import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Lock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";

const phasesData = [
  {
    phase: "Genesis Locks",
    totalLocked: "4,000,000,000",
    vaults: [
      { name: "Airdrop Vault Alpha", amount: "1,000,000,000", url: "https://solscan.io/account/BUuvTwwdjugFjuiBq2bwqxPQhAnLDF5S8mVMzPg7UWSW" },
      { name: "Airdrop Vault Beta", amount: "1,000,000,000", url: "https://solscan.io/account/84c6ox6diCx1246ZLk6DQX2dvs7RNofsuAQq7jcztMzK" },
      { name: "Staking Vault Dawn", amount: "1,000,000,000", url: "https://solscan.io/account/EcapQWX8P9M7uLtLkYt89SPFmA1GCSrZTdr7M48zVSG3" },
      { name: "Staking Vault Zenith", amount: "1,000,000,000", url: "https://solscan.io/account/B4RzXtzrpkJ5VgaEPrwPp2hQiYCZb9YtzF2khHQU2c8w" },
    ]
  },
  {
    phase: "Development Vaults",
    totalLocked: "2,900,000,000",
    vaults: [
      { name: "Core Dev Vault", amount: "900,000,000", url: "https://solscan.io/account/FRFW5VNevgATBzX9yNUBZcGoPa9A2YxbvDCiZJR66cb6" },
      { name: "Infra Vault Forge", amount: "750,000,000", url: "https://solscan.io/account/6K5Z1ZVwLGdqiF8JcTUPDBSU7fUg4hg1MS5cmPiFHmgW" },
      { name: "R&D Vault Nexus", amount: "750,000,000", url: "https://solscan.io/account/HT4K5HH8MmG2DD89kB5D9snyGBRUYhYByWf6qR4LvcZE" },
      { name: "Ecosystem Vault Rise", amount: "500,000,000", url: "https://solscan.io/account/AwtpV9xB43eZ9FLFfU1SotB8SaPxdy478pvJZ5FnxLQ2" },
    ]
  },
  {
    phase: "Reserves & DAO",
    totalLocked: "2,100,000,000",
    vaults: [
       { name: "Growth Vault Horizon", amount: "500,000,000", url: "https://solscan.io/account/Bqswcxct2H1W51AVYedCMUUxF4kcZApDZwN2JEhX2r7r" },
       { name: "Reserve Vault Iron", amount: "500,000,000", url: "https://solscan.io/account/6LUYctYcNTfp1HUMqcw5L3vLuG5Gdti1SWkemPH85En1" },
       { name: "Reserve Vault Echo", amount: "400,000,000", url: "https://solscan.io/account/AMpoZ7n4rQNh5gGHwCehVhRtHNgU3YRRPqaZL6jvKtcM" },
       { name: "Governance Vault Sigil", amount: "400,000,000", url: "https://solscan.io/account/8bh5SsWtM7BU11n2vwJetm59o4M2Dd3W5e8hC3GmXeoA" },
       { name: "Treasury Buffer Aegis", amount: "300,000,000", url: "https://solscan.io/account/DeMJiqbaxNn71SP6ZgCbDuFtxmF1fLWgAt9RzPoSCpA8" },
    ]
  },
  {
    phase: "Tactical Vaults",
    totalLocked: "900,000,000",
    vaults: [
      { name: "Treasury Buffer Shade", amount: "400,000,000", url: "https://solscan.io/account/44dxXdzEpFMXqpQ9BHhDAzxCt6AY2XWuWAw24WNSSd8h" },
      { name: "Tactical Vault Ghost", amount: "150,000,000", url: "https://solscan.io/account/EJ5gs2NxKS1ACxXh9NCXqVdLGifrvGQzchGiYkL2Kr9C" },
      { name: "Tactical Vault Phantom", amount: "100,000,000", url: "https://solscan.io/account/4ePV3ZkQGK8qBPjGkcBPMCqmfoc9AR6miSJgqP42qF1L" },
      { name: "Expansion Vault Nova", amount: "75,000,000", url: "https://solscan.io/account/7axcsHsmfTR7mLPXcWryV6fosxyETi2BCVHKB2gAuFvp" },
      { name: "Expansion Vault Pulse", amount: "75,000,000", url: "https://solscan.io/account/HBxvs95QQ65EhDxXDJBd8RfzxpQJamwEx5Wnr4H5N2K9" },
      { name: "AI Reward Vault Core", amount: "50,000,000", url: "https://solscan.io/account/7d5qWRFwAjVgQb1tPBuFNZvW1CM3BG1yVVDsbg4u4mxj" },
      { name: "Community Treasury", amount: "50,000,000", url: "https://solscan.io/account/BeqL8z1jVwkg7xrT1ZQYCzt9XgAiy2fz7f88CjUFcTxy" }
    ]
  }
];

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

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {phasesData.map((phase, index) => (
                        <AccordionItem value={`item-${index}`} key={index} className="bg-black/20 border border-primary/20 rounded-lg">
                            <AccordionTrigger className="p-4 sm:p-6 text-left hover:no-underline">
                                <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center text-left gap-2 sm:gap-4">
                                    <h3 className="text-lg sm:text-2xl font-bold text-accent glow-accent flex-1">{phase.phase}</h3>
                                    <p className="text-base sm:text-lg text-primary glow whitespace-nowrap">Total Locked: {parseInt(phase.totalLocked, 10).toLocaleString()} SHADOW</p>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="p-4 sm:p-6 pt-0">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                    {phase.vaults.map((vault, vIndex) => (
                                        <VaultCard key={vIndex} vault={vault} index={vIndex} />
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Terminal>
        </AnimatedSection>
    );
};

const VaultCard = ({ vault, index }: { vault: { name: string, amount: string, url: string }, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
        >
            <Card className="bg-black/40 h-full flex flex-col text-center card-animated-border-hover group">
                <CardHeader>
                    <CardTitle className="text-lg text-accent glow-accent group-hover:text-primary transition-colors">{vault.name}</CardTitle>
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
