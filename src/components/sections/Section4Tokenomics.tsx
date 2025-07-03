"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const allocations = [
    { name: "Community & Ecosystem", percentage: 40, color: "bg-chart-1" },
    { name: "Staking Rewards", percentage: 20, color: "bg-chart-2" },
    { name: "Treasury & Foundation", percentage: 15, color: "bg-chart-3" },
    { name: "Team & Advisors", percentage: 15, color: "bg-chart-4" },
    { name: "Public Sale & Liquidity", percentage: 10, color: "bg-chart-5" },
];

const Section4Tokenomics = () => {
    return (
        <AnimatedSection id="tokenomics" className="bg-matrix-drift-pattern">
            <Terminal title="SHADOW TOKEN ALLOCATION" className="z-10 w-full max-w-5xl">
                <div className="text-center mb-12">
                    <p className="text-accent text-2xl md:text-3xl font-bold">Forged in precision. Controlled by design.</p>
                </div>
                
                <div className="w-full flex justify-center mb-12">
                     <div className="w-full max-w-md flex h-12 rounded-full overflow-hidden border-2 border-primary/20">
                        {allocations.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`${item.color} h-full`}
                                style={{ width: `${item.percentage}%` }}
                                initial={{ scaleX: 0, originX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                            />
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 font-code text-lg">
                    {allocations.map((item, index) => (
                         <motion.div
                            key={index}
                            className="flex flex-col gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        >
                            <div className="flex justify-between items-baseline">
                                <p className="text-accent font-semibold whitespace-nowrap">{item.name}</p>
                                <p className="text-primary font-bold text-right">{item.percentage}%</p>
                            </div>
                            <Progress value={item.percentage} className="h-3" indicatorClassName={item.color} />
                        </motion.div>
                    ))}
                </div>
            </Terminal>
        </AnimatedSection>
    );
};

export default Section4Tokenomics;
