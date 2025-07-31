
"use client"

import { useEffect, useState } from "react";
import { useScroll, useSpring } from "framer-motion";
import Section1Awakening from "@/components/sections/Section1Awakening";
import SectionAISignal from "@/components/sections/SectionAISignal";
import Section2Proof from "@/components/sections/Section2Proof";
import Section3Utility from "@/components/sections/Section3Utility";
import Section4BurnServe from "@/components/sections/Section4BurnServe";
import Section5VaultProof from "@/components/sections/Section5VaultProof";
import Section6Roadmap from "@/components/sections/Section6Roadmap";
import Section7Claim from "@/components/sections/Section7Claim";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import LinkMarquee from "@/components/common/LinkMarquee";
import ScrollToTopButton from "@/components/common/ScrollToTopButton";
import TrustMarquee from "@/components/common/TrustMarquee";

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
      <div className="sticky top-0 z-50">
        <TrustMarquee />
      </div>
      <Header scaleX={scaleX} />
      <main className="flex flex-col items-center text-foreground/80">
        <Section1Awakening />
        <SectionAISignal />
        <Section2Proof />
        <Section3Utility />
        <Section4BurnServe />
        <Section5VaultProof />
        <Section6Roadmap />
        <Section7Claim />
      </main>
      <div className="sticky bottom-0 z-30">
        <LinkMarquee />
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
