"use client"

import { useState, useEffect, useRef } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { Button } from "@/components/ui/button";
import { Lock, ShieldOff, BarChart, Search, Globe, Ban, KeyRound, Eye } from 'lucide-react';
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const AnimatedCounter = ({ to, isCurrency = false }: { to: number; isCurrency?: boolean }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            const duration = 2000;
            const frameRate = 1000 / 60;
            const totalFrames = Math.round(duration / frameRate);
            let frame = 0;

            const counter = setInterval(() => {
                frame++;
                const progress = frame / totalFrames;
                // Ease-out quad easing function
                const easeOutProgress = 1 - Math.pow(1 - progress, 3);
                const currentCount = Math.round(to * easeOutProgress);
                setCount(currentCount);

                if (frame === totalFrames) {
                    clearInterval(counter);
                    setCount(to); // Ensure final value is exact
                }
            }, frameRate);

            return () => clearInterval(counter);
        }
    }, [isInView, to]);

    const formatNumber = (num: number) => {
        if (isCurrency) return `$${num.toLocaleString()}`;
        return num.toLocaleString();
    }

    return <span ref={ref}>{formatNumber(count)}</span>;
};


const Section2Proof = () => {
    const stats = [
        { label: "Total SHADOW", value: "10 Billion", icon: BarChart, isCounter: false },
        { label: "Locked in 20 Vaults", value: "9.9 Billion", icon: Lock, isCounter: false },
        { label: "Mint Authority", value: 0, icon: ShieldOff, isCounter: true },
        { label: "On-Chain Transparency", value: 100, icon: Globe, suffix: "%", isCounter: true },
    ];

    const trustPoints = [
        { text: "No Dev Access", icon: KeyRound },
        { text: "No Hidden Wallets", icon: Eye },
        { text: "No Mint Switch", icon: Ban },
    ];

    return (
        <AnimatedSection id="neural-core" animationClassName="bg-pulse-grid-pattern">
            <Terminal title="NEURAL_CORE_INTEGRITY_CHECK.md" className="w-full max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 text-center text-2xl sm:text-3xl font-bold text-accent glow-accent mb-8">
                    <div className="p-2 md:border-r md:border-primary/30">SHADOW Is Immutable.</div>
                    <div className="p-2">10 Billion Forged.</div>
                    <div className="p-2 md:border-r md:border-t md:border-primary/30">99% Supply Locked.</div>
                    <div className="p-2 md:border-t md:border-primary/30">Zero Mint Authority.</div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-black/20 border border-primary/20 p-4 rounded-lg flex flex-col justify-between h-full card-glitch-hover"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mx-auto mb-3" />
                            <p className="text-2xl md:text-3xl font-bold text-primary glow">
                                {stat.isCounter ? <AnimatedCounter to={stat.value as number} /> : stat.value}
                                {stat.suffix}
                            </p>
                            <p className="text-muted-foreground text-sm md:text-base mt-2">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
                 <div className="border-t border-dashed border-primary/30 pt-6 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        {trustPoints.map((point, index) => (
                             <motion.div
                                key={index}
                                className="flex items-center justify-center gap-2 text-primary glow"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                            >
                                <point.icon className="w-5 h-5"/>
                                <span className="font-bold">{point.text}</span>
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-lg sm:text-xl font-bold text-primary glow mb-6">
                        SHADOW is the First Token That Can’t Rug.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                         <Button asChild size="lg" className="btn-shine">
                            <Link href="https://solscan.io/" target="_blank">
                                <Search className="mr-2" />
                                Verify Smart Contract
                            </Link>
                        </Button>
                         <Button asChild size="lg" variant="outline" className="glow">
                             <Link href="#vault-proof">
                                <Lock className="mr-2" />
                                Track Vault Locks
                            </Link>
                        </Button>
                    </div>
                </div>
            </Terminal>
        </AnimatedSection>
    );
};

export default Section2Proof;
