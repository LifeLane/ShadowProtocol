
"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BrainCircuit, Ban, Gift, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const airdropVaults = [
    {
        icon: Users,
        title: "Airdrop Vault Alpha",
        amount: "50,000,000 SHADOW",
        purpose: "For early adopters & core testers.",
        details: "12 month cliff, then linear vesting over 6 months."
    },
    {
        icon: Gift,
        title: "Airdrop Vault Beta",
        amount: "50,000,000 SHADOW",
        purpose: "For public missions & community quests.",
        details: "12 month cliff, then linear vesting over 6 months."
    }
]

const SectionGenesisAirdrop = () => {
    return (
        <AnimatedSection id="genesis-airdrop" className="bg-starfield">
            <Terminal title="GENESIS_AIRDROP_PROTOCOL.ini" className="w-full max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary glow mb-2">🎁 GENESIS AIRDROP PROTOCOL</h2>
                    <p className="text-accent glow-accent text-lg">Total Airdrop Supply: 100,000,000 SHADOW. By invitation only.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {airdropVaults.map((vault, index) => (
                        <Card key={index} className="bg-black/20 border-primary/30 card-animated-border h-full">
                            <CardHeader>
                                <CardTitle className="text-accent glow-accent flex items-center gap-3 text-2xl">
                                    <vault.icon className="w-6 h-6"/>
                                    {vault.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <p className="text-3xl font-bold text-primary">{vault.amount}</p>
                                <p className="text-lg text-foreground/90">{vault.purpose}</p>
                                <p className="text-sm text-muted-foreground">{vault.details}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>


                <div className="text-center space-y-6 border-t border-dashed border-primary/30 pt-8 mt-8 flex flex-col items-center">
                    <div className="flex items-center gap-3 text-base md:text-xl font-bold text-destructive">
                        <Ban className="w-5 h-5 md:w-6 md:h-6" />
                        <p>No tasks = No tokens. Contribution is mandatory.</p>
                    </div>
                     <div className="flex items-center gap-3 text-base md:text-xl font-bold text-accent">
                        <BrainCircuit className="w-5 h-5 md:w-6 md:h-6" />
                        <p>Every claim is smart-verified by SHADOW's core logic.</p>
                    </div>
                    <Button asChild size="lg" className="btn-shine glow animate-border-glow mt-6">
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
