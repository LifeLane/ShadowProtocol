"use client"

import { useState, useEffect } from 'react';
import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Rocket, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

const Section7Claim = () => {
    const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 11, seconds: 10 });
    const [claimedKeys, setClaimedKeys] = useState(6740000);
    const totalKeys = 10000000;
    const progress = (claimedKeys / totalKeys) * 100;

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { hours, minutes, seconds } = prev;
                if (seconds > 0) {
                    seconds--;
                } else if (minutes > 0) {
                    seconds = 59;
                    minutes--;
                } else if (hours > 0) {
                    seconds = 59;
                    minutes = 59;
                    hours--;
                } else {
                    return { hours: 0, minutes: 0, seconds: 0 };
                }
                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    
    useEffect(() => {
        const claimTimer = setInterval(() => {
            setClaimedKeys(prev => Math.min(prev + Math.floor(Math.random() * 50), totalKeys));
        }, 1500);

        return () => clearInterval(claimTimer);
    }, []);

    const formatTime = (time: number) => time.toString().padStart(2, '0');

    return (
        <AnimatedSection id="claim" animationClassName="bg-matrix-drift-pattern">
            <Terminal title="URGENT_CLAIM_PROTOCOL.exe" className="w-full max-w-4xl animate-border-glow">
                <div className="text-center p-4 md:p-8">
                    <div className="mb-6">
                        <h3 className="text-2xl sm:text-3xl font-bold text-destructive glow mb-2 flex items-center justify-center gap-2">
                            <AlertTriangle/> Claim Ends In:
                        </h3>
                        <div className="text-4xl sm:text-6xl font-bold text-destructive glow font-mono">
                            {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)} ⏳
                        </div>
                        <p className="text-destructive/80 mt-2">Unclaimed SHADOW Will Burn. Forever.</p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">Claim Meter</h3>
                        <Progress value={progress} className="h-4" />
                        <div className="text-primary glow font-mono mt-2 text-lg flex flex-col sm:flex-row sm:justify-center sm:gap-2">
                            <span>{claimedKeys.toLocaleString()}</span>
                            <span className="hidden sm:inline">/</span>
                            <span>{totalKeys.toLocaleString()} SHADOW Keys Claimed</span>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center gap-4">
                        <Button asChild size="lg" className="w-full max-w-sm btn-shine glow">
                             <Link href="#claim-key">
                                <Rocket className="mr-2" />
                                Claim Your SHADOW Key Now
                            </Link>
                        </Button>
                        <p className="font-bold text-accent glow-accent">Every Second Counts. Burn Is Immutable.</p>
                    </div>
                </div>
            </Terminal>
        </AnimatedSection>
    );
};

export default Section7Claim;
