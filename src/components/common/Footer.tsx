
"use client"

import { Youtube, Twitter, Send, Palette, Terminal, Sun, Scroll } from 'lucide-react';
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const themes = [
  { value: 'theme-cyberpunk', label: 'Cyberpunk', icon: Terminal },
  { value: 'theme-solar-flare', label: 'Solar Flare', icon: Sun },
  { value: 'theme-arcane-codex', label: 'Arcane Codex', icon: Scroll },
];

const Footer = ({ className }: { className?: string }) => {
    const [theme, setTheme] = useState('theme-cyberpunk');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const storedTheme = localStorage.getItem('theme') || 'theme-cyberpunk';
        setTheme(storedTheme);
    }, []);

    useEffect(() => {
        if (mounted) {
            document.documentElement.classList.remove('theme-cyberpunk', 'theme-solar-flare', 'theme-arcane-codex');
            document.documentElement.classList.add(theme);
            localStorage.setItem('theme', theme);
        }
    }, [theme, mounted]);
    
    if (!mounted) {
        return (
             <footer className={cn("w-full border-t border-primary/20 bg-background py-8", className)}>
                <div className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-muted-foreground text-center md:text-left">
                        The future is sentient. &copy; {new Date().getFullYear()} Shadow Protocol.
                    </p>
                    <div className="flex items-center gap-6">
                         <div className="h-11 w-[220px]"></div>
                        <Link href="#" aria-label="Follow on X" className="text-muted-foreground hover:text-primary transition-colors">
                            <Twitter className="w-6 h-6" />
                        </Link>
                        <Link href="#" aria-label="Join on Telegram" className="text-muted-foreground hover:text-primary transition-colors">
                            <Send className="w-6 h-6" />
                        </Link>
                        <Link href="#" aria-label="Watch on YouTube" className="text-muted-foreground hover:text-primary transition-colors">
                            <Youtube className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </footer>
        );
    }
    
    const SelectedIcon = (themes.find(t => t.value === theme) || themes[0]).icon;

    return (
        <footer className={cn("w-full border-t border-primary/20 bg-background py-8", className)}>
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-muted-foreground text-center md:text-left">
                    The future is sentient. &copy; {new Date().getFullYear()} Shadow Protocol.
                </p>
                <div className="flex items-center gap-6">
                     <div className="flex items-center gap-2 text-muted-foreground">
                        <Palette className="w-5 h-5" />
                        <Select onValueChange={setTheme} value={theme}>
                          <SelectTrigger className="w-auto bg-transparent border-primary/20">
                            <SelectedIcon className="w-5 h-5" />
                          </SelectTrigger>
                          <SelectContent>
                            {themes.map((t) => (
                              <SelectItem key={t.value} value={t.value}>
                                <div className="flex items-center gap-2">
                                  <t.icon className="w-5 h-5" />
                                  <span>{t.label}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                    </div>
                    <Link href="#" aria-label="Follow on X" className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="w-6 h-6" />
                    </Link>
                    <Link href="#" aria-label="Join on Telegram" className="text-muted-foreground hover:text-primary transition-colors">
                        <Send className="w-6 h-6" />
                    </Link>
                    <Link href="#" aria-label="Watch on YouTube" className="text-muted-foreground hover:text-primary transition-colors">
                        <Youtube className="w-6 h-6" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
