'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLoader } from '@/components/LoaderContext';

export default function HeroMonitor() {
  const { isLoaded } = useLoader();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setTilt({
      x: -(y * 6), // subtle 6 deg max rotation
      y: x * 6,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="relative w-full max-w-[1312px] mx-auto select-none">
      {/* Soft golden studio ambient back-glow */}
      <div
        className={`absolute -inset-4 rounded-[28px] bg-gradient-to-r from-[#e3c40a]/15 via-white/5 to-[#e3c40a]/15 blur-2xl -z-10 transition-opacity duration-1000 ${
          isLoaded ? 'opacity-70' : 'opacity-0'
        }`}
      />

      {/* 
        The Monitor Panel Container:
        - When loader collapses, pops in smoothly with scale(0.9) -> scale(1) & translateY(40px) -> 0
        - Soft blur clears up as it springs into focus
      */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full rounded-[20px] overflow-hidden shadow-2xl border border-[#262626] bg-[#0a0a0a] transition-all will-change-transform"
        style={{
          transform: isLoaded
            ? isHovered
              ? `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.01, 1.01, 1.01)`
              : 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
            : 'perspective(1200px) translateY(44px) scale3d(0.9, 0.9, 1)',
          opacity: isLoaded ? 1 : 0,
          filter: isLoaded ? 'blur(0px)' : 'blur(6px)',
          transition: isHovered
            ? 'transform 0.15s ease-out, filter 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            : 'transform 1.1s cubic-bezier(0.16, 1, 0.3, 1), filter 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <Image
          src="/figma/editor-artwork.png"
          alt="Bhargava Nandan — Premiere Pro Monitor Panel Artwork"
          width={1312}
          height={673}
          priority
          className="w-full h-auto object-cover block rounded-[20px]"
        />
      </div>
    </div>
  );
}

