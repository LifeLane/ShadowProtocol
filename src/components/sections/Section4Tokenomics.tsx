
"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const tokenomicsData = [
  {
    name: "Community & Ecosystem",
    value: 35,
    color: "bg-primary",
    description: "DApp funding, protocol growth, dev grants"
  },
  {
    name: "Genesis Airdrop (Limited)",
    value: 20,
    color: "bg-primary",
    description: "ONLY active wallets. No bots. No freeloaders"
  },
   {
    name: "Staking Rewards (Loyalty Locked)",
    value: 20,
    color: "bg-primary",
    description: "Earn. Upgrade. Access protocol privileges"
  },
  {
    name: "Core Team & Advisors",
    value: 10,
    color: "bg-muted",
    description: "Built by shadow architects & AI ops experts"
  },
    {
    name: "Treasury Reserve",
    value: 5,
    color: "bg-muted",
    description: "Emergency, buyback, market stabilizer"
  },
  {
    name: "Multichain Liquidity",
    value: 10,
    color: "bg-accent",
    description: "Solana, Ethereum, TON, USDT/USDC pairs"
  },
];

const Section4Tokenomics = () => {
  return (
    <AnimatedSection id="tokenomics" className="bg-circuit-pattern">
      <Terminal title="TOKENOMICS.json" className="w-full max-w-5xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary glow mb-2">
            🔥 TOKENOMICS THAT BURN LIKE CODE
          </h2>
        </div>

        <motion.div
          className="flex w-full h-6 rounded-full overflow-hidden mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {tokenomicsData.map((item, index) => (
            <motion.div
              key={index}
              className={`h-full ${item.color}`}
              style={{ width: `${item.value}%` }}
              initial={{ width: 0 }}
              whileInView={{ width: `${item.value}%` }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
            />
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {tokenomicsData.map((item, index) => (
            <motion.div
              key={item.name}
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold text-foreground/90">{item.name}</p>
                <p className="font-bold text-primary">{item.value}%</p>
              </div>
              <Progress value={item.value} indicatorClassName={item.color} />
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Terminal>
    </AnimatedSection>
  );
};

export default Section4Tokenomics;
