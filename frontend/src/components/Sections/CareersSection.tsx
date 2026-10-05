import React, { useState } from 'react';
import {
  Briefcase,
  Sparkles,
  MapPin,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  DollarSign,
  Laptop,
  Flame,
  X,
  Send,
  Heart,
  Zap,
  Users,
  Terminal,
  ShieldCheck
} from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: 'engineering' | 'ai' | 'growth' | 'design';
  type: string;
  location: string;
  salary: string;
  experience: string;
  techStack: string[];
  description: string;
  responsibilities: string[];
  requirements: string[];
}

const OPEN_POSITIONS: JobPosition[] = [
  {
    id: "fullstack-architect",
    title: "Senior Full-Stack Architect",
    department: "engineering",
    type: "Full-Time • Permanent",
    location: "Remote / Barabanki HQ",
    salary: "₹18L - ₹32L + Profit Share",
    experience: "3+ Years",
    techStack: ["Next.js 15", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Redis"],
    description: "Lead the architectural design and high-concurrency deployment of enterprise client portals, ERPs, and custom Web3 engines.",
    responsibilities: [
      "Architect clean, modular microservices handling high concurrent loads",
      "Mentor junior engineers and conduct rigorous pull request reviews",
      "Directly communicate with client technical leaders on architecture roadmap"
    ],
    requirements: [
      "Deep expertise in TypeScript strict, Next.js App Router, and SQL database indexing",
      "Proven track record of shipping zero-downtime production platforms",
      "Passion for radical simplicity, performance profiling, and clean code"
    ]
  },
  {
    id: "ai-systems-engineer",
    title: "AI Systems & LLM Agent Engineer",
    department: "ai",
    type: "Full-Time • Permanent",
    location: "Remote",
    salary: "₹20L - ₹36L + Performance Bonus",
    experience: "2+ Years",
    techStack: ["Python", "LangChain", "Vector DBs", "Claude API", "RAG", "FastAPI"],
    description: "Build autonomous generative AI agents, semantic retrieval engines, and enterprise AI copilots integrated into core client workflows.",
    responsibilities: [
      "Construct hybrid RAG pipelines with custom chunking and semantic re-ranking",
      "Deploy self-correcting autonomous multi-agent systems with tool invocation",
      "Optimize prompt tokens and evaluate model hallucination guardrails"
    ],
    requirements: [
      "Hands-on experience with modern LLM frameworks (LangChain, LlamaIndex, OpenAI/Anthropic APIs)",
      "Strong background in vector embeddings (Pinecone, Qdrant, pgvector)",
      "Ability to ship production-ready APIs with streaming token responses"
    ]
  },
  {
    id: "growth-ads-lead",
    title: "High-Ticket Growth & Paid Media Lead",
    department: "growth",
    type: "Full-Time • Permanent",
    location: "Remote / Hybrid (Delhi/Barabanki)",
    salary: "₹12L - ₹24L + Uncapped ROAS Commission",
    experience: "2+ Years",
    techStack: ["Meta Ads", "Google PMax", "TikTok Ads", "GA4", "TripleWhale", "Funnel CRO"],
    description: "Manage and scale 6-figure monthly performance ad budgets for global DTC brands and B2B SaaS clients across North America, Europe, and India.",
    responsibilities: [
      "Strategize, launch, and ruthlessly optimize paid acquisition campaigns across Meta & Google",
      "Collaborate with our motion design team on high-converting video ad creatives",
      "Conduct continuous landing page A/B tests to maximize checkout conversion rates"
    ],
    requirements: [
      "Demonstrated history of driving 3.5x+ ROAS on monthly ad spend over ₹20L+",
      "Deep analytical intuition and proficiency with conversion rate optimization (CRO)",
      "Obsession with consumer psychology and high-retention video hooks"
    ]
  },
  {
    id: "lead-uiux-motion",
    title: "Lead UI/UX & 3D Motion Designer",
    department: "design",
    type: "Full-Time • Permanent",
    location: "Remote",
    salary: "₹14L - ₹26L + Equity",
    experience: "3+ Years",
    techStack: ["Figma", "Spline 3D", "After Effects", "Tailwind CSS", "Cinema4D"],
    description: "Craft jaw-dropping spatial interfaces, interactive design systems, and cinematic 3D web experiences that leave clients mesmerized.",
    responsibilities: [
      "Create high-fidelity design systems with atomic tokens and micro-interactions",
      "Prototype interactive 3D assets and WebGL scene layouts in Spline/Three.js",
      "Work hand-in-hand with frontend engineers to ensure 100% pixel-perfect execution"
    ],
    requirements: [
      "A stunning portfolio showcasing modern dark aesthetics, typography, and motion",
      "Deep understanding of responsive grid mechanics and design system tokens",
      "Ability to think in motion, transitions, and user delight"
    ]
  },
  {
    id: "mobile-engineer-flutter",
    title: "Mobile Systems Engineer (Flutter / RN)",
    department: "engineering",
    type: "Full-Time • Permanent",
    location: "Remote",
    salary: "₹14L - ₹25L",
    experience: "2+ Years",
    techStack: ["Flutter", "Dart", "React Native", "Firebase", "WebSockets", "SQLite"],
    description: "Develop silky-smooth, native-grade mobile applications for iOS and Android with offline-first synchronization and real-time sockets.",
    responsibilities: [
      "Build cross-platform mobile apps with 60 FPS animations and instant responsiveness",
      "Integrate hardware sensors, push notifications, and biometric authentication",
      "Manage app store deployment pipelines and automated OTA updates"
    ],
    requirements: [
      "Proficient in Flutter/Dart or React Native with published apps on App Store & Play Store",
      "Solid comprehension of state management (Bloc, Riverpod, or Zustand)",
      "Strong focus on battery efficiency, low memory footprint, and network resilience"
    ]
  },
  {
    id: "devops-cloud-lead",
    title: "DevOps & Cloud Reliability Lead",
    department: "engineering",
    type: "Full-Time • Permanent",
    location: "Remote",
    salary: "₹16L - ₹28L",
    experience: "3+ Years",
    techStack: ["AWS", "Kubernetes", "Terraform", "Cloudflare", "GitHub Actions", "Prometheus"],
    description: "Own our distributed cloud infrastructure across AWS and Cloudflare Edge, ensuring 99.99% uptime and instant automated deployment pipelines.",
    responsibilities: [
      "Provision and maintain multi-region infrastructure as code using Terraform",
      "Set up self-healing Kubernetes clusters with automated horizontal pod autoscaling",
      "Enforce rigorous zero-trust security policies and real-time APM telemetry"
    ],
    requirements: [
      "Deep practical experience with AWS core services (ECS, EKS, RDS, CloudFront)",
      "Strong skills in containerization, CI/CD automation, and Linux kernel tuning",
      "Experience with edge serverless runtimes and automated backup failover systems"
    ]
  }
];

export const CareersSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'engineering' | 'ai' | 'growth' | 'design'>('all');
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [applyModalJob, setApplyModalJob] = useState<JobPosition | null>(null);

  // Form State for Quick Application
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPortfolio, setApplicantPortfolio] = useState('');
  const [applicantExperience, setApplicantExperience] = useState('2-4 years');
  const [applicantNote, setApplicantNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const filteredJobs =
    activeTab === 'all'
      ? OPEN_POSITIONS
      : OPEN_POSITIONS.filter((j) => j.department === activeTab);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Launch prefilled email
      const subject = encodeURIComponent(`Application for ${applyModalJob?.title} - ${applicantName}`);
      const body = encodeURIComponent(
        `Hi dotUniverse Team,\n\nI am applying for the ${applyModalJob?.title} position.\n\nName: ${applicantName}\nEmail: ${applicantEmail}\nPortfolio/GitHub/LinkedIn: ${applicantPortfolio}\nExperience: ${applicantExperience}\n\nNote:\n${applicantNote}\n\nLooking forward to hearing from you!`
      );
      window.location.href = `mailto:support.dotuniverse@gmail.com?subject=${subject}&body=${body}`;
    }, 800);
  };

  return (
    <section id="careers" className="relative py-28 sm:py-36 overflow-hidden border-t border-cyan-500/20 bg-[#030712]">
      {/* Background Cosmic Atmosphere */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Join The Builder Guild • Careers at dotUniverse</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Build The Future. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Own Your Impact.
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            We don&apos;t hire cog-in-a-wheel employees. We scout elite engineers, AI tinkerers, and growth strategists 
            who desire true autonomy, high-velocity shipping, and transparent upside.
          </p>
        </div>

        {/* Culture & Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] flex items-start gap-3.5 hover:border-cyan-500/30 transition-colors">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Top Tier Compensation</div>
              <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                Competitive base salaries + quarterly milestone profit share.
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] flex items-start gap-3.5 hover:border-indigo-500/30 transition-colors">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">100% Async &amp; Remote</div>
              <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                Work from Barabanki HQ or anywhere on Earth. Zero micromanagement.
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] flex items-start gap-3.5 hover:border-purple-500/30 transition-colors">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Direct Founder Pods</div>
              <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                Ship directly with Vishu &amp; Japnam. Zero corporate bureaucracy.
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] flex items-start gap-3.5 hover:border-emerald-500/30 transition-colors">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Hardware &amp; AI Stipend</div>
              <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                Top-spec Apple Silicon MacBooks, premium GPU credits, and learning funds.
              </div>
            </div>
          </div>
        </div>

        {/* Department Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Openings', count: OPEN_POSITIONS.length },
            { id: 'engineering', label: 'Engineering', count: OPEN_POSITIONS.filter((j) => j.department === 'engineering').length },
            { id: 'ai', label: 'AI & Data', count: OPEN_POSITIONS.filter((j) => j.department === 'ai').length },
            { id: 'growth', label: 'Growth & Ads', count: OPEN_POSITIONS.filter((j) => j.department === 'growth').length },
            { id: 'design', label: 'UI/UX & 3D', count: OPEN_POSITIONS.filter((j) => j.department === 'design').length }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 border flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                  : 'bg-white/[0.02] text-slate-400 border-white/5 hover:text-white hover:border-white/20'
              }`}
            >
              <span>{tab.label}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/5 text-slate-400">
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Positions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="p-6 sm:p-7 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-cyan-400/50 hover:bg-cyan-950/20 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Corner Glow */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/5 group-hover:bg-cyan-500/15 rounded-full blur-2xl transition-all" />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                    {job.department}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-bold">
                    {job.salary}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors mb-2">
                  {job.title}
                </h3>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    {job.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-indigo-400" />
                    {job.experience}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 line-clamp-3">
                  {job.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {job.techStack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedJob(job)}
                  className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
                >
                  View Details
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setApplyModalJob(job);
                    setSubmitted(false);
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold transition-all shadow-md shadow-cyan-500/20 group-hover:scale-105"
                >
                  <span>Apply Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom General Application Callout */}
        <div className="mt-16 p-8 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.02] via-cyan-950/20 to-white/[0.02] text-center max-w-3xl mx-auto backdrop-blur-xl">
          <h3 className="text-xl font-bold text-white mb-2">
            Don&apos;t See Your Exact Role?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 max-w-xl mx-auto">
            We are always scouting exceptional minds. Send your GitHub, portfolio, or proudest side project directly to our founders.
          </p>
          <a
            href="mailto:support.dotuniverse@gmail.com?subject=Open%20Application%20-%20Exceptional%20Talent%20Pitch"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-mono uppercase tracking-wider bg-white/10 hover:bg-white/15 text-cyan-300 border border-cyan-500/40 transition-all font-bold"
          >
            <span>Pitch Your Superpower</span>
            <Send className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Role Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border border-cyan-500/30 bg-[#070e20] text-white p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 inline-block mb-3">
              {selectedJob.department} • {selectedJob.type}
            </span>

            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
              {selectedJob.title}
            </h3>

            <div className="text-sm font-mono text-emerald-400 font-bold mb-4">
              {selectedJob.salary} • {selectedJob.location}
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedJob.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
                What You Will Drive:
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {selectedJob.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-2">
                What We Expect:
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {selectedJob.requirements.map((req) => (
                  <li key={req} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Barabanki HQ &amp; Global Remote
              </span>
              <button
                onClick={() => {
                  setApplyModalJob(selectedJob);
                  setSelectedJob(null);
                }}
                className="px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25"
              >
                Apply For This Position
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick Application Modal */}
      {applyModalJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl">
          <div className="relative w-full max-w-lg rounded-3xl border border-cyan-500/40 bg-[#070e20] text-white p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setApplyModalJob(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-2 text-xs font-mono text-cyan-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>CANDIDATE DISPATCH CONSOLE</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white mb-1">
              Apply for {applyModalJob.title}
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Skip the resume blackhole. Your submission lands directly in our founders&apos; inbox.
            </p>

            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <div className="text-lg font-bold text-white">Opening Email Client...</div>
                <div className="text-xs text-slate-400 max-w-xs mx-auto">
                  If your mail client didn&apos;t open automatically, send your portfolio to{' '}
                  <span className="text-cyan-300 font-mono">support.dotuniverse@gmail.com</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="e.g. Alex Sharma"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="alex@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                    Portfolio / GitHub / LinkedIn URL *
                  </label>
                  <input
                    type="url"
                    required
                    value={applicantPortfolio}
                    onChange={(e) => setApplicantPortfolio(e.target.value)}
                    placeholder="https://github.com/..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                    Experience Level
                  </label>
                  <select
                    value={applicantExperience}
                    onChange={(e) => setApplicantExperience(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0b1328] border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs font-mono"
                  >
                    <option value="1-2 years">1-2 years (Fast learner / builder)</option>
                    <option value="2-4 years">2-4 years (Mid-level craft)</option>
                    <option value="4+ years">4+ years (Senior / Architect)</option>
                    <option value="Self-Taught Prodigy">Self-Taught Prodigy (Proof of work)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                    Proudest Thing You Ever Built / Short Note
                  </label>
                  <textarea
                    rows={3}
                    value={applicantNote}
                    onChange={(e) => setApplicantNote(e.target.value)}
                    placeholder="Tell us about a technical challenge you cracked or link a live product..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs font-mono resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Application</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
