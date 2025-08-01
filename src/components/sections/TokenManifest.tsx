
"use client"

import AnimatedSection from "@/components/common/AnimatedSection";
import Terminal from "@/components/common/Terminal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScanLine, Copy, ExternalLink, Hash, Calendar, Settings, CircleOff, Fingerprint, Anchor, BookUser, BarChart, FileJson } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const tokenDetails = [
  { label: 'Token Name', value: 'SHADOW (SHADOW)', icon: Hash },
  { label: 'Decimals', value: '6', icon: Settings },
  { label: 'Token Address', value: 'B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR', copyable: true, icon: Fingerprint },
  { label: 'Creator', value: '38XnV4BZownmFeFrykAYhfMJvWxaZ31t4zBa96HqChEe', copyable: true, icon: Anchor },
  { label: 'First Mint', value: 'July 15, 2025 15:12:33 +UTC', icon: Calendar },
  { label: 'Token Extensions', value: 'False', icon: FileJson },
];

const authorityDetails = [
  { label: 'Mint Authority', revoked: true, icon: CircleOff },
  { label: 'Freeze Authority', revoked: true, icon: CircleOff },
  { label: 'Update Authority', revoked: true, icon: CircleOff },
];

const explorerLinks = [
  { label: 'Token Explorer', href: 'https://solscan.io/token/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR', icon: ScanLine },
  { label: 'Transactions', href: 'https://solscan.io/token/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR#transactions', icon: ScanLine },
  { label: 'DeFi Activities', href: 'https://solscan.io/token/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR#defiactivities', icon: ScanLine },
];

const analysisLinks = [
  { label: 'Holder View', href: 'https://solscan.io/token/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR#holders', icon: BookUser },
  { label: 'Token Analytics', href: 'https://solscan.io/token/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR#analytics', icon: BarChart },
  { label: 'Pool and Markets', href: 'https://solscan.io/token/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR#markets', icon: BarChart },
  { label: 'Token Metadata', href: 'https://solscan.io/token/B6XHf6ouZAy5Enq4kR3Po4CD5axn1EWc7aZKR9gmr2QR#metadata', icon: FileJson },
];


const TokenManifest = () => {
    const { toast } = useToast();

    const handleCopy = (value: string) => {
        navigator.clipboard.writeText(value);
        toast({
            title: "Copied to clipboard",
            description: value,
        });
    };

    return (
        <AnimatedSection id="token-manifest" animationClassName="bg-starfield">
            <Terminal title="TOKEN_MANIFEST.md" className="w-full md:max-w-7xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary glow mb-2">
                        SHADOW Smart Contract Manifest
                    </h2>
                    <p className="text-accent glow-accent text-lg">
                        Full On-Chain Transparency. Verified. Immutable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 text-sm">
                    {/* Column 1: Core Details */}
                    <div className="space-y-4">
                        {tokenDetails.map((item) => (
                            <div key={item.label} className="flex items-start gap-3">
                                <item.icon className="w-4 h-4 text-primary mt-1 shrink-0" />
                                <div className="flex-grow">
                                    <div className="text-muted-foreground font-bold">{item.label}</div>
                                    <div className="font-mono text-primary-foreground flex items-center gap-2 flex-wrap">
                                        <span className="break-all">{item.value}</span>
                                        {item.copyable && (
                                             <Button variant="ghost" size="icon" className="w-6 h-6" onClick={() => handleCopy(item.value)}>
                                                <Copy className="w-3 h-3"/>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                     {/* Column 2: Authorities & Explorer Links */}
                    <div className="space-y-8">
                        <div className="space-y-3">
                            <div className="font-bold text-muted-foreground">Authorities</div>
                            {authorityDetails.map((item) => (
                                <div key={item.label} className="flex items-center gap-3">
                                    <item.icon className="w-4 h-4 text-primary shrink-0" />
                                    <div>{item.label}</div>
                                    {item.revoked && <Badge variant="destructive">REVOKED</Badge>}
                                </div>
                            ))}
                        </div>
                         <div className="space-y-3">
                            <div className="font-bold text-muted-foreground">Explorer Links</div>
                            {explorerLinks.map((link) => (
                                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                                    <link.icon className="w-4 h-4" />
                                    <span>{link.label}</span>
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 3: Analysis & Holders */}
                     <div className="space-y-3">
                         <div className="font-bold text-muted-foreground">Analysis & Holders</div>
                         {analysisLinks.map((link) => (
                            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                                <link.icon className="w-4 h-4" />
                                <span>{link.label}</span>
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        ))}
                     </div>
                </div>
            </Terminal>
        </AnimatedSection>
    )
}

export default TokenManifest
