
"use client"

import { useState, useEffect } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Flame, ShieldCheck, Lock, Package, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Progress } from "@/components/ui/progress";

const Section4Tokenomics = () => {
    const [burnedAmount, setBurnedAmount] = useState(3421000);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setBurnedAmount(prev => prev + Math.floor(Math.random() * 10));
      }, 3000);
      return () => clearInterval(timer);
    }, []);

    useEffect(() => {
      const progressTimer = setTimeout(() => setProgress(34.21), 500);
      return () => clearTimeout(progressTimer);
    }, []);

    return (
        <AnimatedSection id="tokenomics" animationClassName="bg-circuit-pattern">
            <div className="bg-black/30 border border-primary/20 rounded-lg shadow-lg backdrop-blur-sm p-4 md:p-8 w-full max-w-7xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-accent glow-accent mb-2">
                        Every Token Must Serve… or Burn 🔥
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 text-left">
                    <div className="bg-black/20 border border-primary/20 p-4 rounded-lg flex items-center gap-4">
                        <ShieldCheck className="w-8 h-8 text-primary flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-lg text-primary">No Mint Authority</h3>
                            <p className="text-sm text-muted-foreground">The total supply is fixed forever.</p>
                        </div>
                    </div>
                    <div className="bg-black/20 border border-primary/20 p-4 rounded-lg flex items-center gap-4">
                        <Lock className="w-8 h-8 text-primary flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-lg text-primary">99% Locked Supply</h3>
                            <p className="text-sm text-muted-foreground">Prevents market manipulation.</p>
                        </div>
                    </div>
                    <div className="bg-black/20 border border-primary/20 p-4 rounded-lg flex items-center gap-4 col-span-1 lg:col-span-1 md:col-span-2">
                        <Package className="w-8 h-8 text-primary flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-lg text-primary">Utility Vaults</h3>
                            <p className="text-sm text-muted-foreground">Airdrop, Stake, and Reward pools.</p>
                        </div>
                    </div>
                </div>

                <div className="text-center border-t border-dashed border-primary/30 pt-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-primary glow-accent mb-4 flex items-center justify-center gap-2">
                        <Flame />
                        Burn Meter
                    </h3>
                    <div className="bg-black/30 p-4 rounded-lg max-w-md mx-auto mb-4">
                        <p className="text-4xl font-bold text-destructive glow mb-2">
                            {burnedAmount.toLocaleString()} SHADOW Burned 🔥
                        </p>
                        <Progress value={progress} className="h-3" indicatorClassName="bg-destructive"/>
                        <p className="text-sm text-muted-foreground mt-2">Tracking Unclaimed & Unused Tokens</p>
                    </div>
                    <p className="text-muted-foreground mb-6">Unused SHADOW from utility vaults is burned automatically by the protocol.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                         <Button asChild size="lg" className="btn-shine">
                            <Link href="https://link.gmgn.ai/?url=https%3A%2F%2Fgmgn.ai%2Fsol%2Ftoken%2FB6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR&page=TokenDetail&params=%7B%22chainName%22%3A%22sol%22%2C%22address%22%3A%22B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR%22%7D&ref=j40KRTAR&referral=j40KRTAR&chain=sol" target="_blank">
                                <Flame className="mr-2" />
                                View Burn Dashboard
                            </Link>
                        </Button>
                         <Button asChild size="lg" variant="outline" className="glow">
                             <Link href="#claim-key">
                                Stake to Prevent Burn
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Section4Tokenomics;

    