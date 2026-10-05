import React from 'react';
import { CTAButton } from '../../../components/Buttons/CTAButton';
import { ArrowRight, Sparkles, CheckCircle2, Mail, Shield, Rocket, Flame } from 'lucide-react';

export const WebDevCTA: React.FC = () => {
  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden border-t border-white/10 bg-black cyber-grid">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-r from-[#c8ff00]/15 via-[#00f0ff]/15 to-[#ff005e]/15 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-10 sm:p-16 border border-white/20 bg-gradient-to-b from-white/[0.07] to-black/95 backdrop-blur-3xl text-center flex flex-col items-center shadow-[0_0_60px_rgba(200,255,0,0.15)] overflow-hidden">
          {/* Neon Top Edge */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c8ff00] via-[#00f0ff] to-[#ff005e]" />

          {/* HUD Corner Brackets */}
          <div className="hud-bracket-top-left" />
          <div className="hud-bracket-bottom-right" />

          {/* Live Availability Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#c8ff00]/10 border border-[#c8ff00]/40 text-[#c8ff00] font-mono text-xs font-bold uppercase tracking-wider mb-8 shadow-[0_0_20px_rgba(200,255,0,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#c8ff00] animate-ping" />
            <span>● PROTOCOL ACTIVE • 2 PRODUCTION SLOTS LEFT THIS QUARTER</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight max-w-3xl leading-[1.06] font-sans">
            What’s Stopping Your Brand <br />
            <span className="bg-gradient-to-r from-[#c8ff00] via-[#00f0ff] to-[#ff005e] bg-clip-text text-transparent glow-lime">
              From Growing?
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Nothing. Book a free call and let&apos;s fix it today. We build fast, conversion-focused sites —
            then keep improving them after launch based on what visitors actually do, not guesses.
          </p>

          {/* Interactive CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <CTAButton
              href="mailto:contact@dotuniverse.io"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto shadow-[0_0_30px_rgba(200,255,0,0.3)] hover:shadow-[0_0_45px_rgba(200,255,0,0.5)] font-mono font-bold tracking-wider"
            >
              <span>Book a Free Call</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </CTAButton>

            <a
              href="mailto:contact@dotuniverse.io?subject=Web%20Development%20Project%20Inquiry"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-sm uppercase tracking-wider transition-all hover:border-[#c8ff00] hover:text-[#c8ff00] cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#c8ff00]" />
              <span>Direct Project Inquiry</span>
            </a>
          </div>

          {/* Assurance Badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-white/50 border-t border-white/10 pt-6 w-full">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c8ff00]" />
              <span>Free 30-Min Architecture Audit</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#00f0ff]" />
              <span>120-Day Dedicated Warranty</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Rocket className="w-4 h-4 text-[#ff005e]" />
              <span>Zero-Downtime Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
