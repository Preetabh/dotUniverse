import React from 'react';
import { Star, Crown, CheckCircle2, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../../constants';

export const AppDevTestimonials: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden border-t border-[#D4AF37]/20 bg-black/95">
      <div className="absolute top-1/2 left-10 w-[600px] h-[600px] bg-[#D4AF37]/8 rounded-full blur-[200px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#F5D061] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <Crown className="w-3.5 h-3.5" />
            <span>[ CLIENT SUCCESS STORIES ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-sans">
            Endorsed By <br />
            <span className="gold-gradient-text font-serif italic glow-gold">Our Partners</span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg">
            Proven outcomes from distinguished founders and business leaders who scaled with dotUniverse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="luxury-glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F5D061] text-[#F5D061]" />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] text-[#F5D061]">
                    VERIFIED CLIENT
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed italic font-serif">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Metric / Result Badge */}
                <div className="mt-6 p-3 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F5D061] shrink-0" />
                  <span className="font-mono text-xs font-bold text-[#F5D061]">
                    {t.result}
                  </span>
                </div>
              </div>

              {/* Founder Signoff */}
              <div className="mt-8 pt-4 border-t border-[#D4AF37]/15 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#D4AF37]/40"
                />
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-[#F5D061] transition-colors">
                    {t.name}
                  </div>
                  <div className="text-xs text-white/60">{t.role}</div>
                  <div className="font-mono text-[11px] text-white/40 mt-0.5">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
