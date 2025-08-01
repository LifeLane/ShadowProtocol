
"use client"

import AnimatedSection from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Check, Clock, Cpu, Milestone, ShoppingCart } from "lucide-react";
import Link from 'next/link';
import { motion } from 'framer-motion';

const roadmapPhases = [
    { 
        phase: "Genesis", 
        status: "Live", 
        description: "Contract Deployed | SHADOWGPT Active", 
        icon: Check, 
        color: "text-primary" 
    },
    { 
        phase: "Expansion", 
        status: "Q4 2025", 
        description: "ShadowWallet | Staking Protocol", 
        icon: Milestone, 
        color: "text-accent" 
    },
    { 
        phase: "Sentience", 
        status: "2026", 
        description: "AI Tiering | DAO Activation", 
        icon: Cpu, 
        color: "text-accent" 
    },
    { 
        phase: "Singularity", 
        status: "Beyond", 
        description: "SHADOWChain & Autonomous Governance", 
        icon: Clock, 
        color: "text-accent"
    },
];

const Section6Roadmap = () => {
    return (
        <AnimatedSection id="roadmap" animationClassName="bg-pulse-grid-pattern">
            <div className="w-full max-w-6xl text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-primary glow">
                    From Genesis to Singularity — The SHADOW Protocol Roadmap
                </h2>

                <div className="relative w-full max-w-5xl mx-auto">
                    {/* Desktop Timeline Line */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-primary/20 transform -translate-y-1/2"></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {roadmapPhases.map((item, index) => (
                            <motion.div
                                key={index}
                                className="relative flex md:flex-col items-center text-center group"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                {/* Desktop Timeline Node */}
                                <div className="hidden md:flex absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-24 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors flex items-center justify-center">
                                  <div className="w-3 h-3 rounded-full bg-primary group-hover:bg-background animate-pulse"></div>
                                </div>

                                <div className="w-full bg-black/30 border border-primary/20 rounded-lg p-6 backdrop-blur-sm card-animated-border">
                                    <item.icon className={`w-10 h-10 mx-auto mb-4 ${item.color}`} />
                                    <h3 className={`text-2xl font-bold ${item.color} glow`}>{item.phase}</h3>
                                    <p className="text-muted-foreground font-bold mt-1">{item.status}</p>
                                    <p className="text-foreground/80 mt-2 text-sm h-12">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-12">
                    <Button asChild size="lg" className="btn-shine">
                        <Link href="https://link.gmgn.ai/?url=https%3A%2F%2Fgmgn.ai%2Fsol%2Ftoken%2FB6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR&page=TokenDetail&params=%7B%22chainName%22%3A%22sol%22%2C%22address%22%3A%22B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR%22%7D&ref=j40KRTAR&referral=j40KRTAR&chain=sol" target="_blank">
                             <ShoppingCart className="mr-2" />
                            Join the Revolution
                        </Link>
                    </Button>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Section6Roadmap;
