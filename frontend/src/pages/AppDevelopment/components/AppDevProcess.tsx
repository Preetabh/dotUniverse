import React, { useState } from 'react';
import {
  Compass,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  CheckCircle,
  Crown,
  ChevronRight,
  Clock,
  Sparkles
} from 'lucide-react';

export const AppDevProcess: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  const stages = [
    {
      num: "01",
      code: "PHASE::DISCOVERY",
      title: "Haute Discovery & Product Architecture",
      timeline: "Weeks 1 - 2",
      icon: Compass,
      desc: "We define core product mechanics, competitive positioning, and technical architecture — mapping every user journey before design begins.",
      deliverables: [
        "Product Requirement Document (PRD)",
        "End-to-End User Flow Schematics",
        "Technical Stack & Database Matrix",
        "Cloud Infrastructure Architecture"
      ]
    },
    {
      num: "02",
      code: "PHASE::BESPOKE_DESIGN",
      title: "Luxury UI/UX & Haptic Prototyping",
      timeline: "Weeks 3 - 5",
      icon: Palette,
      desc: "Crafted strictly in accordance with Apple Human Interface Guidelines and Material 3, incorporating subtle tactile haptics and dark/light luxury palettes.",
      deliverables: [
        "Clickable Interactive Figma Prototype",
        "Micro-Interaction & Motion Specs",
        "Custom Design System & Tokens",
        "High-Fidelity App Store Mockups"
      ]
    },
    {
      num: "03",
      code: "PHASE::ENGINEERING",
      title: "Native Engineering & 120 FPS Build",
      timeline: "Weeks 6 - 10",
      icon: Code2,
      desc: "Rigorous Swift / Kotlin / Flutter development with clean Git branch protections, modular dependency injection, and biometric hardware security integration.",
      deliverables: [
        "Production Native Code Repository",
        "Biometric Hardware Enclave Auth",
        "Cloud Sync & Offline Database Engine",
        "Continuous Integration Test Runner"
      ]
    },
    {
      num: "04",
      code: "PHASE::HARDENING",
      title: "Security Penetration & Battery Profiling",
      timeline: "Weeks 11 - 12",
      icon: ShieldCheck,
      desc: "Benchmarking 120 FPS frame consistency, auditing network payloads, eliminating memory leaks, and conducting rigorous security penetration scans.",
      deliverables: [
        "Zero-Memory Leak Profiler Report",
        "Network Payload & Battery Audit",
        "Penetration Vulnerability Scan",
        "TestFlight Beta Distribution Ring"
      ]
    },
    {
      num: "05",
      code: "PHASE::ORBITAL_LAUNCH",
      title: "VIP App Store Release & 180-Day Concierge",
      timeline: "Launch & Beyond",
      icon: Rocket,
      desc: "Guaranteed first-pass approval on both Apple App Store and Google Play, accompanied by 6 months of VIP technical concierge and crash-free monitoring.",
      deliverables: [
        "100% App Store Certification",
        "Google Play Store Global Release",
        "Realtime Crashlytics Dashboard",
        "180-Day Dedicated Engineering Warranty"
      ]
    }
  ];

  const current = stages[selectedPhase];
  const CurrentIcon = current.icon;

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden border-t border-[#D4AF37]/20 bg-black">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[#D4AF37]/8 rounded-full blur-[200px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#F5D061] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>[ THE ATELIER METHODOLOGY ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-sans">
            Precision Execution <br />
            <span className="gold-gradient-text font-serif italic glow-gold">From Blueprint to Launch</span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg">
            Our structured 5-stage engineering lifecycle gives you complete transparency, milestones,
            and weekly TestFlight builds without ambiguity.
          </p>
        </div>

        {/* Phase Timeline Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
          {stages.map((st, idx) => {
            const isSelected = selectedPhase === idx;
            const Icon = st.icon;
            return (
              <button
                key={st.num}
                type="button"
                onClick={() => setSelectedPhase(idx)}
                className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden cursor-pointer ${
                  isSelected
                    ? 'luxury-glass-card border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.3)]'
                    : 'bg-white/[0.02] border-white/10 hover:border-[#D4AF37]/30 hover:bg-white/[0.04]'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F5D061] to-[#D4AF37]" />
                )}
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-[#F5D061]' : 'text-white/40'}`}>
                    {st.num}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#F5D061]' : 'text-white/40'}`} />
                </div>
                <div className="text-xs font-bold text-white truncate">{st.title.split(' ')[0]}</div>
                <div className="font-mono text-[10px] text-white/50 mt-1">{st.timeline}</div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Stage Card */}
        <div className="luxury-glass-card p-8 sm:p-12 rounded-3xl relative overflow-hidden border border-[#D4AF37]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 text-left">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-md border border-[#D4AF37]/40 bg-[#D4AF37]/15 text-[#F5D061]">
                  {current.code}
                </span>
                <span className="font-mono text-xs text-white/50">
                  Target Window: {current.timeline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-white font-sans mt-2">
                {current.title}
              </h3>

              <p className="mt-4 text-base text-white/70 leading-relaxed font-normal">
                {current.desc}
              </p>

              <div className="mt-8">
                <div className="font-mono text-xs font-bold text-white/50 uppercase tracking-wider mb-3">
                  Key Milestones &amp; Deliverables:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs sm:text-sm font-mono text-white/90"
                    >
                      <CheckCircle className="w-4 h-4 text-[#F5D061] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-2xl bg-black/60 border border-[#D4AF37]/25 text-center">
              <div className="w-20 h-20 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#F5D061] mb-6 shadow-[0_0_35px_rgba(212,175,55,0.25)]">
                <CurrentIcon className="w-10 h-10" />
              </div>

              <div className="font-mono text-[10px] text-white/50 uppercase tracking-widest">
                STAGE QUALITY GATE
              </div>
              <div className="text-lg font-black text-white mt-1">100% SPEC VERIFIED</div>
              <div className="text-xs font-mono text-[#F5D061] mt-2">
                Executive Weekly Checkpoint
              </div>

              <div className="mt-6 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedPhase((p) => (p > 0 ? p - 1 : stages.length - 1))}
                  className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs font-mono text-white/70 hover:text-white cursor-pointer"
                >
                  ← Prev
                </button>
                <span className="font-mono text-xs text-white/40">
                  {selectedPhase + 1} / {stages.length}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedPhase((p) => (p < stages.length - 1 ? p + 1 : 0))}
                  className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs font-mono text-white/70 hover:text-white cursor-pointer"
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
