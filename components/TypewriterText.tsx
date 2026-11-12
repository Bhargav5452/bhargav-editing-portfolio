'use client';

import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  fontSizePx?: number; // e.g. 76.8
  cursorWidth?: string; // default "2.4px"
  cursorColor?: string; // default "#0040ff"
  loopDurationMs?: number; // default 3800
}

export default function TypewriterText({
  text,
  className = '',
  style = {},
  fontSizePx = 76.8,
  cursorWidth = '2.4px',
  cursorColor = '#0040ff',
  loopDurationMs = 3800,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let active = true;

    const runLoop = () => {
      if (!active) return;
      setIsExiting(false);
      setDisplayedText('');

      const totalChars = text.length;
      // Type over ~1.1s (0% to 29.5% of 3.8s)
      const typeInterval = Math.max(35, Math.floor(1100 / totalChars));

      let charIndex = 0;
      const typeTimer = setInterval(() => {
        if (!active) {
          clearInterval(typeTimer);
          return;
        }
        charIndex++;
        setDisplayedText(text.slice(0, charIndex));

        if (charIndex >= totalChars) {
          clearInterval(typeTimer);

          // Hold text visible & blinking until 2.8s mark
          setTimeout(() => {
            if (!active) return;
            // Begin slide down & fade exit
            setIsExiting(true);

            // Reset after exit finishes
            setTimeout(() => {
              if (!active) return;
              runLoop();
            }, 600);
          }, 1800);
        }
      }, typeInterval);
    };

    runLoop();

    return () => {
      active = false;
    };
  }, [text]);

  // Exact Rokkitt font cap-height ratio: 64.8px / 76.8px = 0.84375
  const cursorHeightPx = Math.round(fontSizePx * 0.84375 * 10) / 10;

  return (
    <div
      className="inline-flex items-center justify-center relative select-none transition-all duration-500 ease-in-out"
      style={{
        transform: isExiting ? 'translateY(40px)' : 'translateY(0)',
        opacity: isExiting ? 0 : 1,
      }}
    >
      <span className={className} style={style}>
        {displayedText}
      </span>
      {/* Blinking blue cursor — exact 2.4px width and 64.8px cap-height */}
      <span
        className="cursor-blink inline-block"
        style={{
          width: cursorWidth,
          height: `${cursorHeightPx}px`,
          backgroundColor: cursorColor,
          marginLeft: '4px',
          borderRadius: '1px',
          alignSelf: 'center',
          transform: 'translateY(-2px)',
        }}
        aria-hidden="true"
      />
    </div>
  );
}
