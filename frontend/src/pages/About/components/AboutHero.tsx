import React, { useState } from 'react';
import {
  Compass,
  ArrowRight,
  Sparkles,
  Flame,
  ShieldCheck,
  CheckCircle2,
  Globe2,
  Terminal,
  Activity,
  Layers,
  Zap
} from 'lucide-react';
import { CTAButton } from '../../../components/Buttons/CTAButton';

export const AboutHero: React.FC = () => {
  const [activeDnaTab, setActiveDnaTab] = useState<'manifesto' | 'numbers' | 'creed'>('manifesto');

  const dnaContent = {
    manifesto: {
      tag: "THE REBEL DOJO",
      heading: "We build for founders who refuse to be ignored.",
      desc: "dotUniverse was born out of deep frustration with sluggish legacy agencies, bloated billable hours, and fragile cookie-cutter templates. We run like a Silicon Valley engineering sprint and a high-fashion atelier combined—obsessed with raw execution velocity and compounding customer lifetime value.",
      highlight: "Speed is our weapon. Quality is our baseline.",
      accent: "#c8ff00"
    },
    numbers: {
      tag: "PROVABLE SCALE",
      heading: "Real outcomes that translate directly into balance sheet equity.",
      desc: "From local titans in Uttar Pradesh to multi-national e-commerce and wealth portals in London and Dubai, dotUniverse has deployed 50+ mission-critical platforms, generated millions in tracked client ad revenue, and trained 1,200+ active engineers.",
      highlight: "50+ Enterprise Deployments • 98% Client Retention",
      accent: "#00f0ff"
    },
    creed: {
      tag: "THE UNWRITTEN CODE",
      heading: "Zero fluff. Full attribution. Total skin in the game.",
      desc: "Every line of TypeScript we write, every ad set we optimize, and every design token we craft is engineered to dominate your competitors. We do not hide behind vanity impressions or PowerPoint decks. If it does not drive revenue or brand equity, it does not exist in our work.",
      highlight: "100% IP Ownership • Zero Vendor Lock-in Handcuffs",
      accent: "#ff005e"
    }
  };

  const currentDna = dnaContent[activeDnaTab];

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#c8ff00]/15 border border-[#c8ff00]/40 text-[#c8ff00] font-mono text-xs font-bold uppercase tracking-wider mb-6 shadow-[0_0_25px_rgba(200,255,0,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-[#c8ff00] animate-spin-slow" />
            <span>[ THE DOTUNIVERSE ATELIER • EST. BARABANKI &amp; GLOBAL ]</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff00]" />
            <span className="text-white/60">Worldwide Remote Force</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight max-w-5xl leading-[1.05]">
            We Don&apos;t Follow Trends. <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#c8ff00] via-[#00f0ff] to-[#ff005e] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(200,255,0,0.35)]">
              We Engineer Digital Dominance.
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-base sm:text-xl text-white/75 max-w-3xl leading-relaxed">
            Headquartered in Barabanki with operational hubs spanning London, Dubai, and Delhi NCR, dotUniverse is an elite collective of software architects, growth media buyers, and visual storytellers building the next generation of global brands.
          </p>

          {/* Primary CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <CTAButton
              href="#founders"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto shadow-[0_0_35px_rgba(200,255,0,0.3)] hover:shadow-[0_0_50px_rgba(200,255,0,0.5)] font-mono font-bold tracking-wider"
            >
              <span>Meet The Leadership</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </CTAButton>

            <a
              href="#origin-timeline"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-sm uppercase tracking-wider transition-all hover:border-[#c8ff00] hover:text-[#c8ff00] cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#c8ff00]" />
              <span>Explore Our Evolution</span>
            </a>
          </div>

          {/* Guarantees Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/50 font-mono">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#c8ff00]" />
              <span>Headquartered in Barabanki, India</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00f0ff]" />
              <span>Global Client Network (UK • UAE • US)</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#ff005e]" />
              <span>50+ High-Performance Launches</span>
            </div>
          </div>
        </div>

        {/* Interactive DNA Console Card */}
        <div className="mt-16 relative max-w-5xl mx-auto rounded-3xl border border-white/15 bg-gradient-to-b from-[#101318]/95 via-[#08090d]/95 to-black/95 backdrop-blur-2xl p-6 sm:p-10 shadow-[0_0_80px_rgba(0,240,255,0.12)] overflow-hidden">
          
          {/* Top Window Strip */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#c8ff00]" />
                <span className="w-3 h-3 rounded-full bg-[#00f0ff]" />
                <span className="w-3 h-3 rounded-full bg-[#ff005e]" />
              </div>
              <span className="font-mono text-xs text-white/50 tracking-wider">
                CORE_ARCHITECTURE::DOTUNIVERSE_DNA.v3
              </span>
            </div>

            {/* Quick DNA Switcher Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-black/60 border border-white/10 w-full sm:w-auto">
              {[
                { id: 'manifesto', label: 'THE MANIFESTO' },
                { id: 'numbers', label: 'PROVABLE SCALE' },
                { id: 'creed', label: 'THE UNWRITTEN CODE' },
              ].map((t) => {
                const isSelected = activeDnaTab === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActiveDnaTab(t.id as any)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#c8ff00] text-black shadow-[0_0_15px_rgba(200,255,0,0.4)]'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active DNA Detail */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Specs */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span
                  className="px-3 py-1 rounded-md font-mono text-xs font-bold border"
                  style={{
                    backgroundColor: `${currentDna.accent}15`,
                    borderColor: `${currentDna.accent}40`,
                    color: currentDna.accent,
                  }}
                >
                  {currentDna.tag}
                </span>
                <span className="text-white/40 text-xs font-mono">Operating Standard</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                {currentDna.heading}
              </h2>

              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-normal">
                {currentDna.desc}
              </p>

              {/* Highlight Pill */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 mt-3 flex items-center gap-3">
                <Sparkles className="w-4 h-4 shrink-0" style={{ color: currentDna.accent }} />
                <span className="text-xs sm:text-sm font-mono font-bold text-white">
                  {currentDna.highlight}
                </span>
              </div>
            </div>

            {/* Right Mini Live Status Card */}
            <div className="lg:col-span-4 rounded-2xl p-6 border border-white/15 bg-gradient-to-br from-white/[0.04] to-black flex flex-col justify-between relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl pointer-events-none"
                style={{ backgroundColor: `${currentDna.accent}25` }}
              />

              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-[10px] font-mono text-white/40 uppercase">LIVE ATELIER STATUS</span>
                  <span className="flex items-center gap-1.5 text-[10px] font-mono text-[#10b981]">
                    <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
                    ONLINE
                  </span>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-white/40 uppercase">HEADQUARTERS</div>
                  <div className="text-sm font-bold text-white mt-0.5">Barabanki, Uttar Pradesh 🇮🇳</div>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-white/40 uppercase">DIRECT SUPPORT LINE</div>
                  <a
                    href="mailto:support.dotuniverse@gmail.com"
                    className="text-xs font-mono text-[#c8ff00] hover:underline"
                  >
                    support.dotuniverse@gmail.com
                  </a>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-white/40 uppercase">ACTIVE TIMEZONES</div>
                  <div className="text-xs font-mono text-white/70 mt-0.5">IST (+05:30) • GMT • GST</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href="#radar-hubs"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-black bg-white hover:bg-white/90 transition-all cursor-pointer shadow-md"
                >
                  <span>View Global Hubs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
