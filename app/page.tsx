'use client';

import Image from 'next/image';
import { videos } from '@/lib/data';
import FigmaTypewriter from '@/components/FigmaTypewriter';
import PortfolioVideo from '@/components/PortfolioVideo';
import HeroMonitor from '@/components/HeroMonitor';
import AboutSection from '@/components/AboutSection';

export default function PortfolioPage() {
  return (
    <div className="bg-[#111111] text-[#ffffff] min-h-screen flex flex-col items-center w-full selection:bg-[#e3c40a] selection:text-black">
      
      {/* ══════════════════════════════════════════════════════
          1. HERO SECTION — Portfolio Editor Artwork (Monitor Panel)
          Node 5:2 (w: 1312px, h: 672.48px, rounded: 20px)
          ══════════════════════════════════════════════════════ */}
      <section className="w-full flex justify-center pt-[64px] pb-[32px] px-4 bg-[#111111]">
        <HeroMonitor />
      </section>

      {/* ══════════════════════════════════════════════════════
          2. ABOUT SECTION — Bhargava Nandan
          Node 2:2 (w: 1440px, gap: 80px, p: 64px)
          Scroll reveal & smooth element animations
          ══════════════════════════════════════════════════════ */}
      <AboutSection />

      {/* ══════════════════════════════════════════════════════
          3. WORK FOR SECTION (Node 21:2)
          VIDEO 1: Linkspace Portfolio.mp4
          Figma layout: Full width, ZERO padding, ZERO border radius
          AUTOPLAY VIDEO with zero browser default playback chrome
          ══════════════════════════════════════════════════════ */}
      <section className="bg-white flex flex-col items-start overflow-hidden relative shrink-0 w-full" data-name="Work sections">
        
        {/* Animated Work For heading section (Node 21:3, h: 109px, pt: 32px, pb: 8px) */}
        <div className="bg-white flex h-[109px] items-center justify-center overflow-hidden pb-[8px] pt-[32px] relative shrink-0 w-full">
          <div className="work-for-figma-animated flex gap-[18px] h-[73px] items-center relative shrink-0 cursor-default">
            <p
              className="text-[#1a1a1a] text-[52px] leading-[64px] not-italic relative shrink-0 whitespace-nowrap"
              style={{ fontFamily: "'Arvo', serif" }}
            >
              Work For
            </p>
            <div className="relative shrink-0 size-[72px]">
              <Image
                src="/figma/linkspace-logo.png"
                alt="Linkspace"
                width={72}
                height={72}
                className="object-contain size-full"
              />
            </div>
          </div>
        </div>

        {/* Video 1: Node 26:18 Portfolio video section (h: 740px, w-full, ZERO padding, ZERO radius, AUTOPLAY) */}
        <div className="bg-white h-[740px] overflow-hidden relative shrink-0 w-full">
          <PortfolioVideo
            src={videos.linkspace}
            className="w-full h-full object-cover block"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4. MOTION GRAPHICS SECTION (Node 33:2)
          VIDEO 2: motion graphics portfolio.mp4
          Figma layout: Full width, ZERO padding, ZERO border radius
          AUTOPLAY VIDEO with zero browser default playback chrome
          ══════════════════════════════════════════════════════ */}
      <section className="w-full flex flex-col items-center">
        
        {/* Banner with exact Figma typewriter animation (Node 33:2, h: 112.8px) */}
        <div className="bg-[#ebecef] h-[112.8px] overflow-hidden relative shrink-0 w-full flex items-center justify-center">
          <FigmaTypewriter
            text="Motion Graphics"
            className="text-[#1a1d23] text-[76.8px] leading-[112.8px] font-normal tracking-tight"
            style={{ fontFamily: "'Rokkitt', serif" }}
          />
        </div>

        {/* Video 2: Node 40:353 aspect-[1920/1080] w-full (ZERO padding, ZERO radius, AUTOPLAY) */}
        <div className="aspect-[1920/1080] relative shrink-0 w-full bg-black">
          <PortfolioVideo
            src={videos.motionGraphics}
            className="w-full h-full object-cover block"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          5. TEDX SECTION (Node 37:314 / 42:516)
          VIDEO 3: TedxVBIT Glimpse Final.mp4 (AUTOPLAY)
          ══════════════════════════════════════════════════════ */}
      <section className="bg-[#fefefe] h-auto lg:h-[792px] overflow-hidden relative shrink-0 w-full flex items-center justify-center py-[48px] px-6">
        <div className="w-full max-w-[1282px] h-auto max-h-[721px] rounded-[20px] overflow-hidden shadow-2xl bg-black">
          <PortfolioVideo
            src={videos.tedx}
            className="w-full h-full object-contain block mx-auto bg-black"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          6. BANNER SECTION — "Let's Work Together" Typewriter Loop
          (Exact Figma Node 40:357 layout, h: 112.8px, Rokkitt font)
          ══════════════════════════════════════════════════════ */}
      <footer className="bg-[#ebecef] h-[112.8px] overflow-hidden relative shrink-0 w-full flex items-center justify-center">
        <FigmaTypewriter
          text="Let's Work Together"
          className="text-[#1a1d23] text-[clamp(36px,5.8vw,76.8px)] leading-[112.8px] font-normal tracking-tight"
          style={{ fontFamily: "'Rokkitt', serif" }}
        />
      </footer>

    </div>
  );
}
