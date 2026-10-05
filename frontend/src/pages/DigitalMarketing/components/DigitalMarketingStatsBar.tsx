import React from 'react';
import { TrendingUp, DollarSign, Zap, CheckCircle } from 'lucide-react';

export const DigitalMarketingStatsBar: React.FC = () => {
  const stats = [
    {
      value: "310%",
      label: "Average Lead Influx",
      detail: "Over 90-day execution cycle",
      icon: TrendingUp,
      accent: "#ec4899",
    },
    {
      value: "4.8x",
      label: "Blended Mean ROAS",
      detail: "Direct-to-consumer & B2B paid ads",
      icon: Zap,
      accent: "#f43f5e",
    },
    {
      value: "$12M+",
      label: "Tracked Client Revenue",
      detail: "Verified across global ad accounts",
      icon: DollarSign,
      accent: "#a855f7",
    },
    {
      value: "< 48h",
      label: "Launch Velocity",
      detail: "From onboarding to live ad sets",
      icon: CheckCircle,
      accent: "#06b6d4",
    },
  ];

  return (
    <section className="relative py-12 border-y border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="flex flex-col items-center sm:items-start text-center sm:text-left p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="p-1.5 rounded-lg"
                    style={{ backgroundColor: `${s.accent}20` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: s.accent }} />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider text-white/50">
                    {s.label}
                  </span>
                </div>
                <div
                  className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight"
                  style={{ color: s.accent }}
                >
                  {s.value}
                </div>
                <div className="text-xs text-white/60 mt-1 font-mono">{s.detail}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
