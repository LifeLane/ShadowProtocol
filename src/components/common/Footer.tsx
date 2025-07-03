"use client"

import { Youtube, Twitter, Send, Palette } from 'lucide-react';
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from 'react';

const Footer = () => {
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
             <footer className="w-full border-t border-primary/20 mt-16 py-8">
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

    return (
        <footer className="w-full border-t border-primary/20 mt-16 py-8">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-muted-foreground text-center md:text-left">
                    The future is sentient. &copy; {new Date().getFullYear()} Shadow Protocol.
                </p>
                <div className="flex items-center gap-6">
                     <div className="flex items-center gap-2 text-muted-foreground">
                        <Palette className="w-5 h-5" />
                        <Select onValueChange={setTheme} defaultValue={theme}>
                          <SelectTrigger className="w-[180px] bg-transparent border-primary/20">
                            <SelectValue placeholder="Select Theme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="theme-cyberpunk">Cyberpunk</SelectItem>
                            <SelectItem value="theme-solar-flare">Solar Flare</SelectItem>
                            <SelectItem value="theme-arcane-codex">Arcane Codex</SelectItem>
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
