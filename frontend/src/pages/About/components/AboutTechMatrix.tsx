import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Terminal, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

interface TechItem {
  name: string;
  category: "frontend" | "backend" | "cloud" | "ai" | "web3";
  tier: "Production Core" | "Enterprise High-Load" | "Next-Gen Experimental";
  latency: string;
  uptime: string;
  purpose: string;
}

const CATEGORIES = [
  { id: "all", label: "Full Arsenal" },
  { id: "frontend", label: "Interactive & 3D UI" },
  { id: "backend", label: "Distributed Backend" },
  { id: "cloud", label: "Edge & DevOps" },
  { id: "ai", label: "Generative AI & LLMs" },
  { id: "web3", label: "Decentralized Protocols" }
];

const TECH_STACK: TechItem[] = [
  {
    name: "React 19 & Next.js 15",
    category: "frontend",
    tier: "Production Core",
    latency: "< 25ms TTFB",
    uptime: "99.99%",
    purpose: "Hybrid server components with granular client hydrations and zero-friction rendering."
  },
  {
    name: "Three.js & React Three Fiber",
    category: "frontend",
    tier: "Enterprise High-Load",
    latency: "60-120 FPS",
    uptime: "Hardware Accel",
    purpose: "Interactive 3D WebGL experiences, planetary canvases, and cinematic spatial interfaces."
  },
  {
    name: "Framer Motion & GSAP",
    category: "frontend",
    tier: "Production Core",
    latency: "GPU Rendered",
    uptime: "Zero Dropped Frames",
    purpose: "Physics-driven gestures, kinetic micro-interactions, and responsive layout morphs."
  },
  {
    name: "TypeScript 5.x Strict",
    category: "frontend",
    tier: "Production Core",
    latency: "Compile-Time",
    uptime: "100% Typed",
    purpose: "Enterprise-grade type contracts eliminating runtime null pointers across complex apps."
  },
  {
    name: "Tailwind CSS & CSS Tokens",
    category: "frontend",
    tier: "Production Core",
    latency: "Zero Runtime",
    uptime: "Atomic Purge",
    purpose: "Ultra-lean atomic styling system with bespoke cosmic glassmorphism shaders."
  },
  {
    name: "Node.js & Bun Engine",
    category: "backend",
    tier: "Production Core",
    latency: "< 8ms Route Exec",
    uptime: "99.99%",
    purpose: "Hyper-optimized asynchronous microservices handling high-concurrency event loops."
  },
  {
    name: "Go (Golang) Micro-Engines",
    category: "backend",
    tier: "Enterprise High-Load",
    latency: "Sub-millisecond",
    uptime: "99.999%",
    purpose: "High-throughput stream processing, socket mesh clusters, and algorithmic arbitrage."
  },
  {
    name: "PostgreSQL & Prisma ORM",
    category: "backend",
    tier: "Production Core",
    latency: "Indexed Queries",
    uptime: "ACID Guaranteed",
    purpose: "Relational backbone with multi-tenant row security and automated migrations."
  },
  {
    name: "Redis & Upstash Vector",
    category: "backend",
    tier: "Enterprise High-Load",
    latency: "< 2ms Cache Hit",
    uptime: "In-Memory",
    purpose: "Low-latency distributed caching, rate-limit state, and semantic vector embeddings."
  },
  {
    name: "Docker & Kubernetes (K8s)",
    category: "cloud",
    tier: "Enterprise High-Load",
    latency: "Auto-scale in 12s",
    uptime: "Zero Downtime Deploy",
    purpose: "Container orchestration across multi-region hybrid clouds with seamless rollbacks."
  },
  {
    name: "Cloudflare Workers & Vercel Edge",
    category: "cloud",
    tier: "Production Core",
    latency: "< 15ms Worldwide",
    uptime: "Anycast 330+ Cities",
    purpose: "Edge computing for dynamic SEO metadata injection and instant static assets delivery."
  },
  {
    name: "AWS & Google Cloud Platform",
    category: "cloud",
    tier: "Enterprise High-Load",
    latency: "Tier-1 Peering",
    uptime: "99.99%",
    purpose: "Enterprise compute grids, secure VPCs, automated backups, and IAM boundary control."
  },
  {
    name: "OpenAI GPT-4o & Claude 3.5 Sonnet",
    category: "ai",
    tier: "Enterprise High-Load",
    latency: "Streaming Tokens",
    uptime: "SLA Backed",
    purpose: "Autonomous conversational copilots, context-rich extraction, and predictive business engines."
  },
  {
    name: "LangChain & RAG Vector Pipelines",
    category: "ai",
    tier: "Next-Gen Experimental",
    latency: "< 120ms Search",
    uptime: "Enterprise Hybrid",
    purpose: "Custom proprietary knowledge retrieval connecting internal datasets to LLM reasoning."
  },
  {
    name: "Ethereum & Polygon Smart Contracts",
    category: "web3",
    tier: "Production Core",
    latency: "EVM Finality",
    uptime: "Immutable 24/7",
    purpose: "Decentralized state verification, automated revenue splits, and tokenized utility."
  },
  {
    name: "Solana High-TPS Infrastructure",
    category: "web3",
    tier: "Enterprise High-Load",
    latency: "400ms Slot Time",
    uptime: "Global Consensus",
    purpose: "Sub-second decentralized trading desks, high-velocity digital asset distribution."
  }
];

export const AboutTechMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredTech, setHoveredTech] = useState<TechItem | null>(TECH_STACK[0]);

  const filteredTech =
    activeCategory === "all"
      ? TECH_STACK
      : TECH_STACK.filter((item) => item.category === activeCategory);

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10 bg-[#030712] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-400/25 bg-indigo-950/30 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-4"
          >
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            Engineering Depth & Architecture
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            Built With <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Zero Technical Compromise</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            We don&apos;t just install templates. We architect distributed, high-concurrency systems 
            capable of processing millions of requests without breaking sweat.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 border ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                  : "bg-white/[0.02] text-slate-400 border-white/5 hover:text-white hover:border-white/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Interactive Grid & Real-time Telemetry Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tech Grid (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <AnimatePresence mode="popLayout">
              {filteredTech.map((tech) => {
                const isSelected = hoveredTech?.name === tech.name;
                return (
                  <motion.div
                    key={tech.name}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setHoveredTech(tech)}
                    onClick={() => setHoveredTech(tech)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 relative group overflow-hidden ${
                      isSelected
                        ? "bg-gradient-to-br from-cyan-950/40 via-indigo-950/20 to-[#070e20] border-cyan-400/60 shadow-lg shadow-cyan-950/50"
                        : "bg-white/[0.02] border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {tech.name}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300">
                        {tech.category}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {tech.purpose}
                    </p>

                    <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-white/5 pt-2">
                      <span className="text-cyan-400/80 flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        {tech.latency}
                      </span>
                      <span className="text-slate-400">{tech.uptime}</span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Real-time Telemetry Inspector (4 cols) */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="p-6 sm:p-7 rounded-3xl border border-cyan-500/25 bg-gradient-to-b from-[#060c1d] to-[#030611] backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider">
                    SPECIFICATION INSPECTOR
                  </span>
                </div>
                <Sparkles className="w-4 h-4 text-indigo-400" />
              </div>

              {hoveredTech ? (
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 mb-3">
                    {hoveredTech.tier}
                  </div>

                  <h3 className="text-xl font-black text-white mb-2">
                    {hoveredTech.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {hoveredTech.purpose}
                  </p>

                  <div className="space-y-3 border-t border-white/5 pt-4 text-xs font-mono">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                      <span className="text-slate-400">Latency Profile</span>
                      <span className="text-cyan-300 font-bold">{hoveredTech.latency}</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                      <span className="text-slate-400">Reliability SLA</span>
                      <span className="text-emerald-400 font-bold">{hoveredTech.uptime}</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                      <span className="text-slate-400">Domain</span>
                      <span className="text-indigo-300 uppercase">{hoveredTech.category}</span>
                    </div>
                  </div>

                  <div className="mt-6 p-3.5 rounded-xl border border-cyan-500/20 bg-cyan-950/20 text-[11px] text-cyan-200/90 leading-relaxed flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      Audited for enterprise deployment with zero third-party telemetry leakage or vendor lock-in.
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-slate-500 text-xs font-mono">
                  Hover over any technology node to view architectural benchmarks.
                </div>
              )}

              {/* Bottom Guarantee */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] font-mono text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Zero bloated dependencies • Tree-shaken production bundles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
