import React, { useEffect } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import { BrandMarquee } from '../../components/Sections/BrandMarquee';
import { ContactSection } from '../../components/Sections/ContactSection';
import { useCurrencyPricing } from '../../hooks/useCurrencyPricing';
import { Radio, Terminal, ShieldCheck, Clock, Zap } from 'lucide-react';

export const Contact: React.FC = () => {
  const { currency, setCurrency } = useCurrencyPricing();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#02050e] text-white relative overflow-x-hidden selection:bg-cyan-400 selection:text-black">
      {/* Background Noise Texture */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-25" />

      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-cyan-600/15 via-emerald-600/15 to-indigo-600/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar currentCurrency={currency} onCurrencyChange={setCurrency} />

      {/* Hero Header */}
      <header className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-6">
          <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>Global Operations • Direct Founder Hotline</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
          Let&apos;s Build Something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-[#c8ff00]">
            Extraordinary Together
          </span>
        </h1>

        <p className="mt-6 text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
          From full enterprise custom portal architectures to high-velocity performance marketing campaigns, our engineering pods are primed for execution.
        </p>

        {/* Rapid Highlights */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-300">
          <div className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>&lt; 2-Hour Response Time Guaranteed</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Confidentiality &amp; NDA Secured</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-[#c8ff00]" />
            <span>Barabanki HQ + London &amp; Dubai Nodes</span>
          </div>
        </div>
      </header>

      {/* Brand Trust Stream */}
      <BrandMarquee />

      {/* Main Interactive Contact Command Center */}
      <main>
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
