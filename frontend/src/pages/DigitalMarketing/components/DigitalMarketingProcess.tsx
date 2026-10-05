import React from 'react';
import { ShieldCheck, Search, Video, Rocket, RefreshCw, ArrowRight } from 'lucide-react';

export const DigitalMarketingProcess: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Forensic Funnel & Creative Audit",
      timeline: "Days 1 — 3",
      icon: Search,
      accent: "#ec4899",
      desc: "We analyze historical ad accounts, scrape top competitor creatives, detect attribution leakage, and benchmark target Cost Per Acquisition (CPA).",
      bullets: [
        "Ad account health & policy compliance check",
        "Competitor ad library & hook teardown",
        "Attribution & conversion tracking diagnostics",
      ]
    },
    {
      num: "02",
      title: "Direct-Response Creative Studio",
      timeline: "Days 4 — 7",
      icon: Video,
      accent: "#f43f5e",
      desc: "We script, design, and render high-converting video and static creatives engineered with thumb-stopping 3-second psychological hooks.",
      bullets: [
        "10+ bespoke video & carousel creatives",
        "Angle split-testing (Problem-aware vs Solution-aware)",
        "Compelling direct-response ad copy & offers",
      ]
    },
    {
      num: "03",
      title: "Attribution & Pixel Hardening",
      timeline: "Days 8 — 10",
      icon: ShieldCheck,
      accent: "#06b6d4",
      desc: "Zero tracking blindness. We wire server-side Conversions API (CAPI), Google Tag Manager, GA4, and custom UTM taxonomy for iOS 14+ accuracy.",
      bullets: [
        "Server-Side Meta CAPI & Google Offline Conversions",
        "Custom event triggers & checkout milestone tracking",
        "Live real-time client reporting dashboard setup",
      ]
    },
    {
      num: "04",
      title: "Controlled Budget Scaling & Pruning",
      timeline: "Days 11 — 30",
      icon: Rocket,
      accent: "#a855f7",
      desc: "Ruthless capital efficiency. We aggressively shut down underperforming ad sets within 48 hours and scale winners by 20-30% daily without resetting algorithms.",
      bullets: [
        "Algorithmic Advantage+ & manual bid cap testing",
        "Dynamic budget reallocation into highest ROAS sets",
        "Daily Slack sync with your dedicated growth squad",
      ]
    },
    {
      num: "05",
      title: "Retention & LTV Flywheel",
      timeline: "Ongoing Optimization",
      icon: RefreshCw,
      accent: "#c8ff00",
      desc: "Turning one-off purchasers into lifetime revenue. Automated nurture flows, VIP win-backs, and cross-channel retargeting that compound your profits.",
      bullets: [
        "Automated Klaviyo & WhatsApp recovery flows",
        "Upsell & cross-sell funnel optimization",
        "Bi-weekly executive ROI & strategy audits",
      ]
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden border-t border-white/10 bg-black cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ec4899]/10 border border-[#ec4899]/30 text-[#f472b6] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <Rocket className="w-3.5 h-3.5" />
            <span>[ THE SCIENTIFIC SCALING SPRINT ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-sans">
            How We Turn Ad Spend Into <br />
            <span className="bg-gradient-to-r from-[#ec4899] via-[#f43f5e] to-[#a855f7] bg-clip-text text-transparent">
              Compounding Momentum
            </span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg">
            No guessing games or &ldquo;spray and pray&rdquo; advertising. A proven 5-phase scientific execution roadmap deployed across 50+ successful campaigns.
          </p>
        </div>

        {/* Process Flow Cards */}
        <div className="space-y-6">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 p-6 sm:p-10 relative overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Left Number & Title */}
                  <div className="lg:col-span-4 flex items-start gap-4">
                    <div
                      className="font-mono text-3xl sm:text-4xl font-black px-3.5 py-2 rounded-2xl border"
                      style={{
                        backgroundColor: `${st.accent}15`,
                        borderColor: `${st.accent}35`,
                        color: st.accent,
                      }}
                    >
                      {st.num}
                    </div>

                    <div>
                      <span className="font-mono text-xs font-bold text-white/40 uppercase tracking-wider block">
                        {st.timeline}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white mt-1 group-hover:text-white transition-colors">
                        {st.title}
                      </h3>
                    </div>
                  </div>

                  {/* Middle Description */}
                  <div className="lg:col-span-4">
                    <p className="text-sm text-white/70 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>

                  {/* Right Bullets */}
                  <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-6 space-y-2">
                    {st.bullets.map((b) => (
                      <div key={b} className="flex items-center gap-2 text-xs font-mono text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: st.accent }} />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
