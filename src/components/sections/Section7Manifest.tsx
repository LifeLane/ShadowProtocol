"use client"

import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import Typewriter from "@/components/common/Typewriter";

const Section7Manifest = () => {
  return (
    <AnimatedSection id="manifest" className="bg-core-pattern">
        <Terminal title="MANIFEST.md" className="z-10 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-primary glow mb-6 text-center">The Shadow Manifest</h2>
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
                    className="text-base md:text-lg"
                />
            </div>
        </Terminal>
    </AnimatedSection>
  );
};

export default Section7Manifest;
