
"use client"

import Link from 'next/link';
import { LinkIcon, Send, Terminal, Search, Eye, ShieldCheck, Zap, BarChart2, GitFork, TrendingUp } from 'lucide-react';

const links = [
    { href: "https://solscan.io/token/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", name: "Solscan", icon: Search },
    { href: "https://gmgn.ai/sol/token/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", name: "GMGN", icon: GitFork },
    { href: "https://dex.coinmarketcap.com/token/solana/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR/", name: "CoinMarketCap", icon: TrendingUp },
    { href: "#", name: "Telegram", icon: Send },
    { href: "https://www.geckoterminal.com/solana/pools/AY53pXFjCMbFpQ9yTT2s2T61v9a8yY26b1hFME5kZW9r", name: "GeckoTerminal", icon: Terminal },
    { href: "https://dexscreener.com/solana/ay53pxfjcmbfpq9ytt2s2t61v9a8yy26b1hfme5kzw9r", name: "DexScreener", icon: BarChart2 },
    { href: "https://rugcheck.xyz/tokens/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", name: "RugCheck", icon: ShieldCheck },
    { href: "https://photon-sol.tinyastro.io/en/r/solano/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", name: "Photon", icon: Zap },
    { href: "https://www.dextools.io/app/en/solana/pair-explorer/AY53pXFjCMbFpQ9yTT2s2T61v9a8yY26b1hFME5kZW9r", name: "DEXTools", icon: LinkIcon },
    { href: "https://birdeye.so/token/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR?chain=solana", name: "Birdeye", icon: Eye }
];


const LinkMarquee = ({ direction = 'normal' }: { direction?: 'normal' | 'reverse' }) => {
    return (
        <div className="w-full overflow-hidden bg-secondary py-3 border-t border-b border-primary/20">
            <div className={`flex ${direction === 'normal' ? 'animate-marquee-infinite' : 'animate-marquee-infinite-reverse'}`}>
                {links.concat(links).map((link, index) => (
                    <Link href={link.href} key={index} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 mx-6 flex-shrink-0 text-muted-foreground hover:text-primary transition-colors duration-300">
                        <link.icon className="w-4 h-4" />
                        <span className="font-bold text-sm">{link.name}</span>
                    </Link>
                ))}
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
