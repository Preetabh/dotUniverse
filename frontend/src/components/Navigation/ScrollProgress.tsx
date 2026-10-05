import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const circumference = 2 * Math.PI * 18; // radius 18
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* Top Laser Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#c8ff00] via-[#00f0ff] to-[#ec4899] transition-[width] duration-150 ease-out shadow-[0_0_12px_rgba(0,240,255,0.8),0_0_6px_rgba(200,255,0,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Bottom-Right Circular Progress & Back-To-Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-zinc-950/90 border border-white/15 backdrop-blur-xl shadow-2xl flex items-center justify-center text-white/80 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
        >
          {/* Circular SVG Ring */}
          <svg className="w-12 h-12 -rotate-90 pointer-events-none absolute inset-0">
            <circle
              cx="24"
              cy="24"
              r="18"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="2.5"
              fill="transparent"
            />
            <circle
              cx="24"
              cy="24"
              r="18"
              stroke="url(#scrollProgressGradient)"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              className="transition-[stroke-dashoffset] duration-150 ease-out"
            />
            <defs>
              <linearGradient id="scrollProgressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c8ff00" />
                <stop offset="50%" stopColor="#00f0ff" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* Arrow Icon */}
          <ArrowUp className="w-4 h-4 text-[#c8ff00] group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </>
  );
};
