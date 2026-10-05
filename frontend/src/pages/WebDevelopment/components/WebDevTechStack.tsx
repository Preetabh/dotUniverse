import React, { useState } from 'react';
import {
  Code2,
  Cpu,
  Globe,
  Database,
  Palette,
  Bot,
  Server,
  FileCode,
  Shield,
  Layers,
  Terminal,
  Zap
} from 'lucide-react';

export const WebDevTechStack: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'frontend' | 'backend' | 'cms' | 'ai'>('all');

  const stack = [
    {
      name: "Next.js 14+",
      category: "frontend",
      catLabel: "Full-Stack Framework",
      icon: Globe,
      accent: "#c8ff00",
      spec: "Server Actions • Edge SSR",
      desc: "App Router, streaming server rendering, and instant edge hydration with zero client-side overhead."
    },
    {
      name: "React 18+",
      category: "frontend",
      catLabel: "Reactive UI Engine",
      icon: Code2,
      accent: "#00f0ff",
      spec: "60 FPS Reactive Core",
      desc: "High-performance reactive UI components with strict state encapsulation and modern micro-animations."
    },
    {
      name: "TypeScript",
      category: "frontend",
      catLabel: "Static Type Safety",
      icon: FileCode,
      accent: "#3178C6",
      spec: "100% Strict Type Mode",
      desc: "Zero runtime crashes, robust auto-completion, and maintainable enterprise software architecture."
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      catLabel: "Styling Infrastructure",
      icon: Palette,
      accent: "#38BDF8",
      spec: "Zero Runtime CSS Bloat",
      desc: "Purged production stylesheets under 15KB with full responsive token systems and fluid typography."
    },
    {
      name: "Node.js & Express",
      category: "backend",
      catLabel: "Microservices & APIs",
      icon: Server,
      accent: "#10b981",
      spec: "Sub-10ms Route Latency",
      desc: "High-throughput asynchronous backend endpoints, webhook handlers, and background queue workers."
    },
    {
      name: "MongoDB & Postgres",
      category: "backend",
      catLabel: "Database Cluster",
      icon: Database,
      accent: "#47A248",
      spec: "ACID & Distributed Queries",
      desc: "Flexible JSON schemas or relational SQL with Prisma ORM, automated indexing, and encryption."
    },
    {
      name: "WordPress / Webflow",
      category: "cms",
      catLabel: "Headless Content Hub",
      icon: Layers,
      accent: "#f59e0b",
      spec: "Intuitive Admin UI",
      desc: "Effortless publishing workflows, drag-and-drop landing page builders, and instant CDN asset sync."
    },
    {
      name: "AI & LLM Integration",
      category: "ai",
      catLabel: "Intelligent Workflows",
      icon: Bot,
      accent: "#ff005e",
      spec: "Claude & OpenAI Edge APIs",
      desc: "Autonomous customer chat agents, semantic site search, dynamic content generation, and smart bots."
    },
  ];

  const filteredStack = activeFilter === 'all'
    ? stack
    : stack.filter(item => item.category === activeFilter);

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden border-t border-white/10 bg-black/95 cyber-grid">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#c8ff00]/10 via-[#00f0ff]/10 to-transparent rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c8ff00]/10 border border-[#c8ff00]/30 text-[#c8ff00] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>[ SYSTEM TECH MATRIX ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-sans">
            Enterprise Stack. <br />
            <span className="text-[#c8ff00] glow-lime">Zero Legacy Clutter.</span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg">
            We build exclusively with industry-standard, ultra-modern technologies engineered for extreme
            speed, security, and developer ergonomics.
          </p>

          {/* Interactive Filters */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Technologies' },
              { id: 'frontend', label: 'Frontend Engine' },
              { id: 'backend', label: 'Backend & APIs' },
              { id: 'cms', label: 'Headless CMS' },
              { id: 'ai', label: 'AI & Automation' },
            ].map(f => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id as any)}
                className={`px-4 py-2 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-[#c8ff00] text-black shadow-[0_0_20px_rgba(200,255,0,0.4)]'
                    : 'bg-white/5 text-white/70 border border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredStack.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="cyber-hud-card p-6 rounded-3xl flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
              >
                <div className="hud-bracket-top-left" />
                <div className="hud-bracket-bottom-right" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md transition-transform group-hover:scale-110 duration-300"
                      style={{
                        backgroundColor: `${item.accent}15`,
                        color: item.accent,
                        boxShadow: `0 0 20px ${item.accent}25`,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span
                      className="font-mono text-[10px] font-bold px-2 py-0.5 rounded border"
                      style={{
                        borderColor: `${item.accent}40`,
                        backgroundColor: `${item.accent}10`,
                        color: item.accent,
                      }}
                    >
                      {item.spec}
                    </span>
                  </div>

                  <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                    {item.catLabel}
                  </div>

                  <h4 className="text-xl font-bold text-white mt-1 group-hover:text-[#c8ff00] transition-colors">
                    {item.name}
                  </h4>

                  <p className="text-xs text-white/60 mt-3 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-white/40">
                  <span>PRODUCTION READY</span>
                  <span className="text-[#c8ff00]">● VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
