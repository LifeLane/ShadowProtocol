
"use client"

import AnimatedSection from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Brain, Zap, BarChartHorizontal, Factory, Repeat, Network, Users } from 'lucide-react';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge";


const Section3Utility = () => {
    const features = [
        {
            icon: BarChartHorizontal,
            title: "SHADOWSignal",
            description: "On-Chain AI Trading Signals. Real-time, no subscriptions. Powered by the protocol and enhanced by your stake.",
            ctaText: "View Signal Terminal",
            ctaLink: "#ai-signal",
            isLive: true,
        },
        {
            icon: Brain,
            title: "SHADOWGPT",
            description: "Free AI Chat Powered by SHADOW. Stake SHADOW to unlock advanced AI capabilities, faster responses, and deeper insights.",
            ctaText: "Awaiting Deployment",
            ctaLink: "#",
            isLive: false,
        },
        {
            icon: Repeat,
            title: "SHADOW Swap",
            description: "Execute lightning-fast, low-cost trades. Powered by SHADOW AI for optimized routing and minimal slippage.",
            ctaText: "Awaiting Deployment",
            ctaLink: "#",
            isLive: false,
        },
        {
            icon: Factory,
            title: "SHADOW Factory",
            description: "Forge and launch new tokens on the SHADOW protocol. Access robust, rug-proof tokenomics and deploy with a single click.",
            ctaText: "Awaiting Deployment",
            ctaLink: "#",
            isLive: false,
        },
        {
            icon: Network,
            title: "SHADOW Chain",
            description: "The future backbone of the protocol. A dedicated L2 for ultra-fast, secure, and AI-driven decentralized applications.",
            ctaText: "Awaiting Deployment",
            ctaLink: "#",
            isLive: false,
        },
        {
            icon: Users,
            title: "SHADOW Social",
            description: "A decentralized social network governed by the community. Your data, your control, powered by SHADOW.",
            ctaText: "Awaiting Deployment",
            ctaLink: "#",
            isLive: false,
        }
    ];

    return (
        <AnimatedSection id="ecosystem" animationClassName="bg-starfield">
            <div className="text-center mb-12 w-full max-w-4xl">
                <div className="flex items-center justify-center space-x-4 md:space-x-8">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-primary glow">
                        Real Use
                    </h2>
                    <div className="h-12 w-px bg-primary/50 animate-border-pulse-glow"></div>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-primary glow">
                        Real Tools
                    </h2>
                     <div className="h-12 w-px bg-accent/50 animate-border-pulse-glow"></div>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-primary glow">
                        Live Now
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="bg-black/40 card-animated-border-hover h-full flex flex-col text-center">
                            <CardHeader className="items-center">
                                <feature.icon className="w-16 h-16 text-primary mb-4" />
                                <CardTitle className="text-3xl text-accent glow-accent flex items-center gap-3">
                                  {feature.title}
                                  {!feature.isLive && <Badge variant="outline">Coming Soon</Badge>}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <CardDescription className="text-lg text-muted-foreground">{feature.description}</CardDescription>
                            </CardContent>
                            <CardFooter className="flex-col gap-4 mt-auto pt-6">
                                <Button asChild={feature.isLive} size="lg" className="w-full btn-shine" disabled={!feature.isLive}>
                                    {feature.isLive ? <Link href={feature.ctaLink}>{feature.ctaText}</Link> : <span>{feature.ctaText}</span> }
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 text-center space-y-4">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary glow">Access Free. Upgrade by Holding. SHADOW = Your Utility Key.</p>
                <Button asChild size="lg" variant="outline" className="glow">
                    <Link href="#claim-key">
                        <Zap className="mr-2" />
                        Stake to Upgrade AI Power
                    </Link>
                </Button>
            </div>
        </AnimatedSection>
    );
};

export default Section3Utility;
