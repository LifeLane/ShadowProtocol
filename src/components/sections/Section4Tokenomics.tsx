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
                <div className="text-center mb-8">
                    <p className="text-accent text-xl font-bold">Forged in precision. Controlled by design.</p>
                </div>
                <TooltipProvider>
                    <div className="space-y-6 font-code text-base md:text-lg">
                        {allocations.map((item, index) => (
                             <Tooltip key={index} delayDuration={0}>
                                <TooltipTrigger asChild>
                                    <motion.div
                                        className="grid grid-cols-5 gap-4 items-center"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <p className="col-span-2 text-accent font-semibold whitespace-nowrap">{item.name}</p>
                                        <div className="col-span-3 flex items-center gap-4">
                                            <div className="w-full bg-primary/10 border border-primary/20 p-0.5 h-6 flex items-center rounded-sm">
                                                <motion.div 
                                                    style={{ width: "0%" }}
                                                    whileInView={{ width: `${item.percentage}%`}}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                                    className="bg-primary h-full rounded-sm"
                                                ></motion.div>
                                            </div>
                                            <p className="text-primary font-bold w-[4ch] text-right">{item.percentage}%</p>
                                        </div>
                                    </motion.div>
                                </TooltipTrigger>
                                <TooltipContent className="font-code bg-black border-accent text-accent">
                                    <p>{item.tooltip}</p>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </div>
                </TooltipProvider>
            </Terminal>
        </AnimatedSection>
    );
};

export default Section4Tokenomics;
