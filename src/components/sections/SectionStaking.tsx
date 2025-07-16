
"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const stakingTiers = [
    { tier: "Ninja", apr: 8, lockTime: "30 Days", bonusPowers: "Weekly draws" },
    { tier: "Ghost", apr: 15, lockTime: "90 Days", bonusPowers: "Early DApp access" },
    { tier: "Phantom", apr: 24, lockTime: "180 Days", bonusPowers: "Voting power unlocked" },
    { tier: "Shadow Lord", apr: 36, lockTime: "365 Days", bonusPowers: "Identity NFT + Neural Key issuance" },
];

const SectionStaking = () => {
    // Max APR to scale progress bars
    const maxApr = Math.max(...stakingTiers.map(t => t.apr));

    const getColor = (apr: number) => {
        if (apr > 20) return "bg-primary";
        if (apr > 10) return "bg-accent";
        return "bg-muted";
    };

    return (
        <AnimatedSection id="staking" className="bg-pulse-grid-pattern">
            <Terminal title="STAKING_LOYALTY_PROGRAM.md" className="w-full max-w-6xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary glow mb-2">🔐 STAKING = INTELLIGENCE LOYALTY PROGRAM</h2>
                    <p className="text-accent glow-accent text-lg">Your stake isn’t just earning… It’s teaching the protocol your loyalty.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-8">
                  {stakingTiers.map((item, index) => (
                    <motion.div
                      key={item.tier}
                      className="space-y-2 card-animated-border bg-black/20 p-4 rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    >
                      <div className="flex justify-between items-baseline">
                          <h3 className="text-xl font-bold text-primary">{item.tier}</h3>
                          <p className="font-bold text-accent text-2xl">{item.apr}% APR</p>
                      </div>
                       <Progress value={(item.apr / maxApr) * 100} indicatorClassName={getColor(item.apr)} />
                      <div className="flex justify-between items-center text-sm pt-2">
                        <p className="text-muted-foreground">{item.bonusPowers}</p>
                        <p className="font-bold text-foreground/80">{item.lockTime}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                 <div className="text-center space-y-2 border-t border-dashed border-primary/30 pt-8 mt-8">
                    <p className="font-bold text-primary">🔁 Compounded rewards.</p>
                    <p className="font-bold text-destructive">⚠️ Early exit = 15% burn. Disloyalty isn’t cheap.</p>
                </div>
            </Terminal>
        </AnimatedSection>
    );
};

export default SectionStaking;
