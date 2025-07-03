"use client"

import { Youtube, Twitter, Send } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full border-t border-primary/20 mt-16 py-8">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-foreground/70 text-center md:text-left">
                    The future is sentient. &copy; {new Date().getFullYear()} Shadow Protocol.
                </p>
                <div className="flex items-center gap-6">
                    <Link href="#" aria-label="Follow on X" className="text-foreground/70 hover:text-primary transition-colors">
                        <Twitter className="w-6 h-6" />
                    </Link>
                    <Link href="#" aria-label="Join on Telegram" className="text-foreground/70 hover:text-primary transition-colors">
                        <Send className="w-6 h-6" />
                    </Link>
                    <Link href="#" aria-label="Watch on YouTube" className="text-foreground/70 hover:text-primary transition-colors">
                        <Youtube className="w-6 h-6" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
