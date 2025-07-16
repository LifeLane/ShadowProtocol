"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const stakingTiers = [
    { tier: "Ninja", lockTime: "30 Days", apr: "8%", bonusPowers: "Weekly draws" },
    { tier: "Ghost", lockTime: "90 Days", apr: "15%", bonusPowers: "Early DApp access" },
    { tier: "Phantom", lockTime: "180 Days", apr: "24%", bonusPowers: "Voting power unlocked" },
    { tier: "Shadow Lord", lockTime: "365 Days", apr: "36%", bonusPowers: "Identity NFT + Neural Key issuance" },
];

const SectionStaking = () => {
    return (
        <AnimatedSection id="staking" className="bg-pulse-grid-pattern">
            <Terminal title="STAKING_PROGRAM.md" className="w-full max-w-6xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary glow mb-2">🔐 STAKING = INTELLIGENCE LOYALTY PROGRAM</h2>
                    <p className="text-accent glow-accent text-lg">Your stake isn’t just earning… It’s teaching the protocol your loyalty.</p>
                </div>
                <div className="overflow-x-auto mb-8">
                    <Table className="font-code">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-primary">Tier</TableHead>
                                <TableHead className="text-primary">Lock Time</TableHead>
                                <TableHead className="text-primary text-center">APR</TableHead>
                                <TableHead className="text-primary">Bonus Powers</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {stakingTiers.map((item) => (
                                <TableRow key={item.tier}>
                                    <TableCell className="font-semibold">{item.tier}</TableCell>
                                    <TableCell className="text-muted-foreground">{item.lockTime}</TableCell>
                                    <TableCell className="text-center font-bold text-accent">{item.apr}</TableCell>
                                    <TableCell className="text-muted-foreground">{item.bonusPowers}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                 <div className="text-center space-y-2">
                    <p className="font-bold text-primary">🔁 Compounded rewards.</p>
                    <p className="font-bold text-destructive">⚠️ Early exit = 15% burn. Disloyalty isn’t cheap.</p>
                </div>
            </Terminal>
        </AnimatedSection>
    );
};

export default SectionStaking;
