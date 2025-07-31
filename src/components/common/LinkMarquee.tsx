
"use client"

import Link from 'next/link';
import { LinkIcon, Send, Terminal, Search, Eye, ShieldCheck, Zap, BarChart2, GitFork } from 'lucide-react';

const links = [
    { href: "https://gmgn.ai/sol/token/solscan_B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", name: "Solscan", icon: Search },
    { href: "https://app.bubblemaps.io/sol/token/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", name: "Bubblemaps", icon: GitFork },
    { href: "https://t.me/BlumCryptoTradingBot?start=ia0HoVfVWL_T_B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", name: "Telegram", icon: Send },
    { href: "https://www.geckoterminal.com/solana/tokens/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", name: "GeckoTerminal", icon: Terminal },
    { href: "https://dexscreener.com/solana/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", name: "DexScreener", icon: BarChart2 },
    { href: "https://rugcheck.xyz/tokens/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", name: "RugCheck", icon: ShieldCheck },
    { href: "https://photon-sol.tinyastro.io/en/r/solscanofficial/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", name: "Photon", icon: Zap },
    { href: "https://www.dextools.io/app/en/solana/pair-explorer/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", name: "DEXTools", icon: LinkIcon },
    { href: "https://birdeye.so/token/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR?chain=solana", name: "Birdeye", icon: Eye }
];

const LinkMarquee = () => {
    return (
        <div className="w-full overflow-hidden bg-secondary/50 backdrop-blur-sm border-t border-b border-secondary/20">
            <div className="py-2">
                <div className="flex animate-marquee-infinite">
                    {links.concat(links).map((link, index) => (
                        <Link href={link.href} key={`top-${index}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 mx-6 flex-shrink-0 text-muted-foreground hover:text-primary transition-colors duration-300">
                            <link.icon className="w-4 h-4" />
                            <span className="font-bold text-sm">{link.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="py-2 border-t border-secondary/20">
                <div className="flex animate-marquee-infinite-reverse">
                    {links.concat(links).map((link, index) => (
                        <Link href={link.href} key={`bottom-${index}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 mx-6 flex-shrink-0 text-muted-foreground hover:text-primary transition-colors duration-300">
                            <link.icon className="w-4 h-4" />
                            <span className="font-bold text-sm">{link.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
            <style jsx>{`
                @keyframes marquee-infinite {
                    from { transform: translateX(0%); }
                    to { transform: translateX(-50%); }
                }
                @keyframes marquee-infinite-reverse {
                    from { transform: translateX(-50%); }
                    to { transform: translateX(0%); }
                }
                .animate-marquee-infinite {
                    animation: marquee-infinite 40s linear infinite;
                    will-change: transform;
                    display: flex;
                    width: max-content;
                }
                .animate-marquee-infinite-reverse {
                    animation: marquee-infinite-reverse 40s linear infinite;
                    will-change: transform;
                    display: flex;
                    width: max-content;
                }
            `}</style>
        </div>
    );
};

export default LinkMarquee;
