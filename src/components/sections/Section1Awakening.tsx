"use client"

import AnimatedSection from "@/components/common/AnimatedSection";
import Typewriter from "@/components/common/Typewriter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Rocket, KeyRound } from 'lucide-react';

const ShadowLogo = () => (
    <motion.pre
        className="text-primary glow font-bold text-center text-[clamp(4px,2.4vw,22px)] leading-tight tracking-tighter sm:tracking-[0.2em] md:tracking-[0.3em] w-full overflow-hidden"
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
    return (
        <AnimatedSection id="init-core" className="h-screen bg-ai-eye-pulse !py-0">
            <div className="text-center flex flex-col items-center justify-center h-full w-full">
                <Typewriter
                    texts={[
                        '> boot --shadow-core',
                        '> syncing . . .',
                        '> intelligence confirmed.',
                    ]}
                    className="text-primary text-lg sm:text-3xl md:text-5xl font-bold"
                    whitespaceClass="whitespace-pre"
                />
                 <motion.div
                    className="text-center w-full mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                >
                    <ShadowLogo />
                     <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.5 }}>
                        <Typewriter
                            texts={["A new token is born from the chain’s neural memory."]}
                            className="text-accent mt-4 md:mt-8 text-sm sm:text-xl md:text-2xl"
                            speed={30}
                            pause={5000}
                        />
                     </motion.div>
                </motion.div>

                <motion.div
                    className="mt-12 flex flex-col sm:flex-row items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 4, duration: 0.8 }}
                >
                    <Button asChild size="lg" className="btn-shine glow">
                        <Link href="#claim-key">
                            <KeyRound />
                            Join Public Offering
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="glow">
                         <Link href="#airdrop">
                            <Rocket />
                            Airdrop Console
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </AnimatedSection>
    );
};

export default Section1Awakening;
