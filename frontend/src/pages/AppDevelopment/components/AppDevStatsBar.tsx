import React from 'react';
import { Award, Zap, ShieldCheck, DollarSign, Smartphone } from 'lucide-react';

export const AppDevStatsBar: React.FC = () => {
  const stats = [
    {
      value: "120 FPS",
      label: "Liquid Metal Shaders",
      sub: "Zero frame-drop gesture response",
      icon: Zap,
    },
    {
      value: "99.99%",
      label: "Crash-Free Sessions",
      sub: "Verified over 12M+ monthly sessions",
      icon: ShieldCheck,
    },
    {
      value: "< 48 Hrs",
      label: "App Store Certification",
      sub: "100% first-pass review track record",
      icon: Award,
    },
    {
      value: "$450M+",
      label: "Transactions Handled",
      sub: "Secured via biometric hardware enclave",
      icon: DollarSign,
    },
  ];

  return (
    <div className="w-full border-y border-[#D4AF37]/25 bg-black/80 backdrop-blur-2xl py-8 relative overflow-hidden">
      {/* Subtle gold line accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F5D061]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#D4AF37]/15">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className={`flex flex-col items-center text-center p-3 ${
                  idx > 0 ? 'sm:pl-8' : ''
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-4 h-4 text-[#F5D061]" />
                  <span className="font-mono text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                    {s.value}
                  </span>
                </div>
                <div className="font-serif italic text-sm text-[#F5D061]">
                  {s.label}
                </div>
                <div className="text-[11px] text-white/50 mt-1 font-mono">
                  {s.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
