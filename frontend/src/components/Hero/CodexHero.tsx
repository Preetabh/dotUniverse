import React from 'react';
import { CTAButton } from '../Buttons/CTAButton';
import { ArrowRight, Sparkles, CheckCircle2, Code2, Rocket, TrendingUp, Smartphone } from 'lucide-react';

export const CodexHero: React.FC = () => {

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-36 pb-24 flex flex-col justify-center items-center text-center overflow-hidden bg-[#070709]"
    >
      {/* ==============================================================
          LIGHTWEIGHT & CLASSY COSMIC BACKGROUND (Optimized for all PCs)
         ============================================================== */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        {/* 1. Subtle, Soft Ambient Center Glow (Zero heavy blur, ultra-light GPU usage) */}
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[350px] sm:h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(200,255,0,0.06)_0%,rgba(0,240,255,0.04)_40%,transparent_70%)]" />

        {/* 2. Soft Top Light Accent (Very gentle, not blinding) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[800px] h-[220px] bg-[radial-gradient(ellipse_at_top,rgba(200,255,0,0.08)_0%,transparent_70%)]" />

        {/* 3. Lightweight 2D Celestial Orbit Ring (Clean, elegant & smooth on all CPUs) */}
        <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] sm:w-[780px] sm:h-[780px] [transform:rotateX(65deg)] opacity-60">
          {/* Subtle outer orbit line */}
          <div className="absolute inset-0 rounded-full border border-white/[0.08] animate-cosmic-orbit" />
          
          {/* Middle orbit ring with single signature neon dot */}
          <div className="absolute inset-[18%] rounded-full border border-white/[0.12] border-dashed animate-cosmic-orbit-reverse">
            {/* Classy small glowing dot */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#c8ff00] shadow-[0_0_10px_#c8ff00]" />
          </div>

          {/* Inner subtle core ring */}
          <div className="absolute inset-[38%] rounded-full border border-cyan-400/[0.15]" />
        </div>

        {/* 4. Minimalist Stardust Points (Lightweight, pure CSS, no lag) */}
        <div className="absolute inset-0">
          <div className="absolute top-[18%] left-[18%] w-1 h-1 rounded-full bg-white/40 animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute top-[28%] left-[82%] w-1.5 h-1.5 rounded-full bg-[#c8ff00]/50 animate-pulse" style={{ animationDuration: '5s' }} />
          <div className="absolute top-[65%] left-[12%] w-1 h-1 rounded-full bg-[#00f0ff]/50 animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute top-[75%] left-[85%] w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" style={{ animationDuration: '4.5s' }} />
          <div className="absolute top-[45%] left-[6%] w-1 h-1 rounded-full bg-white/30 animate-pulse" style={{ animationDuration: '5.5s' }} />
          <div className="absolute top-[38%] left-[92%] w-1 h-1 rounded-full bg-[#c8ff00]/40 animate-pulse" style={{ animationDuration: '3.5s' }} />
          <div className="absolute top-[82%] left-[35%] w-1 h-1 rounded-full bg-[#00f0ff]/40 animate-pulse" style={{ animationDuration: '6.5s' }} />
        </div>

        {/* 5. Clean, Crisp Modern Tech Grid with Smooth Radial Vignette */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_50%,transparent_100%)] opacity-60" />
      </div>

      {/* Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center relative z-10">
        {/* Glowing Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#c8ff00]/40 bg-[#c8ff00]/10 backdrop-blur-xl mb-8 shadow-[0_0_25px_rgba(200,255,0,0.18)] hover:border-[#c8ff00] hover:shadow-[0_0_35px_rgba(200,255,0,0.35)] transition-all">
          <Sparkles className="w-4 h-4 text-[#c8ff00] animate-spin" style={{ animationDuration: '8s' }} />
          <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#c8ff00]">
            Full-Service Digital Powerhouse
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff00] animate-pulse"></span>
        </div>

        {/* Main Headline */}
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] uppercase">
            <span className="text-white drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)] block">
              WE DON&apos;T JUST BUILD.
            </span>
            <span className="bg-gradient-to-r from-[#c8ff00] via-[#00f0ff] to-[#ff005e] bg-clip-text text-transparent glow-lime block mt-2 drop-shadow-[0_0_40px_rgba(200,255,0,0.3)]">
              UNFORGETTABLE.
            </span>
          </h1>
        </div>

        {/* Subcopy */}
        <p className="mt-8 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-sm">
          Transforming Businesses through Innovative Digital Solutions, High-Converting Website Development,
          Mobile App &amp; Game Engineering, and Scalable Growth Marketing.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <CTAButton href="#pricing" variant="primary" size="lg" className="w-full sm:w-auto shadow-[0_0_35px_rgba(200,255,0,0.35)] hover:shadow-[0_0_50px_rgba(200,255,0,0.6)]">
            <span>Book a Free Call</span>
            <ArrowRight className="w-5 h-5 ml-1" />
          </CTAButton>

          <CTAButton href="#portfolio" variant="outline" size="lg" className="w-full sm:w-auto hover:bg-white/[0.08] hover:border-white/50 backdrop-blur-xl">
            <span>Explore Our Work</span>
          </CTAButton>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-white/70 font-medium">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4 text-[#c8ff00]" />
            <span>50+ Projects Delivered</span>
          </div>
          <span className="text-white/20 hidden sm:inline">•</span>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4 text-[#c8ff00]" />
            <span>Zero Long-term Lock-in</span>
          </div>
          <span className="text-white/20 hidden sm:inline">•</span>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4 text-[#c8ff00]" />
            <span>100% On-Time Guarantee</span>
          </div>
        </div>

        {/* Floating Quick Feature Highlights */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl">
          <div className="glass-panel p-4 rounded-2xl flex items-center gap-3 border border-white/10 hover:border-[#c8ff00]/60 transition-all hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_30px_rgba(200,255,0,0.15)] backdrop-blur-xl bg-white/[0.03]">
            <div className="w-10 h-10 rounded-xl bg-[#c8ff00]/10 flex items-center justify-center text-[#c8ff00] border border-[#c8ff00]/20">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">Full Stack Web</div>
              <div className="text-xs text-white/50">Next.js &amp; React</div>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl flex items-center gap-3 border border-white/10 hover:border-[#00f0ff]/60 transition-all hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_30px_rgba(0,240,255,0.15)] backdrop-blur-xl bg-white/[0.03]">
            <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 flex items-center justify-center text-[#00f0ff] border border-[#00f0ff]/20">
              <Smartphone className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">Mobile Apps</div>
              <div className="text-xs text-white/50">iOS &amp; Android</div>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl flex items-center gap-3 border border-white/10 hover:border-[#ec4899]/60 transition-all hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_30px_rgba(236,72,153,0.15)] backdrop-blur-xl bg-white/[0.03]">
            <div className="w-10 h-10 rounded-xl bg-[#ec4899]/10 flex items-center justify-center text-[#ec4899] border border-[#ec4899]/20">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">Growth Ads</div>
              <div className="text-xs text-white/50">Google &amp; Meta ROI</div>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl flex items-center gap-3 border border-white/10 hover:border-[#a855f7]/60 transition-all hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] backdrop-blur-xl bg-white/[0.03]">
            <div className="w-10 h-10 rounded-xl bg-[#a855f7]/10 flex items-center justify-center text-[#a855f7] border border-[#a855f7]/20">
              <Rocket className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">Rapid Delivery</div>
              <div className="text-xs text-white/50">2-4 Weeks Sprints</div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Bottom Cosmic Horizon Laser Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c8ff00]/40 to-transparent pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 -top-[3px] w-8 h-[7px] bg-[#c8ff00] rounded-full blur-[3px]" />
        <div className="absolute left-1/2 -translate-x-1/2 -top-[1px] w-2 h-[3px] bg-white rounded-full" />
      </div>
    </section>
  );
};

