"use client"

import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { motion } from "framer-motion";
import { AtSign, KeyRound, Send } from "lucide-react";

const VerificationCube = () => (
    <div className="w-24 h-24 scene">
        <motion.div
            className="cube"
            animate={{ rotateX: 360, rotateY: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
        </motion.div>
    </div>
);

const Section5ClaimKey = () => {
    const [status, setStatus] = useState("idle"); 

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("pending");
        setTimeout(() => {
            setStatus("success");
        }, 2000);
    };

    return (
        <AnimatedSection id="claim-key" className="bg-neural-pattern">
            <div className="z-10 flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                    <VerificationCube />
                    <p className="text-accent glow-accent text-2xl md:text-3xl font-bold mt-8 text-center">Claim Your Neural Key</p>
                    <p className="text-foreground/70 mt-4 text-center">Only 1,000 addresses will qualify for the Genesis Offering.</p>
                </div>
                <div className="w-full md:w-1/2">
                    <Terminal title="GENESIS_CLAIM.sh">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="telegram" className="text-primary/80">Telegram Handle</Label>
                                <div className="relative">
                                    <Send className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50" />
                                    <Input id="telegram" placeholder="@username" className="pl-10 bg-black/30 border-primary/30" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="wallet" className="text-primary/80">Wallet Address</Label>
                                <div className="relative">
                                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50" />
                                    <Input id="wallet" placeholder="0x..." className="pl-10 bg-black/30 border-primary/30" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-primary/80">Email Address</Label>
                                <div className="relative">
                                    <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50" />
                                    <Input id="email" type="email" placeholder="agent@protocol.xyz" className="pl-10 bg-black/30 border-primary/30" />
                                </div>
                            </div>
                            <Button type="submit" className="w-full animate-pulse" disabled={status === 'pending' || status === 'success'}>
                                {status === 'idle' && '-> claim --neural-key'}
                                {status === 'pending' && '> rank: pending...'}
                                {status === 'success' && ':: neural key reserved.'}
                                {status === 'error' && '> Error. Try again.'}
                            </Button>
                        </form>
                    </Terminal>
                </div>
            </div>
             <style jsx>{`
                .scene { perspective: 400px; }
                .cube { width: 100%; height: 100%; position: relative; transform-style: preserve-3d; }
                .face { position: absolute; width: 96px; height: 96px; border: 2px solid hsl(var(--primary)); background: hsl(var(--primary) / 0.1); }
                .front { transform: rotateY(0deg) translateZ(48px); }
                .back { transform: rotateY(180deg) translateZ(48px); }
                .right { transform: rotateY(90deg) translateZ(48px); }
                .left { transform: rotateY(-90deg) translateZ(48px); }
                .top { transform: rotateX(90deg) translateZ(48px); }
                .bottom { transform: rotateX(-90deg) translateZ(48px); }
            `}</style>
        </AnimatedSection>
    );
};

export default Section5ClaimKey;
