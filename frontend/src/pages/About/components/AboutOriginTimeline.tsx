import React, { useState } from 'react';
import { Compass, Sparkles, CheckCircle2, ArrowRight, Zap, Award, Calendar } from 'lucide-react';

export const AboutOriginTimeline: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(0);

  const milestones = [
    {
      year: "2022",
      badge: "THE GENESIS",
      accent: "#c8ff00",
      title: "The Genesis in Barabanki, India",
      headline: "Two builders, one laptop each, and a relentless refusal to ship mediocre work.",
      desc: "dotUniverse was founded in Barabanki, Uttar Pradesh as a lean digital engineering duo. In our first 9 months, we signed and delivered 10+ high-impact web and marketing campaigns for local businesses and regional enterprises, proving that world-class execution knows no geographical limits.",
      stats: "10+ Early Clients • 100% Sign-off",
      takeaways: [
        "First viral local business campaigns deployed",
        "Zero debt, 100% bootstrapped & profitable from Day 1",
        "Established core culture: raw speed and uncompromised quality",
      ]
    },
    {
      year: "2023",
      badge: "EXPANSION",
      accent: "#00f0ff",
      title: "E-Commerce Velocity & Cross-Border Scaling",
      headline: "Taking brands from domestic shops to international retail dominance.",
      desc: "We scaled our creative and media buying operations, building custom e-commerce engines and wiring direct Instagram checkout pipelines. We landed our first cross-border accounts in London and the Middle East, consistently doubling client conversion rates on launch day.",
      stats: "2.4x In-Store Footfall • 300% Global Sales Jump",
      takeaways: [
        "Integrated custom headless e-commerce architectures",
        "Pioneered high-retention 3-second hook video production",
        "Opened London and UAE remote partner pipelines",
      ]
    },
    {
      year: "2024",
      badge: "DEEP TECH & AI",
      accent: "#ec4899",
      title: "Full-Stack Software & AI Automation Lab",
      headline: "Transforming from a creative agency into an elite digital engineering collective.",
      desc: "We expanded into cloud-native microservices, Next.js web applications, and autonomous AI agents. Built enterprise software portals handling real-time data, and automated repetitive client workflows using custom LLM agents and server-side tracking.",
      stats: "30+ Cloud Microservices • 0.6s Hydration Speeds",
      takeaways: [
        "Launched enterprise Next.js and Flutter app development division",
        "Deployed first autonomous AI agent swarms for client customer support",
        "Surpassed $5M+ in tracked client transaction pipeline",
      ]
    },
    {
      year: "2025",
      badge: "ACADEMY & MEDIA",
      accent: "#fbbf24",
      title: "Multi-Million Ad Spend & dotUniverse Academy",
      headline: "Training the next generation of builders while scaling 8-figure client accounts.",
      desc: "Crossed multi-million dollar annual managed ad spend with a verified 4.8x blended ROAS across global accounts. Founded dotUniverse Academy to teach practical, production-level software engineering and performance marketing to 1,200+ aspiring builders.",
      stats: "4.8x Mean ROAS • 1,200+ Students Mentored",
      takeaways: [
        "Sustained 94.2% student placement and career acceleration rate",
        "Server-side Meta CAPI & Google Offline Conversion mastery",
        "Established weekly executive founder syncs and SLA guarantees",
      ]
    },
    {
      year: "2026",
      badge: "DOTUNIVERSE 3.0",
      accent: "#ff005e",
      title: "Global Autonomous Growth Collective",
      headline: "Deploying high-frequency digital dominance for ambitious founders worldwide.",
      desc: "Today, dotUniverse operates as a borderless digital powerhouse. From our Barabanki roots to international client teams in Mayfair, London and DIFC, Dubai, we continue to push the boundaries of what is possible on the web.",
      stats: "50+ Global Enterprise Deployments • 98% Client Retention",
      takeaways: [
        "Full-stack Web, Mobile App, Growth Marketing & AI under one roof",
        "Real-time client telemetry and 24hr emergency dev hotlines",
        "Active expansion into next-generation spatial computing & agentic AI",
      ]
    },
  ];

  const active = milestones[selectedMilestone];

  return (
    <section id="origin-timeline" className="relative py-28 sm:py-36 overflow-hidden border-t border-white/10 bg-black cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c8ff00]/10 border border-[#c8ff00]/30 text-[#c8ff00] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>[ THE EVOLUTIONARY TIMELINE ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-sans">
            From Day 0 to <br />
            <span className="bg-gradient-to-r from-[#c8ff00] via-[#00f0ff] to-[#ff005e] bg-clip-text text-transparent">
              Global Digital Powerhouse
            </span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg">
            Track our journey of relentless innovation, from our founding in Barabanki to multi-national engineering and marketing deployments worldwide.
          </p>

          {/* Interactive Year Scrubber */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-2 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl max-w-xl mx-auto">
            {milestones.map((m, idx) => {
              const isSelected = selectedMilestone === idx;
              return (
                <button
                  key={m.year}
                  type="button"
                  onClick={() => setSelectedMilestone(idx)}
                  className={`flex-1 min-w-[70px] py-3 rounded-xl font-mono text-sm font-black transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#c8ff00] to-[#00f0ff] text-black shadow-[0_0_20px_rgba(200,255,0,0.4)] scale-105'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {m.year}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Milestone Card */}
        <div className="max-w-5xl mx-auto rounded-3xl p-6 sm:p-12 border border-white/20 bg-gradient-to-b from-white/[0.04] to-black/95 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          {/* Subtle Glow */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-20"
            style={{ backgroundColor: active.accent }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span
                  className="px-3.5 py-1 rounded-full font-mono text-xs font-black uppercase border"
                  style={{
                    backgroundColor: `${active.accent}15`,
                    borderColor: `${active.accent}40`,
                    color: active.accent,
                  }}
                >
                  {active.badge} • {active.year}
                </span>
                <span className="text-white/40 text-xs font-mono">Milestone Sprint</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-white font-sans leading-tight">
                {active.title}
              </h3>

              <div className="text-sm sm:text-base font-bold text-white/90 italic font-serif">
                &ldquo;{active.headline}&rdquo;
              </div>

              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal pt-2">
                {active.desc}
              </p>

              {/* Takeaways list */}
              <div className="mt-6 space-y-2 border-t border-white/10 pt-4">
                <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
                  KEY ADVANCEMENTS:
                </div>
                {active.takeaways.map((t) => (
                  <div key={t} className="flex items-start gap-2.5 text-xs text-white/80">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: active.accent }} />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right KPI Callout */}
            <div className="lg:col-span-4 rounded-2xl p-6 sm:p-8 border border-white/15 bg-gradient-to-br from-white/[0.04] to-black flex flex-col justify-between text-center sm:text-left">
              <div>
                <span className="text-[10px] font-mono text-white/40 uppercase block mb-1">
                  HISTORICAL BENCHMARK
                </span>
                <div
                  className="text-2xl sm:text-3xl font-black font-mono tracking-tight leading-snug"
                  style={{ color: active.accent }}
                >
                  {active.stats}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="text-xs font-mono text-white/50 block">Next Milestone</span>
                <button
                  type="button"
                  onClick={() => setSelectedMilestone((selectedMilestone + 1) % milestones.length)}
                  className="mt-2 w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-black bg-white hover:bg-white/90 transition-all cursor-pointer shadow-md"
                >
                  <span>Advance Timeline</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
