"use client"

import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import Typewriter from "@/components/common/Typewriter";

const Section7Manifest = () => {
  return (
    <AnimatedSection id="manifest" className="bg-quantum-flicker-pattern">
      <div className="w-full max-w-6xl relative z-10">
        <Terminal title="MANIFEST.md" className="max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary glow mb-8 text-center transition-colors hover:text-accent">The Shadow Manifest</h2>
          <div className="space-y-4 text-muted-foreground">
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
              className="text-base md:text-lg"
            />
          </div>
        </Terminal>
      </div>
    </AnimatedSection>
  );
};

export default Section7Manifest;
