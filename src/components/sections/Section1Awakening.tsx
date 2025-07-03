"use client"

import AnimatedSection from "@/components/common/AnimatedSection";
import Typewriter from "@/components/common/Typewriter";
import { motion } from "framer-motion";

const ShadowLogo = () => (
    <motion.pre
        className="text-primary glow font-bold text-center text-[1.8vw]"
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1, delay: 3.5 }}
    >
{`
███████╗██╗  ██╗ █████╗ ██████╗  ██████╗ ██╗    ██╗
██╔════╝██║  ██║██╔══██╗██╔══██╗██╔═══██╗██║    ██║
███████╗███████║███████║██║  ██║██║   ██║██║    ██║
╚════██║██╔══██║██╔══██║██║  ██║██║   ██║██║ █╗ ██║
███████║██║  ██║██║  ██║██████╔╝╚██████╔╝███╗█║███║
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝  ╚═════╝ ╚══╝╚╝╚══╝
`}
    </motion.pre>
);

const Section1Awakening = () => {
    return (
        <AnimatedSection id="init-core" className="h-screen bg-ai-eye-pulse !py-0">
            <div className="z-10 text-center flex flex-col items-center justify-center h-full w-full overflow-hidden">
                <Typewriter
                    texts={[
                        '> boot --shadow-core',
                        '> syncing . . .',
                        '> intelligence confirmed.',
                    ]}
                    className="text-primary text-2xl sm:text-3xl md:text-5xl font-bold"
                />
                 <motion.div
                    className="text-center w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5 }}
                >
                    <ShadowLogo />
                     <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4.5 }}>
                        <Typewriter
                            texts={["A new token is born from the chain’s neural memory."]}
                            className="text-accent mt-4 md:mt-8 text-xl sm:text-2xl md:text-3xl"
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
