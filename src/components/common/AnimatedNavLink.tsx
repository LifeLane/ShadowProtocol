"use client"

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

type AnimatedNavLinkProps = {
    href: string;
    children: string;
    icon: LucideIcon;
};

const AnimatedNavLink = ({ href, children, icon: Icon }: AnimatedNavLinkProps) => {
    const text = children.split('');

    return (
        <Link href={href} className="group relative flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-3 py-2">
            <Icon className="w-5 h-5 transition-colors group-hover:text-primary" />
            <span className="relative overflow-hidden">
                {text.map((char, i) => (
                    <motion.span
                        key={i}
                        className="inline-block"
                        initial={{ y: 0 }}
                        whileHover={{ y: -10, color: 'hsl(var(--primary))', transition: { duration: 0.3, delay: i * 0.02 } }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                        {char}
                    </motion.span>
                ))}
            </span>
        </Link>
    );
};

export default AnimatedNavLink;
