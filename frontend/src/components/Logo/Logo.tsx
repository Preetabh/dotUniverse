import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const sizeMap = {
    sm: { icon: 'w-8 h-8', text: 'text-lg', sub: 'text-[9px]' },
    md: { icon: 'w-10 h-10', text: 'text-xl', sub: 'text-[10px]' },
    lg: { icon: 'w-14 h-14', text: 'text-3xl', sub: 'text-xs' },
  };

  const { icon, text, sub } = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Cosmic Orbital Icon */}
      <div
        className={`relative ${icon} rounded-2xl bg-gradient-to-tr from-[#00f0ff]/20 via-[#c8ff00]/10 to-[#ff005e]/20 p-[1.5px] border border-white/10 group-hover:border-[#c8ff00]/50 transition-all duration-500 shadow-[0_0_20px_rgba(200,255,0,0.15)] group-hover:shadow-[0_0_30px_rgba(200,255,0,0.35)] shrink-0`}
      >
        <div className="w-full h-full bg-black/90 backdrop-blur-md rounded-[14px] flex items-center justify-center relative overflow-hidden">
          {/* Inner ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#c8ff00]/10 to-[#00f0ff]/10 opacity-70 group-hover:opacity-100 transition-opacity" />

          {/* SVG Vector Logo */}
          <svg
            viewBox="0 0 40 40"
            className="w-3/4 h-3/4 text-white relative z-10 transition-transform duration-700 group-hover:rotate-180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Primary Orbital Ellipse */}
            <ellipse
              cx="20"
              cy="20"
              rx="15"
              ry="7"
              transform="rotate(-25 20 20)"
              stroke="url(#universe-gradient)"
              strokeWidth="1.8"
              strokeDasharray="4 2"
              className="opacity-80 animate-spin"
              style={{ animationDuration: '16s', transformOrigin: 'center' }}
            />

            {/* Secondary Orbital Ellipse */}
            <ellipse
              cx="20"
              cy="20"
              rx="14"
              ry="6"
              transform="rotate(45 20 20)"
              stroke="#00f0ff"
              strokeWidth="1.2"
              className="opacity-60"
            />

            {/* Central Glowing Cosmic "Dot" */}
            <circle cx="20" cy="20" r="4.5" fill="#c8ff00" className="drop-shadow-[0_0_8px_#c8ff00]" />
            <circle cx="20" cy="20" r="2" fill="#ffffff" />

            {/* Orbiting Satellite Dot */}
            <circle cx="33" cy="14" r="1.5" fill="#ff005e" className="animate-pulse" />

            {/* Linear Gradients */}
            <defs>
              <linearGradient id="universe-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#c8ff00" />
                <stop offset="0.5" stopColor="#00f0ff" />
                <stop offset="1" stopColor="#ff005e" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Typography */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className={`font-black ${text} tracking-tight text-white flex items-center leading-none`}>
            <span>dot</span>
            <span className="bg-gradient-to-r from-[#c8ff00] via-[#00f0ff] to-white bg-clip-text text-transparent ml-0.5">
              Universe
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff00] ml-1 shadow-[0_0_8px_#c8ff00] animate-pulse"></span>
          </div>
          <span className={`uppercase tracking-[0.25em] text-white/40 ${sub} font-bold mt-1 leading-none`}>
            Digital Agency
          </span>
        </div>
      )}
    </div>
  );
};
