"use client"

import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { motion } from "framer-motion";

const Section2Overview = () => {
    return (
        <AnimatedSection id="token-overview">
            <Terminal title="SHADOW_SPEC.md">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <pre className="text-primary glow text-sm md:text-base whitespace-pre-wrap">
{`┌─ SHADOW COIN ───────────────────────┐
│  Ticker: SHADOW                     │
│  Supply: 1,000,000,000              │
│  Utility: Fuel for On-Chain Mind    │
└─────────────────────────────────────┘`}
                    </pre>
                </motion.div>

                <motion.div
                    className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    {[
                        { title: "AI-Powered", description: "Self-optimizing tokenomics driven by on-chain events." },
                        { title: "Decentralized Governance", description: "SHADOW holders form a distributed cognitive entity." },
                        { title: "Immutable Logic", description: "Core contract logic is non-upgradable, ensuring trust." },
                        { title: "Utility First", description: "Designed as fuel for a suite of decentralized AI tools." },
                        { title: "Fair Launch", description: "No VC allocation. Genesis distribution is community-focused." },
                        { title: "Infinite Scalability", description: "Built on a modular framework for future expansion." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="p-4 border border-primary/20 rounded-md bg-black/20 hover:bg-primary/10 hover:border-primary/50 transition-all cursor-pointer group"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            <h3 className="font-bold text-accent group-hover:text-primary glow transition-colors">{item.title}</h3>
                            <p className="text-foreground/70 mt-2 text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </Terminal>
        </AnimatedSection>
    );
};

export default Section2Overview;
