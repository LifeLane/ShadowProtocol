
"use client"

import { Send } from 'lucide-react';
import Link from 'next/link';
import { 
    SolscanIcon,
    BubblemapsIcon,
    GeckoTerminalIcon,
    DexScreenerIcon,
    RugCheckIcon,
    PhotonIcon,
    DexToolsIcon,
    BirdeyeIcon 
} from './PlatformIcons';

const links = [
    { href: "https://gmgn.ai/sol/token/solscan_B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", icon: SolscanIcon, name: "Solscan" },
    { href: "https://app.bubblemaps.io/sol/token/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", icon: BubblemapsIcon, name: "Bubblemaps" },
    { href: "https://t.me/BlumCryptoTradingBot?start=ia0HoVfVWL_T_B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", icon: Send, name: "Telegram" },
    { href: "https://www.geckoterminal.com/solana/tokens/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", icon: GeckoTerminalIcon, name: "GeckoTerminal" },
    { href: "https://dexscreener.com/solana/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", icon: DexScreenerIcon, name: "DexScreener" },
    { href: "https://rugcheck.xyz/tokens/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", icon: RugCheckIcon, name: "RugCheck" },
    { href: "https://photon-sol.tinyastro.io/en/r/solscanofficial/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", icon: PhotonIcon, name: "Photon" },
    { href: "https://www.dextools.io/app/en/solana/pair-explorer/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", icon: DexToolsIcon, name: "DEXTools" },
    { href: "https://birdeye.so/token/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR?chain=solana", icon: BirdeyeIcon, name: "Birdeye" }
];

const LinkMarquee = () => {
    return (
        <div className="relative w-full overflow-hidden bg-background/50 py-4 border-y border-primary/20 backdrop-blur-sm">
            <div className="flex animate-marquee-infinite">
                {links.concat(links).map((link, index) => (
                    <Link href={link.href} key={index} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 mx-6 flex-shrink-0 text-muted-foreground hover:text-primary transition-colors duration-300">
                        <link.icon className="w-6 h-6" />
                        <span className="font-bold text-lg">{link.name}</span>
                    </Link>
                ))}
            </div>
            <style jsx>{`
                @keyframes marquee-infinite {
                    from { transform: translateX(0%); }
                    to { transform: translateX(-50%); }
                }
                .animate-marquee-infinite {
                    animation: marquee-infinite 30s linear infinite;
                    will-change: transform;
                    display: flex;
                    width: max-content;
                }
            `}</style>
        </div>
    );
};

export default LinkMarquee;
