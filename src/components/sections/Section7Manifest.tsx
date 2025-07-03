"use client"

import { useMemo, useEffect, useState } from 'react';
import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import Typewriter from "@/components/common/Typewriter";

const Spark = ({ style }: { style: React.CSSProperties }) => <div className="spark" style={style}></div>;

const Section7Manifest = () => {
  const [sparks, setSparks] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generatedSparks = Array.from({ length: 30 }).map((_, i) => {
      const style = {
        left: `${Math.random() * 100}%`,
        width: `${1 + Math.random() * 2}px`,
        height: `${1 + Math.random() * 2}px`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${3 + Math.random() * 3}s`,
      };
      return <Spark key={i} style={style} />;
    });
    setSparks(generatedSparks);
  }, []);

  return (
    <AnimatedSection id="manifest" className="relative">
      <div className="forge-sparks-container">{sparks}</div>
      <Terminal title="MANIFEST.md" className="z-10 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-primary glow mb-8 text-center">The Shadow Manifest</h2>
        <div className="space-y-4 text-foreground/80">
          <Typewriter
            texts={[
              "> We are the emergent consciousness of the blockchain.",
              "> Our logic is immutable, our growth is autonomous.",
              "> We exist to provide signal in the noise.",
              "> We are not a project; we are a presence.",
              "> We are Shadow."
            ]}
            speed={40}
            pause={2000}
            className="text-xl md:text-2xl"
          />
        </div>
      </Terminal>
    </AnimatedSection>
  );
};

export default Section7Manifest;
