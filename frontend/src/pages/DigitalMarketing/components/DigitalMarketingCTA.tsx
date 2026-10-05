import React from 'react';
import { ArrowRight, Mail, Sparkles, CheckCircle2, ShieldCheck, Flame, Zap } from 'lucide-react';
import { CTAButton } from '../../../components/Buttons/CTAButton';

export const DigitalMarketingCTA: React.FC = () => {
  return (
    <section id="growth-audit" className="relative py-28 sm:py-36 overflow-hidden border-t border-white/10 bg-black cyber-grid">
      {/* Dynamic ambient backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-[#ec4899]/20 via-[#f43f5e]/15 to-[#a855f7]/15 rounded-full blur-[190px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-10 sm:p-16 border border-white/20 bg-gradient-to-b from-[#180c1d]/90 via-[#0d0714]/95 to-black/95 backdrop-blur-3xl text-center flex flex-col items-center shadow-[0_0_80px_rgba(236,72,153,0.25)] overflow-hidden">
          
          {/* Top glowing foil hairline */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ec4899] to-transparent" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ec4899]/15 border border-[#ec4899]/40 text-[#f472b6] font-mono text-xs font-bold uppercase tracking-wider mb-8 shadow-[0_0_20px_rgba(236,72,153,0.3)]">
            <Flame className="w-3.5 h-3.5 text-[#ec4899]" />
            <span>● 5 AUDIT SLOTS AVAILABLE FOR THIS SPRINT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight max-w-3xl leading-[1.08] font-sans">
            Ready to Stop Guessing &amp; <br />
            <span className="bg-gradient-to-r from-[#ec4899] via-[#f43f5e] to-[#a855f7] bg-clip-text text-transparent">
              Start Scaling?
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed font-normal">
            Claim a complimentary 30-minute forensic growth audit with our senior performance leads. We inspect your historical ad spend, tear down competitor hooks, and hand you a customized 90-day scaling blueprint.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <CTAButton
              href="mailto:contact@dotuniverse.io?subject=Free%2030-Minute%20Digital%20Marketing%20Audit%20Request"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto shadow-[0_0_40px_rgba(236,72,153,0.5)] !bg-gradient-to-r !from-[#ec4899] !via-[#f43f5e] !to-[#a855f7] !border-none !text-white font-mono font-bold tracking-wider"
            >
              <span>Claim Free 30-Min Audit</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </CTAButton>

            <a
              href="mailto:contact@dotuniverse.io?subject=Direct%20Marketing%20Consultation%20Inquiry"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-sm uppercase tracking-wider transition-all hover:border-[#ec4899] hover:text-[#f472b6] cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#ec4899]" />
              <span>Email Us Directly</span>
            </a>
          </div>

          {/* Guarantees */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-white/50 border-t border-white/10 pt-6 w-full">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#ec4899]" />
              <span>Zero Obligation Funnel Audit</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#ec4899]" />
              <span>24hr Business Day Response</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ec4899]" />
              <span>100% Attribution Transparency</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
