import React from 'react';
import { TECH_MARQUEE } from '../../constants';
import { Layers } from 'lucide-react';

export const BrandMarquee: React.FC = () => {
  // Duplicate array to ensure infinite seamless loop
  const marqueeItems = [...TECH_MARQUEE, ...TECH_MARQUEE, ...TECH_MARQUEE];

  return (
    <div className="relative w-full py-6 border-y border-white/10 bg-black/60 backdrop-blur-md overflow-hidden">
      {/* Edge gradient masks for smooth fade in/out */}
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="animate-infinite-marquee flex items-center gap-4">
        {marqueeItems.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] hover:border-[#c8ff00]/50 hover:bg-white/[0.08] transition-all cursor-default group"
          >
            <div className="w-6 h-6 rounded-md bg-[#c8ff00]/10 flex items-center justify-center text-[#c8ff00] group-hover:scale-110 transition-transform">
              <Layers className="w-3.5 h-3.5" />
            </div>
            <span className="text-sm font-bold text-white tracking-wide group-hover:text-[#c8ff00] transition-colors">
              {tech.name}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-white/40 px-2 py-0.5 rounded bg-white/5">
              {tech.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
