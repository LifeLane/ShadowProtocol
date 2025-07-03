"use client";

import { useState } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import Typewriter from "@/components/common/Typewriter";
import { Button } from "@/components/ui/button";
import { generateBtcEthInsight } from "@/ai/flows/generate-btc-eth-insight";
import { motion } from "framer-motion";
import { Loader2, BrainCircuit, ShieldCheck, Code, Globe, FlaskConical, Vote } from "lucide-react";

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
        { icon: BrainCircuit, title: "Signal Terminal", description: "Live BTC/ETH market analysis powered by on-chain intelligence." },
        { icon: Code, title: "Solidity Console", description: "Simulates code auto-generating with flicker. (Simulated)" },
        { icon: ShieldCheck, title: "Self-Custody Chain", description: "Neon blocks assemble to show Mainnet. (Visualized)" },
        { icon: Globe, title: "DeFi/DAO Layer", description: "Text explodes into orbiting DAO nodes. (Conceptual)" },
        { icon: FlaskConical, title: "Token Factory", description: "Flickering 'booting...' status." },
        { icon: Vote, title: "DAO Governance", description: "SHADOW holders form a distributed cognitive entity." },
    ];

    return (
        <AnimatedSection id="ecosystem" className="relative">
            <div className="stars"></div>
            <div className="twinkling"></div>
            <div className="z-10 text-center mb-12">
                <Typewriter
                    texts={['> Shadow is not a protocol.', '> It’s a multi-intelligence infrastructure.']}
                    className="text-4xl md:text-6xl font-bold text-accent glow-accent"
                />
            </div>

            <div className="z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {modules.map((module, index) => (
                    <motion.div
                        key={module.title}
                        className="border border-primary/20 p-6 rounded-lg bg-black/20 flex flex-col items-start hover:border-primary/50 hover:bg-primary/10 transition-all"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <module.icon className="w-12 h-12 text-primary" />
                            <h3 className="text-3xl font-bold text-primary glow">{module.title}</h3>
                        </div>
                        <p className="text-foreground/70 text-lg flex-grow">{module.description}</p>
                        {module.title === "Token Factory" && (
                             <p className="mt-4 text-accent animate-flicker">&gt; booting...</p>
                        )}
                    </motion.div>
                ))}
                
                <div className="md:col-span-2 lg:col-span-3">
                    <Terminal title="AI Signal Feed">
                         <div className="flex flex-col items-start gap-4">
                            <Button onClick={handleGenerateInsight} disabled={isLoading} size="lg">
                                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                                Initiate Signal Scan
                            </Button>
                            {isLoading && <p className="text-accent animate-pulse">Scanning market signals...</p>}
                            {insight && (
                                <div className="text-primary whitespace-pre-wrap text-lg w-full">
                                    <Typewriter texts={[insight]} speed={10} />
                                </div>
                            )}
                        </div>
                    </Terminal>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Section3Ecosystem;
