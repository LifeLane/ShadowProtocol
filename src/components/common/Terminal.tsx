"use client"

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from "@/lib/utils";

type TerminalProps = {
  children: ReactNode;
  title?: string;
  className?: string;
};

const Terminal = ({ children, title, className = '' }: TerminalProps) => {
  return (
    <motion.div
      className={cn("bg-black/30 border border-primary/20 rounded-lg shadow-lg backdrop-blur-sm w-full max-w-4xl", className)}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gray-900/50 rounded-t-lg px-4 py-2 border-b border-primary/20 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        {title && <p className="text-center text-sm text-muted-foreground flex-grow">{title}</p>}
      </div>
      <div className="p-4 md:p-6 font-code text-sm md:text-base">
        {children}
      </div>
    </motion.div>
  );
};

export default Terminal;
