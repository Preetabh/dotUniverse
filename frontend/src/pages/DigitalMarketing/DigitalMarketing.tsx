import React, { useEffect } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import { BrandMarquee } from '../../components/Sections/BrandMarquee';
import { DigitalMarketingBackground } from './components/DigitalMarketingBackground';
import { DigitalMarketingHero } from './components/DigitalMarketingHero';
import { DigitalMarketingStatsBar } from './components/DigitalMarketingStatsBar';
import { DigitalMarketingChannels } from './components/DigitalMarketingChannels';
import { DigitalMarketingROASCalculator } from './components/DigitalMarketingROASCalculator';
import { DigitalMarketingProcess } from './components/DigitalMarketingProcess';
import { DigitalMarketingPricing } from './components/DigitalMarketingPricing';
import { DigitalMarketingCaseStudies } from './components/DigitalMarketingCaseStudies';
import { DigitalMarketingFAQ } from './components/DigitalMarketingFAQ';
import { DigitalMarketingCTA } from './components/DigitalMarketingCTA';
import { useCurrencyPricing } from '../../hooks/useCurrencyPricing';

export const DigitalMarketing: React.FC = () => {
  const { currency, setCurrency } = useCurrencyPricing();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#07070a] text-white relative overflow-x-hidden selection:bg-[#ec4899] selection:text-white">
      {/* Background Noise Texture */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-30" />

      {/* Dynamic Hyper-Growth Ambient Canvas Background */}
      <DigitalMarketingBackground />

      {/* Primary DotUniverse Navbar */}
      <Navbar currentCurrency={currency} onCurrencyChange={setCurrency} />

      {/* Main Page Flow */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero Section with Live Telemetry Cockpit */}
        <DigitalMarketingHero />

        {/* 2. Rapid Growth Metrics Stats Bar */}
        <DigitalMarketingStatsBar />

        {/* 3. Global Brand Trust Marquee */}
        <BrandMarquee field="digital-marketing" />

        {/* 4. Multi-Channel Revenue Pillars */}
        <DigitalMarketingChannels />

        {/* 5. Interactive ROAS & Pipeline Simulator */}
        <DigitalMarketingROASCalculator currentCurrency={currency} />

        {/* 6. 5-Phase Scientific Scaling Process */}
        <DigitalMarketingProcess />

        {/* 7. Transparent Monthly Packages with Multi-Currency */}
        <DigitalMarketingPricing
          currentCurrency={currency}
          onCurrencyChange={setCurrency}
        />

        {/* 8. Real Client Case Studies & Verified Reviews */}
        <DigitalMarketingCaseStudies />

        {/* 9. Advisory & Strategy FAQ */}
        <DigitalMarketingFAQ />

        {/* 10. High-Conversion Audit CTA */}
        <DigitalMarketingCTA />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
