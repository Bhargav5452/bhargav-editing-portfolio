'use client';

import { useEffect, useState } from 'react';

export default function DesktopRecommendationToast() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if dismissed previously in this session
    const dismissed = sessionStorage.getItem('dismissed_desktop_notice');
    if (!dismissed) {
      // Delay entrance slightly for smooth appearance
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('dismissed_desktop_notice', '1');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 inset-x-4 z-50 flex justify-center pointer-events-none md:hidden">
      <div className="pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-full bg-black/85 backdrop-blur-xl border border-white/15 text-white shadow-2xl animate-fade-in max-w-sm w-full">
        {/* Computer / Desktop Icon */}
        <div className="size-8 rounded-full bg-[#e3c40a]/20 border border-[#e3c40a]/40 flex items-center justify-center shrink-0 text-[#e3c40a]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="14" x="2" y="3" rx="2" />
            <line x1="8" x2="16" y1="21" y2="21" />
            <line x1="12" x2="12" y1="17" y2="21" />
          </svg>
        </div>

        {/* Text */}
        <div className="flex flex-col flex-1 min-w-0">
          <p className="text-xs font-semibold text-white tracking-wide">
            Desktop Recommended
          </p>
          <p className="text-[11px] text-[#a3a3a3] truncate">
            View on a computer for the full 4K editing experience.
          </p>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={dismiss}
          className="size-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#d4d4d4] hover:text-white transition-colors shrink-0"
          aria-label="Dismiss notice"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
