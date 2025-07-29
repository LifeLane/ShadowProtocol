
"use client"

import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { Button } from "@/components/ui/button";
import { Eye, Skull, Plug, Gift, CheckCircle, AlertTriangle } from "lucide-react";
import { useEffect, useState } from 'react';

const ForgeSparks = () => {
  useEffect(() => {
    const container = document.querySelector('.forge-sparks-container');
    if (!container) return;

    const createSpark = () => {
      const spark = document.createElement('div');
      spark.className = 'spark';
      spark.style.left = `${Math.random() * 100}%`;
      spark.style.width = `${Math.random() * 3 + 1}px`;
      spark.style.height = `${Math.random() * 3 + 1}px`;
      spark.style.animationDuration = `${Math.random() * 3 + 2}s`;
      spark.style.animationDelay = `${Math.random() * 2}s`;
      container.appendChild(spark);

      setTimeout(() => {
        spark.remove();
      }, 5000); // Corresponds to animation duration
    };

    const intervalId = setInterval(createSpark, 100);

    return () => clearInterval(intervalId);
  }, []);

  return <div className="forge-sparks-container" />;
};


const Section8Airdrop = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleConnectWallet = async () => {
    setError(null);
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (err) {
        if (err instanceof Error) {
            setError("User rejected connection request.");
        } else {
            setError("An unknown error occurred.");
        }
        console.error(err);
      }
    } else {
      setError("MetaMask is not installed. Please install it to connect.");
    }
  };


  return (
    <AnimatedSection id="airdrop" className="relative">
       <ForgeSparks />
      <div className="text-center mb-12 md:mb-16 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-accent glow-accent">
            CONNECT &amp; CLAIM BEFORE IT CLOSES
          </h2>
      </div>
      <Terminal title="UPLINK.sh" className="max-w-4xl animate-border-glow relative z-10">
        <div className="flex flex-col items-center justify-center text-center p-6 space-y-8">
            <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 text-lg md:text-2xl font-bold text-destructive">
                    <Skull className="w-6 h-6 md:w-8 md:h-8" />
                    <p>The Genesis Airdrop Window is Closing Fast.</p>
                </div>
                <div className="flex items-center justify-center gap-3 text-lg md:text-2xl font-bold text-primary">
                    <Eye className="w-6 h-6 md:w-8 md:h-8" />
                    <p>Limited to first 10,000 qualified addresses.</p>
                </div>
            </div>
             {account ? (
                <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-3 text-lg md:text-xl font-bold text-primary">
                        <CheckCircle className="w-6 h-6 md:w-8 md:h-8" />
                        <p>Wallet Connected: {`${account.substring(0, 6)}...${account.substring(account.length - 4)}`}</p>
                    </div>
                    <Button size="lg" variant="outline" className="glow w-full sm:w-auto">
                        <Gift className="mr-2" />
                        Begin My Upload
                    </Button>
                </div>
            ) : (
                <div className="flex flex-col items-center gap-4 w-full">
                    <Button size="lg" className="btn-shine glow w-full sm:w-auto max-w-xs" onClick={handleConnectWallet}>
                        <Plug className="mr-2" />
                        Connect Wallet
                    </Button>
                    {error && (
                         <div className="flex items-center justify-center gap-2 text-sm font-bold text-destructive mt-2">
                            <AlertTriangle className="w-4 h-4" />
                            <p>{error}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
      </Terminal>
    </AnimatedSection>
  );
};

export default Section8Airdrop;
