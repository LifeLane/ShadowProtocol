
"use client"

import { DollarSign, Droplets, TrendingUp, ShoppingCart, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useShadowStats } from '@/hooks/use-shadow-stats';
import { cn } from '@/lib/utils';

const StatItem = ({ icon: Icon, label, value, colorClass }: { icon: React.ElementType, label: string, value: string, colorClass?: string }) => (
    <div className="flex items-center space-x-3 mx-4 sm:mx-6 flex-shrink-0">
        <Icon className={cn("w-5 h-5", colorClass)} />
        <div className="flex items-baseline gap-2">
            <span className="font-bold text-sm sm:text-base tracking-wider">{label}:</span>
            <span className={cn("font-mono text-sm sm:text-base", colorClass)}>{value}</span>
        </div>
    </div>
);

const LiveStatsBanner = () => {
    const { stats, isLoading, error } = useShadowStats();

    const bannerContent = () => {
        if (isLoading) {
            return (
                <div className="flex items-center justify-center w-full">
                    <div className="flex items-center space-x-3 text-sm sm:text-base">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Loading Live On-Chain Data...</span>
                    </div>
                </div>
            );
        }

        if (error || !stats) {
            return (
                <div className="flex items-center justify-center w-full">
                    <div className="flex items-center space-x-3 text-sm sm:text-base">
                        <span className="text-destructive">●</span>
                        <span>Live Data Feed Offline</span>
                    </div>
                </div>
            );
        }
        
        const isUp = stats.priceChange24h >= 0;
        const changeColor = isUp ? 'text-primary' : 'text-destructive';

        const statItems = [
            {
                icon: DollarSign,
                label: 'Market Cap',
                value: `$${stats.marketCap.toLocaleString('en-US', { notation: 'compact', maximumFractionDigits: 2 })}`
            },
            {
                icon: Droplets,
                label: 'Liquidity',
                value: `$${stats.liquidity.toLocaleString('en-US', { notation: 'compact', maximumFractionDigits: 2 })}`
            },
            {
                icon: TrendingUp,
                label: '24h Change',
                value: `${isUp ? '+' : ''}${stats.priceChange24h.toFixed(2)}%`,
                colorClass: changeColor
            },
        ];

        return (
            <>
                {statItems.map((item, index) => (
                    <StatItem key={index} {...item} />
                ))}
                <div className="mx-4 sm:mx-6 flex-shrink-0">
                    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold btn-shine h-8 px-4 text-xs sm:h-auto sm:px-6 sm:text-sm">
                        <Link href="https://link.gmgn.ai/?url=https%3A%2F%2Fgmgn.ai%2Fsol%2Ftoken%2FB6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR&page=TokenDetail&params=%7B%22chainName%22%3A%22sol%22%2C%22address%22%3A%22B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR%22%7D&ref=j40KRTAR&referral=j40KRTAR&chain=sol" target="_blank">
                            <ShoppingCart className="mr-2" />
                            Trade SHADOW
                        </Link>
                    </Button>
                </div>
            </>
        );
    }

    return (
        <div className="w-full overflow-hidden bg-background text-foreground py-2 md:py-3 border-b-2 border-primary/20 relative z-20">
            <div className="flex animate-marquee-infinite items-center">
                 {bannerContent()}
                 {bannerContent()}
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

export default LiveStatsBanner;
