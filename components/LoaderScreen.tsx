'use client';

import { useEffect, useRef, useState } from 'react';

interface LoaderScreenProps {
  onComplete?: () => void;
}

export default function LoaderScreen({ onComplete }: LoaderScreenProps) {
  const [count, setCount]           = useState(0);
  const [phase, setPhase]           = useState<'counting' | 'exit' | 'done'>('counting');
  const rafRef                      = useRef<number | null>(null);
  const startTimeRef                = useRef<number | null>(null);
  const DURATION                    = 2600; // ms for 0→100

  // Ease-in-out cubic
  const easeInOut = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  useEffect(() => {
    const animate = (now: number) => {
      if (!startTimeRef.current) startTimeRef.current = now;
      const elapsed = now - startTimeRef.current;
      const rawT    = Math.min(elapsed / DURATION, 1);
      const val     = Math.round(easeInOut(rawT) * 100);
      setCount(val);

      if (rawT < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        // Finished counting — wait a beat then exit
        setTimeout(() => setPhase('exit'), 400);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // After curtains slide off, mark done
  useEffect(() => {
    if (phase === 'exit') {
      const timer = setTimeout(() => {
        setPhase('done');
        onComplete?.();
      }, 1100); // matches CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  if (phase === 'done') return null;

  const isExiting = phase === 'exit';

  return (
    <>
      {/* ── Overlay ── */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: '#0d0d0d',
          zIndex: 200,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '36px 48px',
          opacity: isExiting ? 0 : 1,
          transition: 'opacity 0.35s ease',
          pointerEvents: isExiting ? 'none' : 'auto',
        }}
      >
        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span style={labelStyle}>BNK — Portfolio</span>
          <span style={{ ...labelStyle, color: '#555' }}>Loading</span>
        </div>

        {/* Big counter */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <span style={counterStyle(count)}>{count}</span>
          <span style={percentStyle}>%</span>
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <span style={{ ...labelStyle, color: '#333' }}>© 2026</span>
          {/* Progress bar */}
          <div style={{ width: 160, height: 1.5, background: '#222', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${count}%`, background: '#FACC15', transition: 'width 0.05s linear' }} />
          </div>
        </div>
      </div>

      {/* ── Left curtain ── */}
      <div style={curtainStyle('left', isExiting)} />
      {/* ── Right curtain ── */}
      <div style={curtainStyle('right', isExiting)} />
    </>
  );
}

// ── Styles ──

const labelStyle: React.CSSProperties = {
  color: '#FACC15',
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: '3px',
  textTransform: 'uppercase',
};

function counterStyle(count: number): React.CSSProperties {
  // Tint towards gold as counter approaches 100
  const gold = count >= 90 ? Math.min((count - 90) / 10, 1) : 0;
  const r = Math.round(255 * (1 - gold) + 250 * gold);
  const g = Math.round(255 * (1 - gold) + 204 * gold);
  const b = Math.round(255 * (1 - gold) + 21  * gold);
  return {
    fontSize: 'clamp(100px, 20vw, 220px)',
    fontWeight: 900,
    color: `rgb(${r},${g},${b})`,
    letterSpacing: '-6px',
    lineHeight: 1,
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    transition: 'color 0.3s',
  };
}

const percentStyle: React.CSSProperties = {
  fontSize: 'clamp(28px, 5vw, 60px)',
  fontWeight: 700,
  color: '#FACC15',
  alignSelf: 'flex-start',
  marginTop: 20,
  marginLeft: 6,
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
};

function curtainStyle(side: 'left' | 'right', isExiting: boolean): React.CSSProperties {
  return {
    position: 'fixed',
    top: 0,
    [side === 'left' ? 'left' : 'right']: 0,
    width: '50%',
    height: '100%',
    background: '#0d0d0d',
    zIndex: 199,
    transform: isExiting ? 'translateY(-100%)' : 'translateY(0%)',
    transition: `transform 1s cubic-bezier(0.76, 0, 0.24, 1) ${side === 'right' ? '0.08s' : '0s'}`,
  };
}

