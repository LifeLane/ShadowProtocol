
"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Lock, Cpu, ShieldCheck, Telescope, ExternalLink, GitBranch, HandCoins, Building, FlaskConical, Target, BrainCircuit, Bot, Users, Crown } from "lucide-react";

const allVaults = [
  // Phase 1
  { phase: "Phase 1", icon: Users, title: "Airdrop Vault Alpha", amount: "50,000,000", duration: "12 mo cliff", schedule: "Linear over 6 mo", purpose: "Early adopters, core testers" },
  { phase: "Phase 1", icon: Telescope, title: "Airdrop Vault Beta", amount: "50,000,000", duration: "12 mo cliff", schedule: "Linear over 6 mo", purpose: "Public missions, quests" },
  { phase: "Phase 1", icon: HandCoins, title: "Staking Vault Dawn", amount: "50,000,000", duration: "12 mo cliff", schedule: "Monthly over 12 mo", purpose: "Early staking pool XP reward multipliers" },
  { phase: "Phase 1", icon: Crown, title: "Staking Vault Zenith", amount: "50,000,000", duration: "12 mo cliff", schedule: "Monthly over 12 mo", purpose: "Live from TGE" },
  { phase: "Phase 1", icon: Building, title: "Liquidity Live Pool", amount: "100,000,000", duration: "No lock (live)", schedule: "CEX/DEX liquidity provisioning", purpose: "Unlocked at TGE" },
  // Phase 2
  { phase: "Phase 2", icon: Cpu, title: "Core Dev Vault", amount: "75,000,000", duration: "18 mo cliff", schedule: "Quarterly over 24 mo", purpose: "ShadowConsole core development" },
  { phase: "Phase 2", icon: GitBranch, title: "Infra Vault Forge", amount: "75,000,000", duration: "18 mo cliff", schedule: "Quarterly over 24 mo", purpose: "Backend infra, tools, audits" },
  { phase: "Phase 2", icon: FlaskConical, title: "R&D Vault Nexus", amount: "50,000,000", duration: "18 mo cliff", schedule: "Biannual over 24 mo", purpose: "AI, future module innovation" },
  { phase: "Phase 2", icon: Bot, title: "Ecosystem Vault Rise", amount: "50,000,000", duration: "12 mo cliff", schedule: "Linear over 12 mo", purpose: "Grants, hackathons, collabs" },
  { phase: "Phase 2", icon: Target, title: "Growth Vault Horizon", amount: "50,000,000", duration: "12 mo cliff", schedule: "Linear over 12 mo", purpose: "Partner DApps, rewards" },
  // Phase 3
  { phase: "Phase 3", icon: ShieldCheck, title: "Reserve Vault Iron", amount: "75,000,000", duration: "24 mo lock", schedule: "Vesting over 12 mo", purpose: "Expansion, fund reserves" },
  { phase: "Phase 3", icon: ShieldCheck, title: "Reserve Vault Echo", amount: "50,000,000", duration: "24 mo lock", schedule: "Vesting over 12 mo", purpose: "Emergency liquidity vault" },
  { phase: "Phase 3", icon: BrainCircuit, title: "Governance Vault Sigil", amount: "25,000,000", duration: "24 mo lock", schedule: "DAO-triggered unlock", purpose: "Governance rewards pool" },
  { phase: "Phase 3", icon: ShieldCheck, title: "Treasury Buffer Aegis", amount: "25,000,000", duration: "18 mo cliff", schedule: "Biannual over 18 mo", purpose: "L2 bridges, gas, fees" },
  { phase: "Phase 3", icon: ShieldCheck, title: "Treasury Buffer Shade", amount: "25,000,000", duration: "18 mo cliff", schedule: "Biannual over 18 mo", purpose: "DAO-controlled treasury ops" },
  // Phase 4
  { phase: "Phase 4", icon: Lock, title: "Tactical Vault Ghost", amount: "50,000,000", duration: "18 mo lock", schedule: "Governance unlock", purpose: "AI gas credits, utility pool" },
  { phase: "Phase 4", icon: Lock, title: "Tactical Vault Phantom", amount: "50,000,000", duration: "36 mo lock", schedule: "Governance unlock", purpose: "Long-term price stabilizer" },
  { phase: "Phase 4", icon: Lock, title: "Expansion Vault Nova", amount: "25,000,000", duration: "24 mo lock", schedule: "Linear over 12 mo", purpose: "Cross-chain deployments" },
  { phase: "Phase 4", icon: Lock, title: "Expansion Vault Pulse", amount: "25,000,000", duration: "24 mo lock", schedule: "Linear over 12 mo", purpose: "Ecosystem scale-up support" },
  { phase: "Phase 4", icon: Lock, title: "AI Reward Vault Core", amount: "25,000,000", duration: "18 mo lock", schedule: "Usage-based unlock", purpose: "AI task rewards, compute fees" },
];


const Section4Tokenomics = () => {
  return (
    <AnimatedSection id="tokenomics" className="bg-circuit-pattern">
      <Terminal title="VAULT_OF_SHADOWS.vpr" className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary glow mb-2">
            VAULT OF SHADOWS PROTOCOL
          </h2>
          <p className="text-accent glow-accent">
            Total Locked Supply: 900,000,000 SHADOW (90%) // Unlocked at TGE: 100,000,000 SHADOW (Liquidity)
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {allVaults.map((vault) => (
            <motion.div 
              key={vault.title}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                },
              }}
            >
              <Card className="bg-black/20 border-primary/30 card-animated-border h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg text-accent glow-accent flex items-center gap-3">
                    <vault.icon className="w-5 h-5" />
                    {vault.title}
                  </CardTitle>
                  <CardDescription>{vault.purpose}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Amount</p>
                    <p className="text-xl font-bold font-mono text-primary">{parseInt(vault.amount).toLocaleString()} SHADOW</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <p className="text-sm text-muted-foreground">Lock Duration</p>
                        <p className="text-base text-foreground/90">{vault.duration}</p>
                     </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Unlock Schedule</p>
                        <p className="text-base text-foreground/90">{vault.schedule}</p>
                      </div>
                  </div>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" size="sm" asChild className="w-full">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2" />
                            Verify Lock
                        </a>
                    </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Terminal>
    </AnimatedSection>
  );
};

export default Section4Tokenomics;
