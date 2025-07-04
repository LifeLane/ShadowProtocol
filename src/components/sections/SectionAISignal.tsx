"use client";

import { useState } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import Typewriter from "@/components/common/Typewriter";
import { Button } from "@/components/ui/button";
import { generateCryptoInsight } from "@/ai/flows/generate-btc-eth-insight";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SectionAISignal = () => {
    const [insight, setInsight] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [symbol, setSymbol] = useState("BTC");

    const handleGenerateInsight = async () => {
        setIsLoading(true);
        setInsight("");
        try {
            const result = await generateCryptoInsight({ symbol });
            setInsight(result.insight);
        } catch (error) {
            console.error(error);
            setInsight("Error: Could not fetch insight from the neural core.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AnimatedSection id="ai-signal" className="bg-pulse-grid-pattern">
            <div className="w-full max-w-6xl">
                 <Terminal title="AI Signal Feed" className="max-w-6xl bg-black/40 backdrop-blur-sm">
                    <div className="flex flex-col items-start gap-6">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-2"
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent glow-accent transition-colors hover:text-primary">Live Market Intelligence</h2>
                            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-4xl">
                                Connect directly to the SHADOW neural core. Analyze real-time blockchain data and market sentiment to generate actionable insights. Select a symbol and initiate a scan to receive an AI-powered analysis of current market trends.
                            </p>
                        </motion.div>
                        <div className="w-full border-t border-primary/20 pt-6">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <Button onClick={handleGenerateInsight} disabled={isLoading} size="lg" className="btn-shine">
                                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                                    Initiate Signal Scan
                                </Button>
                                 <Tabs value={symbol} onValueChange={setSymbol}>
                                  <TabsList className="bg-black/30 border border-primary/20">
                                    <TabsTrigger value="BTC">BTC</TabsTrigger>
                                    <TabsTrigger value="ETH">ETH</TabsTrigger>
                                    <TabsTrigger value="SOL">SOL</TabsTrigger>
                                  </TabsList>
                                </Tabs>
                            </div>
                             <div className="mt-4 min-h-[6rem]">
                                {isLoading && <p className="text-accent animate-pulse">Scanning market signals...</p>}
                                {insight && (
                                    <div className="text-primary whitespace-pre-wrap text-sm sm:text-base md:text-lg w-full bg-black/20 p-4 rounded-md border border-primary/20">
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
