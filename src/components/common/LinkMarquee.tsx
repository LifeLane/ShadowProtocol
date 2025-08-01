
"use client"

import Link from 'next/link';
import { LinkIcon, Send, Terminal, Search, Eye, ShieldCheck, Zap, BarChart2, GitFork, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const links = [
    { href: "https://solscan.io/token/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", name: "Solscan", icon: Search },
    { href: "https://gmgn.ai/sol/token/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", name: "GMGN", icon: GitFork },
    { href: "https://dex.coinmarketcap.com/token/solana/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR/", name: "CoinMarketCap", icon: TrendingUp },
    { href: "#", name: "Telegram", icon: Send },
    { href: "https://www.geckoterminal.com/solana/tokens/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", name: "GeckoTerminal", icon: Terminal },
    { href: "https://dexscreener.com/solana/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", name: "DexScreener", icon: BarChart2 },
    { href: "https://rugcheck.xyz/tokens/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", name: "RugCheck", icon: ShieldCheck },
    { href: "https://photon-sol.tinyastro.io/en/r/solscanofficial/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", name: "Photon", icon: Zap },
    { href: "https://www.dextools.io/app/en/solana/pair-explorer/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", name: "DEXTools", icon: LinkIcon },
    { href: "https://birdeye.so/token/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR?chain=solana", name: "Birdeye", icon: Eye }
];


const LinkMarquee = ({ direction = 'normal' }: { direction?: 'normal' | 'reverse' }) => {
    const animationClass = direction === 'reverse' ? 'animate-marquee-reverse' : 'animate-marquee-normal';
    const allLinks = [...links, ...links]; // Duplicate for seamless looping

    return (
        <div className="w-full overflow-hidden bg-secondary py-3 border-b border-t border-primary/20">
            <div className={cn("flex w-max", animationClass)}>
                {allLinks.map((link, index) => (
                    <Link href={link.href} key={`${direction}-${index}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 mx-6 flex-shrink-0 text-muted-foreground hover:text-primary transition-colors duration-300">
                        <link.icon className="w-4 h-4" />
                        <span className="font-bold text-sm">{link.name}</span>
                    </Link>
                ))}
            </div>
            <style jsx>{`
                @keyframes marquee-normal {
                    from { transform: translateX(0%); }
                    to { transform: translateX(-50%); }
                }
                @keyframes marquee-reverse {
                    from { transform: translateX(-50%); }
                    to { transform: translateX(0%); }
                }
                .animate-marquee-normal {
                    animation: marquee-normal 40s linear infinite;
                }
                .animate-marquee-reverse {
                    animation: marquee-reverse 40s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default LinkMarquee;
