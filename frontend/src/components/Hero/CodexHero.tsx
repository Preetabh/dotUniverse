import React, { useState } from 'react';
import { CTAButton } from '../Buttons/CTAButton';
import { ArrowRight, Sparkles, CheckCircle2, Code2, Rocket, TrendingUp, Smartphone } from 'lucide-react';

const CELESTIAL_STARS = [
  { top: "12%", left: "15%", size: 2, delay: "0s", color: "#c8ff00" },
  { top: "22%", left: "82%", size: 1.5, delay: "1.2s", color: "#00f0ff" },
  { top: "35%", left: "8%", size: 2.5, delay: "2.5s", color: "#ffffff" },
  { top: "18%", left: "45%", size: 1, delay: "0.7s", color: "#c8ff00" },
  { top: "42%", left: "92%", size: 2, delay: "1.9s", color: "#ec4899" },
  { top: "68%", left: "12%", size: 1.5, delay: "3.1s", color: "#00f0ff" },
  { top: "75%", left: "88%", size: 2, delay: "0.4s", color: "#c8ff00" },
  { top: "82%", left: "28%", size: 1, delay: "2.1s", color: "#ffffff" },
  { top: "28%", left: "68%", size: 2, delay: "1.5s", color: "#c8ff00" },
  { top: "55%", left: "5%", size: 1.5, delay: "2.8s", color: "#00f0ff" },
  { top: "14%", left: "90%", size: 2, delay: "3.5s", color: "#ffffff" },
  { top: "62%", left: "76%", size: 2.5, delay: "0.9s", color: "#a855f7" },
  { top: "48%", left: "18%", size: 1, delay: "1.7s", color: "#c8ff00" },
  { top: "88%", left: "62%", size: 1.5, delay: "2.4s", color: "#00f0ff" },
  { top: "8%", left: "32%", size: 2, delay: "3.0s", color: "#ffffff" },
  { top: "92%", left: "42%", size: 1.5, delay: "0.2s", color: "#c8ff00" },
  { top: "38%", left: "35%", size: 1, delay: "1.4s", color: "#a855f7" },
  { top: "58%", left: "95%", size: 2, delay: "2.2s", color: "#00f0ff" },
  { top: "25%", left: "22%", size: 1.5, delay: "1.8s", color: "#c8ff00" },
  { top: "70%", left: "48%", size: 1.5, delay: "2.7s", color: "#ffffff" },
];

export const CodexHero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 35 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-36 pb-24 flex flex-col justify-center items-center text-center overflow-hidden bg-[#050508]"
    >
      {/* ==============================================================
          CLASSY COSMIC BACKGROUND SYSTEM (z-0 to ensure 100% visibility)
         ============================================================== */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        {/* 1. Interactive Cursor Light Spotlight */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(800px circle at ${mousePos.x}% ${mousePos.y}%, rgba(200, 255, 0, 0.12) 0%, rgba(0, 240, 255, 0.08) 35%, transparent 70%)`,
          }}
        />

        {/* 2. Keynote Luminous Top Light Cone */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] sm:w-[1000px] h-[450px] bg-[radial-gradient(ellipse_at_top,rgba(200,255,0,0.22)_0%,rgba(0,240,255,0.12)_35%,transparent_70%)] blur-3xl opacity-80" />

        {/* 3. Deep Chromatic Aurora Nebulae (Vibrant & Luxurious) */}
        <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] sm:w-[1100px] sm:h-[650px] bg-gradient-to-tr from-[#c8ff00]/20 via-[#00f0ff]/15 to-[#ec4899]/20 rounded-full blur-[120px] animate-aurora-pulse" />
        <div className="absolute -top-10 -right-20 w-[450px] h-[450px] bg-[#00f0ff]/15 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-[#ec4899]/15 rounded-full blur-[140px]" />

        {/* 4. 3D Cosmic Orbital Plane (dotUniverse Signature System) */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] sm:w-[1100px] sm:h-[1100px] lg:w-[1250px] lg:h-[1250px] [transform:perspective(1200px)_rotateX(68deg)] opacity-85">
          {/* Outer dashed celestial track */}
          <div className="absolute inset-0 rounded-full border border-white/15 border-dashed animate-cosmic-orbit" />
          
          {/* Middle illuminated orbit ring with the orbiting "dotUniverse" celestial node */}
          <div className="absolute inset-[15%] rounded-full border border-[#c8ff00]/40 shadow-[0_0_60px_rgba(200,255,0,0.2),inset_0_0_40px_rgba(200,255,0,0.08)] animate-cosmic-orbit-reverse">
            {/* Neon Lime Orbiting Planet Dot */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#c8ff00] shadow-[0_0_20px_#c8ff00,0_0_45px_rgba(200,255,0,0.9)] border-2 border-white" />
            
            {/* Cyber Cyan Counter-Satellite */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-[#00f0ff] shadow-[0_0_20px_#00f0ff] border border-white" />
          </div>

          {/* Inner core horizon ring */}
          <div className="absolute inset-[32%] rounded-full border border-[#00f0ff]/30 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.08)_0%,transparent_70%)] shadow-[inset_0_0_40px_rgba(0,240,255,0.15)]" />

          {/* Center gravitational core pulse */}
          <div className="absolute inset-[46%] rounded-full border border-white/20 bg-[#c8ff00]/10 animate-ping" style={{ animationDuration: '6s' }} />
        </div>

        {/* 5. Twinkling Stardust Constellation Field */}
        <div className="absolute inset-0 overflow-hidden">
          {CELESTIAL_STARS.map((star, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-stardust"
              style={{
                top: star.top,
                left: star.left,
                width: `${star.size}px`,
                height: `${star.size}px`,
                backgroundColor: star.color,
                boxShadow: `0 0 ${star.size * 6}px ${star.color}, 0 0 ${star.size * 12}px ${star.color}`,
                animationDelay: star.delay,
              }}
            />
          ))}
        </div>

        {/* 6. Technical Precision Grid with Smooth Vignette */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_60%,transparent_100%)] opacity-70" />
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

