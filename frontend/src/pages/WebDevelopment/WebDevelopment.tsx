import React, { useEffect } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import { BrandMarquee } from '../../components/Sections/BrandMarquee';
import { WebDevBackground } from './components/WebDevBackground';
import { WebDevHero } from './components/WebDevHero';
import { WebDevFeatures } from './components/WebDevFeatures';
import { WebDevIntegrations } from './components/WebDevIntegrations';
import { WebDevTechStack } from './components/WebDevTechStack';
import { WebDevProcess } from './components/WebDevProcess';
import { WebDevPricing } from './components/WebDevPricing';
import { WebDevTestimonials } from './components/WebDevTestimonials';
import { WebDevFAQ } from './components/WebDevFAQ';
import { WebDevCTA } from './components/WebDevCTA';
import { useCurrencyPricing } from '../../hooks/useCurrencyPricing';

export const WebDevelopment: React.FC = () => {
  const { currency, setCurrency } = useCurrencyPricing();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden selection:bg-[#c8ff00] selection:text-black">
      {/* Background Noise Texture */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-40" />

      {/* Dynamic Background Effect */}
      <WebDevBackground />

      {/* Primary DotUniverse Navbar */}
      <Navbar currentCurrency={currency} onCurrencyChange={setCurrency} />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero Section */}
        <WebDevHero />

        {/* 2. Client & Tech Trust Ticker */}
        <BrandMarquee field="web-dev" />

        {/* 3. Core Capabilities & Performance Grid */}
        <WebDevFeatures />

        {/* 4. Real Growth & Seamless Stack Integrations */}
        <WebDevIntegrations />

        {/* 5. Enterprise Tech Stack */}
        <WebDevTechStack />

        {/* 6. Predictable 6-Step Strategy & Methodology */}
        <WebDevProcess />

        {/* 7. Packages & Transparent Pricing with Currency Converter */}
        <WebDevPricing
          currentCurrency={currency}
          onCurrencyChange={setCurrency}
        />

        {/* 8. Verified Founder Testimonials */}
        <WebDevTestimonials />

        {/* 9. Frequently Asked Questions (Accordion) */}
        <WebDevFAQ />

        {/* 10. High-Conversion Launch CTA Banner */}
        <WebDevCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
