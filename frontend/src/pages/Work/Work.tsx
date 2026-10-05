import React, { useEffect } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import { BrandMarquee } from '../../components/Sections/BrandMarquee';
import { PortfolioSection } from '../../components/Sections/PortfolioSection';
import { useCurrencyPricing } from '../../hooks/useCurrencyPricing';
import { Sparkles, Terminal, Code2, ShieldAlert, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export const Work: React.FC = () => {
  const { currency, setCurrency } = useCurrencyPricing();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-white relative overflow-x-hidden selection:bg-cyan-400 selection:text-black">
      {/* Background Noise Texture */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-25" />

      {/* Ambient Top Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-cyan-600/15 via-indigo-600/15 to-[#c8ff00]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Navbar */}
      <Navbar currentCurrency={currency} onCurrencyChange={setCurrency} />

      {/* Work Page Hero */}
      <header className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-6">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>dotUniverse Engineered Systems Archive</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
          Where Code Meets{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-[#c8ff00]">
            Market Dominance
          </span>
        </h1>

        <p className="mt-6 text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
          Explore our complete library of enterprise CRM platforms, workforce management portals, WebRTC communication suites, headless e-commerce storefronts, and campus management systems.
        </p>

        {/* Rapid Delivery Metric Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-300">
          <div className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Zero Vendor Lock-In</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Sub-Millisecond Edge Deployments</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>SOC-2 &amp; GDPR Ready Architecture</span>
          </div>
        </div>
      </header>

      {/* Infinite Partner Marquee */}
      <BrandMarquee />

      {/* Interactive Main Portfolio Section */}
      <main>
        <PortfolioSection />
      </main>

      {/* Custom Sprint Proposal CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#030712] to-black border-t border-cyan-500/10 text-center">
        <div className="max-w-4xl mx-auto p-10 sm:p-14 rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-white/[0.03] to-cyan-950/20 backdrop-blur-xl">
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Have a Complex Portal or Platform in Mind?
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Share your requirements directly with our founder and chief architect. We deliver interactive clickable prototypes within 48 hours.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:support.dotuniverse@gmail.com?subject=Custom%20Portal%20Architecture%20Inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-mono uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold shadow-lg shadow-cyan-500/30 transition-all"
            >
              <span>Initiate Sprint Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <span className="text-xs font-mono text-slate-400">
              Direct: support.dotuniverse@gmail.com
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Work;
