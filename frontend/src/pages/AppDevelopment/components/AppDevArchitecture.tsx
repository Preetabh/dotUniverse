import React from 'react';
import {
  Smartphone,
  Cpu,
  ShieldCheck,
  Zap,
  Layers,
  Crown,
  Lock,
  Globe,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const AppDevArchitecture: React.FC = () => {
  const pillars = [
    {
      code: "PILLAR::01",
      tag: "APPLE ECOSYSTEM",
      title: "Native iOS & Swift Precision",
      desc: "Architected exclusively in pure Swift & SwiftUI. We harness Apple Metal GPU acceleration, Dynamic Island live activities, and native watchOS/iPadOS companion extensions.",
      icon: Smartphone,
      spec: "120Hz ProMotion Native",
      features: [
        "Dynamic Island Live Telemetry",
        "Swift 6 Strict Concurrency",
        "Metal Shader Performance",
        "Apple Pay 1-Click Biometric Flow"
      ]
    },
    {
      code: "PILLAR::02",
      tag: "GOOGLE ECOSYSTEM",
      title: "Native Android & Kotlin Core",
      desc: "Built with Kotlin and Jetpack Compose. Tailored across all flagship screen formats, including Google Pixel, Samsung Galaxy Ultra, and foldable dual-screen tablets.",
      icon: Cpu,
      spec: "Jetpack Compose Reactive",
      features: [
        "Material You Fluid Theming",
        "Foldable & Dual-Screen Adaptation",
        "Biometric Prompt API",
        "Sub-15ms App Cold Start"
      ]
    },
    {
      code: "PILLAR::03",
      tag: "UNIFIED CODEBASE",
      title: "Cross-Platform Flutter & React Native",
      desc: "Single codebase, zero compromise. We write custom native C++ and Objective-C bridges to achieve 100% native 120 FPS gesture parity across both iOS and Android.",
      icon: Layers,
      spec: "60% Faster Go-To-Market",
      features: [
        "Native C++ Bridge Acceleration",
        "Single Unified Design System",
        "Shared Business Logic & Tests",
        "Instant Over-The-Air Hot Updates"
      ]
    },
    {
      code: "PILLAR::04",
      tag: "OFFLINE FIRST",
      title: "Persistent Realtime Sync Engine",
      desc: "Clients never look at a loading spinner. Local encrypted SQLite/WatermelonDB storage allows instant reads and writes offline, syncing seamlessly when connectivity returns.",
      icon: Zap,
      spec: "Zero-Latency UI Hydration",
      features: [
        "Local SQLite Database Cache",
        "WebSocket Low-Latency Streaming",
        "Conflict-Free Replicated Data (CRDT)",
        "Background Task Synchronization"
      ]
    },
    {
      code: "PILLAR::05",
      tag: "BANK GRADE",
      title: "Biometric Hardware Enclave Security",
      desc: "Every cryptographic key and sensitive transaction is isolated inside Apple Secure Enclave and Android Keystore. Certified for multi-million dollar fintech flows.",
      icon: Lock,
      spec: "SOC2 & PCI-DSS L1 Compliant",
      features: [
        "Biometric FaceID & TouchID Auth",
        "End-to-End ChaCha20 Encryption",
        "Jailbreak & Rooting Shield",
        "Zero-Knowledge Server Telemetry"
      ]
    },
    {
      code: "PILLAR::06",
      tag: "ATELIER SERVICE",
      title: "VIP App Store Concierge & Certification",
      desc: "We shepherd your app through strict Apple & Google review boards. Our 100% first-pass track record ensures zero launch day surprises or delays.",
      icon: Crown,
      spec: "100% First-Pass Approval",
      features: [
        "Pre-Submission Sandbox Audits",
        "TestFlight & Google Play Beta Rings",
        "Automated CI/CD Test Pipeline",
        "Post-Launch Crash Monitoring"
      ]
    },
  ];

  return (
    <section id="architecture" className="relative py-28 sm:py-36 overflow-hidden border-t border-[#D4AF37]/20 bg-black">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[500px] bg-[#D4AF37]/8 rounded-full blur-[190px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[450px] bg-[#F5D061]/6 rounded-full blur-[190px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#F5D061] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <Crown className="w-3.5 h-3.5" />
            <span>[ BESPOKE ENGINEERING PILLARS ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-sans">
            Crafted Without <br />
            <span className="gold-gradient-text font-serif italic glow-gold">Compromise.</span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg leading-relaxed font-normal">
            We reject fragile, slow web-wrapper apps. Every mobile product leaving our atelier is
            engineered to feel indistinguishable from Apple and Google's own flagship software.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="luxury-glass-card p-8 rounded-3xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#D4AF37]/15 mb-6">
                    <span className="font-mono text-xs text-white/40 tracking-wider">
                      {p.code}
                    </span>
                    <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-md border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#F5D061] tracking-wider">
                      {p.tag}
                    </span>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-black border border-[#D4AF37]/35 flex items-center justify-center text-[#F5D061] mb-6 shadow-[0_0_25px_rgba(212,175,55,0.2)] group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#F5D061] transition-colors leading-snug">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-sm text-white/60 leading-relaxed font-normal">
                    {p.desc}
                  </p>

                  {/* Feature Bullets */}
                  <div className="mt-6 space-y-2 pt-4 border-t border-white/5">
                    {p.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-white/75 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F5D061] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between font-mono text-xs">
                  <span className="text-white/40">BENCHMARK</span>
                  <span className="text-[#F5D061] font-bold">{p.spec}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
