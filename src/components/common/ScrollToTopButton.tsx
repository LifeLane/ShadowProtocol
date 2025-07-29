
"use client"

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Button
                size="icon"
                onClick={scrollToTop}
                className={cn(
                    'bg-primary/80 backdrop-blur-sm hover:bg-primary transition-opacity duration-300 animate-border-glow',
                    isVisible ? 'opacity-100' : 'opacity-0'
                )}
                aria-label="Scroll to top"
            >
                <ChevronUp className="h-6 w-6" />
            </Button>
        </div>
    );
};

export default ScrollToTopButton;
