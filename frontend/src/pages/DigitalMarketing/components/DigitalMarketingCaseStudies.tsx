import React from 'react';
import { Star, CheckCircle2, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { TESTIMONIALS, PORTFOLIO_PROJECTS } from '../../../constants';

export const DigitalMarketingCaseStudies: React.FC = () => {
  // Focus on marketing-centric portfolio items
  const featuredCases = [
    {
      title: "Visa Direct",
      category: "Cross-Border Performance Funnels",
      result: "Boosted inquiry conversions by 310% through targeted international social funnels",
      stats: "310% More Leads",
      tags: ["Google Ads", "Meta Ads", "Analytics"],
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80",
      quote: "dotUniverse engineered custom cross-border ad sets that pinpointed high-intent applicants, dropping our acquisition cost by over 40%."
    },
    {
      title: "El Broasteria",
      category: "Local Footfall & Viral Social",
      result: "Built a bold visual brand identity and digital ordering platform that drove massive footfall",
      stats: "2.4x In-Store Footfall",
      tags: ["Next.js", "Brand Identity", "Google Local"],
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
      quote: "Their local Google Maps optimization and short-form Reels campaign created lines out the door on opening weekend."
    }
  ];

  return (
    <section id="case-studies" className="relative py-28 sm:py-36 overflow-hidden border-t border-white/10 bg-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ec4899]/10 border border-[#ec4899]/35 text-[#f472b6] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-[#ec4899]" />
            <span>[ VERIFIED REVENUE RESULTS ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-sans">
            Real Clients. <br />
            <span className="bg-gradient-to-r from-[#ec4899] via-[#f43f5e] to-[#a855f7] bg-clip-text text-transparent">
              Measurable Revenue Surge.
            </span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg">
            See how our multi-channel growth systems consistently shatter growth ceilings for real companies.
          </p>
        </div>

        {/* 2 Featured Deep-Dive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredCases.map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.04] to-black/95 p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative group hover:border-[#ec4899]/50 transition-all duration-300"
            >
              <div>
                <div className="relative rounded-2xl overflow-hidden mb-6 h-60">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-[#f472b6]">
                    {c.category}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-2xl font-black text-white">{c.title}</span>
                  </div>
                </div>

                <p className="text-sm text-white/80 leading-relaxed italic">
                  &ldquo;{c.quote}&rdquo;
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Outcome Metric */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-white/40 uppercase">VERIFIED RESULT</div>
                  <div className="text-xl sm:text-2xl font-black font-mono text-[#f472b6]">
                    {c.stats}
                  </div>
                </div>

                <a
                  href="#growth-audit"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-[#ec4899] transition-colors"
                >
                  <span>Replicate For Your Brand</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Real Client Testimonials Grid */}
        <div className="border-t border-white/10 pt-16">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-bold text-white/50 uppercase tracking-widest block">
              FOUNDER ENDORSEMENTS
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
              What Leaders Say About dotUniverse
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="rounded-3xl p-6 sm:p-8 border border-white/10 bg-white/[0.02] flex flex-col justify-between group hover:border-[#ec4899]/30 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(t.stars)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#ec4899] text-[#ec4899]" />
                      ))}
                    </div>
                    <span className="font-mono text-[10px] text-white/40">VERIFIED CLIENT</span>
                  </div>

                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="mt-6 p-3 rounded-xl bg-[#ec4899]/10 border border-[#ec4899]/30 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f472b6] shrink-0" />
                    <span className="font-mono text-xs font-bold text-[#f472b6]">
                      {t.result}
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-white/20"
                  />
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-[#f472b6] transition-colors">
                      {t.name}
                    </div>
                    <div className="text-xs text-white/60">{t.role}</div>
                    <div className="font-mono text-[11px] text-white/40">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
