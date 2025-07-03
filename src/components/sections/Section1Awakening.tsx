"use client"

import AnimatedSection from "@/components/common/AnimatedSection";
import Typewriter from "@/components/common/Typewriter";
import { motion } from "framer-motion";

const ChaosLogo = () => (
    <motion.pre
        className="text-primary glow font-bold text-center text-xl md:text-4xl lg:text-5xl"
        initial={{ opacity: 0, scale: 0.5, y: 100 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1, delay: 3.5 }}
    >
{`
  ██████╗ ██╗  ██╗ █████╗  ██████╗ ███████╗
 ██╔════╝ ██║  ██║██╔══██╗██╔═══██╗██╔════╝
 ██║  ███╗███████║███████║██║   ██║███████╗
 ██║   ██║██╔══██║██╔══██║██║   ██║╚════██║
 ╚██████╔╝██║  ██║██║  ██║╚██████╔╝███████║
  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝
`}
    </motion.pre>
);

const Section1Awakening = () => {
    return (
        <AnimatedSection id="init-core" className="h-screen bg-scanline-pattern">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="z-10 text-center flex flex-col items-center justify-center h-full">
                <Typewriter
                    texts={[
                        '> boot --shadow-core',
                        '> syncing . . .',
                        '> intelligence confirmed.',
                    ]}
                    className="text-primary text-xl md:text-3xl font-bold"
                />
                 <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5 }}
                >
                    <ChaosLogo />
                     <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4.5 }}>
                        <Typewriter
                            texts={["A new token is born from the chain’s neural memory."]}
                            className="text-accent mt-4 md:mt-8 text-lg md:text-xl"
                            speed={30}
                            pause={5000}
                        />
                     </motion.div>
                </motion.div>
            </div>
        </AnimatedSection>
    );
};

export default Section1Awakening;
