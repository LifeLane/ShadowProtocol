
"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import Typewriter from "@/components/common/Typewriter";
import { motion } from "framer-motion";
import { BrainCircuit, ShieldCheck, Code, Globe, FlaskConical, Box, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const Section3Ecosystem = () => {
    const modules = [
        { icon: Code, title: "AI Solidity Console", description: "Generate, test, and audit smart contracts using AI-powered assistance.", status: 'early-access' },
        { icon: ShieldCheck, title: "Self-Custody Chain", description: "A high-security side-chain for ultra-safe asset and data management.", status: 'coming-soon' },
        { icon: Globe, title: "DeFi & DAO Layers", description: "A full suite of tools for decentralized finance and autonomous governance.", status: 'coming-soon' },
        { icon: FlaskConical, title: "Token Creation Factory", description: "Easily create and launch new tokens within the Shadow ecosystem.", status: 'coming-soon' },
        { icon: Box, title: "Governance Module", description: "Vote on protocol upgrades and manage the treasury with your SHADOW.", status: 'coming-soon' },
        { icon: BrainCircuit, title: "AI Oracle Network", description: "Connect smart contracts to external AI models and data sources securely.", status: 'coming-soon' },
    ];

    return (
        <AnimatedSection id="ecosystem" className="bg-starfield">
            <div className="w-full max-w-6xl relative z-10">
                <div className="text-center mb-12">
                    <Typewriter
                        texts={['> Shadow is not just a protocol.', '> It’s a multi-intelligence', '> infrastructure.']}
                        className="text-3xl sm:text-4xl md:text-6xl font-bold transition-colors text-accent glow-accent hover:text-primary"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {modules.map((module, index) => (
                        <motion.div
                            key={module.title}
                            className={cn(
                                "group card-animated-border p-6 rounded-lg bg-black/40 border border-primary/20 backdrop-blur-sm flex flex-col items-start transition-all relative overflow-hidden h-full",
                                module.status === 'early-access' ? "" : "grayscale opacity-70 hover:grayscale-0 hover:opacity-100"
                            )}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {module.status === 'coming-soon' && (
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                                    <div className="text-center p-4">
                                        <Lock className="w-8 h-8 sm:w-12 sm:h-12 text-accent mx-auto mb-2" />
                                        <p className="text-lg sm:text-xl font-bold text-accent glow-accent">COMING SOON</p>
                                    </div>
                                </div>
                            )}

                            <div className="flex items-center justify-between w-full mb-4">
                                <div className="flex items-center gap-4">
                                    <module.icon className="w-8 h-8 sm:w-10 md:w-12 text-primary flex-shrink-0" />
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary glow transition-colors group-hover:text-primary-foreground">{module.title}</h3>
                                </div>
                                {module.status === 'early-access' && (
                                    <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                                        EARLY ACCESS
                                    </div>
                                )}
                            </div>
                            <p className="text-muted-foreground text-sm sm:text-base flex-grow transition-colors group-hover:text-primary-foreground">{module.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Section3Ecosystem;

    