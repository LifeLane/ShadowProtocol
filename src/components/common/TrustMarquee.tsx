
"use client"

import { Flame, Lock, Bot, Ban, ShieldCheck } from 'lucide-react';

const trustItems = [
    { text: "99% Locked", icon: Lock },
    { text: "Burn or Serve", icon: Flame },
    { text: "SHADOWGPT Free", icon: Bot },
    { text: "0 Mint", icon: Ban },
    { text: "SHADOW Can’t Rug", icon: ShieldCheck },
    { text: "Verified Vaults", icon: Lock },
];

const TrustMarquee = () => {
    return (
        <div className="w-full overflow-hidden bg-destructive/80 py-2 md:py-1 border-b-2 border-destructive/40 backdrop-blur-sm">
            <div className="flex animate-marquee-infinite">
                {trustItems.concat(trustItems).map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 mx-8 flex-shrink-0 text-destructive-foreground">
                        <item.icon className="w-5 h-5" />
                        <span className="font-bold text-base md:text-lg tracking-wider">{item.text}</span>
                    </div>
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

export default TrustMarquee;
