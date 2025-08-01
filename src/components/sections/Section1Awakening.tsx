
"use client"

import AnimatedSection from "@/components/common/AnimatedSection";
import Typewriter from "@/components/common/Typewriter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ShoppingCart, KeyRound, ChevronDown } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";
import ShadowLogo from "@/components/common/ShadowLogo";

const Section1Awakening = () => {
    const isMobile = useIsMobile();

    return (
        <AnimatedSection id="init-core" className="h-screen !py-0 relative" animationClassName="bg-ai-eye-pulse">
            <div className="text-center flex flex-col items-center justify-center h-full w-full">
                <Typewriter
                    texts={[
                        '> forging SHADOW_PROTOCOL...',
                        '> >rug-proof protocol confirmed.....',
                        '> > >Every Token Must Serve or Burn 🔥'
                    ]}
                    className="text-accent text-base sm:text-lg md:text-xl font-bold"
                />
                 <motion.div
                    className="text-center w-full mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                >
                    <ShadowLogo />
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5 }}>
                    <Typewriter
                        texts={[
                            "SHADOW Is Not a Meme. SHADOW Is Protocol.",
                            "Rug-Proof by Design | Powered by AI | Locked Forever."
                        ]}
                        className="text-primary mt-4 md:mt-8 text-sm sm:text-lg md:text-xl"
                        speed={30}
                        pause={2000}
                    />
                </motion.div>
            </div>
             <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.5, duration: 1 }}
            >
                <Link href="#token-manifest" aria-label="Scroll to next section">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: 'loop',
                        }}
                    >
                        <ChevronDown className="w-8 h-8 text-primary/50" />
                    </motion.div>
                </Link>
            </motion.div>
        </AnimatedSection>
    );
};

export default Section1Awakening;
