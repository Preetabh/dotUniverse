import React from 'react';
import { CTAButton } from '../Buttons/CTAButton';
import { ArrowRight, Mail, Sparkles, CheckCircle2 } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden border-t border-white/10">
      {/* Dynamic ambient gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#c8ff00]/10 via-[#00f0ff]/10 to-[#ff005e]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-10 sm:p-16 border border-white/15 bg-gradient-to-b from-white/[0.05] to-black/80 backdrop-blur-2xl shadow-2xl text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c8ff00]/10 border border-[#c8ff00]/30 text-[#c8ff00] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Scale Your Vision</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight max-w-2xl leading-[1.1]">
            Ready to Outpace Your <span className="text-[#c8ff00]">Competition?</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            Schedule a 20-minute strategic consultation directly with our founders. We will audit your existing digital footprint and share a concrete 90-day roadmap.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <CTAButton
              href="mailto:contact@dotuniverse.io"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <span>Book a Free Call</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </CTAButton>

            <a
              href="mailto:contact@dotuniverse.io?subject=Direct%20Project%20Inquiry"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-base font-bold uppercase tracking-wider transition-all"
            >
              <Mail className="w-5 h-5 text-[#00f0ff]" />
              <span>Email Us Directly</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-white/50">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#c8ff00]" />
              <span>24hr response guarantee</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#c8ff00]" />
              <span>No pushy sales calls</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#c8ff00]" />
              <span>Free initial audit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
