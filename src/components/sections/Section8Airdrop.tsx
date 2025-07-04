"use client"

import { useEffect, useState } from 'react';
import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AtSign } from "lucide-react";
import Typewriter from '../common/Typewriter';

const Spark = ({ style }: { style: React.CSSProperties }) => <div className="spark" style={style}></div>;

const Section8Airdrop = () => {
  const [status, setStatus] = useState("idle");
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("pending");
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  return (
    <AnimatedSection id="airdrop" className="relative">
      <div className="forge-sparks-container">{sparks}</div>
      <div className="text-center mb-8 md:mb-12">
          <Typewriter
              texts={['> Secure Your Genesis Airdrop']}
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-accent glow-accent"
          />
      </div>
      <Terminal title="AIRDROP_REGISTRATION.sh" className="max-w-2xl animate-border-glow">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email-airdrop" className="text-primary/80 text-base">Email Address</Label>
            <div className="relative">
              <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
              <Input id="email-airdrop" type="email" placeholder="agent@protocol.xyz" className="pl-10 bg-black/30 border-primary/30 h-12" />
            </div>
          </div>
          <Button type="submit" size="lg" className="w-full text-base btn-shine glow" disabled={status === 'pending' || status === 'success'}>
            {status === 'idle' && '-> register --airdrop'}
            {status === 'pending' && '> verifying credentials...'}
            {status === 'success' && ':: registration confirmed.'}
            {status === 'error' && '> Error. Try again.'}
          </Button>
          <p className="text-center text-muted-foreground text-sm">
            Genesis holders receive priority. Your data is secure with the Shadow Core.
          </p>
        </form>
      </Terminal>
    </AnimatedSection>
  );
};

export default Section8Airdrop;
