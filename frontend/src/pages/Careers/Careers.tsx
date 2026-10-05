import React, { useEffect } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import { BrandMarquee } from '../../components/Sections/BrandMarquee';
import { CareersSection } from '../../components/Sections/CareersSection';
import { useCurrencyPricing } from '../../hooks/useCurrencyPricing';
import { Sparkles, Terminal, Code2, Users, Flame, ArrowRight, ShieldCheck } from 'lucide-react';

export const Careers: React.FC = () => {
  const { currency, setCurrency } = useCurrencyPricing();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-white relative overflow-x-hidden selection:bg-cyan-400 selection:text-black">
      {/* Background Noise Texture */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-25" />

      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-purple-600/15 via-cyan-600/15 to-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar currentCurrency={currency} onCurrencyChange={setCurrency} />

      {/* Hero Header */}
      <header className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-6">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>dotUniverse Careers &amp; Fellowship</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
          Where Craftsmen Build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
            Legendary Software
          </span>
        </h1>

        <p className="mt-6 text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
          Forget office politics, endless sprint retrospectives, and 9-to-5 soul-draining routines. Join an elite squad of engineers and growth minds shipping world-class digital products from Barabanki to the world.
        </p>

        {/* Rapid Highlights */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-300">
          <div className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Quarterly Profit Distribution</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Zero Corporate Bureaucracy</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>Apple Silicon Hardware &amp; AI Cloud Stipend</span>
          </div>
        </div>
      </header>

      {/* Brand Trust Stream */}
      <BrandMarquee />

      {/* Main Careers Section */}
      <main>
        <CareersSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Careers;
