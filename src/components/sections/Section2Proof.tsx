"use client"

import { useState, useEffect, useRef } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { Button } from "@/components/ui/button";
import { Lock, ShieldOff, BarChart, Search } from 'lucide-react';
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const AnimatedCounter = ({ to }: { to: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      if (isInView) {
        const controls = {
          stop: () => {},
        };
        const animate = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / 2000, 1);
          setCount(Math.floor(progress * to));
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        let start: number | null = null;
        requestAnimationFrame(animate);
  
        return () => controls.stop();
      }
    }, [isInView, to]);
  
    return <span ref={ref}>{count.toLocaleString()}</span>;
};


const Section2Proof = () => {
    const stats = [
        { label: "Total SHADOW", value: 10000000000, icon: BarChart },
        { label: "Locked in 20 Vaults", value: 9900000000, icon: Lock },
        { label: "Mint Authority", value: 0, icon: ShieldOff },
    ];

    return (
        <AnimatedSection id="neural-core" className="bg-pulse-grid-pattern">
            <Terminal title="NEURAL_CORE_INTEGRITY_CHECK.md" className="w-full max-w-6xl">
                <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-accent glow-accent mb-2">
                        SHADOW Is Immutable. 10 Billion Forged. 99% Locked. Zero Mint Authority.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-black/20 border border-primary/20 p-6 rounded-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                            <p className="text-4xl font-bold text-primary glow">
                                <AnimatedCounter to={stat.value} />
                            </p>
                            <p className="text-muted-foreground text-lg">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
                 <div className="text-center border-t border-dashed border-primary/30 pt-6">
                    <p className="text-xl sm:text-2xl font-bold text-primary glow mb-6">
                        No Dev Access. No Hidden Wallets. No Mint Switch. SHADOW is the First Token That Can’t Rug.
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
