
"use client"

import AnimatedSection from "@/components/common/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScanLine, Copy, ExternalLink, Hash, Calendar, Settings, CircleOff, Fingerprint, Anchor, BookUser, BarChart, FileJson } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";

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

const truncateAddress = (address: string, start: number = 6, end: number = 4) => {
    if (address.length <= start + end) return address;
    return `${address.substring(0, start)}...${address.substring(address.length - end)}`;
}

const TokenManifest = () => {
    const { toast } = useToast();
    const isMobile = useIsMobile();

    const handleCopy = (value: string) => {
        navigator.clipboard.writeText(value);
        toast({
            title: "Copied to clipboard",
            description: value,
        });
    };

    const DetailItem = ({ item }: { item: { label: string, value: string, icon: any, copyable?: boolean } }) => (
        <div className="flex items-start gap-3">
            <item.icon className="w-4 h-4 text-primary mt-1 shrink-0" />
            <div className="flex-grow">
                <div className="text-muted-foreground font-bold">{item.label}</div>
                <div className="font-mono text-primary flex items-center gap-2 flex-wrap">
                    <span className="break-all">{item.copyable ? truncateAddress(item.value) : item.value}</span>
                    {item.copyable && (
                        <Button variant="ghost" size="icon" className="w-8 h-8" onClick={() => handleCopy(item.value)}>
                            <Copy className="w-4 h-4 text-accent"/>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );

    const AuthorityItem = ({ item }: { item: { label: string, revoked: boolean, icon: any }}) => (
        <div className="flex items-center gap-3 text-primary-foreground">
            <item.icon className="w-4 h-4 text-primary shrink-0" />
            <div>{item.label}</div>
            {item.revoked && <Badge variant="destructive">REVOKED</Badge>}
        </div>
    );

    const LinkItem = ({ link }: { link: { label: string, href: string, icon: any }}) => (
         <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
            <link.icon className="w-4 h-4" />
            <span>{link.label}</span>
            <ExternalLink className="w-3 h-3" />
        </a>
    );

    const DesktopLayout = () => (
         <div className="bg-black/30 border border-primary/20 rounded-lg shadow-lg backdrop-blur-sm p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 text-sm">
                {/* Column 1: Core Details */}
                <div className="space-y-4">
                    {tokenDetails.map((item) => <DetailItem key={item.label} item={item} />)}
                </div>

                {/* Column 2: Authorities & Explorer Links */}
                <div className="space-y-8">
                    <div className="space-y-3">
                        <div className="font-bold text-muted-foreground">Authorities</div>
                        {authorityDetails.map((item) => <AuthorityItem key={item.label} item={item} />)}
                    </div>
                    <div className="space-y-3">
                        <div className="font-bold text-muted-foreground">Explorer Links</div>
                        {explorerLinks.map((link) => <LinkItem key={link.label} link={link} />)}
                    </div>
                </div>

                {/* Column 3: Analysis & Holders */}
                <div className="space-y-3">
                    <div className="font-bold text-muted-foreground">Analysis & Holders</div>
                    {analysisLinks.map((link) => <LinkItem key={link.label} link={link} />)}
                </div>
            </div>
        </div>
    )

    const MobileLayout = () => (
        <Tabs defaultValue="core" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="core">Core</TabsTrigger>
                <TabsTrigger value="auth">Auth</TabsTrigger>
                <TabsTrigger value="links">Links</TabsTrigger>
            </TabsList>
            <TabsContent value="core">
                 <Card className="bg-black/30 border-primary/30">
                    <CardHeader>
                        <CardTitle className="text-primary glow">Core Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {tokenDetails.map((item) => <DetailItem key={item.label} item={item} />)}
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="auth">
                 <Card className="bg-black/30 border-primary/30">
                    <CardHeader>
                        <CardTitle className="text-primary glow">Authorities</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-3">
                            {authorityDetails.map((item) => <AuthorityItem key={item.label} item={item} />)}
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="links">
                 <Card className="bg-black/30 border-primary/30">
                    <CardHeader>
                        <CardTitle className="text-primary glow">Analysis & Explorer</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-3">
                            <div className="font-bold text-muted-foreground">Explorer Links</div>
                            {explorerLinks.map((link) => <LinkItem key={link.label} link={link} />)}
                        </div>
                        <div className="space-y-3">
                            <div className="font-bold text-muted-foreground">Analysis Links</div>
                            {analysisLinks.map((link) => <LinkItem key={link.label} link={link} />)}
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );

    return (
        <AnimatedSection id="token-manifest" animationClassName="bg-starfield">
            <div className="w-full max-w-7xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary glow mb-2">
                        SHADOW Smart Contract Manifest
                    </h2>
                    <p className="text-accent glow-accent text-lg">
                        Full On-Chain Transparency. Verified. Immutable.
                    </p>
                </div>
                 {isMobile ? <MobileLayout /> : <DesktopLayout />}
            </div>
        </AnimatedSection>
    )
}

export default TokenManifest;
