"use client"

import AnimatedSection from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";

const roadmapPhases = [
    { phase: "Phase 1: Awakening", description: "Particles form logo, core contracts deployed.", status: "Complete" },
    { phase: "Phase 2: Signal Layer", description: "AI signal feed activated, initial market analysis.", status: "Active" },
    { phase: "Phase 3: Solidity Core", description: "Ecosystem tools and dApp integrations.", status: "In Progress" },
    { phase: "Phase 4: Quantum Chain", description: "Layer 2 scaling solution with validator network.", status: "Planned" },
    { phase: "Phase 5: Shadow DAO", description: "Full decentralization and on-chain governance.", status: "Planned" },
    { phase: "Phase 6: Token Factory", description: "Platform for creating sub-tokens within the ecosystem.", status: "Booting..." },
];

const Section6Roadmap = () => {
    return (
        <AnimatedSection id="roadmap">
            <div className="stars"></div>
            <div className="twinkling"></div>
            <div className="z-10 w-full">
                <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-primary glow">Roadmap – The Mind's Growth</h2>
                <div className="relative w-full max-w-4xl mx-auto">
                    <div className="absolute top-0 left-4 md:left-1/2 -translate-x-0 md:-translate-x-1/2 h-full w-0.5 bg-primary/30"></div>
                    {roadmapPhases.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center w-full mb-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className={`w-full pl-12 md:w-1/2 md:pl-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:order-3'}`}>
                                <h3 className="text-2xl font-bold text-accent">{item.phase}</h3>
                                <p className="text-foreground/70 mt-2 text-lg">{item.description}</p>
                                <p className={`mt-2 font-bold text-lg ${item.status === 'Complete' ? 'text-primary' : 'text-accent'}`}>&gt; {item.status}</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex-shrink-0 flex items-center justify-center absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
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
