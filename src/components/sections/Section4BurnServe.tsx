"use client"

import { useState, useEffect } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { Button } from "@/components/ui/button";
import { Flame, ShieldCheck, Lock, Package } from 'lucide-react';
import Link from 'next/link';
import { Progress } from "@/components/ui/progress";

const Section4BurnServe = () => {
    const [burnedAmount, setBurnedAmount] = useState(3421000);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setBurnedAmount(prev => prev + Math.floor(Math.random() * 10));
      }, 3000);
      return () => clearInterval(timer);
    }, []);

    useEffect(() => {
      // Animate progress bar on view
      const progressTimer = setTimeout(() => setProgress(34.21), 500);
      return () => clearTimeout(progressTimer);
    }, []);

    return (
        <AnimatedSection id="burn-serve" className="bg-circuit-pattern">
            <Terminal title="TOKENOMICS_PROTOCOL_v2.cfg" className="w-full max-w-6xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-accent glow-accent mb-2">
                        Every Token Must Serve… or Burn 🔥
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
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
                    <div className="bg-black/20 border border-primary/20 p-4 rounded-lg flex items-center gap-4">
                        <Package className="w-8 h-8 text-primary flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-lg text-primary">Utility Vaults</h3>
                            <p className="text-sm text-muted-foreground">Airdrop, Stake, and Reward pools.</p>
                        </div>
                    </div>
                     <div className="bg-black/20 border border-primary/20 p-4 rounded-lg flex items-center gap-4">
                        <Flame className="w-8 h-8 text-primary flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-lg text-primary">Rug-Proof by Design</h3>
                            <p className="text-sm text-muted-foreground">Each unused SHADOW from utility vaults will be automatically burned by the protocol.</p>
                        </div>
                    </div>
                </div>

                <div className="text-center border-t border-dashed border-primary/30 pt-6">
                    <div className="border-y border-dashed border-primary/20 py-2 max-w-sm mx-auto mb-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-accent glow-accent mb-2 flex items-center justify-center gap-2">
                            <Flame className="w-6 h-6"/>
                            Burn Meter
                        </h3>
                    </div>
                    <div className="bg-black/30 p-4 rounded-lg max-w-md mx-auto mb-4">
                        <div className="text-4xl font-bold text-destructive glow mb-2">
                           <div>{burnedAmount.toLocaleString()} SHADOW</div>
                           <div>Burned 🔥</div>
                        </div>
                        <Progress value={progress} className="h-3" indicatorClassName="bg-destructive"/>
                        <p className="text-sm text-muted-foreground mt-2">Tracking Unclaimed & Unused Tokens</p>
                    </div>
                    <p className="text-muted-foreground mb-6">Unused SHADOW from utility vaults is burned automatically by the protocol.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                         <Button asChild size="lg" className="btn-shine">
                            <Link href="#">
                                <Flame className="mr-2" />
                                View Burn Dashboard
                            </Link>
                        </Button>
                         <Button asChild size="lg" variant="outline" className="glow">
                             <Link href="#staking">
                                Stake to Prevent Burn
                            </Link>
                        </Button>
                    </div>
                </div>
            </Terminal>
        </AnimatedSection>
    );
};

export default Section4BurnServe;
