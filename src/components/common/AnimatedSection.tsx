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
      className={`w-full min-h-screen flex flex-col items-center justify-center p-8 lg:p-16 relative overflow-hidden ${className}`}
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
