
"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { motion } from "framer-motion";
import { Swords, Ghost, Atom, Crown } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";


const stakingTiers = [
    { tier: "Staking Vault Dawn", apr: "Dynamic", lockTime: "12 month cliff", bonusPowers: "Early staking pool XP reward multipliers", icon: Atom, vesting: "Monthly over 12 mo" },
    { tier: "Staking Vault Zenith", apr: "Dynamic", lockTime: "12 month cliff", bonusPowers: "Standard staking rewards, live from TGE", icon: Crown, vesting: "Monthly over 12 mo" },
];

const SectionStaking = () => {
    return (
        <AnimatedSection id="staking" className="bg-pulse-grid-pattern">
            <Terminal title="STAKING_LOYALTY_PROGRAM.md" className="w-full max-w-6xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary glow mb-2">🔐 STAKING = INTELLIGENCE LOYALTY PROGRAM</h2>
                    <p className="text-accent glow-accent text-lg">Your stake isn’t just earning… It’s teaching the protocol your loyalty.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {stakingTiers.map((item, index) => (
                    <motion.div
                      key={item.tier}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    >
                      <Card className="bg-black/20 border-primary/30 card-animated-border h-full">
                        <CardHeader>
                            <CardTitle className="text-accent glow-accent flex items-center gap-3 text-2xl">
                                <item.icon className="w-6 h-6"/>
                                {item.tier}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div>
                                <p className="text-sm text-muted-foreground">APR</p>
                                <p className="text-2xl font-bold text-primary">{item.apr}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Lock Details</p>
                                <p className="text-lg text-foreground/90">{item.lockTime}, then {item.vesting}.</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Special Access</p>
                                <p className="text-lg text-foreground/90">{item.bonusPowers}</p>
                            </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                 <div className="text-center space-y-2 border-t border-dashed border-primary/30 pt-8 mt-8">
                    <p className="font-bold text-primary">🔁 Rewards are compounded based on network participation and loyalty score.</p>
                    <p className="font-bold text-destructive">⚠️ Early exit from vesting = 15% burn penalty. Disloyalty isn’t cheap.</p>
                </div>
            </Terminal>
        </AnimatedSection>
    );
};

export default SectionStaking;
