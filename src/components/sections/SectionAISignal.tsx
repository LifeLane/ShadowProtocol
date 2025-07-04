
"use client";

import { useState } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { Button } from "@/components/ui/button";
import { generateCryptoInsight } from "@/ai/flows/generate-btc-eth-insight";
import { motion } from "framer-motion";
import { Loader2, TrendingUp, TrendingDown, Minus, Gamepad2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";


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
            case 'BULLISH': return { icon: <TrendingUp className="w-6 h-6 mr-3 text-primary" /> };
            case 'BEARISH': return { icon: <TrendingDown className="w-6 h-6 mr-3 text-destructive" /> };
            default: return { icon: <Minus className="w-6 h-6 mr-3 text-accent" /> };
        }
    };

    return (
        <AnimatedSection id="ai-signal" className="bg-pulse-grid-pattern">
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
                                    className="w-full max-w-3xl flex flex-col items-center gap-8"
                                >
                                    <Card className="bg-black/20 border-primary/30 card-animated-border w-full">
                                        <CardHeader>
                                            <CardTitle className="text-accent glow-accent flex items-center text-2xl">
                                                {getSentimentInfo(insight.sentiment).icon}
                                                {insight.keyFinding}
                                            </CardTitle>
                                            <div className="flex flex-col gap-2 pt-4">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-muted-foreground font-bold">Shadow Score</span>
                                                    <span className={`font-bold text-2xl ${getScoreColor(insight.shadowScore)}`}>{insight.shadowScore}</span>
                                                </div>
                                                <div className="w-full h-2 rounded-full bg-gradient-to-r from-destructive via-accent to-primary relative">
                                                    <div className="absolute top-0 h-full w-1 bg-white/80 rounded-full shadow-lg" style={{ left: `calc(${((insight.shadowScore + 100) / 200) * 100}% - 2px)` }}></div>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground whitespace-pre-wrap text-lg">{insight.insight}</p>
                                        </CardContent>
                                    </Card>
                                     <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <Button asChild size="lg" className="btn-shine glow animate-border-glow">
                                            <Link href="https://www.socialnot.com" target="_blank" rel="noopener noreferrer">
                                                <Gamepad2 className="mr-2" />
                                                Play the Genesis Game
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
