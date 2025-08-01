
"use client";

import { useState } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { Button } from "@/components/ui/button";
import { generateCryptoInsight } from "@/ai/flows/generate-btc-eth-insight";
import { motion } from "framer-motion";
import { Loader2, TrendingUp, TrendingDown, Minus, ShoppingCart, ArrowUp, ArrowDown, Pause } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";


type InsightResult = {
    keyFinding: string;
    insight: string;
    sentiment: 'BULLISH' | 'BEARISH' | 'NEUTRAL';
    shadowScore: number;
};

const cryptoOptions = [
    { value: "BTC", label: "Bitcoin (BTC)" },
    { value: "ETH", label: "Ethereum (ETH)" },
    { value: "SOL", label: "Solana (SOL)" },
    { value: "DOGE", label: "Dogecoin (DOGE)" },
    { value: "ADA", label: "Cardano (ADA)" },
    { value: "LINK", label: "Chainlink (LINK)" },
    { value: "XRP", label: "Ripple (XRP)" },
    { value: "DOT", label: "Polkadot (DOT)" },
];


const SectionAISignal = () => {
    const [insight, setInsight] = useState<InsightResult | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [symbol, setSymbol] = useState("BTC");
    const { toast } = useToast();

    const handleGenerateInsight = async () => {
        if (!symbol) {
            toast({
                variant: 'destructive',
                title: "Selection Required",
                description: "Please select a token symbol.",
            })
            return;
        }
        setIsLoading(true);
        setInsight(null);
        setError(null);
        try {
            const result = await generateCryptoInsight({ symbol });
            setInsight(result);
        } catch (e) {
            const errorMessage = e instanceof Error ? e.message.replace(/^Error: /i, '') : "Could not fetch insight from the neural core.";
            setError(errorMessage);
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };
    
    const getScoreColor = (score: number) => {
        if (score > 30) return 'text-primary';
        if (score < -30) return 'text-destructive';
        return 'text-accent';
    };

    const getSentimentInfo = (sentiment: InsightResult['sentiment']) => {
        switch (sentiment) {
            case 'BULLISH': return { icon: <TrendingUp className="w-6 h-6 mr-3 text-primary" />, signalIcon: ArrowUp, signalText: "BUY", signalClass: "bg-primary/10 text-primary border-primary/20" };
            case 'BEARISH': return { icon: <TrendingDown className="w-6 h-6 mr-3 text-destructive" />, signalIcon: ArrowDown, signalText: "SELL", signalClass: "bg-destructive/10 text-destructive border-destructive/20" };
            default: return { icon: <Minus className="w-6 h-6 mr-3 text-accent" />, signalIcon: Pause, signalText: "HOLD", signalClass: "bg-accent/10 text-accent border-accent/20" };
        }
    };

    return (
        <AnimatedSection id="ai-signal" animationClassName="bg-pulse-grid-pattern">
            <div className="w-full max-w-6xl">
                 <Terminal title="AI Signal Feed" className="max-w-6xl bg-black/40 backdrop-blur-sm">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-4 text-center md:text-left"
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary glow transition-colors hover:text-accent">Tap the Neural Core</h2>
                            <p className="text-muted-foreground text-base sm:text-lg md:text-xl">
                                The market never sleeps. Neither does Shadow. Connect to the neural core for live, AI-powered sentiment analysis. Select a token, initiate the scan, and receive actionable intelligence sourced directly from the chain's consciousness.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col items-center justify-center gap-4"
                        >
                             <Select onValueChange={setSymbol} defaultValue={symbol}>
                                <SelectTrigger className="w-full max-w-xs bg-black/30 border-primary/30 h-12 text-lg">
                                    <SelectValue placeholder="Select a token" />
                                </SelectTrigger>
                                <SelectContent>
                                    {cryptoOptions.map(option => (
                                        <SelectItem key={option.value} value={option.value}>
                                            {option.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <Button onClick={handleGenerateInsight} disabled={isLoading} size="lg" className="btn-shine w-full max-w-xs">
                                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                                Initiate Signal Scan
                            </Button>
                        </motion.div>
                    </div>

                    {(isLoading || error || insight) && (
                        <div className="mt-8 min-h-[14rem] w-full border-t border-primary/20 pt-8 flex items-center justify-center">
                            {isLoading && <p className="text-accent animate-pulse text-center text-xl">Scanning market signals...</p>}
                            {error && (
                                <Alert variant="destructive" className="max-w-2xl bg-destructive/10 border-destructive/30">
                                    <AlertTitle>Signal Interrupted</AlertTitle>
                                    <AlertDescription>{error}</AlertDescription>
                                </Alert>
                            )}
                            {insight && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full flex flex-col items-center gap-8"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                                        {/* Signal Card */}
                                        <div className={cn("rounded-lg border-2 p-6 flex flex-col items-center justify-center animate-border-pulse-glow", getSentimentInfo(insight.sentiment).signalClass)}>
                                            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">AI Signal</p>
                                            <div className="flex items-center gap-4 my-2">
                                                <getSentimentInfo(insight.sentiment).signalIcon className="w-12 h-12" />
                                                <p className="text-5xl font-bold">{getSentimentInfo(insight.sentiment).signalText}</p>
                                            </div>
                                        </div>

                                        {/* Key Finding Card */}
                                        <div className="md:col-span-2 bg-black/20 border border-primary/30 rounded-lg p-6 flex flex-col justify-center">
                                            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Key Finding</p>
                                            <p className="text-2xl font-bold text-accent glow-accent">{insight.keyFinding}</p>
                                        </div>

                                        {/* Shadow Score Card */}
                                        <div className="md:col-span-3 bg-black/20 border border-primary/30 rounded-lg p-6">
                                            <div className="flex justify-between items-center mb-2">
                                                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Shadow Score</p>
                                                <span className={`font-bold text-2xl ${getScoreColor(insight.shadowScore)}`}>{insight.shadowScore}</span>
                                            </div>
                                            <div className="w-full h-2 rounded-full bg-gradient-to-r from-destructive via-accent to-primary relative">
                                                <div className="absolute top-0 h-full w-1 bg-white/80 rounded-full shadow-lg" style={{ left: `calc(${((insight.shadowScore + 100) / 200) * 100}% - 2px)` }}></div>
                                            </div>
                                        </div>
                                        
                                         {/* Insight Text */}
                                        <div className="md:col-span-3 bg-black/20 border border-primary/30 rounded-lg p-6">
                                            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">Detailed Analysis</p>
                                            <p className="text-muted-foreground whitespace-pre-wrap text-lg font-mono">{insight.insight}</p>
                                        </div>
                                    </div>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <Button asChild size="lg" className="btn-shine glow animate-border-glow">
                                            <Link href="https://link.gmgn.ai/?url=https%3A%2F%2Fgmgn.ai%2Fsol%2Ftoken%2FB6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR&page=TokenDetail&params=%7B%22chainName%22%3A%22sol%22%2C%22address%22%3A%22B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR%22%7D&ref=j40KRTAR&referral=j40KRTAR&chain=sol" target="_blank" rel="noopener noreferrer">
                                                <ShoppingCart className="mr-2" />
                                                Trade SHADOW Now
                                            </Link>
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            )}
                        </div>
                    )}
                </Terminal>
            </div>
        </AnimatedSection>
    );
};

export default SectionAISignal;
