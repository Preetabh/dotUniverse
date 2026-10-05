import React, { useEffect, useState } from 'react';
import { Logo } from '../Logo/Logo';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('CALIBRATING ORBITS...');
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const phases = [
      { threshold: 25, text: 'SYNCHRONIZING DIGITAL ARCHITECTURE...' },
      { threshold: 55, text: 'PREPARING FULL-STACK ENGINES...' },
      { threshold: 85, text: 'CONNECTING TO DOTUNIVERSE...' },
      { threshold: 100, text: 'WELCOME TO DOTUNIVERSE' },
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              setIsHidden(true);
              if (onComplete) onComplete();
            }, 700);
          }, 300);
          return 100;
        }

        const next = Math.min(prev + Math.floor(Math.random() * 8) + 4, 100);
        const currentPhase = phases.find((p) => next <= p.threshold) || phases[phases.length - 1];
        setPhase(currentPhase.text);
        return next;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (isHidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-all duration-700 select-none ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none filter blur-sm' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#c8ff00]/15 via-[#00f0ff]/10 to-[#ff005e]/15 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      {/* Main Loader Container */}
      <div className="relative z-10 flex flex-col items-center px-6 max-w-md w-full text-center">
        {/* Animated Brand Logo Mark */}
        <div className="relative mb-8">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#c8ff00] to-[#00f0ff] rounded-full blur-xl opacity-20 animate-pulse" />
          <Logo size="lg" showText={false} />
        </div>

        {/* Brand Name */}
        <div className="font-black text-2xl sm:text-3xl tracking-tight text-white flex items-center">
          <span>dot</span>
          <span className="bg-gradient-to-r from-[#c8ff00] via-[#00f0ff] to-white bg-clip-text text-transparent ml-1">
            Universe
          </span>
          <span className="w-2 h-2 rounded-full bg-[#c8ff00] ml-1.5 shadow-[0_0_12px_#c8ff00] animate-ping" />
        </div>

        {/* Progress Counter & Phase */}
        <div className="mt-8 w-full">
          <div className="flex items-center justify-between text-xs font-mono text-white/50 mb-2">
            <span className="tracking-widest uppercase font-semibold text-white/70">
              {phase}
            </span>
            <span className="text-[#c8ff00] font-black tracking-wider text-sm">
              {progress}%
            </span>
          </div>

          {/* Progress Bar Track */}
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden p-[1px] border border-white/5 relative">
            <div
              className="h-full bg-gradient-to-r from-[#c8ff00] via-[#00f0ff] to-[#ff005e] rounded-full transition-all duration-150 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
            </div>
          </div>
        </div>

        {/* Subtext info */}
        <div className="mt-6 flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-white/40">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff00] inline-block animate-pulse" />
          <span>Full-Service Digital Company</span>
        </div>
      </div>
    </div>
  );
};
