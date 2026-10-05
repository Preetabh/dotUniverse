import React from 'react';
import { Target, Layers, Cpu, CheckCircle } from 'lucide-react';

export const ExpertsServicesSection: React.FC = () => {
  const pillars = [
    {
      title: "Engineered for 99.9% Uptime",
      desc: "We don't cut corners with bloated themes. Every web and mobile app is cleanly coded with type-safety, automatic error-recovery, and blazing performance.",
      icon: Cpu,
      color: "#c8ff00",
      stats: "< 0.8s Load Time"
    },
    {
      title: "UI/UX Designed for Sales",
      desc: "Visual beauty is table stakes; conversion is our benchmark. We design high-contrast micro-interactions and frictionless funnels that turn visitors into paying customers.",
      icon: Layers,
      color: "#00f0ff",
      stats: "2.5x Avg. Conversion"
    },
    {
      title: "Hyper-Targeted Paid Acquisition",
      desc: "Stop wasting money on empty clicks. We structure multi-stage ad funnels with precise geo-targeting, creative A/B testing, and real revenue attribution.",
      icon: Target,
      color: "#ff005e",
      stats: "4.8x Return on Ad Spend"
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden border-t border-white/10 bg-zinc-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff005e] px-3 py-1 rounded-full bg-[#ff005e]/10 border border-[#ff005e]/30">
            ✦ The dotUniverse Standard
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Built by Specialists, Not Generalists
          </h2>
          <p className="mt-4 text-white/60 text-base sm:text-lg">
            Three core pillars behind every single digital asset we create.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative flex flex-col justify-between p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${pillar.color}15`, color: pillar.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#c8ff00] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-sm text-white/60 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold">
                  <span className="text-white/40 uppercase tracking-wider">Benchmark</span>
                  <span style={{ color: pillar.color }} className="font-extrabold text-sm">
                    {pillar.stats}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
