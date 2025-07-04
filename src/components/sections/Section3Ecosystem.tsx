
"use client";

import { useState } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import Typewriter from "@/components/common/Typewriter";
import { Button } from "@/components/ui/button";
import { generateBtcEthInsight } from "@/ai/flows/generate-btc-eth-insight";
import { motion } from "framer-motion";
import { Loader2, BrainCircuit, ShieldCheck, Code, Globe, FlaskConical, Box, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const Section3Ecosystem = () => {
    const [insight, setInsight] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerateInsight = async () => {
        setIsLoading(true);
        setInsight("");
        try {
            const result = await generateBtcEthInsight({ btcPrice: 65000, ethPrice: 3500 });
            setInsight(result.insight);
        } catch (error) {
            console.error(error);
            setInsight("Error: Could not fetch insight from the neural core.");
        } finally {
            setIsLoading(false);
        }
    };

    const modules = [
        { icon: BrainCircuit, title: "Signal Terminal", description: "Live BTC/ETH market analysis powered by on-chain intelligence.", status: 'early-access' },
        { icon: Code, title: "Solidity Console", description: "Generate and audit smart contracts with AI assistance.", status: 'early-access' },
        { icon: ShieldCheck, title: "Self-Custody Chain", description: "A dedicated side-chain for ultra-secure asset management.", status: 'coming-soon' },
        { icon: Globe, title: "DeFi/DAO Layer", description: "Tools for decentralized finance and autonomous governance.", status: 'coming-soon' },
        { icon: FlaskConical, title: "Token Factory", description: "Create and launch new tokens within the Shadow ecosystem.", status: 'coming-soon' },
        { icon: Box, title: "Governance Module", description: "Vote on protocol upgrades and treasury allocations with SHADOW.", status: 'coming-soon' },
    ];

    return (
        <AnimatedSection id="ecosystem" className="bg-starfield">
            <div className="w-full max-w-6xl relative z-10">
                <div className="text-center mb-12">
                    <Typewriter
                        texts={['> Shadow is not a protocol.', '> It’s a multi-intelligence infrastructure.']}
                        className="text-3xl sm:text-5xl md:text-6xl font-bold transition-colors text-accent glow-accent hover:text-primary"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {modules.map((module, index) => (
                        <motion.div
                            key={module.title}
                            className={cn(
                                "group card-animated-border p-6 rounded-lg bg-black/40 border border-primary/20 backdrop-blur-sm flex flex-col items-start transition-all relative overflow-hidden",
                                module.status === 'early-access' ? "" : "grayscale opacity-70 hover:grayscale-0 hover:opacity-100"
                            )}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {module.status === 'coming-soon' && (
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                                    <div className="text-center">
                                        <Lock className="w-12 h-12 text-accent mx-auto mb-2" />
                                        <p className="text-xl font-bold text-accent glow-accent">COMING SOON</p>
                                    </div>
                                </div>
                            )}

                            <div className="flex items-center justify-between w-full mb-4">
                                <div className="flex items-center gap-4">
                                    <module.icon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                                    <h3 className="text-2xl md:text-3xl font-bold text-primary glow transition-colors group-hover:text-accent">{module.title}</h3>
                                </div>
                                {module.status === 'early-access' && (
                                    <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                                        EARLY ACCESS
                                    </div>
                                )}
                            </div>
                            <p className="text-muted-foreground text-base md:text-lg flex-grow">{module.description}</p>
                        </motion.div>
                    ))}
                    
                    <div className="md:col-span-2 lg:col-span-3 rounded-lg mt-8">
                        <Terminal title="AI Signal Feed" className="max-w-none w-full h-full bg-card/80 backdrop-blur-sm">
                            <div className="flex flex-col items-start gap-6">
                                <div>
                                    <h4 className="text-xl md:text-2xl font-bold text-accent glow-accent mb-2 transition-colors hover:text-primary">Activate On-Chain Intelligence</h4>
                                    <p className="text-muted-foreground text-base md:text-lg">
                                    The Signal Feed is a direct interface to the SHADOW neural core. It analyzes real-time blockchain data and market sentiment to generate actionable insights. Use SHADOW tokens to run a scan and receive an AI-generated analysis of current BTC/ETH trends. This powerful tool provides a strategic advantage, allowing you to navigate market volatility with data-driven confidence, turning raw information into intelligent action.
                                    </p>
                                </div>
                                <div className="w-full border-t border-primary/20 pt-6">
                                    <div className="flex flex-col items-start gap-4">
                                        <Button onClick={handleGenerateInsight} disabled={isLoading} size="lg" className="btn-shine">
                                            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                                            Initiate Signal Scan
                                        </Button>
                                        {isLoading && <p className="text-accent animate-pulse">Scanning market signals...</p>}
                                        {insight && (
                                            <div className="text-primary whitespace-pre-wrap text-base md:text-lg w-full bg-black/20 p-4 rounded-md border border-primary/20 mt-4">
                                                <Typewriter texts={[insight]} speed={10} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Terminal>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Section3Ecosystem;
