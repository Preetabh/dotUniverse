import React, { useEffect } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import { BrandMarquee } from '../../components/Sections/BrandMarquee';
import { AppDevLuxuryBackground } from './components/AppDevLuxuryBackground';
import { AppDevHero } from './components/AppDevHero';
import { AppDevStatsBar } from './components/AppDevStatsBar';
import { AppDevArchitecture } from './components/AppDevArchitecture';
import { AppDevShowcase } from './components/AppDevShowcase';
import { AppDevProcess } from './components/AppDevProcess';
import { AppDevPricing } from './components/AppDevPricing';
import { AppDevTestimonials } from './components/AppDevTestimonials';
import { AppDevFAQ } from './components/AppDevFAQ';
import { AppDevVIPCTA } from './components/AppDevVIPCTA';
import { useCurrencyPricing } from '../../hooks/useCurrencyPricing';

export const AppDevelopment: React.FC = () => {
  const { currency, setCurrency } = useCurrencyPricing();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#040406] text-white relative overflow-x-hidden selection:bg-[#D4AF37] selection:text-black">
      {/* Background Noise Texture */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-35" />

      {/* Opulent Gold Ambient & Particle Background Canvas */}
      <AppDevLuxuryBackground />

      {/* Primary DotUniverse Navbar */}
      <Navbar currentCurrency={currency} onCurrencyChange={setCurrency} />

      {/* Main Luxury Content Stream */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Haute Horlogerie Hero Section */}
        <AppDevHero />

        {/* 2. Prestige Atelier Statistics Bar */}
        <AppDevStatsBar />

        {/* 3. Global Brand Trust Marquee */}
        <BrandMarquee />

        {/* 4. Bespoke Mobile Architecture Pillars */}
        <AppDevArchitecture />

        {/* 5. Flagship Interactive Showcase Gallery */}
        <AppDevShowcase />

        {/* 6. The 5-Phase Atelier Methodology */}
        <AppDevProcess />

        {/* 7. Investment Matrix & Multi-Currency Converter */}
        <AppDevPricing
          currentCurrency={currency}
          onCurrencyChange={setCurrency}
        />

        {/* 8. Prestige Endorsements & Founder Reviews */}
        <AppDevTestimonials />

        {/* 9. VIP Advisory & Technical FAQ */}
        <AppDevFAQ />

        {/* 10. Private Atelier Commission Portal */}
        <AppDevVIPCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AppDevelopment;
