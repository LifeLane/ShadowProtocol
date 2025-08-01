
"use client"

import { Flame, Lock, Bot, Ban, ShieldCheck, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const trustItems = [
    { text: "1 SHADOW = 1 USD", icon: ShieldCheck },
    { text: "99% LOCKED", icon: Lock },
    { text: "MINT REVOKED", icon: Ban },
    { text: "SHADOWGPT LIVE", icon: Bot },
    { text: "RUG PROOF", icon: ShieldCheck },
    { text: "BURN OR SERVE", icon: Flame },
];

const SectionTrustBanner = () => {
    return (
        <div className="w-full overflow-hidden bg-destructive text-destructive-foreground py-2 md:py-1 border-b-2 border-destructive/40">
            <div className="flex animate-marquee-infinite items-center">
                {trustItems.concat(trustItems).map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 mx-8 flex-shrink-0">
                        <item.icon className="w-5 h-5" />
                        <span className="font-bold text-base md:text-lg tracking-wider">{item.text}</span>
                    </div>
                ))}
                <div className="mx-8 flex-shrink-0">
                    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold btn-shine">
                        <Link href="https://link.gmgn.ai/?url=https%3A%2F%2Fgmgn.ai%2Fsol%2Ftoken%2FBnNyE9j7hvqQznFNjx57bvCRwSmLeVpWP6iRThfppcfw&page=TokenDetail&params=%7B%22chainName%22%3A%22sol%22%2C%22address%22%3A%22BnNyE9j7hvqQznFNjx57bvCRwSmLeVpWP6iRThfppcfw%22%7D&ref=j40KRTAR&referral=j40KRTAR&chain=sol" target="_blank">
                            <ShoppingCart className="mr-2" />
                            Trade SHADOW Now
                        </Link>
                    </Button>
                </div>
                 {trustItems.concat(trustItems).map((item, index) => (
                    <div key={index + trustItems.length} className="flex items-center space-x-3 mx-8 flex-shrink-0">
                        <item.icon className="w-5 h-5" />
                        <span className="font-bold text-base md:text-lg tracking-wider">{item.text}</span>
                    </div>
                ))}
                 <div className="mx-8 flex-shrink-0">
                    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold btn-shine">
                        <Link href="https://link.gmgn.ai/?url=https%3A%2F%2Fgmgn.ai%2Fsol%2Ftoken%2FBnNyE9j7hvqQznFNjx57bvCRwSmLeVpWP6iRThfppcfw&page=TokenDetail&params=%7B%22chainName%22%3A%22sol%22%2C%22address%22%3A%22BnNyE9j7hvqQznFNjx57bvCRwSmLeVpWP6iRThfppcfw%22%7D&ref=j40KRTAR&referral=j40KRTAR&chain=sol" target="_blank">
                            <ShoppingCart className="mr-2" />
                            Trade SHADOW Now
                        </Link>
                    </Button>
                </div>
            </div>
            <style jsx>{`
                @keyframes marquee-infinite {
                    from { transform: translateX(0%); }
                    to { transform: translateX(-50%); }
                }
                .animate-marquee-infinite {
                    animation: marquee-infinite 60s linear infinite;
                    will-change: transform;
                    display: flex;
                    width: max-content;
                }
            `}</style>
        </div>
    );
};

export default SectionTrustBanner;
