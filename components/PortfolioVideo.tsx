'use client';

import { useEffect, useRef, useState } from 'react';

interface PortfolioVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  showMuteButton?: boolean;
}

export default function PortfolioVideo({
  src,
  className = '',
  style = {},
  showMuteButton = true,
}: PortfolioVideoProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [manualPaused, setManualPaused] = useState(false);

  const hasStartedRef = useRef(false);
  const manualPausedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Ensure audio starts muted so modern browsers allow programmatic play
    video.muted = true;
    video.pause();

    // IntersectionObserver: Only start playing when the user enters the section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // User entered section: start or resume playback
            if (!manualPausedRef.current) {
              // If entering for the first time, ensure it starts cleanly from beginning
              if (!hasStartedRef.current) {
                video.currentTime = 0;
                hasStartedRef.current = true;
              }
              video
                .play()
                .then(() => setIsPlaying(true))
                .catch(() => {
                  setIsPlaying(false);
                });
            }
          } else {
            // User scrolled away from section: pause immediately
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      {
        threshold: 0.2, // Triggers when at least 20% of the video section is visible
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      manualPausedRef.current = false;
      setManualPaused(false);
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      manualPausedRef.current = true;
      setManualPaused(true);
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full group overflow-hidden cursor-pointer select-none"
      onClick={togglePlay}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 
        Video Player:
        - Starts ONLY when user scrolls and enters this section
        - Automatically pauses when scrolled out of view
        - Zero default browser chrome / timeline controls
      */}
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="auto"
        className={className}
        style={style}
      />

      {/* Floating Audio Button (Bottom-Right) - subtle on hover */}
      {showMuteButton && (
        <button
          type="button"
          onClick={toggleSound}
          className={`absolute bottom-6 right-6 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/65 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white text-xs font-sans tracking-wide transition-all duration-300 shadow-xl ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'
          }`}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? (
            <>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" x2="17" y1="9" y2="15" />
                <line x1="17" x2="23" y1="9" y2="15" />
              </svg>
              <span>Sound Off</span>
            </>
          ) : (
            <>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
              <span className="text-[#e3c40a] font-medium">Sound On</span>
            </>
          )}
        </button>
      )}

      {/* Play Overlay - only shown if the user explicitly clicked to pause */}
      {manualPaused && !isPlaying && (
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px] flex items-center justify-center z-10 transition-opacity">
          <div className="size-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-2xl pl-1">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
