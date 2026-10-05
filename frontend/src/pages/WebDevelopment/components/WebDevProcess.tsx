import React, { useState } from 'react';
import {
  Compass,
  Layout,
  Palette,
  Code2,
  CheckCircle,
  Rocket,
  ArrowRight,
  Terminal,
  Activity,
  Layers,
  Sparkles,
  Cpu
} from 'lucide-react';

export const WebDevProcess: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  const steps = [
    {
      num: "01",
      code: "PHASE::DISCOVERY",
      title: "Discovery & Conversion Blueprint",
      shortDesc: "Auditing conversion leaks, defining scope, and mapping tech architectures.",
      deliverables: ["Product Specification Document", "Conversion Journey Map", "Technical Stack Matrix"],
      duration: "Days 1 - 4",
      icon: Compass,
      accent: "#c8ff00",
      details: "We deconstruct your competitive landscape, audit existing drop-off funnels, and draft the exact user flows needed to maximize checkout and inquiry conversions."
    },
    {
      num: "02",
      code: "PHASE::WIREFRAMING",
      title: "Information Architecture & IA",
      shortDesc: "Low-fidelity structural wireframing with high-conversion content hierarchy.",
      deliverables: ["Full UX Wireframes", "Content Placement Schematics", "Mobile UX Flowchart"],
      duration: "Days 5 - 9",
      icon: Layout,
      accent: "#00f0ff",
      details: "Blueprint every viewport before styling. We guarantee clear visual hierarchy, frictionless lead capture forms, and scannable value propositions."
    },
    {
      num: "03",
      code: "PHASE::DESIGN",
      title: "High-Fidelity Figma Prototypes",
      shortDesc: "Bespoke design systems, micro-interactions, dark/light themes, and interactive prototypes.",
      deliverables: ["Interactive Figma Prototype", "Design Token Library", "Responsive Mobile Variants"],
      duration: "Days 10 - 16",
      icon: Palette,
      accent: "#ff005e",
      details: "State-of-the-art UI with responsive typography, glassmorphism card systems, and interactive clickable prototypes you can test before writing code."
    },
    {
      num: "04",
      code: "PHASE::ENGINEERING",
      title: "Clean React & Next.js Build",
      shortDesc: "Type-safe modular coding, API integration, and edge SSR rendering.",
      deliverables: ["TypeScript Frontend Repository", "CMS Admin Integration", "Edge Server Deployment"],
      duration: "Days 17 - 28",
      icon: Code2,
      accent: "#a855f7",
      details: "Production-ready engineering using clean Git flow, strict TypeScript types, server components, and secure backend REST/GraphQL endpoints."
    },
    {
      num: "05",
      code: "PHASE::QA_AUDIT",
      title: "Hardening & 99+ Speed Profiling",
      shortDesc: "Cross-device responsiveness, stress testing, and Core Web Vitals optimization.",
      deliverables: ["Lighthouse 99+ Audit Report", "Security Vulnerability Scan", "Cross-Browser Testing Matrix"],
      duration: "Days 29 - 33",
      icon: CheckCircle,
      accent: "#10b981",
      details: "We profile every asset, optimize font loading with zero layout shift, eliminate render-blocking JS, and test across 25+ real mobile & desktop devices."
    },
    {
      num: "06",
      code: "PHASE::DEPLOY",
      title: "Orbital Launch & 120-Day Warranty",
      shortDesc: "Zero-downtime DNS migration, search console indexing, and dedicated support.",
      deliverables: ["Zero-Downtime DNS Cutover", "Google Search Console Indexing", "120-Day Dedicated Warranty"],
      duration: "Launch & Beyond",
      icon: Rocket,
      accent: "#f59e0b",
      details: "Seamless deployment to global edge CDN with automated backup protocols, SSL certification, and 4 full months of bug fixes and performance monitoring."
    },
  ];

  const currentStep = steps[selectedPhase];
  const CurrentIcon = currentStep.icon;

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden border-t border-white/10 bg-black/95 cyber-grid">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#00f0ff]/10 via-[#c8ff00]/10 to-[#ff005e]/10 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>[ SYSTEM EXECUTION PIPELINE ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-sans">
            Predictable 6-Stage <br />
            <span className="text-[#00f0ff] glow-cyan">Deployment Matrix</span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg">
            No guessing, no endless delays. We execute our engineering workflow with millisecond precision
            and full transparency from kickoff to launch.
          </p>
        </div>

        {/* Phase Navigation Pipeline Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {steps.map((s, idx) => {
            const isSelected = selectedPhase === idx;
            const Icon = s.icon;
            return (
              <button
                key={s.num}
                type="button"
                onClick={() => setSelectedPhase(idx)}
                className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden cursor-pointer ${
                  isSelected
                    ? 'bg-white/10 border-white shadow-[0_0_25px_rgba(0,240,255,0.3)]'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.05]'
                }`}
                style={{
                  borderColor: isSelected ? s.accent : undefined,
                }}
              >
                {isSelected && (
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ backgroundColor: s.accent }}
                  />
                )}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="font-mono text-xs font-bold"
                    style={{ color: isSelected ? s.accent : 'rgba(255,255,255,0.4)' }}
                  >
                    {s.num}
                  </span>
                  <Icon
                    className="w-4 h-4"
                    style={{ color: isSelected ? s.accent : 'rgba(255,255,255,0.4)' }}
                  />
                </div>
                <div className="text-xs font-bold text-white truncate">{s.title}</div>
                <div className="font-mono text-[10px] text-white/50 mt-1">{s.duration}</div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive Telemetry Box */}
        <div className="cyber-hud-card p-8 sm:p-12 rounded-3xl relative overflow-hidden border border-white/20">
          <div className="hud-bracket-top-left" />
          <div className="hud-bracket-bottom-right" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="font-mono text-xs font-bold px-3 py-1 rounded-md border"
                  style={{
                    borderColor: `${currentStep.accent}50`,
                    backgroundColor: `${currentStep.accent}15`,
                    color: currentStep.accent,
                  }}
                >
                  {currentStep.code}
                </span>
                <span className="font-mono text-xs text-white/40">
                  Sprint Window: {currentStep.duration}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-white font-sans">
                {currentStep.title}
              </h3>

              <p className="mt-4 text-base text-white/70 leading-relaxed font-normal">
                {currentStep.details}
              </p>

              {/* Deliverables Checklist */}
              <div className="mt-8">
                <div className="font-mono text-xs font-bold text-white/50 uppercase tracking-wider mb-3">
                  Verified Phase Deliverables:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentStep.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs sm:text-sm font-mono text-white/90"
                    >
                      <CheckCircle
                        className="w-4 h-4 shrink-0"
                        style={{ color: currentStep.accent }}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Telemetry Badge */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-2xl bg-black/60 border border-white/10 text-center relative">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-2xl"
                style={{
                  backgroundColor: `${currentStep.accent}15`,
                  color: currentStep.accent,
                  boxShadow: `0 0 35px ${currentStep.accent}30`,
                }}
              >
                <CurrentIcon className="w-10 h-10" />
              </div>

              <div className="font-mono text-xs text-white/50 uppercase tracking-widest">
                STAGE READINESS
              </div>
              <div className="text-2xl font-black text-white mt-1">100% SPEC COMPLIANT</div>
              <div className="mt-4 flex items-center gap-2 font-mono text-xs text-[#c8ff00]">
                <Activity className="w-4 h-4" />
                <span>Zero Technical Debt Protocol</span>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedPhase((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                  className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono text-white/70 hover:text-white cursor-pointer"
                >
                  ← Prev
                </button>
                <span className="font-mono text-xs text-white/40">
                  {selectedPhase + 1} / {steps.length}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedPhase((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                  className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono text-white/70 hover:text-white cursor-pointer"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
