
"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, MotionValue } from 'framer-motion';
import { Cpu, Atom, PieChart, GitMerge, Send, Menu, X, Bot, Terminal, Sun, Scroll, Palette, SunSnow, ShieldAlert, Dna, ShoppingCart, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedNavLink from './AnimatedNavLink';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const navItems = [
    { name: 'Signal', href: '#ai-signal', icon: Cpu },
    { name: 'Proof', href: '#proof', icon: ShieldCheck },
    { name: 'Ecosystem', href: '#ecosystem', icon: Atom },
    { name: 'Tokenomics', href: '#tokenomics', icon: PieChart },
    { name: 'Roadmap', href: '#roadmap', icon: GitMerge },
];

const themes = [
  { value: 'theme-cyberpunk', label: 'Cyberpunk', icon: Terminal },
  { value: 'theme-solar-flare', label: 'Solar Flare', icon: Sun },
  { value: 'theme-arcane-codex', label: 'Arcane Codex', icon: Scroll },
  { value: 'theme-neon-noir', label: 'Neon Noir', icon: Palette },
  { value: 'theme-glacial-circuit', label: 'Glacial Circuit', icon: SunSnow },
  { value: 'theme-crimson-cypher', label: 'Crimson Cypher', icon: ShieldAlert },
  { value: 'theme-bio-forge', label: 'Bio-Forge', icon: Dna },
];

type HeaderProps = {
  scaleX: MotionValue<number>;
};

const Header = ({ scaleX }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState('theme-cyberpunk');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const storedTheme = localStorage.getItem('theme') || 'theme-cyberpunk';
        setTheme(storedTheme);
    }, []);

    useEffect(() => {
        if (mounted) {
            document.documentElement.className = '';
            document.documentElement.classList.add(theme);
            if (theme === 'theme-glacial-circuit') {
              document.documentElement.classList.remove('dark');
            } else {
              document.documentElement.classList.add('dark');
            }
        }
    }, [theme, mounted]);
    
    const handleThemeChange = () => {
        const currentIndex = themes.findIndex(t => t.value === theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        const newTheme = themes[nextIndex].value;
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const CurrentThemeIcon = (themes.find(t => t.value === theme) || themes[0]).icon;

    return (
        <>
            <motion.header
                className="sticky top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="flex items-center gap-2 p-2 rounded-lg animate-border-glow">
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
                        {mounted && (
                             <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={handleThemeChange}
                                            className="h-10 w-10 animate-border-glow"
                                            aria-label="Switch Theme"
                                        >
                                            <CurrentThemeIcon className="w-5 h-5" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Switch Theme</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        )}
                         <Button asChild className="hidden sm:inline-flex btn-shine">
                            <Link href="https://link.gmgn.ai/?url=https%3A%2F%2Fgmgn.ai%2Fsol%2Ftoken%2FB6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR&page=TokenDetail&params=%7B%22chainName%22%3A%22sol%22%2C%22address%22%3A%22B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR%22%7D&ref=j40KRTAR&referral=j40KRTAR&chain=sol" target="_blank">
                                <ShoppingCart className="mr-2" />
                                Trade SHADOW
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
                        <Link href="https://link.gmgn.ai/?url=https%3A%2F%2Fgmgn.ai%2Fsol%2Ftoken%2FB6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR&page=TokenDetail&params=%7B%22chainName%22%3A%22sol%22%2C%22address%22%3A%22B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR%22%7D&ref=j40KRTAR&referral=j40KRTAR&chain=sol" target="_blank">
                            <ShoppingCart className="mr-2" />
                            Trade SHADOW
                        </Link>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Header;
