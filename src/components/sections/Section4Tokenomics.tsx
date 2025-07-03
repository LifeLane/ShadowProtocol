"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const allocations = [
    { name: "Staking", percentage: 20, tooltip: "> unlocked: 10% | vesting: 12m | phase: pre-DAO" },
    { name: "Treasury", percentage: 15, tooltip: "> unlocked: 5% | vesting: 24m | phase: strategic" },
    { name: "AI Governance", percentage: 10, tooltip: "> unlocked: 0% | vesting: 36m | phase: core-dev" },
    { name: "Private Sale", percentage: 5, tooltip: "> unlocked: 25% | vesting: 6m cliff" },
    { name: "Initial Liquidity", percentage: 1, tooltip: "> unlocked: 100% | TGE" },
];

const Section4Tokenomics = () => {
    return (
        <AnimatedSection id="tokenomics" className="bg-binary-pattern">
            <Terminal title="SHADOW TOKEN ALLOCATION" className="z-10 w-full max-w-4xl">
                <div className="text-center mb-6">
                    <p className="text-accent text-lg">Forged in precision. Controlled by design.</p>
                </div>
                <TooltipProvider>
                    <div className="space-y-6 font-code">
                        {allocations.map((item, index) => {
                            const filled = Math.round(item.percentage / 2);
                            const empty = 25 - filled;
                            const bar = `[${'█'.repeat(filled)}${' '.repeat(empty)}]`;

                            return (
                                <Tooltip key={index}>
                                    <TooltipTrigger asChild>
                                        <motion.div 
                                            className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-center"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                        >
                                            <p className="md:col-span-2 text-primary">{`${bar} ${item.percentage}% ${item.name}`}</p>
                                        </motion.div>
                                    </TooltipTrigger>
                                    <TooltipContent className="font-code bg-black border-accent text-accent">
                                        <p>{item.tooltip}</p>
                                    </TooltipContent>
                                </Tooltip>
                            )
                        })}
                    </div>
                </TooltipProvider>
            </Terminal>
        </AnimatedSection>
    );
};

export default Section4Tokenomics;
