"use client"

import { useState, useEffect } from 'react';

type TypewriterProps = {
  texts: string[];
  speed?: number;
  pause?: number;
  className?: string;
};

const Typewriter = ({ texts, speed = 50, pause = 1000, className }: TypewriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= texts.length) return;

    if (charIndex < texts[lineIndex].length) {
      const timeoutId = setTimeout(() => {
        setCurrentText(prev => prev + texts[lineIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    } else {
      const timeoutId = setTimeout(() => {
        setLineIndex(prev => prev + 1);
        setCharIndex(0);
        if (lineIndex < texts.length - 1) {
            setCurrentText(prev => prev + '\n');
        }
      }, pause);
      return () => clearTimeout(timeoutId);
    }
  }, [charIndex, lineIndex, texts, speed, pause]);

  return (
    <p className={`${className} whitespace-pre-wrap`}>
      {currentText}
      <span className="animate-flicker text-primary">|</span>
    </p>
  );
};

export default Typewriter;
