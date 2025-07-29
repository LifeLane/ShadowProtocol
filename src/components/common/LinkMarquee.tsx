
"use client"

import Link from 'next/link';
import Image from 'next/image';

const links = [
    { href: "https://gmgn.ai/sol/token/solscan_B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", imgSrc: "https://solscan.io/_next/static/media/gmgn.e55ae73f.png", name: "Solscan" },
    { href: "https://app.bubblemaps.io/sol/token/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", imgSrc: "https://solscan.io/_next/static/media/bubblemaps.fa27f170.png", name: "Bubblemaps" },
    { href: "https://t.me/BlumCryptoTradingBot?start=ia0HoVfVWL_T_B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", imgSrc: "https://solscan.io/_next/static/media/blum.1f1f07ca.png", name: "Telegram" },
    { href: "https://www.geckoterminal.com/solana/tokens/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", imgSrc: "https://solscan.io/_next/static/media/geckoterminal.bcf76b35.webp", name: "GeckoTerminal" },
    { href: "https://dexscreener.com/solana/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", imgSrc: "https://solscan.io/_next/static/media/dexscreener.e36090e0.png", name: "DexScreener" },
    { href: "https://rugcheck.xyz/tokens/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", imgSrc: "https://solscan.io/_next/static/media/rugcheck.43bc469c.jpg", name: "RugCheck" },
    { href: "https://photon-sol.tinyastro.io/en/r/solscanofficial/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", imgSrc: "https://solscan.io/_next/static/media/photon.6a796ee9.webp", name: "Photon" },
    { href: "https://www.dextools.io/app/en/solana/pair-explorer/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR", imgSrc: "https://solscan.io/_next/static/media/dexTools.2ba36145.png", name: "DEXTools" },
    { href: "https://birdeye.so/token/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR?chain=solana", imgSrc: "https://solscan.io/_next/static/media/birdeye.092090c8.png", name: "Birdeye" }
];

const LinkMarquee = () => {
    return (
        <div className="relative w-full overflow-hidden bg-background/50 py-2 border-y border-primary/20 backdrop-blur-sm">
            <div className="flex animate-marquee-infinite">
                {links.concat(links).map((link, index) => (
                    <Link href={link.href} key={index} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 mx-6 flex-shrink-0 text-muted-foreground hover:text-primary transition-colors duration-300">
                        <img src={link.imgSrc} alt={`${link.name} logo`} className="w-5 h-5 rounded-full" />
                        <span className="font-bold text-sm">{link.name}</span>
                    </Link>
                ))}
            </div>
            <style jsx>{`
                @keyframes marquee-infinite {
                    from { transform: translateX(0%); }
                    to { transform: translateX(-50%); }
                }
                .animate-marquee-infinite {
                    animation: marquee-infinite 40s linear infinite;
                    will-change: transform;
                    display: flex;
                    width: max-content;
                }
            `}</style>
        </div>
    );
};

export default LinkMarquee;
