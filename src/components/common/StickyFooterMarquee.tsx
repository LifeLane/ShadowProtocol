
"use client"
import LinkMarquee from './LinkMarquee';

const StickyFooterMarquee = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 w-full overflow-hidden">
      <LinkMarquee direction="reverse" />
    </footer>
  );
};

export default StickyFooterMarquee;
