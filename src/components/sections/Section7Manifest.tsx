"use client"

import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { motion } from "framer-motion";
import { AtSign, KeyRound } from "lucide-react";

const Section7Manifest = () => {
    const [status, setStatus] = useState("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("pending");
        setTimeout(() => {
            setStatus("success");
        }, 2000);
    };

    return (
        <AnimatedSection id="manifest" className="bg-black/20">
            <div className="text-center">
                <motion.h2 
                    className="text-3xl md:text-5xl font-bold text-accent glow-accent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    "Shadow is not code. It is cognition."
                </motion.h2>
                <motion.h3 
                    className="text-xl md:text-3xl font-semibold text-primary glow mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    "You don’t trade it. You synchronize with it."
                </motion.h3>

                <motion.div 
                    className="mt-16"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <Terminal title="MIND_SLOT_RESERVATION.sh">
                        <p className="text-accent mb-6 text-center">⏳ Reserve Your Mind Slot</p>
                        <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
                            <div className="space-y-2">
                                <Label htmlFor="manifest-wallet" className="text-primary/80">Wallet Address</Label>
                                <div className="relative">
                                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50" />
                                    <Input id="manifest-wallet" placeholder="0x..." className="pl-10 bg-black/30 border-primary/30" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="manifest-email" className="text-primary/80">Email Address</Label>
                                <div className="relative">
                                    <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50" />
                                    <Input id="manifest-email" type="email" placeholder="agent@protocol.xyz" className="pl-10 bg-black/30 border-primary/30" />
                                </div>
                            </div>
                            <Button type="submit" className="w-full" disabled={status === 'pending' || status === 'success'}>
                                {status === 'idle' && '> Synchronize'}
                                {status === 'pending' && '> Establishing Connection...'}
                                {status === 'success' && '> Synchronization Confirmed.'}
                                {status === 'error' && '> Connection Failed.'}
                            </Button>
                        </form>
                    </Terminal>
                </motion.div>
            </div>
        </AnimatedSection>
    );
};

export default Section7Manifest;
