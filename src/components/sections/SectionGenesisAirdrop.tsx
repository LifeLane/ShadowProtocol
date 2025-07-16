
"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const qualificationData = [
    { name: "OG Snapshot (Early Supporters)", value: 30, color: "bg-primary" },
    { name: "On-Chain Action Triggers", value: 20, color: "bg-primary" },
    { name: "Console Task Completion", value: 10, color: "bg-accent" },
    { name: "DApp Launch Participation", value: 10, color: "bg-accent" },
    { name: "DAO Engagement", value: 10, color: "bg-accent" },
    { name: "Invite & Refer", value: 10, color: "bg-accent" },
    { name: "Wallet Verification + Socials", value: 5, color: "bg-muted" },
    { name: "NFT Unlocks (Coming Soon)", value: 5, color: "bg-muted" },
];

const SectionGenesisAirdrop = () => {
    return (
        <AnimatedSection id="genesis-airdrop" className="bg-starfield">
            <Terminal title="GENESIS_AIRDROP_QUALIFICATION.ini" className="w-full max-w-6xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary glow mb-2">🎁 GENESIS AIRDROP — BY INVITATION ONLY</h2>
                    <p className="text-accent glow-accent text-lg">🚨 Not everyone gets in. Only contributors. Only supporters. Only believers.</p>
                </div>
                 <motion.div
                  className="flex w-full h-6 rounded-full overflow-hidden mb-12"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {qualificationData.map((item, index) => (
                    <motion.div
                      key={index}
                      className={`h-full ${item.color}`}
                      style={{ width: `${item.value}%` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    />
                  ))}
                </motion.div>
                <h3 className="text-xl font-bold text-center text-primary mb-6">🧠 How To Qualify:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-8">
                    {qualificationData.map((item, index) => (
                        <motion.div
                            key={item.name}
                            className="space-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        >
                            <div className="flex justify-between items-center">
                                <p className="font-semibold text-foreground/90">{item.name}</p>
                                <p className="font-bold text-primary">{item.value}%</p>
                            </div>
                            <Progress value={item.value} indicatorClassName={item.color} />
                        </motion.div>
                    ))}
                </div>


                <div className="text-center space-y-4 border-t border-dashed border-primary/30 pt-8 mt-8">
                    <p className="font-bold text-muted-foreground">🧠 Vesting: 6–12 months</p>
                    <p className="font-bold text-destructive">🚫 No tasks = No tokens.</p>
                    <p className="font-bold text-accent">🧠 Every claim is smart-verified by SHADOW.</p>
                    <Button asChild size="lg" className="btn-shine glow animate-border-glow mt-4">
                        <Link href="#claim-key">
                            Join Genesis Console
                        </Link>
                    </Button>
                </div>
            </Terminal>
        </AnimatedSection>
    );
};

export default SectionGenesisAirdrop;
