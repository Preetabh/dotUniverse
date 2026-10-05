import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../../constants';
import {
  ExternalLink,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Layers,
  Eye,
  ShieldCheck,
  Cpu,
  Zap,
  CheckCircle2,
  X,
  Maximize2,
  ArrowUpRight,
  BarChart3,
  Calendar,
  Building
} from 'lucide-react';

type FilterCategory = 'all' | 'crm' | 'hrm' | 'comms' | 'ecommerce' | 'fitness' | 'education';

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [selectedModalProject, setSelectedModalProject] = useState<PortfolioProject | null>(null);

  const categories: { id: FilterCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Projects', count: PORTFOLIO_PROJECTS.length },
    { id: 'crm', label: 'CRM & Portals', count: PORTFOLIO_PROJECTS.filter((p) => p.categorySlug === 'crm').length },
    { id: 'hrm', label: 'HRM Systems', count: PORTFOLIO_PROJECTS.filter((p) => p.categorySlug === 'hrm').length },
    { id: 'comms', label: 'Video & Chat', count: PORTFOLIO_PROJECTS.filter((p) => p.categorySlug === 'comms').length },
    { id: 'ecommerce', label: 'E-Commerce', count: PORTFOLIO_PROJECTS.filter((p) => p.categorySlug === 'ecommerce').length },
    { id: 'fitness', label: 'Gym & Fitness', count: PORTFOLIO_PROJECTS.filter((p) => p.categorySlug === 'fitness').length },
    { id: 'education', label: 'School ERP', count: PORTFOLIO_PROJECTS.filter((p) => p.categorySlug === 'education').length }
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.categorySlug === activeCategory);

  const currentFeatured = PORTFOLIO_PROJECTS[featuredIndex];

  const nextFeatured = () => {
    setFeaturedIndex((prev) => (prev === PORTFOLIO_PROJECTS.length - 1 ? 0 : prev + 1));
  };

  const prevFeatured = () => {
    setFeaturedIndex((prev) => (prev === 0 ? PORTFOLIO_PROJECTS.length - 1 : prev - 1));
  };

  return (
    <section id="portfolio" className="relative py-28 overflow-hidden border-t border-cyan-500/20 bg-[#030712]">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-[#c8ff00]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Master Work & Production Portals</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Battle-Tested <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-[#c8ff00]">Enterprise Systems</span>
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            From multi-tenant construction ERPs and biometric HR portals to real-time WebRTC video suites and high-throughput e-commerce engines, explore software engineered for zero failure.
          </p>
        </div>

        {/* Global Key Metrics Telemetry Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mb-14">
          <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold font-mono text-white">50+ Portals</div>
              <div className="text-[11px] text-slate-400 font-mono">Shipped to Production</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold font-mono text-white">99.99%</div>
              <div className="text-[11px] text-slate-400 font-mono">Guaranteed Architecture SLA</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold font-mono text-white">&lt; 50ms</div>
              <div className="text-[11px] text-slate-400 font-mono">WebRTC Video & Socket Latency</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#c8ff00]/10 text-[#c8ff00] border border-[#c8ff00]/20">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold font-mono text-white">100% Custom</div>
              <div className="text-[11px] text-slate-400 font-mono">Zero Bloated Templates</div>
            </div>
          </div>
        </div>

        {/* Featured Interactive Cinema Spotlight */}
        <div className="mb-20 rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[#070e20] to-[#040813] overflow-hidden shadow-2xl shadow-cyan-950/50">
          <div className="p-4 sm:p-6 border-b border-white/5 flex flex-wrap items-center justify-between gap-4 bg-white/[0.01]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-300">
                ACTIVE SHOWCASE SPOTLIGHT • {currentFeatured.category}
              </span>
            </div>

            {/* Slide Next/Prev controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevFeatured}
                className="p-2 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-cyan-400/40 transition-colors"
                title="Previous Project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-slate-400 px-2">
                {featuredIndex + 1} / {PORTFOLIO_PROJECTS.length}
              </span>
              <button
                type="button"
                onClick={nextFeatured}
                className="p-2 rounded-xl border border-cyan-400/40 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-400 hover:text-black transition-colors"
                title="Next Project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Screenshot Display */}
            <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[420px] lg:min-h-[500px] bg-black/60 group overflow-hidden flex items-center justify-center p-3 sm:p-6">
              <img
                src={currentFeatured.image}
                alt={currentFeatured.title}
                className="w-full h-full object-contain sm:object-cover rounded-2xl border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#040813] via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Badges on image */}
              <div className="absolute top-6 left-6 flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-cyan-400 text-black font-extrabold shadow-lg">
                  {currentFeatured.badge}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono text-white bg-black/80 backdrop-blur-md border border-white/20">
                  {currentFeatured.stats}
                </span>
              </div>

              {/* Fullscreen Inspector Button */}
              <button
                onClick={() => setSelectedModalProject(currentFeatured)}
                className="absolute bottom-6 right-6 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider bg-black/80 hover:bg-cyan-500 hover:text-black text-cyan-300 border border-cyan-400/40 backdrop-blur-md transition-all shadow-xl"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Deep Spec View</span>
              </button>
            </div>

            {/* Project Details Panel */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/5">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{currentFeatured.category}</span>
                  <span className="text-slate-600">•</span>
                  <span>{currentFeatured.year}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {currentFeatured.title}
                </h3>

                <p className="mt-3 text-sm text-cyan-200/90 leading-relaxed font-mono">
                  {currentFeatured.tagline}
                </p>

                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                  {currentFeatured.result}
                </p>

                {/* Key Highlights */}
                <div className="mt-5 space-y-2">
                  <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                    Core Capabilities:
                  </div>
                  {currentFeatured.highlights.slice(0, 3).map((hl) => (
                    <div key={hl} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {currentFeatured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.03] border border-white/10 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedModalProject(currentFeatured)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold transition-all shadow-lg shadow-cyan-500/20"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Blueprint</span>
                </button>

                <a
                  href="mailto:support.dotuniverse@gmail.com?subject=Inquiry%20Regarding%20Enterprise%20Portal%20Architecture"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Request Custom Build</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Categories Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 border flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                  : 'bg-white/[0.02] text-slate-400 border-white/5 hover:text-white hover:border-white/20'
              }`}
            >
              <span>{cat.label}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/5 text-slate-400">
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Bento Grid Showcase of All 8 Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedModalProject(project)}
              className="group p-5 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-cyan-400/50 hover:bg-cyan-950/20 transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                {/* Image Viewport */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black/60 border border-white/5 mb-5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                      {project.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/90">
                    <span className="truncate">{project.client}</span>
                    <span className="text-cyan-400 font-bold shrink-0">{project.stats}</span>
                  </div>
                </div>

                {/* Category & Title */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">{project.year}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors line-clamp-1">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] font-mono text-slate-500 self-center">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Card Hover Action */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-cyan-300 transition-colors">
                <span className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  View Architecture
                </span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Modal Inspector */}
      {selectedModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-xl">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-cyan-500/30 bg-[#070e20] text-white p-6 sm:p-8 shadow-2xl shadow-cyan-950/80">
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedModalProject(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400 transition-all text-slate-400 hover:text-white"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-cyan-950/80 border border-cyan-400/40 text-cyan-300">
                {selectedModalProject.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                CLIENT: {selectedModalProject.client}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-white mb-2">
              {selectedModalProject.title}
            </h3>

            <p className="text-sm font-mono text-cyan-200/90 mb-6">
              {selectedModalProject.tagline}
            </p>

            {/* Modal Image Viewport */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black/80 mb-6">
              <img
                src={selectedModalProject.image}
                alt={selectedModalProject.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Result callout */}
            <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 mb-6">
              <div className="text-[11px] font-mono uppercase text-cyan-400 tracking-wider mb-1">
                MEASURED IMPACT &amp; VERIFIED OUTCOME
              </div>
              <div className="text-sm text-slate-200 leading-relaxed font-semibold">
                {selectedModalProject.result}
              </div>
            </div>

            {/* Architecture & Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
                  <Cpu className="w-4 h-4" />
                  <span>Engineered Capabilities</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {selectedModalProject.highlights.map((hl) => (
                    <li key={hl} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider mb-3">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Architecture &amp; Security Specs</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {selectedModalProject.architecture.map((arch) => (
                    <li key={arch} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5" />
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="mb-8">
              <div className="text-[11px] font-mono uppercase text-slate-400 mb-2">
                PRODUCTION TECHNOLOGY MATRIX:
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedModalProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-xl text-xs font-mono bg-white/[0.05] border border-white/10 text-cyan-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono text-slate-400">
                Ready to deploy an enterprise system matching these specifications?
              </div>
              <a
                href={`mailto:support.dotuniverse@gmail.com?subject=Inquiry%20for%20Project:%20${encodeURIComponent(
                  selectedModalProject.title
                )}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-lg shadow-cyan-500/25 transition-all"
              >
                <span>Deploy Similar Architecture</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
