
"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Lock, Cpu, ShieldCheck, Telescope, ExternalLink, BarChartHorizontalBig } from "lucide-react";

const vaultPhases = [
  {
    phase: "Phase 1: Genesis Vaults (Bootstrapping)",
    icon: Telescope,
    vaults: [
      { id: 1, title: "Airdrop Vault Alpha", amount: "50,000,000", duration: "12 mo cliff", schedule: "Linear over 6 mo", purpose: "Early adopters, core testers" },
      { id: 2, title: "Airdrop Vault Beta", amount: "50,000,000", duration: "12 mo cliff", schedule: "Linear over 6 mo", purpose: "Public missions, quests" },
      { id: 3, title: "Staking Vault Dawn", amount: "50,000,000", duration: "12 mo cliff", schedule: "Monthly over 12 mo", purpose: "Early staking pool XP reward multipliers" },
      { id: 4, title: "Staking Vault Zenith", amount: "50,000,000", duration: "12 mo cliff", schedule: "Monthly over 12 mo", purpose: "Live from TGE" },
      { id: 5, title: "Liquidity Live Pool", amount: "100,000,000", duration: "No lock (live)", schedule: "CEX/DEX liquidity provisioning", purpose: "Unlocked at TGE" }
    ],
  },
  {
    phase: "Phase 2: DevOps Vaults (Core + Expansion)",
    icon: Cpu,
    vaults: [
      { id: 6, title: "Core Dev Vault", amount: "75,000,000", duration: "18 mo cliff", schedule: "Quarterly over 24 mo", purpose: "ShadowConsole core development" },
      { id: 7, title: "Infra Vault Forge", amount: "75,000,000", duration: "18 mo cliff", schedule: "Quarterly over 24 mo", purpose: "Backend infra, tools, audits" },
      { id: 8, title: "R&D Vault Nexus", amount: "50,000,000", duration: "18 mo cliff", schedule: "Biannual over 24 mo", purpose: "AI, future module innovation" },
      { id: 9, title: "Ecosystem Vault Rise", amount: "50,000,000", duration: "12 mo cliff", schedule: "Linear over 12 mo", purpose: "Grants, hackathons, collabs" },
      { id: 10, title: "Growth Vault Horizon", amount: "50,000,000", duration: "12 mo cliff", schedule: "Linear over 12 mo", purpose: "Partner DApps, rewards" },
    ],
  },
  {
    phase: "Phase 3: Reserve Vaults (Stability & Defense)",
    icon: ShieldCheck,
    vaults: [
        { id: 11, title: "Reserve Vault Iron", amount: "75,000,000", duration: "24 mo lock", schedule: "Vesting over 12 mo", purpose: "Expansion, fund reserves" },
        { id: 12, title: "Reserve Vault Echo", amount: "50,000,000", duration: "24 mo lock", schedule: "Vesting over 12 mo", purpose: "Emergency liquidity vault" },
        { id: 13, title: "Governance Vault Sigil", amount: "25,000,000", duration: "24 mo lock", schedule: "DAO-triggered unlock", purpose: "Governance rewards pool" },
        { id: 14, title: "Treasury Buffer Aegis", amount: "25,000,000", duration: "18 mo cliff", schedule: "Biannual over 18 mo", purpose: "L2 bridges, gas, fees" },
        { id: 15, title: "Treasury Buffer Shade", amount: "25,000,000", duration: "18 mo cliff", schedule: "Biannual over 18 mo", purpose: "DAO-controlled treasury ops" },
    ],
  },
  {
    phase: "Phase 4: Tactical Vaults (Future Power)",
    icon: Lock,
    vaults: [
        { id: 16, title: "Tactical Vault Ghost", amount: "50,000,000", duration: "18 mo lock", schedule: "Governance unlock", purpose: "AI gas credits, utility pool" },
        { id: 17, title: "Tactical Vault Phantom", amount: "50,000,000", duration: "36 mo lock", schedule: "Governance unlock", purpose: "Long-term price stabilizer" },
        { id: 18, title: "Expansion Vault Nova", amount: "25,000,000", duration: "24 mo lock", schedule: "Linear over 12 mo", purpose: "Cross-chain deployments" },
        { id: 19, title: "Expansion Vault Pulse", amount: "25,000,000", duration: "24 mo lock", schedule: "Linear over 12 mo", purpose: "Ecosystem scale-up support" },
        { id: 20, title: "AI Reward Vault Core", amount: "25,000,000", duration: "18 mo lock", schedule: "Usage-based unlock", purpose: "AI task rewards, compute fees" },
    ],
  },
];

const lockSummary = [
    { category: "Airdrop & Staking", locks: 4, total: "200M", percentage: "20%" },
    { category: "Liquidity", locks: 1, total: "100M", percentage: "10%" },
    { category: "Development", locks: 3, total: "200M", percentage: "20%" },
    { category: "Ecosystem Growth", locks: 2, total: "100M", percentage: "10%" },
    { category: "Reserve", locks: 3, total: "150M", percentage: "15%" },
    { category: "Treasury & Governance", locks: 2, total: "50M", percentage: "5%" },
    { category: "Tactical + Expansion", locks: 5, total: "125M", percentage: "12.5%" },
];


const Section4Tokenomics = () => {
  return (
    <AnimatedSection id="tokenomics" className="bg-circuit-pattern">
      <Terminal title="VAULT_OF_SHADOWS.vpr" className="w-full max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary glow mb-2">
            VAULT OF SHADOWS PROTOCOL
          </h2>
          <p className="text-accent glow-accent">
            Total Locked Supply: 900,000,000 SHADOW (90%) // Unlocked at TGE: 100,000,000 SHADOW (Liquidity)
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
          {vaultPhases.map((phase, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border-primary/20">
              <AccordionTrigger className="text-lg sm:text-xl text-primary hover:no-underline">
                <div className="flex items-center gap-3">
                    <phase.icon className="w-5 h-5" />
                    {phase.phase}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead>Vault</TableHead>
                            <TableHead className="text-right">Amount (SHADOW)</TableHead>
                            <TableHead>Lock Duration</TableHead>
                            <TableHead>Unlock Schedule</TableHead>
                            <TableHead>Purpose</TableHead>
                            <TableHead>Verify</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {phase.vaults.map((vault) => (
                            <TableRow key={vault.id} className="text-muted-foreground">
                                <TableCell className="font-medium text-foreground/90">{vault.title}</TableCell>
                                <TableCell className="text-right font-mono">{vault.amount.toLocaleString()}</TableCell>
                                <TableCell>{vault.duration}</TableCell>
                                <TableCell>{vault.schedule}</TableCell>
                                <TableCell>{vault.purpose}</TableCell>
                                <TableCell>
                                    <Button variant="outline" size="sm" asChild>
                                        <a href="#" target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2" />
                                            Verify
                                        </a>
                                    </Button>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 border-t border-dashed border-primary/30 pt-8">
            <h3 className="text-2xl font-bold text-primary glow text-center mb-6 flex items-center justify-center gap-3">
                <BarChartHorizontalBig />
                Lock Summary
            </h3>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Vault Category</TableHead>
                            <TableHead className="text-center"># Locks</TableHead>
                            <TableHead className="text-right">Total SHADOW</TableHead>
                            <TableHead className="text-right">% Total Supply</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {lockSummary.map((item) => (
                            <TableRow key={item.category} className="font-mono text-muted-foreground">
                                <TableCell className="font-semibold text-foreground/90">{item.category}</TableCell>
                                <TableCell className="text-center">{item.locks}</TableCell>
                                <TableCell className="text-right">{item.total}</TableCell>
                                <TableCell className="text-right text-primary font-bold">{item.percentage}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>

      </Terminal>
    </AnimatedSection>
  );
};

export default Section4Tokenomics;
