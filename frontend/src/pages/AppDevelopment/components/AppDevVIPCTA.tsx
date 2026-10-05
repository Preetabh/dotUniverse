import React from 'react';
import { ArrowRight, Crown, CheckCircle2, MessageSquare, ShieldCheck, Sparkles, Lock } from 'lucide-react';

export const AppDevVIPCTA: React.FC = () => {
  return (
    <section id="vip-commission" className="relative py-28 sm:py-36 overflow-hidden border-t border-[#D4AF37]/20 bg-black">
      {/* Opulent Gold Ambient Backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[550px] bg-gradient-to-r from-[#D4AF37]/15 via-[#F5D061]/10 to-transparent rounded-full blur-[200px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-10 sm:p-16 border border-[#D4AF37]/40 bg-gradient-to-b from-[#1b1710] to-black/95 backdrop-blur-3xl text-center flex flex-col items-center shadow-[0_0_80px_rgba(212,175,55,0.2)] overflow-hidden">
          {/* Top Gold Foil Hairline */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F5D061] to-transparent" />

          {/* Availability Status */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F5D061] font-mono text-xs font-bold uppercase tracking-wider mb-8 shadow-[0_0_20px_rgba(212,175,55,0.25)]">
            <Crown className="w-3.5 h-3.5" />
            <span>● PRIVATE ATELIER COMMISSIONS OPEN • STRICT CAPACITY LIMIT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight max-w-3xl leading-[1.08] font-sans">
            Ready to Commission <br />
            <span className="gold-gradient-text font-serif italic glow-gold">Your Flagship App?</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed font-normal">
            Speak directly with our senior mobile architects. No junior reps. We review your concept under mutual NDA,
            structure your technical roadmap, and deliver a production-ready milestone proposal.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="mailto:contact@dotuniverse.io?subject=App%20Development%20VIP%20Commission%20Inquiry"
              className="gold-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full text-black font-mono text-sm uppercase tracking-wider font-extrabold shadow-[0_0_35px_rgba(212,175,55,0.4)] cursor-pointer"
            >
              <span>Schedule VIP Consultation</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>

            <a
              href="https://wa.me/919999999999?text=Hello%20dotUniverse,%20I%20would%20like%20to%20inquire%20about%20a%20Bespoke%20App%20Development%20Commission."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#D4AF37]/35 bg-white/5 hover:bg-[#D4AF37]/10 text-white font-mono text-sm uppercase tracking-wider transition-all hover:border-[#D4AF37] hover:text-[#F5D061] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>Direct WhatsApp Concierge</span>
            </a>
          </div>

          {/* Assurance Safeguards */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-white/50 border-t border-[#D4AF37]/20 pt-6 w-full">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#F5D061]" />
              <span>Mutual NDA Signed Pre-Call</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F5D061]" />
              <span>100% IP &amp; Source Code Ownership</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Crown className="w-4 h-4 text-[#F5D061]" />
              <span>180-Day VIP Engineering Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
