
"use client"

import AnimatedSection from "@/components/common/AnimatedSection";
import Typewriter from "@/components/common/Typewriter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ShoppingCart, KeyRound } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";

const ShadowLogo = () => (
    <motion.pre
        className="text-primary glow font-bold text-center text-[clamp(2px,2.5vw,14px)] leading-tight tracking-tighter sm:tracking-normal lg:tracking-widest w-full overflow-x-auto"
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1, delay: 2.5 }}
    >
{`
███████╗   ██╗  ██╗    █████╗   ██████╗   ██████╗  ██╗    ██╗
██╔════╝   ██║  ██║   ██╔══██╗  ██╔══██╗ ██╔═══██╗ ██║    ██║
███████╗   ███████║   ███████║  ██║  ██║ ██║   ██║ ██║    ██║
╚════██║   ██╔══██║   ██╔══██║  ██║  ██║ ██║   ██║ ██║ █╗ ██║
███████║   ██║  ██║   ██║  ██║  ██████╔╝ ╚██████╔╝ ███╗█║███║
╚══════╝   ╚═╝  ╚═╝   ╚═╝  ╚═╝  ╚═════╝   ╚═════╝  ╚══╝╚╝╚══╝
`}
    </motion.pre>
);

const Section1Awakening = () => {
    const isMobile = useIsMobile();

    return (
        <AnimatedSection id="init-core" className="h-screen !py-0" animationClassName="bg-ai-eye-pulse">
            <div className="text-center flex flex-col items-center justify-center h-full w-full">
                <Typewriter
                    texts={[
                        '> forging SHADOW_PROTOCOL...',
                        '> >rug-proof protocol confirmed.....',
                        '> > >Every Token Must Serve or Burn 🔥'
                    ]}
                    className="text-primary text-lg sm:text-2xl md:text-4xl font-bold"
                />
                 <motion.div
                    className="text-center w-full mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                >
                    <ShadowLogo />
                     {isMobile && (
                        <motion.p
                            className="text-accent mt-4 text-base"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3.5 }}
                        >
                            SHADOW Is Not a Meme. SHADOW Is Protocol.
                        </motion.p>
                     )}
                     {!isMobile && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3.5 }}>
                            <Typewriter
                                texts={[
                                    "SHADOW Is Not a Meme. SHADOW Is Protocol.",
                                    "Rug-Proof by Design | Powered by AI | Locked Forever.",
                                    "99% Supply Locked | Zero Mint Authority | Full Transparency."
                                ]}
                                className="text-accent mt-4 md:mt-8 text-sm sm:text-lg md:text-xl"
                                speed={30}
                                pause={2000}
                            />
                        </motion.div>
                     )}
                </motion.div>

                <motion.div
                    className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 4, duration: 0.8 }}
                >
                    <Button asChild size="lg" className="btn-shine glow">
                        <Link href="https://link.gmgn.ai/?url=https%3A%2F%2Fgmgn.ai%2Fsol%2Ftoken%2FB6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR&page=TokenDetail&params=%7B%22chainName%22%3A%22sol%22%2C%22address%22%3A%22B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR%22%7D&ref=j40KRTAR&referral=j40KRTAR&chain=sol" target="_blank">
                            <ShoppingCart />
                            Buy SHADOW Now
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="glow">
                         <Link href="#claim-key">
                            <KeyRound />
                            Airdrop Console
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </AnimatedSection>
    );
};

export default Section1Awakening;
