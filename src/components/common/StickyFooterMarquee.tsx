
"use client"

import LinkMarquee from './LinkMarquee';

const StickyFooterMarquee = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50">
            <LinkMarquee direction="normal" />
            <LinkMarquee direction="reverse" />
        </div>
    );
};

export default StickyFooterMarquee;
