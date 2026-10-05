import React from 'react';
import { Sparkles, Flame, Zap } from 'lucide-react';

export const WebDevTicker: React.FC = () => {
  const discounts = [
    { label: "Business Scale Matrix", wasPrice: "₹22,500", nowPrice: "₹16,499", off: "SAVE 27%", code: "PROMO::GROWTH" },
    { label: "High-Speed Edge Cloud", wasPrice: "₹4,999", nowPrice: "₹3,999", off: "EDGE LAUNCH", code: "PROMO::EDGE" },
    { label: "Managed Ops + 2hr Dev", wasPrice: "₹9,999", nowPrice: "₹7,999", off: "POPULAR", code: "PROMO::OPS" },
    { label: "Bespoke Landing Page", wasPrice: "₹9,999", nowPrice: "₹6,499", off: "FLASH DEAL", code: "PROMO::LANDING" },
  ];

  const repeated = [...discounts, ...discounts, ...discounts, ...discounts];

  return (
    <div className="w-full bg-black/95 border-b border-[#c8ff00]/30 py-2 overflow-hidden backdrop-blur-xl sticky top-0 z-40 shadow-[0_4px_20px_rgba(200,255,0,0.1)]">
      <div className="animate-infinite-marquee flex items-center gap-10 whitespace-nowrap font-mono">
        {repeated.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#c8ff00]/15 text-[#c8ff00] font-black text-[10px] tracking-wider uppercase border border-[#c8ff00]/40 shadow-[0_0_10px_rgba(200,255,0,0.2)]">
              <Zap className="w-2.5 h-2.5 fill-current" />
              {item.off}
            </span>
            <span className="font-bold text-white tracking-wide">{item.label}</span>
            <span className="line-through text-white/30 text-[11px]">{item.wasPrice}</span>
            <span className="font-black text-[#c8ff00] text-xs sm:text-sm glow-lime tracking-tight">{item.nowPrice}</span>
            <span className="text-white/20 text-[10px] font-normal">[{item.code}]</span>
            <span className="text-[#00f0ff]/40 text-xs ml-2">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
