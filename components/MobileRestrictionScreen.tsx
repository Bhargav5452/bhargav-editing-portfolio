'use client';

export default function MobileRestrictionScreen() {
  return (
    <div className="fixed inset-0 z-[99999] bg-[#0c0c0c] text-white flex flex-col items-center justify-center p-6 text-center md:hidden select-none">
      {/* Background golden glow */}
      <div className="absolute size-80 rounded-full bg-[#e3c40a]/10 blur-3xl pointer-events-none -z-10" />

      {/* Center Container */}
      <div className="w-full max-w-sm rounded-[24px] bg-[#141414] border border-white/10 p-8 flex flex-col items-center shadow-2xl">
        
        {/* Device Icon: Monitor & Tablet */}
        <div className="size-20 rounded-2xl bg-[#e3c40a]/15 border border-[#e3c40a]/30 flex items-center justify-center mb-6 text-[#e3c40a] shadow-[0_0_30px_rgba(227,196,10,0.2)]">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="12" x="3" y="3" rx="2" />
            <line x1="7" y1="19" x2="17" y2="19" />
            <line x1="12" y1="15" x2="12" y2="19" />
          </svg>
        </div>

        {/* Brand Tag */}
        <p className="text-xs font-semibold uppercase tracking-[3px] text-[#e3c40a] mb-2 font-sans">
          Bhargava Nandan
        </p>

        {/* Heading */}
        <h1
          className="text-2xl sm:text-[26px] font-black leading-tight text-white mb-3"
          style={{ fontFamily: "'Elsie', serif" }}
        >
          Desktop or Tablet Only
        </h1>

        {/* Description */}
        <p className="text-[#a1a1a1] text-sm leading-relaxed mb-6 font-sans">
          This editing portfolio is built exclusively for desktop and tablet screens to showcase high-bitrate video sequences and widescreen layouts.
        </p>

        {/* Chrome Instruction Card */}
        <div className="w-full rounded-xl bg-black/60 border border-white/10 p-4 text-left flex items-start gap-3">
          <div className="size-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-white text-sm font-bold">
            ⋮
          </div>
          <div className="text-xs text-[#c4c4c4] leading-relaxed font-sans">
            <span className="font-semibold text-white">To view on this phone:</span>
            <br />
            Tap the <span className="text-[#e3c40a] font-bold">⋮</span> menu at top right of Chrome and select <span className="text-[#e3c40a] font-bold">☑ Desktop site</span>.
          </div>
        </div>

      </div>
    </div>
  );
}
