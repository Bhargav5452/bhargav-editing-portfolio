'use client';

import { useEffect, useState } from 'react';

interface FigmaTypewriterProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function FigmaTypewriter({
  text,
  className = '',
  style = {},
}: FigmaTypewriterProps) {
  const [charCount, setCharCount] = useState(0);
  const [isSlidingDown, setIsSlidingDown] = useState(false);

  useEffect(() => {
    let active = true;

    const runCycle = () => {
      if (!active) return;
      setIsSlidingDown(false);
      setCharCount(0);

      const totalChars = text.length;
      // In Figma: typing starts at 80ms, finishes at 1040ms (960ms duration)
      const stepMs = Math.floor(960 / totalChars);

      let current = 0;
      const typeTimer = setInterval(() => {
        if (!active) {
          clearInterval(typeTimer);
          return;
        }
        current++;
        setCharCount(current);

        if (current >= totalChars) {
          clearInterval(typeTimer);

          // Hold visible until 2400ms mark (63.16% of 3800ms)
          setTimeout(() => {
            if (!active) return;
            // Slide down out of the 112.8px banner
            setIsSlidingDown(true);

            // Reset and loop at 3800ms
            setTimeout(() => {
              if (!active) return;
              runCycle();
            }, 800);
          }, 1400);
        }
      }, stepMs);
    };

    runCycle();

    return () => {
      active = false;
    };
  }, [text]);

  const visibleText = text.slice(0, charCount);

  return (
    <div
      className="inline-flex items-center justify-center relative select-none transition-transform duration-500 ease-in"
      style={{
        transform: isSlidingDown ? 'translateY(112.8px)' : 'translateY(0)',
        opacity: isSlidingDown ? 0 : 1,
      }}
    >
      <span className={className} style={style}>
        {visibleText}
      </span>
      {/* Dynamic responsive cursor matching Figma Node 33:5: width 2.4px, #0040ff, scales with font */}
      <span
        className="cursor-blink inline-block"
        style={{
          width: '2.4px',
          height: 'clamp(28px, 4.5vw, 64.8px)',
          backgroundColor: '#0040ff',
          marginLeft: '4px',
          verticalAlign: 'middle',
          alignSelf: 'center',
        }}
        aria-hidden="true"
      />
    </div>
  );
}

