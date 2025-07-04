"use client"

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Section1Awakening from "@/components/sections/Section1Awakening";
import SectionAISignal from "@/components/sections/SectionAISignal";
import Section2Overview from "@/components/sections/Section2Overview";
import Section3Ecosystem from "@/components/sections/Section3Ecosystem";
import Section4Tokenomics from "@/components/sections/Section4Tokenomics";
import Section5ClaimKey from "@/components/sections/Section5ClaimKey";
import Section6Roadmap from "@/components/sections/Section6Roadmap";
import Section7Manifest from "@/components/sections/Section7Manifest";
import Section8Airdrop from "@/components/sections/Section8Airdrop";
import Footer from "@/components/common/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <div className="text-primary glow text-2xl font-bold animate-pulse">
          &gt; boot --shadow-core
        </div>
      </div>
    );
  }

  return (
    <>
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50" style={{ scaleX }} />
      <div className="flex flex-col items-center text-foreground/80">
        <Section1Awakening />
        <SectionAISignal />
        <Section2Overview />
        <Section3Ecosystem />
        <Section4Tokenomics />
        <Section5ClaimKey />
        <Section6Roadmap />
        <Section7Manifest />
        <Section8Airdrop />
        <Footer />
      </div>
    </>
  );
}
