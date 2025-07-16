"use client"

import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { Button } from "@/components/ui/button";
import { Eye, Skull, Plug, Gift } from "lucide-react";

const Section8Airdrop = () => {

  return (
    <AnimatedSection id="airdrop" className="relative">
      <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-accent glow-accent">
            CONNECT &amp; CLAIM BEFORE IT CLOSES
          </h2>
      </div>
      <Terminal title="UPLINK.sh" className="max-w-4xl animate-border-glow">
        <div className="flex flex-col items-center justify-center text-center p-6 space-y-8">
            <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 text-lg md:text-2xl font-bold text-destructive">
                    <Skull className="w-6 h-6 md:w-8 md:h-8" />
                    <p>The Genesis Airdrop Window is Closing Fast.</p>
                </div>
                <div className="flex items-center justify-center gap-3 text-lg md:text-2xl font-bold text-primary">
                    <Eye className="w-6 h-6 md:w-8 md:h-8" />
                    <p>Limited to first 10,000 qualified addresses.</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
                 <Button size="lg" className="btn-shine glow w-full sm:w-auto">
                    <Plug className="mr-2" />
                    Connect Wallet
                </Button>
                 <Button size="lg" variant="outline" className="glow w-full sm:w-auto">
                    <Gift className="mr-2" />
                    Begin My Upload
                </Button>
            </div>
        </div>
      </Terminal>
    </AnimatedSection>
  );
};

export default Section8Airdrop;
