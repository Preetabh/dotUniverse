import React from 'react';
import { ABOUT_STATS } from '../../constants';
import { Check, ShieldCheck, Zap, Globe2, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#c8ff00]/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Headline */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c8ff00]/10 border border-[#c8ff00]/30 text-[#c8ff00] text-xs font-bold uppercase tracking-wider mb-6">
              <span>✦ Why Clients Choose Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.15] tracking-tight">
              We are Not Your Average{' '}
              <span className="text-[#c8ff00] underline decoration-[#c8ff00]/30 decoration-wavy">
                Digital Agency
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed font-normal">
              Most agencies hand you a template, outsource your communication, and disappear after delivery.
              At dotUniverse, we operate as an embedded digital innovation partner. We combine top-tier full-stack
              engineering, bespoke UI/UX product design, and aggressive conversion marketing to build digital assets that dominate.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                <div className="p-2 rounded-lg bg-[#c8ff00]/10 text-[#c8ff00] shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Rapid Execution</h4>
                  <p className="text-xs text-white/50 mt-0.5">Prototypes in days, production launches in weeks.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                <div className="p-2 rounded-lg bg-[#00f0ff]/10 text-[#00f0ff] shrink-0">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Cross-Border Reach</h4>
                  <p className="text-xs text-white/50 mt-0.5">Direct presence across India, UK, and UAE.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                <div className="p-2 rounded-lg bg-[#ff005e]/10 text-[#ff005e] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Code Ownership</h4>
                  <p className="text-xs text-white/50 mt-0.5">100% intellectual property ownership to you.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                <div className="p-2 rounded-lg bg-[#a855f7]/10 text-[#a855f7] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Guaranteed Quality</h4>
                  <p className="text-xs text-white/50 mt-0.5">Rigorous QA, 99.9% uptime, zero fluff.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Metrics Bento Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {ABOUT_STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-[#c8ff00]/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#c8ff00] tracking-tight">
                    {stat.value}
                  </div>
                  <h3 className="mt-4 text-base sm:text-lg font-bold text-white leading-snug">
                    {stat.label}
                  </h3>
                </div>
                <p className="mt-2 text-xs text-white/50 leading-relaxed">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
