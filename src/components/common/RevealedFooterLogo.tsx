
"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ShadowLogo from "@/components/common/ShadowLogo";

const ForgeSparks = () => {
    const [sparks, setSparks] = useState<{ id: number; left: string; size: number; delay: number; duration: number }[]>([]);

    useEffect(() => {
        const generateSparks = () => {
            const newSparks = Array.from({ length: 50 }).map((_, i) => ({
                id: i + Date.now(),
                left: `${Math.random() * 100}%`,
                size: Math.random() * 2.5 + 1,
                delay: Math.random() * 7,
                duration: Math.random() * 5 + 3,
            }));
            setSparks(newSparks);
        };

        generateSparks();
        const interval = setInterval(generateSparks, 7000); // Refresh sparks every 7 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="forge-sparks-container">
            {sparks.map(spark => (
                <motion.div
                    key={spark.id}
                    className="spark"
                    style={{
                        left: spark.left,
                        width: `${spark.size}px`,
                        height: `${spark.size}px`,
                        animationDelay: `${spark.delay}s`,
                        animationDuration: `${spark.duration}s`,
                    }}
                />
            ))}
        </div>
    );
};


const RevealedFooterLogo = () => {
    return (
        <section className="sticky bottom-0 left-0 w-full h-[30vh] bg-background flex items-center justify-center -z-10">
            <ForgeSparks />
            <div className="relative z-10 w-full flex items-center justify-center">
                <ShadowLogo />
            </div>
        </section>
    );
};

export default RevealedFooterLogo;
