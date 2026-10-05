import React from 'react';
import { CTAButton } from '../Buttons/CTAButton';
import { ArrowRight, Sparkles, CheckCircle2, Flame, Code2, Rocket, TrendingUp, Smartphone } from 'lucide-react';

export const CodexHero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-gradient-to-tr from-[#c8ff00]/10 via-[#00f0ff]/5 to-[#ff005e]/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-[#c8ff00]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#ff005e]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center relative z-10">
        {/* Glowing Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#c8ff00]/40 bg-[#c8ff00]/10 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(200,255,0,0.15)] hover:border-[#c8ff00] transition-colors">
          <Sparkles className="w-4 h-4 text-[#c8ff00] animate-spin" style={{ animationDuration: '8s' }} />
          <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#c8ff00]">
            Full-Service Digital Powerhouse
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff00]"></span>
        </div>

        {/* Main Headline */}
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] uppercase">
            <span className="text-white drop-shadow-sm block">WE DON&apos;T JUST BUILD.</span>
            <span className="bg-gradient-to-r from-[#c8ff00] via-[#00f0ff] to-[#ff005e] bg-clip-text text-transparent glow-lime block mt-2">
              UNFORGETTABLE.
            </span>
          </h1>
        </div>

        {/* Subcopy */}
        <p className="mt-8 text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-normal leading-relaxed">
          Transforming Businesses through Innovative Digital Solutions, High-Converting Website Development,
          Mobile App &amp; Game Engineering, and Scalable Growth Marketing.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <CTAButton href="#pricing" variant="primary" size="lg" className="w-full sm:w-auto">
            <span>Book a Free Call</span>
            <ArrowRight className="w-5 h-5 ml-1" />
          </CTAButton>

          <CTAButton href="#portfolio" variant="outline" size="lg" className="w-full sm:w-auto">
            <span>Explore Our Work</span>
          </CTAButton>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-white/60 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#c8ff00]" />
            <span>50+ Projects Delivered</span>
          </div>
          <span className="text-white/20 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#c8ff00]" />
            <span>Zero Long-term Lock-in</span>
          </div>
          <span className="text-white/20 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#c8ff00]" />
            <span>100% On-Time Guarantee</span>
          </div>
        </div>

        {/* Floating Quick Feature Highlights */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl">
          <div className="glass-panel p-4 rounded-2xl flex items-center gap-3 border border-white/10 hover:border-[#c8ff00]/40 transition-all hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-[#c8ff00]/10 flex items-center justify-center text-[#c8ff00]">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">Full Stack Web</div>
              <div className="text-xs text-white/50">Next.js &amp; React</div>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl flex items-center gap-3 border border-white/10 hover:border-[#5b21b6]/50 transition-all hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-[#5b21b6]/20 flex items-center justify-center text-[#a855f7]">
              <Smartphone className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">Mobile Apps</div>
              <div className="text-xs text-white/50">iOS &amp; Android</div>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl flex items-center gap-3 border border-white/10 hover:border-[#ec4899]/50 transition-all hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-[#ec4899]/20 flex items-center justify-center text-[#ec4899]">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">Growth Ads</div>
              <div className="text-xs text-white/50">Google &amp; Meta ROI</div>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl flex items-center gap-3 border border-white/10 hover:border-[#ff005e]/50 transition-all hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-[#ff005e]/20 flex items-center justify-center text-[#ff005e]">
              <Rocket className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">Rapid Delivery</div>
              <div className="text-xs text-white/50">2-4 Weeks Sprints</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
