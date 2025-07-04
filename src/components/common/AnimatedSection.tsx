"use client"

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type AnimatedSectionProps = {
  children: ReactNode;
  id: string;
  className?: string;
};

const AnimatedSection = ({ children, id, className = '' }: AnimatedSectionProps) => {
  return (
    <motion.section
      id={id}
      className={`w-full flex flex-col items-center justify-center px-4 sm:px-8 py-16 lg:px-16 lg:py-24 relative overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
