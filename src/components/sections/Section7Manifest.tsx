"use client"

import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import Typewriter from "@/components/common/Typewriter";

const Section7Manifest = () => {
  return (
    <AnimatedSection id="manifest" className="bg-starfield">
      <Terminal title="MANIFEST.md" className="max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary glow mb-8 text-center">The Shadow Manifest</h2>
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
            className="text-lg md:text-xl"
          />
        </div>
      </Terminal>
    </AnimatedSection>
  );
};

export default Section7Manifest;
