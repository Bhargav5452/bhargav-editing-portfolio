'use client';

import { useEffect, useState } from 'react';

export default function MobileDesktopGate() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissing, setIsDismissing] = useState(false);

  useEffect(() => {
    // Only show if on mobile (< 768px) and user hasn't already clicked to enter in this session
    const isMobile = window.innerWidth < 768;
    const hasEntered = sessionStorage.getItem('mobile_entered_portfolio');
    if (isMobile && !hasEntered) {
      setIsOpen(true);
    }
  }, []);

  const handleOpenWebsite = () => {
    setIsDismissing(true);
    setTimeout(() => {
      setIsOpen(false);
      sessionStorage.setItem('mobile_entered_portfolio', '1');
    }, 400);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-[#0c0c0c]/98 backdrop-blur-2xl text-white flex flex-col items-center justify-center p-6 text-center select-none md:hidden transition-all duration-400 ${
        isDismissing ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute size-72 rounded-full bg-[#e3c40a]/10 blur-3xl pointer-events-none -z-10" />

      {/* Center Card */}
      <div className="w-full max-w-sm rounded-[24px] bg-[#141414] border border-white/10 p-7 sm:p-8 flex flex-col items-center shadow-2xl">
        
        {/* Desktop Monitor Graphic */}
        <div className="size-20 rounded-2xl bg-[#e3c40a]/15 border border-[#e3c40a]/30 flex items-center justify-center mb-6 text-[#e3c40a] shadow-[0_0_30px_rgba(227,196,10,0.2)]">
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="14" x="2" y="3" rx="2" />
            <line x1="8" x2="16" y1="21" y2="21" />
            <line x1="12" x2="12" y1="17" y2="21" />
          </svg>
        </div>

        {/* Brand Tag */}
        <p className="text-xs font-semibold uppercase tracking-[3px] text-[#e3c40a] mb-2 font-sans">
          Bhargava Nandan
        </p>

        {/* Heading */}
        <h2
          className="text-2xl sm:text-[28px] font-black leading-tight text-white mb-3"
          style={{ fontFamily: "'Elsie', serif" }}
        >
          Desktop Site Recommended
        </h2>

        {/* Description */}
        <p className="text-[#a1a1a1] text-sm leading-relaxed mb-6 font-sans">
          This editing portfolio contains high-resolution video showcases and widescreen layouts crafted for desktop screens.
        </p>

        {/* Chrome Instruction Box */}
        <div className="w-full rounded-xl bg-black/50 border border-white/5 p-3.5 mb-6 text-left flex items-start gap-3">
          <div className="size-6 rounded-md bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-white text-xs font-bold">
            ⋮
          </div>
          <div className="text-xs text-[#c4c4c4] leading-relaxed font-sans">
            <span className="font-semibold text-white">In Google Chrome:</span> Tap the <span className="text-[#e3c40a] font-bold">⋮</span> menu at top right and enable <span className="text-[#e3c40a] font-bold">☑ Desktop site</span>.
          </div>
        </div>

        {/* Primary Action Button: "Open Website" */}
        <button
          type="button"
          onClick={handleOpenWebsite}
          className="w-full py-4 px-6 rounded-full bg-[#e3c40a] hover:bg-[#ebd234] text-black font-bold text-sm tracking-wide transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_rgba(227,196,10,0.4)] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
        >
          <span>Open Website</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>

      </div>
    </div>
  );
}
