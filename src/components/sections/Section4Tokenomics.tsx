
"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const tokenomicsData = [
  {
    name: "Community & Ecosystem",
    value: 40,
    color: "bg-primary",
  },
  {
    name: "Staking Rewards",
    value: 20,
    color: "bg-primary",
  },
  {
    name: "Treasury & Foundation",
    value: 15,
    color: "bg-muted",
  },
  {
    name: "Team & Advisors",
    value: 15,
    color: "bg-primary/80",
  },
  {
    name: "Public Sale & Liquidity",
    value: 10,
    color: "bg-muted",
  },
];

const Section4Tokenomics = () => {
  return (
    <AnimatedSection id="tokenomics" className="bg-circuit-pattern">
      <Terminal title="SHADOW TOKEN ALLOCATION" className="w-full max-w-5xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground/80 mb-2">
            Forged in precision. Controlled by design.
          </h2>
        </div>

        {/* Segmented Master Progress Bar */}
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

        {/* Individual Allocation Bars */}
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
            </motion.div>
          ))}
        </div>
      </Terminal>
    </AnimatedSection>
  );
};

export default Section4Tokenomics;
