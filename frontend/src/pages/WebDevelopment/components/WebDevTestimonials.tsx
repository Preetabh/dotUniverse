import React from 'react';
import { Star, CheckCircle2, Award } from 'lucide-react';
import { TESTIMONIALS } from '../../../constants';

export const WebDevTestimonials: React.FC = () => {
  const accents = ['#c8ff00', '#00f0ff', '#ff005e'];

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden border-t border-white/10 bg-black/95 cyber-grid">
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#c8ff00]/10 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c8ff00]/10 border border-[#c8ff00]/30 text-[#c8ff00] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>[ VERIFIED PERFORMANCE PROOF ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-sans">
            Trusted By Founders &amp; <br />
            <span className="text-[#c8ff00] glow-lime">Modern Enterprise Leaders</span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg">
            Real outcomes from real deployments. Discover how our engineering standards translate
            into immediate business momentum and ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => {
            const accent = accents[idx % accents.length];
            return (
              <div
                key={t.id}
                className="cyber-hud-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between group relative overflow-hidden transition-all duration-300"
              >
                <div className="hud-bracket-top-left" />
                <div className="hud-bracket-bottom-right" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(t.stars)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#c8ff00] text-[#c8ff00]" />
                      ))}
                    </div>
                    <span className="font-mono text-[10px] text-white/40">PROT::VERIFIED</span>
                  </div>

                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Metric Highlight Badge */}
                  <div
                    className="mt-6 p-3 rounded-xl border flex items-center gap-2.5"
                    style={{
                      backgroundColor: `${accent}10`,
                      borderColor: `${accent}30`,
                    }}
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: accent }} />
                    <span className="font-mono text-xs font-bold" style={{ color: accent }}>
                      {t.result}
                    </span>
                  </div>
                </div>

                {/* Founder Signoff */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover border border-white/20"
                    />
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-[#c8ff00] transition-colors">
                        {t.name}
                      </div>
                      <div className="text-xs text-white/50">{t.role}</div>
                    </div>
                  </div>
                  <div className="font-mono text-[11px] text-white/40">{t.location}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
