import React, { useState } from 'react';
import {
  GraduationCap,
  ArrowRight,
  Flame,
  Code2,
  TrendingUp,
  Palette,
  Bot,
  CheckCircle2,
  Sparkles,
  Users,
  Compass,
  Briefcase
} from 'lucide-react';
import { CTAButton } from '../../../components/Buttons/CTAButton';

export const OnlineCoursesHero: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<'fullstack' | 'marketing' | 'design' | 'ai'>('fullstack');

  const tracks = {
    fullstack: {
      name: "Full-Stack Software Architecture",
      lead: "From Zero to Deploying Distributed Production Systems",
      duration: "14 Weeks (Live Cohort)",
      stack: ["React 19", "Next.js 15", "Node.js", "MongoDB", "Redis", "Docker", "AWS"],
      capstone: "Full E-Commerce Engine with Real-Time WebSockets & Stripe Checkout",
      exitRole: "Senior Frontend / Full-Stack Engineer (Avg ₹14-22 LPA)",
      accent: "#f59e0b",
      badge: "MOST DEMANDED",
    },
    marketing: {
      name: "Performance Growth & Viral Ads Mastery",
      lead: "Scale Real Ad Budgets on Meta, Google & TikTok with 4x+ ROAS",
      duration: "10 Weeks (Live Cohort)",
      stack: ["Meta Ads Manager", "Google Ads / PMax", "TikTok Spark", "GA4", "Klaviyo", "CAPI"],
      capstone: "Live $1,000 Ad Spend Deployment with Guaranteed Positive Attribution",
      exitRole: "Growth Marketing Lead / Performance Strategist (Avg ₹12-18 LPA)",
      accent: "#ec4899",
      badge: "LIVE AD BUDGETS",
    },
    design: {
      name: "DesignX: UI/UX & High-Conversion Systems",
      lead: "Master High-Fidelity Figma Systems, 3D Assets & Micro-Interactions",
      duration: "8 Weeks (Live Cohort)",
      stack: ["Figma Enterprise", "Spline 3D", "Framer", "Design Tokens", "Wireframing", "User Testing"],
      capstone: "Complete 150-Component Design System & Interactive FinTech App Prototype",
      exitRole: "Product Designer / Senior UI/UX Architect (Avg ₹11-16 LPA)",
      accent: "#c8ff00",
      badge: "PORTFOLIO FIRST",
    },
    ai: {
      name: "AI Solutions & Autonomous Agentic Workflows",
      lead: "Build Self-Governing AI Agents, Custom RAG & Workflow Automation",
      duration: "10 Weeks (Live Cohort)",
      stack: ["Python", "LangChain", "OpenAI / Claude API", "Vector DBs", "n8n", "FastAPI"],
      capstone: "Production Multi-Agent Customer Support & Lead Qualification Bot",
      exitRole: "AI Automation Engineer / LLM Solutions Lead (Avg ₹16-26 LPA)",
      accent: "#06b6d4",
      badge: "FUTURE-PROOF",
    }
  };

  const current = tracks[selectedTrack];

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow Pill */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#f59e0b]/15 border border-[#f59e0b]/40 text-[#fbbf24] font-mono text-xs font-bold uppercase tracking-wider mb-6 shadow-[0_0_25px_rgba(245,158,11,0.25)]">
            <GraduationCap className="w-4 h-4 text-[#f59e0b]" />
            <span>[ DOTUNIVERSE ACADEMY • ACTIVE BUILDERS DOJO ]</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
            <span className="text-white/60">Strict 25-Seat Cohorts</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight max-w-5xl leading-[1.06]">
            Don&apos;t Learn from Theory. <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#f97316] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(245,158,11,0.35)]">
              Build Production Systems
            </span>{' '}
            in the Arena.
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-base sm:text-xl text-white/75 max-w-3xl leading-relaxed">
            Throw away outdated academic slides. Learn engineering, growth marketing, UI/UX, and AI directly from active practitioners who build real enterprise products for global clients every day.
          </p>

          {/* Call-to-actions */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <CTAButton
              href="#courses-catalog"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto shadow-[0_0_35px_rgba(245,158,11,0.35)] hover:shadow-[0_0_50px_rgba(245,158,11,0.55)] !bg-gradient-to-r !from-[#f59e0b] !via-[#fbbf24] !to-[#d97706] !border-none !text-black font-mono font-black tracking-wider"
            >
              <span>Explore Masterclasses</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </CTAButton>

            <a
              href="#career-simulator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-sm uppercase tracking-wider transition-all hover:border-[#f59e0b] hover:text-[#fbbf24] cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#f59e0b]" />
              <span>Interactive Salary Simulator</span>
            </a>
          </div>

          {/* Core Guarantees Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/50 font-mono">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#f59e0b]" />
              <span>Production Repositories Only (Zero To-Do Apps)</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#f59e0b]" />
              <span>Weekly 1-on-1 Code Audits with Founders</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#f59e0b]" />
              <span>Direct Placement Pipeline with Partner Agencies</span>
            </div>
          </div>
        </div>

        {/* Interactive Masterclass Preview Console */}
        <div className="mt-16 relative max-w-5xl mx-auto rounded-3xl border border-white/15 bg-gradient-to-b from-[#181109]/95 via-[#0e0a05]/95 to-black/95 backdrop-blur-2xl p-6 sm:p-10 shadow-[0_0_80px_rgba(245,158,11,0.12)] overflow-hidden">
          
          {/* Top Window Strip */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                <span className="w-3 h-3 rounded-full bg-[#ec4899]" />
                <span className="w-3 h-3 rounded-full bg-[#06b6d4]" />
              </div>
              <span className="font-mono text-xs text-white/50 tracking-wider">
                ACADEMY_CONSOLE::ACTIVE_MASTERCLASSES.v2
              </span>
            </div>

            {/* Quick Track Switcher Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-black/60 border border-white/10 w-full sm:w-auto">
              {[
                { id: 'fullstack', label: 'FULL-STACK', icon: Code2 },
                { id: 'marketing', label: 'PERFORMANCE ADS', icon: TrendingUp },
                { id: 'design', label: 'DESIGNX', icon: Palette },
                { id: 'ai', label: 'AI AGENTS', icon: Bot },
              ].map((t) => {
                const Icon = t.icon;
                const isSelected = selectedTrack === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedTrack(t.id as any)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{t.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Track Detail Grid */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Specs */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span
                  className="px-3 py-1 rounded-md font-mono text-xs font-bold border"
                  style={{
                    backgroundColor: `${current.accent}15`,
                    borderColor: `${current.accent}40`,
                    color: current.accent,
                  }}
                >
                  {current.badge}
                </span>
                <span className="text-white/40 text-xs font-mono">{current.duration}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white">
                {current.name}
              </h2>

              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                {current.lead}
              </p>

              {/* Technologies / Tools Covered */}
              <div>
                <div className="text-[11px] font-mono text-white/50 uppercase mb-2">Technologies &amp; Tools Mastered:</div>
                <div className="flex flex-wrap gap-2">
                  {current.stack.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Capstone Box */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 mt-2">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#fbbf24] flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#f59e0b]" />
                  <span>PRODUCTION CAPSTONE DELIVERABLE</span>
                </div>
                <div className="text-sm font-semibold text-white mt-1">
                  {current.capstone}
                </div>
              </div>
            </div>

            {/* Right Career Target Box */}
            <div className="lg:col-span-5 rounded-2xl p-6 sm:p-8 border border-white/15 bg-gradient-to-br from-white/[0.04] to-black flex flex-col justify-between relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl pointer-events-none"
                style={{ backgroundColor: `${current.accent}25` }}
              />

              <div className="space-y-6">
                <div>
                  <div className="text-xs font-mono text-white/50 uppercase tracking-wider">
                    TARGET CAREER OUTCOME
                  </div>
                  <div
                    className="text-lg sm:text-xl font-black font-sans mt-1 text-white"
                  >
                    {current.exitRole}
                  </div>
                  <div className="text-xs text-white/60 mt-1">100% verified placement support &amp; direct portfolio interview referrals.</div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <div className="text-[10px] font-mono text-white/40 uppercase">Cohort Capacity</div>
                    <div className="text-lg font-bold text-white font-mono mt-0.5">25 Seats Only</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-white/40 uppercase">Placement Rate</div>
                    <div className="text-lg font-bold text-[#10b981] font-mono mt-0.5">94.2%</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href="#courses-catalog"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-black bg-[#fbbf24] hover:bg-[#f59e0b] transition-all cursor-pointer shadow-md"
                >
                  <span>View Full Syllabus</span>
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
