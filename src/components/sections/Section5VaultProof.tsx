
"use client"

import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Lock, Users, HandCoins, Cpu, FlaskConical, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const vaultCategories = [
    { name: "Airdrop Vaults Alpha/Beta", icon: Users },
    { name: "Stake Vaults Dawn/Zenith", icon: HandCoins },
    { name: "Dev Vaults Core/Forge/Nexus", icon: Cpu },
    { name: "Tactical Vaults Ghost/Phantom", icon: FlaskConical },
    { name: "Reserve Vaults Iron/Echo", icon: ShieldCheck },
];

const Section5VaultProof = () => {
    return (
        <AnimatedSection id="vault-proof" className="bg-starfield">
            <Terminal title="VAULT_LOCK_MANIFEST.dat" className="w-full max-w-6xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary glow mb-2">
                        20 Vaults. 4 Phases. All Locked.
                    </h2>
                    <p className="text-accent glow-accent text-lg">
                        View Vaults, Unlock Dates, and On-Chain Proof.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {vaultCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="group card-animated-border p-6 rounded-lg bg-black/30 text-center flex flex-col items-center justify-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <category.icon className="w-12 h-12 text-primary mb-4 transition-transform group-hover:scale-110" />
                            <h3 className="text-xl font-bold text-primary-foreground">{category.name}</h3>
                            <Lock className="w-5 h-5 text-accent mt-2" />
                        </motion.div>
                    ))}
                     <motion.div
                        className="group card-animated-border p-6 rounded-lg bg-primary/10 text-center flex flex-col items-center justify-center md:col-span-2 lg:col-span-1"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: vaultCategories.length * 0.1 }}
                    >
                        <h3 className="text-2xl font-bold text-primary glow">And More...</h3>
                        <p className="text-muted-foreground mt-2">A total of 20 distinct vaults secure the protocol's future.</p>
                    </motion.div>
                </div>

                <div className="text-center border-t border-dashed border-primary/30 pt-6">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                         <Button asChild size="lg" className="btn-shine">
                            <Link href="#tokenomics">
                                Explore All Vaults
                            </Link>
                        </Button>
                         <Button asChild size="lg" variant="outline" className="glow">
                             <Link href="https://solscan.io/" target="_blank">
                                Track on Solscan
                            </Link>
                        </Button>
                    </div>
                </div>
            </Terminal>
        </AnimatedSection>
    );
};

export default Section5VaultProof;
