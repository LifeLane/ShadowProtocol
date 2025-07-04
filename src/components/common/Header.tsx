"use client"

import { useState } from 'react';
import Link from 'next/link';
import { motion, MotionValue } from 'framer-motion';
import { Cpu, Atom, PieChart, GitMerge, Send, Menu, X, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedNavLink from './AnimatedNavLink';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'Signal', href: '#ai-signal', icon: Cpu },
    { name: 'Ecosystem', href: '#ecosystem', icon: Atom },
    { name: 'Tokenomics', href: '#tokenomics', icon: PieChart },
    { name: 'Roadmap', href: '#roadmap', icon: GitMerge },
];

type HeaderProps = {
  scaleX: MotionValue<number>;
};

const Header = ({ scaleX }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <motion.header
                className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="flex items-center gap-2">
                        <Bot className="w-8 h-8 text-primary glow" />
                        <span className="text-xl font-bold text-primary glow hidden sm:inline">SHADOW</span>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-4">
                        {navItems.map((item) => (
                           <AnimatedNavLink key={item.name} href={item.href} icon={item.icon}>
                               {item.name}
                           </AnimatedNavLink>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                         <Button asChild className="hidden sm:inline-flex btn-shine">
                            <Link href="#airdrop">
                                <Send className="mr-2" />
                                Airdrop
                            </Link>
                        </Button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 text-primary"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
                 <motion.div className="h-1 bg-primary origin-left" style={{ scaleX }} />
            </motion.header>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                "fixed inset-0 z-30 bg-background/95 backdrop-blur-xl lg:hidden transition-opacity duration-300",
                isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            )}>
                <div className="container mx-auto flex flex-col items-center justify-center h-full gap-8">
                    <nav className="flex flex-col items-center gap-8">
                        {navItems.map((item) => (
                           <Link key={item.name} href={item.href} className="text-2xl text-foreground hover:text-primary transition-colors flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                               <item.icon className="w-6 h-6" />
                               {item.name}
                           </Link>
                        ))}
                    </nav>
                     <Button asChild size="lg" className="btn-shine" onClick={() => setIsMenuOpen(false)}>
                        <Link href="#airdrop">
                            <Send className="mr-2" />
                            Airdrop Console
                        </Link>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Header;
