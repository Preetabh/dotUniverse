import React, { useState } from 'react';
import {
  Code2,
  TrendingUp,
  Palette,
  Bot,
  Clock,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Star,
  Sparkles,
  Award,
  Layers,
  Zap,
  Users
} from 'lucide-react';
import { Currency } from '../../../hooks/useCurrencyPricing';

interface OnlineCoursesExplorerProps {
  currentCurrency?: Currency;
}

export const OnlineCoursesExplorer: React.FC<OnlineCoursesExplorerProps> = ({
  currentCurrency = 'INR'
}) => {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'marketing' | 'design' | 'ai'>('all');
  const [expandedSyllabus, setExpandedSyllabus] = useState<string | null>(null);

  const currencySymbol = currentCurrency === 'USD' ? '$' : currentCurrency === 'GBP' ? '£' : currentCurrency === 'AED' ? 'AED ' : '₹';
  const currencyRate = currentCurrency === 'USD' ? 0.012 : currentCurrency === 'GBP' ? 0.0095 : currentCurrency === 'AED' ? 0.044 : 1;

  const courses = [
    {
      id: "fs-mastery",
      track: "fullstack",
      title: "Full-Stack System Architecture & Next.js 15",
      subtitle: "From Zero to Production Microservices & Distributed Web Platforms",
      badge: "Flagship Engineering Track",
      accent: "#f59e0b",
      duration: "14 Weeks (Live Cohort)",
      schedule: "Saturdays & Sundays (Live Sprints + Async Code Reviews)",
      level: "Intermediate to Pro",
      rating: "4.95 ★ (380+ Alums)",
      basePriceINR: 24999,
      icon: Code2,
      summary:
        "Learn how real software engineers build systems that handle millions of requests without crashing. You will build, test, containerize, and deploy production software.",
      highlights: [
        "Next.js 15 App Router, Server Actions & React 19 Canary",
        "Distributed State, WebSockets & Real-Time Sync Engines",
        "PostgreSQL, MongoDB, Prisma & Redis Multi-Tier Caching",
        "Docker Containerization, CI/CD Actions & AWS ECS Deployments",
      ],
      capstone: "Full-Stack Multi-Tenant SaaS with Stripe Billing, Role Auth & WebSockets",
      syllabus: [
        { week: "Weeks 1-3", title: "Modern JavaScript Engine, TypeScript & Reactive Architecture" },
        { week: "Weeks 4-6", title: "Next.js 15 App Router, Server Actions & API Design" },
        { week: "Weeks 7-9", title: "Database Architecture: Postgres, Redis, Vector & Mongo" },
        { week: "Weeks 10-12", title: "Auth, Payments (Stripe/Razorpay), WebSockets & Security" },
        { week: "Weeks 13-14", title: "Docker, AWS DevOps, CI/CD, Load Testing & Capstone Defense" },
      ]
    },
    {
      id: "growth-ads",
      track: "marketing",
      title: "8-Figure Performance Marketing & Viral Social",
      subtitle: "Deploy Real Budgets on Meta, Google & TikTok with 4x+ Blended ROAS",
      badge: "Real Ad Budgets Included",
      accent: "#ec4899",
      duration: "10 Weeks (Live Cohort)",
      schedule: "Weekend Live Workshops + Daily Campaign Discord Reviews",
      level: "All Skill Levels",
      rating: "4.92 ★ (290+ Alums)",
      basePriceINR: 19999,
      icon: TrendingUp,
      summary:
        "Forget theory. You will be given actual client sandbox ad spend to run live campaigns on Meta Ads Manager and Google Ads under senior media buyer supervision.",
      highlights: [
        "Advantage+ & Manual Bid Cap Strategies that Beat Ad Fatigue",
        "Direct-Response Video Hook Scripting & High-Retention Editing",
        "Server-Side Conversions API (CAPI) & GA4 Attribution Hardening",
        "Landing Page CRO, Multi-Step Funnel Tests & Heatmap Analysis",
      ],
      capstone: "Live $1,000 Ad Budget Deployment with Full Attributed ROAS Reporting",
      syllabus: [
        { week: "Weeks 1-2", title: "Foundations of Direct-Response Psychology & Offer Architecture" },
        { week: "Weeks 3-4", title: "Meta Ads Architecture: Lookalikes, Broad AI & Advantage+" },
        { week: "Weeks 5-6", title: "Google High-Intent Search, PMax & Shopping Domination" },
        { week: "Weeks 7-8", title: "Attribution, Server-Side CAPI, GA4 & Tracking Fixes" },
        { week: "Weeks 9-10", title: "Live Ad Budget Deployment, Scaling Winners & Retention Nurture" },
      ]
    },
    {
      id: "design-x",
      track: "design",
      title: "DesignX: UI/UX & Tokenized Design Systems",
      subtitle: "Master High-Conversion Product Design, Spline 3D & Framer",
      badge: "Portfolio-Driven Atelier",
      accent: "#c8ff00",
      duration: "8 Weeks (Live Cohort)",
      schedule: "Live Interactive Critiques + 1-on-1 Portfolio Mentorship",
      level: "All Skill Levels",
      rating: "4.98 ★ (210+ Alums)",
      basePriceINR: 14999,
      icon: Palette,
      summary:
        "Build designs that earn respect and make hiring managers stop scrolling. You will build comprehensive design systems that hand off cleanly to developers.",
      highlights: [
        "Figma Enterprise: Variables, Tokens, Auto-Layout 5 & Component Sets",
        "User Journey Mapping, Information Architecture & Micro-Copy",
        "Interactive High-Fidelity Prototyping & Physics Micro-Interactions",
        "Framer & Spline 3D Web Integration for Jaw-Dropping Portfolios",
      ],
      capstone: "150-Component Tokenized Design System & High-Ticket FinTech Web Portal",
      syllabus: [
        { week: "Weeks 1-2", title: "Design Fundamentals, Typography, Hierarchy & Visual Harmony" },
        { week: "Weeks 3-4", title: "Figma Mastery: Design Tokens, Variables & Nested Components" },
        { week: "Weeks 5-6", title: "UX Research, Wireframes, Behavioral Psychology & Conversion" },
        { week: "Weeks 7-8", title: "Framer Production, Spline 3D & Portfolio Showcase Defense" },
      ]
    },
    {
      id: "ai-agents",
      track: "ai",
      title: "Autonomous AI Agents & LLM Workflow Automation",
      subtitle: "Build Self-Governing AI Systems, Custom RAG & Business Automation",
      badge: "High-Income Emerging Skill",
      accent: "#06b6d4",
      duration: "10 Weeks (Live Cohort)",
      schedule: "Live Weekend Sprints + 24/7 AI Code Lab Access",
      level: "Intermediate Developer",
      rating: "4.94 ★ (160+ Alums)",
      basePriceINR: 29999,
      icon: Bot,
      summary:
        "The highest ROI skill of the decade. Learn to build autonomous agents that read PDFs, query databases, make API calls, and replace repetitive manual business workflows.",
      highlights: [
        "LangChain, LlamaIndex, OpenAI & Claude Function Calling APIs",
        "Vector Databases (Pinecone, ChromaDB) & Advanced Hybrid RAG",
        "Autonomous Agent Tool Calling, Memory Systems & ReAct Loops",
        "Production Deployment with FastAPI, Docker & Webhooks",
      ],
      capstone: "Autonomous Customer Support & CRM Qualification Multi-Agent Swarm",
      syllabus: [
        { week: "Weeks 1-2", title: "Python for LLMs, Prompt Engineering & Embeddings Science" },
        { week: "Weeks 3-4", title: "Vector Databases, Retrieval-Augmented Generation (RAG) & Chunks" },
        { week: "Weeks 5-6", title: "Autonomous Agent Tooling, Memory & Dynamic Decision Making" },
        { week: "Weeks 7-8", title: "Building Multi-Agent Swarms with CrewAI & LangGraph" },
        { week: "Weeks 9-10", title: "Production Hardening, Guardrails, FastAPI & Client Deployment" },
      ]
    },
  ];

  const filteredCourses = filter === 'all'
    ? courses
    : courses.filter((c) => c.track === filter);

  const toggleSyllabus = (id: string) => {
    setExpandedSyllabus(expandedSyllabus === id ? null : id);
  };

  const formatPrice = (inrPrice: number) => {
    const converted = inrPrice * currencyRate;
    return `${currencySymbol}${Math.round(converted).toLocaleString()}`;
  };

  return (
    <section id="courses-catalog" className="relative py-28 sm:py-36 overflow-hidden border-t border-white/10 bg-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f59e0b]/15 border border-[#f59e0b]/40 text-[#fbbf24] font-mono text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>[ ACTIVE MASTERCLASS OFFERINGS ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-sans">
            Choose Your Arena. <br />
            <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#f97316] bg-clip-text text-transparent">
              Graduate Job-Ready.
            </span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg">
            Every masterclass is taught by senior engineers and marketers currently building client systems. 
            Limited to 25 verified seats per cohort to guarantee personalized 1-on-1 mentorship.
          </p>

          {/* Interactive Category Filter Bar */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Masterclasses' },
              { id: 'fullstack', label: 'Full-Stack Engineering' },
              { id: 'marketing', label: 'Growth Marketing' },
              { id: 'design', label: 'DesignX UI/UX' },
              { id: 'ai', label: 'AI & Autonomous Agents' },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id as any)}
                className={`px-4 sm:px-5 py-2.5 rounded-2xl font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  filter === f.id
                    ? 'bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-black shadow-[0_0_20px_rgba(245,158,11,0.35)]'
                    : 'bg-white/5 text-white/70 border border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masterclass Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {filteredCourses.map((c) => {
            const Icon = c.icon;
            const isSyllabusOpen = expandedSyllabus === c.id;

            return (
              <div
                key={c.id}
                className="rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.04] to-black/95 p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-[#f59e0b]/40 transition-all duration-300 shadow-xl"
              >
                {/* Glow accent */}
                <div
                  className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-3xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ backgroundColor: c.accent }}
                />

                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className="px-3 py-1 rounded-full font-mono text-[10px] font-bold uppercase border"
                      style={{
                        backgroundColor: `${c.accent}15`,
                        borderColor: `${c.accent}40`,
                        color: c.accent,
                      }}
                    >
                      {c.badge}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-white/60">
                      <Clock className="w-3.5 h-3.5 text-[#fbbf24]" />
                      <span>{c.duration}</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-white transition-colors leading-tight">
                    {c.title}
                  </h3>
                  <div className="text-xs font-mono text-white/50 mt-1">{c.subtitle}</div>

                  <p className="mt-4 text-xs sm:text-sm text-white/75 leading-relaxed">
                    {c.summary}
                  </p>

                  {/* Highlights Grid */}
                  <div className="mt-6 space-y-2 border-t border-white/10 pt-4">
                    <div className="text-[11px] font-mono text-white/40 uppercase">What You Will Master:</div>
                    {c.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2 text-xs text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: c.accent }} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Capstone Box */}
                  <div className="mt-6 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#fbbf24] flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#f59e0b]" />
                      <span>PRODUCTION CAPSTONE PROJECT</span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white mt-1">
                      {c.capstone}
                    </div>
                  </div>

                  {/* Expandable Syllabus Drawer */}
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <button
                      type="button"
                      onClick={() => toggleSyllabus(c.id)}
                      className="w-full flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-[#fbbf24] hover:text-white transition-colors cursor-pointer py-1"
                    >
                      <span>{isSyllabusOpen ? "Close Week-by-Week Roadmap" : "Inspect Week-by-Week Syllabus"}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isSyllabusOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isSyllabusOpen && (
                      <div className="mt-3 space-y-2 pl-2 border-l-2 border-[#f59e0b]/40 animate-in fade-in duration-200">
                        {c.syllabus.map((s) => (
                          <div key={s.week} className="text-xs">
                            <span className="font-mono text-[#f59e0b] font-bold mr-2">{s.week}:</span>
                            <span className="text-white/80">{s.title}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Pricing & Action */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono text-white/40 uppercase block">ALL-INCLUSIVE TUITION</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-black font-mono text-white">
                        {formatPrice(c.basePriceINR)}
                      </span>
                      <span className="text-[11px] font-mono text-white/50">One-Time / Installment Available</span>
                    </div>
                  </div>

                  <a
                    href={`mailto:contact@dotuniverse.io?subject=Academy%20Enrollment%20Inquiry%20-%20${encodeURIComponent(c.title)}&body=Hello%20dotUniverse%20Academy,%0A%0AI%20would%20like%20to%20enroll%20in%20the%20${encodeURIComponent(c.title)}%20masterclass.%20Please%20share%20the%20admission%20criteria%20and%20next%20cohort%20dates.`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs font-black uppercase tracking-wider text-black bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] hover:opacity-95 transition-all shadow-[0_0_25px_rgba(245,158,11,0.35)] cursor-pointer"
                  >
                    <span>Reserve Seat</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
