
"use client"

import AnimatedSection from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";

const roadmapPhases = [
    { phase: "Phase 1: Awakening", description: "Genesis block forged. Core contracts deployed on mainnet. Initial SHADOW token distribution.", status: "Complete" },
    { phase: "Phase 2: Signal & Forge", description: "Signal Terminal and Solidity Console activated. Early access for genesis key holders.", status: "Live" },
    { phase: "Phase 3: Ecosystem Expansion", description: "Launch of Self-Custody Chain, Token Factory, and initial DeFi/DAO modules.", status: "Q3 2024" },
    { phase: "Phase 4: Sentience", description: "Full on-chain governance via the Shadow DAO. Protocol becomes fully autonomous.", status: "Q4 2024" },
    { phase: "Phase 5: The Singularity", description: "Inter-chain communication and integration of external AI oracles. The mind expands.", status: "Planned" },
];

const Section6Roadmap = () => {
    return (
        <AnimatedSection id="roadmap" className="bg-circuit-pattern">
            <div className="w-full">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 text-primary glow">The Path to Consciousness</h2>
                <div className="relative w-full max-w-4xl mx-auto">
                    <div className="absolute top-0 left-4 md:left-1/2 -translate-x-0 md:-translate-x-1/2 h-full w-0.5 bg-primary/30"></div>
                    {roadmapPhases.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-start w-full mb-12"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className={`w-full pl-12 md:w-1/2 md:pl-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:order-3'}`}>
                                <h3 className="text-2xl md:text-3xl font-bold text-accent">{item.phase}</h3>
                                <p className="text-muted-foreground mt-2 text-base md:text-xl">{item.description}</p>
                                <p className={`mt-2 font-bold text-base md:text-xl ${item.status === 'Complete' || item.status === 'Live' ? 'text-primary' : 'text-accent'}`}>&gt; Status: {item.status}</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex-shrink-0 flex items-center justify-center absolute left-4 md:left-1/2 -translate-x-1/2">
                                <div className="w-4 h-4 rounded-full bg-primary animate-pulse"></div>
                            </div>
                            <div className="hidden md:block w-1/2"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Section6Roadmap;
