import React from 'react';
import { Star, Crown, CheckCircle2, ShieldCheck, Quote } from 'lucide-react';

export const AppDevTestimonials: React.FC = () => {
  const reviews = [
    {
      client: "Alexandre Dupont",
      role: "Managing Director",
      company: "Haute Horlogerie Group",
      location: "Geneva, Switzerland 🇨🇭",
      quote: "Our patrons expect perfection. dotUniverse built an iOS experience with 120 FPS liquid animation that rivals the tactile feel of our mechanical timepieces. Private sales converted 3.8x higher on launch day.",
      metric: "3.8x VIP Sales Conversion",
      domain: "Luxury Retail & Tourbillon"
    },
    {
      client: "Tariq Al-Mansoor",
      role: "Chief Investment Officer",
      company: "Sovereign Asset Partners",
      location: "DIFC, Dubai 🇦🇪",
      quote: "We required zero-knowledge biometric encryption to manage multi-million dollar capital allocations. Their engineering team delivered with flawless execution and passed institutional audits with zero vulnerabilities.",
      metric: "$180M+ Capital Transacted",
      domain: "Private Wealth & Custody"
    },
    {
      client: "Sebastian Vance",
      role: "VP of Product",
      company: "JetStream Aviation",
      location: "Mayfair, London 🇬🇧",
      quote: "The live radar tracking and automated chauffeur dispatch took our members' flight booking time from 20 minutes down to 45 seconds. The app received App Store feature honors within 2 weeks of launch.",
      metric: "< 45s Booking Velocity",
      domain: "Private Aviation & Marine"
    },
    {
      client: "Dr. Ananya Sen",
      role: "Founder & Chief Scientist",
      company: "BioSyn Longevity",
      location: "Singapore 🇸🇬",
      quote: "Seamless Apple Watch Ultra sensor integration with zero background battery drain. Their deep understanding of native Swift APIs and CoreML set them apart from every agency we vetted in Asia and the US.",
      metric: "120K Daily Active Users",
      domain: "Connected Health & BioSync"
    }
  ];

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden border-t border-[#D4AF37]/20 bg-black/95">
      <div className="absolute top-1/2 left-10 w-[600px] h-[600px] bg-[#D4AF37]/8 rounded-full blur-[200px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#F5D061] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <Crown className="w-3.5 h-3.5" />
            <span>[ PRESTIGE ENDORSEMENTS ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-sans">
            Endorsed By <br />
            <span className="gold-gradient-text font-serif italic glow-gold">Industry Pioneers</span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg">
            Real outcomes from distinguished founders, asset managers, and luxury leaders who trust our atelier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <div
              key={r.client}
              className="luxury-glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F5D061] text-[#F5D061]" />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] text-[#F5D061]">
                    VERIFIED
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed italic font-serif">
                  &ldquo;{r.quote}&rdquo;
                </p>

                {/* Metric Badge */}
                <div className="mt-6 p-3 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F5D061] shrink-0" />
                  <span className="font-mono text-xs font-bold text-[#F5D061]">
                    {r.metric}
                  </span>
                </div>
              </div>

              {/* Founder Signoff */}
              <div className="mt-8 pt-4 border-t border-[#D4AF37]/15">
                <div className="text-sm font-bold text-white group-hover:text-[#F5D061] transition-colors">
                  {r.client}
                </div>
                <div className="text-xs text-white/60">{r.role}, {r.company}</div>
                <div className="font-mono text-[11px] text-white/40 mt-1">{r.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
