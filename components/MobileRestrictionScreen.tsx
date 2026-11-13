'use client';

export default function MobileRestrictionScreen() {
  return (
    <aside
      aria-label="Desktop site required"
      className="fixed inset-0 z-[99999] bg-black text-white flex flex-col items-center justify-center p-8 text-center md:hidden select-none"
    >
      <div className="flex flex-col items-center max-w-[280px]">
        {/* Minimal monitor icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white/80 mb-6"
        >
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>

        <h2 className="text-white text-base font-medium tracking-tight mb-2">
          Desktop site required
        </h2>

        <p className="text-white/60 text-xs leading-relaxed">
          In Chrome, tap <span className="text-white font-semibold">⋮</span> and enable{' '}
          <span className="text-white font-semibold">Desktop site</span>, or open on a computer.
        </p>
      </div>
    </aside>
  );
}
