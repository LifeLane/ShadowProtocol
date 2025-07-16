
"use client"

import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { motion } from "framer-motion";
import { BrainCircuit, ShieldCheck, Cpu, Bot, GitBranch, Target } from 'lucide-react';

const Section2Overview = () => {
    const tokenCore = [
        { label: "Token", value: "SHADOW" },
        { label: "Chain", value: "Solana (Ethereum, TON, USDT/USDC launching soon)" },
        { label: "Supply", value: "10,000,000,000 SHADOW" },
        { label: "Launch Pool", value: "1,000,000 SHADOW paired with 1 SOL" },
        { label: "Target", value: "1 Billion SHADOW in Liquidity Pools" },
        { label: "Vision", value: "A multi-chain, AI-governed, reward-layered ecosystem." },
    ];

    const whyShadow = [
        { icon: BrainCircuit, title: "Self-Evolving Logic" },
        { icon: Cpu, title: "AI-Powered Reward Structures" },
        { icon: ShieldCheck, title: "Bot-Proof Airdrops" },
        { icon: GitBranch, title: "Multichain Infrastructure" },
        { icon: Bot, title: "Intelligence-Based DAO Voting" },
        { icon: Target, title: "On-Chain Behavioral Triggers" },
    ];

    return (
        <AnimatedSection id="token-overview" className="bg-pulse-grid-pattern">
            <div className="w-full max-w-6xl">
                <Terminal title="SHADOW_SPEC.md" className="max-w-6xl bg-black/40 backdrop-blur-sm">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-primary glow text-center mb-6">SHADOW TOKEN CORE</h2>
                         <dl className="border border-dashed border-primary/50 p-4 rounded-lg max-w-3xl mx-auto text-left space-y-2 font-code text-sm md:text-base">
                            {tokenCore.map((item) => (
                                <div key={item.label} className="grid grid-cols-1 md:grid-cols-[120px_1fr] md:gap-x-4">
                                    <dt className="text-primary font-bold whitespace-nowrap">{item.label}:</dt>
                                    <dd className="text-muted-foreground break-words">{item.value}</dd>
                                </div>
                            ))}
                        </dl>
                        <p className="text-center text-accent glow-accent mt-6 font-bold text-base md:text-lg">
                           🛠️ Tech is easy. Intelligence is hard. SHADOW is both.
                        </p>
                    </motion.div>

                    <motion.div
                        className="mt-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.2 }}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-primary glow text-center mb-6">WHY SHADOW?</h2>
                        <p className="text-center text-muted-foreground mb-8 text-lg md:text-xl">Because protocols are dead. It’s time to build something alive.</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {whyShadow.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="group card-animated-border card-glitch-hover p-4 rounded-lg bg-primary/5 border border-primary/20 transition-all text-center"
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                >
                                    <item.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                                    <h3 className="font-bold text-lg md:text-xl text-primary glow transition-colors group-hover:text-primary-foreground">{item.title}</h3>
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-center text-accent glow-accent mt-8 font-bold text-base md:text-lg">
                            Miss SHADOW now, and you’ll spend years catching up.
                        </p>
                    </motion.div>
                </Terminal>
            </div>
        </AnimatedSection>
    );
};

export default Section2Overview;
