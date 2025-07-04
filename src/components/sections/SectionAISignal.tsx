"use client";

import { useState } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import Typewriter from "@/components/common/Typewriter";
import { Button } from "@/components/ui/button";
import { generateCryptoInsight } from "@/ai/flows/generate-btc-eth-insight";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SectionAISignal = () => {
    const [insight, setInsight] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [symbol, setSymbol] = useState("BTC");

    const handleGenerateInsight = async () => {
        if (!symbol) {
            setInsight("Please enter a token symbol.");
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
                    <div className="flex flex-col items-center gap-6">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-2 text-center"
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent glow-accent transition-colors hover:text-primary">Live Market Intelligence</h2>
                            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-4xl mx-auto">
                                Connect directly to the SHADOW neural core. Analyze real-time blockchain data and market sentiment to generate actionable insights. Enter a token symbol and initiate a scan to receive an AI-powered analysis.
                            </p>
                        </motion.div>
                        <div className="w-full border-t border-primary/20 pt-6">
                            <div className="flex flex-col items-center gap-4 w-full max-w-xs mx-auto">
                                 <div className="w-full space-y-2">
                                    <Label htmlFor="symbol-input" className="text-primary/80 text-center block">Token Symbol</Label>
                                    <Input
                                        id="symbol-input"
                                        value={symbol}
                                        onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                                        placeholder="e.g. BTC, ETH, SOL"
                                        className="bg-black/30 border-primary/30 h-12 text-center text-lg font-bold"
                                        onKeyUp={(e) => e.key === 'Enter' && handleGenerateInsight()}
                                        aria-label="Token Symbol"
                                    />
                                </div>
                                <Button onClick={handleGenerateInsight} disabled={isLoading} size="lg" className="btn-shine w-full">
                                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                                    Initiate Signal Scan
                                </Button>
                            </div>
                             <div className="mt-4 min-h-[6rem]">
                                {isLoading && <p className="text-accent animate-pulse">Scanning market signals...</p>}
                                {insight && (
                                    <div className="text-primary whitespace-pre-wrap text-sm sm:text-base md:text-lg w-full bg-black/20 p-4 rounded-md border border-primary/20 max-w-2xl mx-auto">
                                        <Typewriter texts={[insight]} speed={10} pause={5000}/>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </Terminal>
            </div>
        </AnimatedSection>
    );
};

export default SectionAISignal;
