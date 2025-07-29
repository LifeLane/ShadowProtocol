
"use client"

import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { motion } from "framer-motion";
import { AtSign, KeyRound, Send, AlertTriangle, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const claimSchema = z.object({
  telegram: z.string().startsWith("@", { message: "Must start with @" }).min(2, "Handle too short"),
  wallet: z.string().regex(/^[1-9A-HJ-NP-Za-km-z]{32,44}$/, { message: "Invalid Solana wallet address" }),
  email: z.string().email({ message: "Invalid email address" }),
});

type ClaimFormData = z.infer<typeof claimSchema>;

const VerificationCube = () => (
    <div className="w-24 h-24 scene">
        <motion.div
            className="cube"
            animate={{ rotateX: 360, rotateY: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
        </motion.div>
    </div>
);

const Section5ClaimKey = () => {
    const [status, setStatus] = useState("idle"); 
    const { toast } = useToast();

    const { register, handleSubmit, formState: { errors, isValid, touchedFields } } = useForm<ClaimFormData>({
      resolver: zodResolver(claimSchema),
      mode: "onChange",
    });

    const onSubmit = (data: ClaimFormData) => {
        setStatus("pending");
        console.log("Claim data:", data);
        toast({
          title: "Transmission Sent",
          description: "Connecting to neural core for verification...",
        })
        setTimeout(() => {
            setStatus("success");
            toast({
              title: "Connection Verified",
              description: "Your Neural Key is reserved. Stand by for further instructions.",
            })
        }, 2000);
    };

    const getFieldState = (field: keyof ClaimFormData) => {
      if (errors[field]) return "error";
      if (touchedFields[field]) return "success";
      return "idle";
    }

    return (
        <AnimatedSection id="claim-key" className="bg-matrix-drift-pattern">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full max-w-6xl">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center scale-75 sm:scale-90 md:scale-100">
                    <VerificationCube />
                    <p className="text-accent glow-accent text-2xl sm:text-3xl md:text-5xl font-bold mt-8 text-center transition-colors hover:text-primary">Claim Your Neural Key</p>
                    <p className="text-muted-foreground mt-4 text-center text-base sm:text-lg md:text-xl">Only 1,000 addresses will qualify for the Genesis Offering.</p>
                </div>
                <div className="w-full md:w-1/2">
                    <Terminal title="GENESIS_CLAIM.sh" className="animate-border-glow">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="telegram" className="text-primary/80 text-base">Telegram Handle</Label>
                                <div className="relative">
                                    <Send className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                                    <Input 
                                      id="telegram" 
                                      placeholder="@username" 
                                      {...register("telegram")} 
                                      className={cn(
                                        "pl-10 bg-black/30 border-primary/30 h-12",
                                        getFieldState('telegram') === 'success' && 'border-green-500 ring-green-500',
                                        getFieldState('telegram') === 'error' && 'border-destructive ring-destructive'
                                      )}
                                    />
                                    {getFieldState('telegram') === 'success' && <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />}
                                    {getFieldState('telegram') === 'error' && <AlertTriangle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-destructive" />}
                                </div>
                                {errors.telegram && <p className="text-destructive text-xs pt-1">{errors.telegram.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="wallet" className="text-primary/80 text-base">Wallet Address</Label>
                                <div className="relative">
                                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                                    <Input 
                                      id="wallet" 
                                      placeholder="Solana Wallet Address" 
                                      {...register("wallet")} 
                                      className={cn(
                                        "pl-10 bg-black/30 border-primary/30 h-12",
                                        getFieldState('wallet') === 'success' && 'border-green-500 ring-green-500',
                                        getFieldState('wallet') === 'error' && 'border-destructive ring-destructive'
                                      )}
                                    />
                                     {getFieldState('wallet') === 'success' && <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />}
                                    {getFieldState('wallet') === 'error' && <AlertTriangle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-destructive" />}
                                </div>
                                 {errors.wallet && <p className="text-destructive text-xs pt-1">{errors.wallet.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-primary/80 text-base">Email Address</Label>
                                <div className="relative">
                                    <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                                    <Input 
                                      id="email" 
                                      type="email" 
                                      placeholder="agent@protocol.xyz" 
                                      {...register("email")}
                                      className={cn(
                                        "pl-10 bg-black/30 border-primary/30 h-12",
                                        getFieldState('email') === 'success' && 'border-green-500 ring-green-500',
                                        getFieldState('email') === 'error' && 'border-destructive ring-destructive'
                                      )}
                                    />
                                    {getFieldState('email') === 'success' && <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />}
                                    {getFieldState('email') === 'error' && <AlertTriangle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-destructive" />}
                                </div>
                                {errors.email && <p className="text-destructive text-xs pt-1">{errors.email.message}</p>}
                            </div>
                            <Button type="submit" size="lg" className="w-full text-base btn-shine glow" disabled={!isValid || status === 'pending' || status === 'success'}>
                                {status === 'idle' && '-> claim --neural-key'}
                                {status === 'pending' && '> rank: pending...'}
                                {status === 'success' && ':: neural key reserved.'}
                            </Button>
                        </form>
                    </Terminal>
                </div>
            </div>
             <style jsx>{`
                .scene { perspective: 400px; }
                .cube { width: 100%; height: 100%; position: relative; transform-style: preserve-3d; }
                .face { position: absolute; width: 96px; height: 96px; border: 2px solid hsl(var(--primary)); background: hsl(var(--primary) / 0.1); }
                .front { transform: rotateY(0deg) translateZ(48px); }
                .back { transform: rotateY(180deg) translateZ(48px); }
                .right { transform: rotateY(90deg) translateZ(48px); }
                .left { transform: rotateY(-90deg) translateZ(48px); }
                .top { transform: rotateX(90deg) translateZ(48px); }
                .bottom { transform: rotateX(-90deg) translateZ(48px); }
            `}</style>
        </AnimatedSection>
    );
};

export default Section5ClaimKey;
