'use client';

import { useEffect, useRef, useState } from 'react';

interface LoaderScreenProps {
  brandName?: string;
  onStartCollapse?: () => void;
  onComplete?: () => void;
}

export default function LoaderScreen({
  brandName = 'BHARGAVA NANDAN',
  onStartCollapse,
  onComplete,
}: LoaderScreenProps) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<'counting' | 'collapsing' | 'done'>('counting');
  const [lineActive, setLineActive] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  // Exact Framer ease curve for counter and progress line: [0.12, 0.23, 0.5, 1]
  const framerEase = (t: number): number => {
    const c1 = 0.12, c2 = 0.23, c3 = 0.5, c4 = 1.0;
    let lo = 0, hi = 1;
    for (let i = 0; i < 14; i++) {
      const mid = (lo + hi) / 2;
      const tMid = 3 * c1 * mid * (1 - mid) ** 2 + 3 * c3 * mid ** 2 * (1 - mid) + mid ** 3;
      if (tMid < t) lo = mid; else hi = mid;
    }
    const u = (lo + hi) / 2;
    return 3 * c2 * u * (1 - u) ** 2 + 3 * c4 * u ** 2 * (1 - u) + u ** 3;
  };

  const DURATION = 3000; // Exact 3s counter duration from Framer

  useEffect(() => {
    // Trigger the bar line expansion immediately on mount (Variant 2)
    const lineTimer = setTimeout(() => {
      setLineActive(true);
    }, 50);

    // Counter animation 0 -> 100
    const animate = (now: number) => {
      if (!startRef.current) startRef.current = now;
      const elapsed = now - startRef.current;
      const rawT = Math.min(elapsed / DURATION, 1);
      const val = Math.round(framerEase(rawT) * 100);
      setCount(val);

      if (rawT < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        // At 100% (after 3.1s delay matching Framer), trigger Variant 3 collapse
        setTimeout(() => {
          setPhase('collapsing');
          onStartCollapse?.();
        }, 100);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      clearTimeout(lineTimer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    if (phase === 'collapsing') {
      // 600ms matching Framer transition1 duration, then remove loader completely
      const finishTimer = setTimeout(() => {
        setPhase('done');
        onComplete?.();
      }, 650);
      return () => clearTimeout(finishTimer);
    }
  }, [phase, onComplete]);

  if (phase === 'done') return null;

  const isCollapsing = phase === 'collapsing';

  return (
    <>
      {/* Inter Display Font & Framer text blur animation */}
      <style>{`
        @keyframes framerCharAppear {
          0% {
            opacity: 0.001;
            filter: blur(10px);
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            filter: blur(0px);
            transform: translateY(0px);
          }
        }
        .framer-char {
          display: inline-block;
          animation: framerCharAppear 0.45s cubic-bezier(0.17, 0.55, 0.55, 1) both;
        }
      `}</style>

      {/* 
        Full-screen Framer Loader Overlay:
        - Variant 1 & 2: Full viewport white sheet, fixed on top (z-index: 9999).
        - Variant 3: Collapses downwards into an arc/dome with border-radius: 50% 50% 0 0,
                     revealing the portfolio page underneath.
      */}
      <aside
        aria-label="Loading Screen"
        className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden flex flex-col justify-end"
        style={{
          perspective: '1000px',
        }}
      >
        <div
          className="relative w-full overflow-hidden bg-white text-black pointer-events-auto"
          style={{
            height: isCollapsing ? '0vh' : '100vh',
            borderTopLeftRadius: isCollapsing ? '50%' : '0%',
            borderTopRightRadius: isCollapsing ? '50%' : '0%',
            transform: isCollapsing ? 'translateY(20px)' : 'translateY(0)',
            opacity: isCollapsing ? 0.98 : 1,
            transition: isCollapsing
              ? 'height 0.6s cubic-bezier(0.77, 0.02, 0.24, 1.02), border-radius 0.6s cubic-bezier(0.77, 0.02, 0.24, 1.02), transform 0.6s cubic-bezier(0.77, 0.02, 0.24, 1.02)'
              : 'none',
          }}
        >
          {/* Inner content container */}
          <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-14">
            
            {/* Top row: Brand Name with character-by-character blur reveal */}
            <div className="flex items-center justify-start">
              <span
                className="text-black font-normal tracking-[-0.05em] select-none text-[22px] sm:text-[24px]"
                style={{
                  fontFamily: '"Inter Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  lineHeight: '1em',
                }}
              >
                {brandName.split('').map((char, i) => (
                  <span
                    key={i}
                    className="framer-char"
                    style={{ animationDelay: `${i * 0.05 + 0.05}s` }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            </div>

            {/* Middle: Horizontal Line that expands from 0% to 100% over 3s */}
            <div className="w-full h-[4px] bg-black/10 relative overflow-hidden rounded-full my-auto">
              <div
                className="h-full bg-black rounded-full"
                style={{
                  width: lineActive ? '100%' : '0%',
                  transition: `width ${DURATION}ms cubic-bezier(0.12, 0.23, 0.5, 1)`,
                }}
              />
            </div>

            {/* Bottom-Right: Giant Framer counter (0% -> 100%) */}
            <div className="flex items-baseline justify-end select-none">
              <span
                className="text-black font-light tracking-[-0.06em]"
                style={{
                  fontFamily: '"Inter Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(90px, 20vw, 240px)',
                  lineHeight: '0.8em',
                  fontWeight: 300,
                }}
              >
                {count}
              </span>
              <span
                className="text-black font-light tracking-[-0.06em] ml-1 sm:ml-2"
                style={{
                  fontFamily: '"Inter Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(32px, 6vw, 72px)',
                  lineHeight: '0.8em',
                  fontWeight: 300,
                }}
              >
                %
              </span>
            </div>

          </div>
        </div>
      </aside>
    </>
  );
}
