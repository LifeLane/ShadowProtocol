"use client"

import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { motion } from "framer-motion";

const Section2Overview = () => {
    const features = [
        { title: "AI-Powered", description: "Self-optimizing\ntokenomics driven by\non-chain events." },
        { title: "Decentralized\nGovernance", description: "SHADOW holders form a\ndistributed cognitive\nentity." },
        { title: "Immutable Logic", description: "Core contract logic\nis non-upgradable,\nensuring trust." },
        { title: "Utility First", description: "Designed as fuel for\na suite of\ndecentralized AI\ntools." },
        { title: "Fair Launch", description: "No VC allocation.\nGenesis distribution\nis community-focused." },
        { title: "Infinite\nScalability", description: "Built on a modular\nframework for future\nexpansion." }
    ];

    return (
        <AnimatedSection id="token-overview" className="bg-pulse-grid-pattern">
            <div className="w-full max-w-6xl">
                <Terminal title="SHADOW_SPEC.md" className="max-w-6xl">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-8"
                    >
                        <div className="border border-dashed border-primary/50 p-4 md:p-6 rounded-lg max-w-lg mx-auto">
                            <pre className="text-left font-code text-base md:text-lg whitespace-pre-wrap">
                                <span className="text-primary glow font-bold text-lg md:text-xl">SHADOW COIN</span>
                                {`
Ticker:    SHADOW
Supply:    1,000,000,000
Utility:   Fuel for On-Chain Mind`}
                            </pre>
                        </div>
                    </motion.div>

                    <motion.div
                        className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.2 }}
                    >
                        {features.map((item, index) => (
                            <motion.div
                                key={index}
                                className="p-4 rounded-md bg-card transition-all text-left card-animated-border"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                            >
                                <h3 className="font-bold text-xl md:text-2xl text-primary glow transition-colors whitespace-pre-wrap hover:text-accent">{item.title}</h3>
                                <p className="text-muted-foreground mt-2 text-base md:text-lg whitespace-pre-wrap">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </Terminal>
            </div>
        </AnimatedSection>
    );
};

export default Section2Overview;
