'use client';

import Image from 'next/image';
import { videos } from '@/lib/data';
import FigmaTypewriter from '@/components/FigmaTypewriter';
import PortfolioVideo from '@/components/PortfolioVideo';
import HeroMonitor from '@/components/HeroMonitor';
import AboutSection from '@/components/AboutSection';
import MobileRestrictionScreen from '@/components/MobileRestrictionScreen';

export default function PortfolioPage() {
  return (
    <>
      {/* Mobile Restriction Screen — displayed ONLY on phones (< 768px) */}
      <MobileRestrictionScreen />

      {/* Main Portfolio Website — displayed ONLY on Desktop & Tablet (>= 768px, or mobile with "Desktop site" enabled) */}
      <div className="hidden md:flex bg-[#111111] text-[#ffffff] min-h-screen flex-col items-center w-full selection:bg-[#e3c40a] selection:text-black">
      
      {/* ══════════════════════════════════════════════════════
          1. HERO SECTION — Portfolio Editor Artwork (Monitor Panel)
          Node 5:2 (w: 1312px, h: 672.48px, rounded: 20px)
          ══════════════════════════════════════════════════════ */}
      <section className="w-full flex justify-center pt-6 sm:pt-12 lg:pt-[64px] pb-6 sm:pb-[32px] px-4 bg-[#111111]">
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
        
        {/* Animated Work For heading section (Node 21:3, responsive height) */}
        <div className="bg-white flex h-auto min-h-[80px] lg:h-[109px] items-center justify-center overflow-hidden pb-3 lg:pb-[8px] pt-4 lg:pt-[32px] relative shrink-0 w-full">
          <div className="work-for-figma-animated flex gap-3 sm:gap-[18px] h-auto lg:h-[73px] items-center relative shrink-0 cursor-default">
            <p
              className="text-[#1a1a1a] text-[32px] sm:text-[42px] lg:text-[52px] leading-tight lg:leading-[64px] not-italic relative shrink-0 whitespace-nowrap"
              style={{ fontFamily: "'Arvo', serif" }}
            >
              Work For
            </p>
            <div className="relative shrink-0 size-[48px] sm:size-[60px] lg:size-[72px]">
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

        {/* Video 1: Node 26:18 Portfolio video section (responsive height: 280px on phone, 740px on desktop) */}
        <div className="bg-white w-full h-[280px] sm:h-[480px] md:h-[620px] lg:h-[740px] overflow-hidden relative shrink-0">
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
        
        {/* Banner with exact Figma typewriter animation (Node 33:2, responsive height) */}
        <div className="bg-[#ebecef] h-[80px] sm:h-[96px] lg:h-[112.8px] overflow-hidden relative shrink-0 w-full flex items-center justify-center">
          <FigmaTypewriter
            text="Motion Graphics"
            className="text-[#1a1d23] text-[clamp(32px,6.8vw,76.8px)] leading-[80px] sm:leading-[96px] lg:leading-[112.8px] font-normal tracking-tight"
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
      <section className="bg-[#fefefe] h-auto lg:h-[792px] overflow-hidden relative shrink-0 w-full flex items-center justify-center py-6 sm:py-10 lg:py-[48px] px-3 sm:px-6">
        <div className="w-full max-w-[1282px] h-auto max-h-[721px] rounded-[14px] sm:rounded-[20px] overflow-hidden shadow-2xl bg-black">
          <PortfolioVideo
            src={videos.tedx}
            className="w-full h-full object-contain block mx-auto bg-black"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          6. BANNER SECTION — "Let's Work Together" Typewriter Loop
          (Exact Figma Node 40:357 layout, responsive banner)
          ══════════════════════════════════════════════════════ */}
      <footer className="bg-[#ebecef] h-[80px] sm:h-[96px] lg:h-[112.8px] overflow-hidden relative shrink-0 w-full flex items-center justify-center">
        <FigmaTypewriter
          text="Let's Work Together"
          className="text-[#1a1d23] text-[clamp(28px,6vw,76.8px)] leading-[80px] sm:leading-[96px] lg:leading-[112.8px] font-normal tracking-tight"
          style={{ fontFamily: "'Rokkitt', serif" }}
        />
      </footer>

      </div>
    </>
  );
}
