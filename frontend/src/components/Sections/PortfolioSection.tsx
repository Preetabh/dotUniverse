import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../../constants';
import { ExternalLink, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? PORTFOLIO_PROJECTS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === PORTFOLIO_PROJECTS.length - 1 ? 0 : prev + 1));
  };

  const currentProject = PORTFOLIO_PROJECTS[currentIndex];

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c8ff00]/10 border border-[#c8ff00]/30 text-[#c8ff00] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Real Work. <span className="text-[#c8ff00]">Proven Results.</span>
            </h2>
            <p className="mt-3 text-white/60 text-base max-w-xl">
              Explore how we helped international businesses launch high-impact platforms and scale profitable customer acquisition.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 transition-colors"
              aria-label="Previous portfolio item"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-[#c8ff00]/40 bg-[#c8ff00]/10 flex items-center justify-center text-[#c8ff00] hover:bg-[#c8ff00] hover:text-black transition-colors"
              aria-label="Next portfolio item"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Showcase Card */}
        <div className="relative rounded-3xl border border-white/15 bg-zinc-950 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Project Image */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[480px] overflow-hidden group">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Badge */}
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#c8ff00] text-black shadow-lg">
                  {currentProject.badge}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-black/70 backdrop-blur-md border border-white/20">
                  {currentProject.stats}
                </span>
              </div>
            </div>

            {/* Project Details */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#00f0ff]">
                  {currentProject.category}
                </span>
                <h3 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  {currentProject.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
                  {currentProject.result}
                </p>

                {/* Tech Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {currentProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link CTA */}
              <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#c8ff00] hover:underline"
                >
                  <span>Request Similar Case Study</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* Slide indicator dots */}
                <div className="flex items-center gap-1.5">
                  {PORTFOLIO_PROJECTS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        currentIndex === idx ? 'w-6 bg-[#c8ff00]' : 'w-2 bg-white/20'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Preview Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-3">
          {PORTFOLIO_PROJECTS.map((p, idx) => (
            <button
              key={p.title}
              onClick={() => setCurrentIndex(idx)}
              className={`p-3 rounded-2xl border text-left transition-all ${
                currentIndex === idx
                  ? 'border-[#c8ff00] bg-white/[0.08] shadow-[0_0_15px_rgba(200,255,0,0.15)]'
                  : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05]'
              }`}
            >
              <div className="text-xs font-bold text-white truncate">{p.title}</div>
              <div className="text-[10px] text-white/50 truncate mt-0.5">{p.category}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
