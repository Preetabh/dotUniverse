import React from 'react';
import { ArrowRight, Mail, Sparkles, CheckCircle2, ShieldCheck, Flame, Compass } from 'lucide-react';
import { CTAButton } from '../../../components/Buttons/CTAButton';

export const OnlineCoursesCTA: React.FC = () => {
  return (
    <section id="admissions" className="relative py-28 sm:py-36 overflow-hidden border-t border-white/10 bg-black cyber-grid">
      {/* Opulent Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-[#f59e0b]/20 via-[#ec4899]/15 to-[#d97706]/15 rounded-full blur-[200px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-10 sm:p-16 border border-white/20 bg-gradient-to-b from-[#1a1106]/90 via-[#0e0a05]/95 to-black/95 backdrop-blur-3xl text-center flex flex-col items-center shadow-[0_0_80px_rgba(245,158,11,0.2)] overflow-hidden">
          
          {/* Top Foil Hairline */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fbbf24] to-transparent" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f59e0b]/15 border border-[#f59e0b]/40 text-[#fbbf24] font-mono text-xs font-bold uppercase tracking-wider mb-8 shadow-[0_0_20px_rgba(245,158,11,0.25)]">
            <Flame className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>● 25 SEATS MAXIMUM PER COHORT • ADMISSIONS ROLLING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight max-w-3xl leading-[1.08] font-sans">
            Ready to Build <br />
            <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#f97316] bg-clip-text text-transparent">
              High-Income Mastery?
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed font-normal">
            Take the leap from tutorial paralysis to verified production competence. Submit your profile for cohort review, schedule a 1-on-1 counseling call, and start building alongside agency founders.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <CTAButton
              href="mailto:support.dotuniverse@gmail.com?subject=dotUniverse%20Academy%20Cohort%20Application&body=Hello%20dotUniverse%20Academy,%0A%0AI%20would%20like%20to%20apply%20for%20the%20upcoming%20masterclass%20cohort.%20Please%20send%20me%20the%20curriculum%20details%20and%20application%20form."
              variant="primary"
              size="lg"
              className="w-full sm:w-auto shadow-[0_0_40px_rgba(245,158,11,0.45)] !bg-gradient-to-r !from-[#f59e0b] !via-[#fbbf24] !to-[#d97706] !border-none !text-black font-mono font-black tracking-wider"
            >
              <span>Apply for Next Cohort</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </CTAButton>

            <a
              href="mailto:support.dotuniverse@gmail.com?subject=Admissions%20Counseling%20Call%20Request"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-sm uppercase tracking-wider transition-all hover:border-[#f59e0b] hover:text-[#fbbf24] cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#fbbf24]" />
              <span>Talk to Admissions Lead</span>
            </a>
          </div>

          {/* Guarantees */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-white/50 border-t border-white/10 pt-6 w-full">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#fbbf24]" />
              <span>14-Day 100% Satisfaction Guarantee</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#fbbf24]" />
              <span>Verified Cryptographic Credential</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#fbbf24]" />
              <span>Direct Hiring Partner Intros</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
