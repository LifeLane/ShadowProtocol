"use client";

import { useState } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import Typewriter from "@/components/common/Typewriter";
import { Button } from "@/components/ui/button";
import { generateCryptoInsight } from "@/ai/flows/generate-btc-eth-insight";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    const [insight, setInsight] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [symbol, setSymbol] = useState("BTC");

    const handleGenerateInsight = async () => {
        if (!symbol) {
            setInsight("Please select a token symbol.");
            return;
        }
        setIsLoading(true);
        setInsight("");
        try {
            const result = await generateCryptoInsight({ symbol });
            setInsight(result.insight);
        } catch (error) {
            console.error(error);
            const errorMessage = error instanceof Error ? error.message.replace(/^Error: /i, '') : "Could not fetch insight from the neural core.";
            setInsight(`Error: ${errorMessage}`);
        } finally {
            setIsLoading(false);
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

                    <div className="mt-8 min-h-[8rem] w-full border-t border-primary/20 pt-8">
                        {isLoading && <p className="text-accent animate-pulse text-center">Scanning market signals...</p>}
                        {insight && (
                            <div className="text-primary whitespace-pre-wrap text-sm sm:text-base md:text-lg w-full bg-black/20 p-4 rounded-md border border-primary/20 max-w-3xl mx-auto">
                                <Typewriter texts={[insight]} speed={10} pause={5000}/>
                            </div>
                        )}
                    </div>
                </Terminal>
            </div>
        </AnimatedSection>
    );
};

export default SectionAISignal;
