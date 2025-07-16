"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const qualificationData = [
    { action: "Wallet Verification + Socials", allocation: "5%", rewardModel: "First checkpoint" },
    { action: "Console Task Completion", allocation: "10%", rewardModel: "Prove your activity, earn trust" },
    { action: "DApp Launch Participation", allocation: "10%", rewardModel: "Deploy, test, interact" },
    { action: "DAO Engagement", allocation: "10%", rewardModel: "Vote. Influence. Govern." },
    { action: "On-Chain Action Triggers", allocation: "20%", rewardModel: "Real usage = real rewards" },
    { action: "Invite & Refer", allocation: "10%", rewardModel: "Viral spread, verified invites" },
    { action: "NFT Unlocks (Coming Soon)", allocation: "5%", rewardModel: "Activate keys, boost tiers" },
    { action: "OG Snapshot (Early Supporters)", allocation: "30%", rewardModel: "History remembers the first" },
];

const SectionGenesisAirdrop = () => {
    return (
        <AnimatedSection id="genesis-airdrop" className="bg-starfield">
            <Terminal title="GENESIS_AIRDROP.md" className="w-full max-w-6xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary glow mb-2">🎁 GENESIS AIRDROP — BY INVITATION ONLY</h2>
                    <p className="text-accent glow-accent text-lg">🚨 Not everyone gets in. Only contributors. Only supporters. Only believers.</p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold text-center text-primary mb-4">🧠 How To Qualify:</h3>
                    <div className="overflow-x-auto">
                        <Table className="font-code">
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-primary">Action</TableHead>
                                    <TableHead className="text-primary text-center">Allocation</TableHead>
                                    <TableHead className="text-primary">Reward Model</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {qualificationData.map((item) => (
                                    <TableRow key={item.action}>
                                        <TableCell className="font-semibold">{item.action}</TableCell>
                                        <TableCell className="text-center font-bold text-accent">{item.allocation}</TableCell>
                                        <TableCell className="text-muted-foreground">{item.rewardModel}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>

                <div className="text-center space-y-4">
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
