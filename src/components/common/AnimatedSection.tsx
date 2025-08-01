"use client"

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AnimatedSectionProps = {
  children: ReactNode;
  id: string;
  className?: string;
  animationClassName?: string;
};

const AnimatedSection = ({ children, id, className = '', animationClassName = '' }: AnimatedSectionProps) => {
  return (
    <motion.section
      id={id}
      className={cn("w-full flex items-center justify-center px-4 sm:px-8 py-16 lg:py-24", className, animationClassName)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center justify-center">
        {children}
      </div>
    </motion.section>
  );
};

export default AnimatedSection;
