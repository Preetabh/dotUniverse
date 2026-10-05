import React from 'react';
import { Zap, ShieldCheck, Cpu, Target, ArrowRight } from 'lucide-react';

export const AboutPillars: React.FC = () => {
  const pillars = [
    {
      num: "01",
      title: "Ruthless Velocity",
      subtitle: "Speed is our weapon. Quality is our baseline.",
      accent: "#c8ff00",
      icon: Zap,
      desc: "While legacy agencies spend 6 weeks drafting bureaucratic proposals, our dedicated sprints deploy working production prototypes in 14 days flat.",
      features: [
        "Rapid 48-hour onboarding to first live sprint",
        "Continuous CI/CD automated deployments",
        "Direct communication without account manager middlemen",
      ]
    },
    {
      num: "02",
      title: "Radical Transparency",
      subtitle: "Zero agency vanity metrics. Total truth in numbers.",
      accent: "#00f0ff",
      icon: ShieldCheck,
      desc: "We do not hide behind meaningless impressions or slide deck jargon. You get daily real-time dashboards showing true bank revenue, blended ROAS, and user retention.",
      features: [
        "100% full legal ad account & source code ownership",
        "Daily automated telemetry sync via Slack & Discord",
        "Honest audits: we tell you what's broken before we scale",
      ]
    },
    {
      num: "03",
      title: "Deep Engineering Rigor",
      subtitle: "Built to withstand scale, not just pass a demo.",
      accent: "#ff005e",
      icon: Cpu,
      desc: "No fragile templates or sluggish plugins that buckle under traffic. We build bespoke full-stack applications with TypeScript, Next.js, and Redis caching that load in sub-seconds.",
      features: [
        "Sub-second page hydration & 95+ PageSpeed guarantee",
        "Type-safe schemas and zero-knowledge data security",
        "Modular tokenized architecture that grows with your team",
      ]
    },
    {
      num: "04",
      title: "Skin In The Game",
      subtitle: "We are growth partners, not transactional vendors.",
      accent: "#fbbf24",
      icon: Target,
      desc: "We align our incentives directly with your balance sheet. Our entire culture is geared toward compounding your customer lifetime value and expanding your profit margins.",
      features: [
        "Month-to-month flexibility without 12-month handcuffs",
        "Dedicated senior lead assigned to every account",
        "Long-term equity-minded strategic consulting",
      ]
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden border-t border-white/10 bg-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c8ff00]/10 border border-[#c8ff00]/30 text-[#c8ff00] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-[#c8ff00]" />
            <span>[ THE FOUR OPERATIONAL PILLARS ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-sans">
            How We Operate <br />
            <span className="bg-gradient-to-r from-[#c8ff00] via-[#00f0ff] to-[#ff005e] bg-clip-text text-transparent">
              Inside The Atelier
            </span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg">
            Our unwritten code of conduct. These four tenets dictate every line of code we write, every ad campaign we scale, and every design token we craft.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.num}
                className="rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group hover:border-white/30 shadow-xl"
              >
                {/* Accent glow on hover */}
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl pointer-events-none opacity-10 group-hover:opacity-30 transition-opacity"
                  style={{ backgroundColor: p.accent }}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border"
                      style={{
                        backgroundColor: `${p.accent}15`,
                        borderColor: `${p.accent}35`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: p.accent }} />
                    </div>

                    <span
                      className="font-mono text-2xl font-black"
                      style={{ color: p.accent }}
                    >
                      {p.num}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white group-hover:text-white transition-colors">
                    {p.title}
                  </h3>
                  <div className="text-xs font-mono text-white/50 mt-1 font-semibold">
                    {p.subtitle}
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                    {p.desc}
                  </p>

                  <div className="mt-6 space-y-2 border-t border-white/10 pt-4">
                    {p.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs font-mono text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: p.accent }} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-white/40">
                  <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                  <span>Standard on 100% of Engagements</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
