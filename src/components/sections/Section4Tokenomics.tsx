"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const tokenomicsData = [
  {
    utility: "🌍 Community & Ecosystem",
    allocation: "35%",
    description: "DApp funding, protocol growth, dev grants",
  },
  {
    utility: "🎁 Genesis Airdrop (Limited)",
    allocation: "20%",
    description: "ONLY active wallets. No bots. No freeloaders",
  },
  {
    utility: "🔒 Staking Rewards (Loyalty Locked)",
    allocation: "20%",
    description: "Earn. Upgrade. Access protocol privileges",
  },
  {
    utility: "🧠 Core Team & Advisors",
    allocation: "10%",
    description: "Built by shadow architects & AI ops experts",
  },
  {
    utility: "💰 Treasury Reserve",
    allocation: "5%",
    description: "Emergency, buyback, market stabilizer",
  },
  {
    utility: "🌐 Multichain Liquidity",
    allocation: "10%",
    description: "Solana, Ethereum, TON, USDT/USDC pairs",
  },
];

const Section4Tokenomics = () => {
  return (
    <AnimatedSection id="tokenomics" className="bg-circuit-pattern">
      <Terminal title="TOKENOMICS.log" className="w-full max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary glow mb-2">🔥 TOKENOMICS THAT BURN LIKE CODE</h2>
        </div>
        <div className="overflow-x-auto">
          <Table className="font-code">
            <TableHeader>
              <TableRow>
                <TableHead className="text-primary">Utility</TableHead>
                <TableHead className="text-primary text-center">Allocation</TableHead>
                <TableHead className="text-primary">Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tokenomicsData.map((item) => (
                <TableRow key={item.utility}>
                  <TableCell className="font-semibold">{item.utility}</TableCell>
                  <TableCell className="text-center font-bold text-accent">{item.allocation}</TableCell>
                  <TableCell className="text-muted-foreground">{item.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Terminal>
    </AnimatedSection>
  );
};

export default Section4Tokenomics;
