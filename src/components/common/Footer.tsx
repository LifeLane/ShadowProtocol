
"use client"

import { Youtube, Twitter, Send } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const Footer = ({ className }: { className?: string }) => {
    return (
        <footer className={cn("w-full border-t border-primary/20 bg-background py-6 z-20 relative mb-[20vh]", className)}>
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 grid justify-items-center gap-8 text-center">
                 <div className="w-full max-w-md space-y-4">
                    <h3 className="text-xl font-bold text-accent glow-accent">Intercept SHADOW Comms</h3>
                    <p className="text-muted-foreground">Subscribe for classified updates, airdrop intel, and protocol alerts.</p>
                    <form className="flex gap-2">
                        <Input type="email" placeholder="operator@domain.com" className="bg-black/30 border-primary/30" />
                        <Button type="submit" className="btn-shine">Authorize</Button>
                    </form>
                </div>
                <div className='w-full grid justify-items-center gap-4'>
                    <p className="text-muted-foreground text-lg">
                        🕶️ Shadow Protocol. Built in darkness. Designed for eternity.
                    </p>
                    <p className="text-muted-foreground text-sm">
                        © 2025 SHADOW Inc. All rights encrypted.
                    </p>
                    <div className="flex items-center gap-6">
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
            </div>
        </footer>
    );
};

export default Footer;
