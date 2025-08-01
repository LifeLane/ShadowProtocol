
"use client"

import { useEffect, useState } from "react";
import { useScroll, useSpring } from "framer-motion";
import Section1Awakening from "@/components/sections/Section1Awakening";
import SectionAISignal from "@/components/sections/SectionAISignal";
import Section2Proof from "@/components/sections/Section2Proof";
import Section3Utility from "@/components/sections/Section3Utility";
import Section4Tokenomics from "@/components/sections/Section4Tokenomics";
import Section5VaultProof from "@/components/sections/Section5VaultProof";
import Section6Roadmap from "@/components/sections/Section6Roadmap";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ScrollToTopButton from "@/components/common/ScrollToTopButton";
import StickyFooterMarquee from "@/components/common/StickyFooterMarquee";
import TokenManifest from "@/components/sections/TokenManifest";
import SectionClaimKey from "@/components/sections/SectionClaimKey";
import SectionTrustBanner from "@/components/common/SectionTrustBanner";

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
        <div className="text-primary glow text-lg md:text-xl font-bold animate-pulse">
          &gt; boot --shadow-core
        </div>
      </div>
    );
  }

  return (
    <>
      <Header scaleX={scaleX} />
      <main className="flex flex-col items-center text-foreground/80">
        <SectionTrustBanner/>
        <Section1Awakening />
        <TokenManifest />
        <SectionAISignal />
        <Section2Proof />
        <Section3Utility />
        <Section4Tokenomics />
        <Section5VaultProof />
        <Section6Roadmap />
        <SectionClaimKey />
      </main>
      <Footer />
      <StickyFooterMarquee />
      <ScrollToTopButton />
    </>
  );
}
