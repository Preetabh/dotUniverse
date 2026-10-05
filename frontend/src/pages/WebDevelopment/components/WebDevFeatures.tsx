import React from 'react';
import {
  Zap,
  Layers,
  BarChart3,
  Search,
  Edit3,
  ShieldCheck,
  Cpu,
  Flame,
  Binary,
  Code2,
  Sparkles
} from 'lucide-react';

export const WebDevFeatures: React.FC = () => {
  const features = [
    {
      moduleCode: "MOD::01",
      tag: "PERFORMANCE CORE",
      title: "Sub-Second Edge Rendering",
      desc: "Instant page hydration using streaming SSR, modern asset tree-shaking, and global edge computing that guarantees 99+ Google PageSpeed ratings.",
      icon: Zap,
      accent: "#c8ff00",
      spec: "< 0.6s LCP Global",
      highlightBorder: "border-[#c8ff00]/30 hover:border-[#c8ff00]"
    },
    {
      moduleCode: "MOD::02",
      tag: "SYSTEM ARCHITECTURE",
      title: "Clean React & Next.js Ecosystem",
      desc: "Robust TypeScript architecture with modular components, atomic design hierarchy, and zero legacy bloat — built to scale to millions of users effortlessly.",
      icon: Layers,
      accent: "#00f0ff",
      spec: "100% Type Safe",
      highlightBorder: "border-[#00f0ff]/30 hover:border-[#00f0ff]"
    },
    {
      moduleCode: "MOD::03",
      tag: "CONVERSION ENGINE",
      title: "High-Intent Conversion Psychology",
      desc: "Calculated micro-interactions, frictionless customer onboarding journeys, and persuasive CTA triggers tailored to turn passive browsers into paying buyers.",
      icon: BarChart3,
      accent: "#ff005e",
      spec: "+140% Conversion Avg",
      highlightBorder: "border-[#ff005e]/30 hover:border-[#ff005e]"
    },
    {
      moduleCode: "MOD::04",
      tag: "SEARCH ALGORITHM",
      title: "Automated Algorithmic SEO",
      desc: "Semantic HTML5 schemas, automated dynamic XML sitemaps, OpenGraph image generation, and JSON-LD structured snippets loved by Google and AI engines.",
      icon: Search,
      accent: "#a855f7",
      spec: "Top 3 Rank Foundation",
      highlightBorder: "border-[#a855f7]/30 hover:border-[#a855f7]"
    },
    {
      moduleCode: "MOD::05",
      tag: "CMS MATRIX",
      title: "Intuitive Headless Admin Portals",
      desc: "Empower marketing and content teams with intuitive, visual CMS control panels. Zero code required for instant updates, new landing pages, and publishing.",
      icon: Edit3,
      accent: "#f59e0b",
      spec: "Zero-Code Publishing",
      highlightBorder: "border-[#f59e0b]/30 hover:border-[#f59e0b]"
    },
    {
      moduleCode: "MOD::06",
      tag: "WARRANTY PROTOCOL",
      title: "120-Day Post-Launch Armor",
      desc: "We stand behind our craftsmanship. Includes 4 months of dedicated post-deployment support, performance auditing, security patching, and bug fixes.",
      icon: ShieldCheck,
      accent: "#10b981",
      spec: "120 Days Active Coverage",
      highlightBorder: "border-[#10b981]/30 hover:border-[#10b981]"
    },
  ];

  return (
    <section id="features" className="relative py-28 sm:py-36 overflow-hidden border-t border-white/10 bg-black/90 cyber-grid">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-[#c8ff00]/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[400px] bg-[#00f0ff]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c8ff00]/10 border border-[#c8ff00]/30 text-[#c8ff00] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <Binary className="w-3.5 h-3.5" />
            <span>[ SYSTEM SPECIFICATIONS &amp; CAPABILITIES ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-sans">
            Engineered For Speed. <br />
            <span className="bg-gradient-to-r from-[#c8ff00] via-[#00f0ff] to-[#ff005e] bg-clip-text text-transparent">
              Built For Scale.
            </span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg font-normal leading-relaxed">
            Every layer of our web development pipeline is tuned for blistering performance, 
            high security, and unmatched conversion rates.
          </p>
        </div>

        {/* Cyber Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="group cyber-hud-card p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
              >
                {/* HUD Corner Accents */}
                <div className="hud-bracket-top-left" />
                <div className="hud-bracket-bottom-right" />

                <div>
                  {/* Top Bar with Module Code & Spec Badge */}
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
                    <span className="font-mono text-xs font-bold text-white/40 tracking-wider">
                      {feat.moduleCode}
                    </span>
                    <span
                      className="font-mono text-[11px] font-bold px-2.5 py-1 rounded-md border tracking-wider"
                      style={{
                        borderColor: `${feat.accent}40`,
                        backgroundColor: `${feat.accent}10`,
                        color: feat.accent,
                      }}
                    >
                      {feat.tag}
                    </span>
                  </div>

                  {/* Icon with Glowing Backdrop */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 shadow-lg"
                    style={{
                      backgroundColor: `${feat.accent}15`,
                      color: feat.accent,
                      boxShadow: `0 0 25px ${feat.accent}25`,
                    }}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#c8ff00] transition-colors leading-snug">
                    {feat.title}
                  </h3>

                  <p className="mt-3 text-sm text-white/60 leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </div>

                {/* Bottom Telemetry Bar */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="font-mono text-xs text-white/40 group-hover:text-white/80 transition-colors">
                    Benchmark Spec
                  </span>
                  <span
                    className="font-mono text-xs font-bold"
                    style={{ color: feat.accent }}
                  >
                    {feat.spec}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
