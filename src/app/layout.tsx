import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Shadow Genesis',
  description: 'A new token is born from the chain’s neural memory.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark theme-cyberpunk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600;700&family=Orbitron:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-code antialiased bg-background">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
