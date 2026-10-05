import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { CodexHero } from '../../components/Hero/CodexHero';
import { BrandMarquee } from '../../components/Sections/BrandMarquee';
import { AboutSection } from '../../components/Sections/AboutSection';
import { ServicesSection } from '../../components/Sections/ServicesSection';
import { ExperienceSection } from '../../components/Sections/ExperienceSection';
import { ExpertsServicesSection } from '../../components/Sections/ExpertsServicesSection';
import { PortfolioSection } from '../../components/Sections/PortfolioSection';
import { TestimonialsSection } from '../../components/Sections/TestimonialsSection';
import { PricingSection } from '../../components/Sections/PricingSection';
import { TeamSection } from '../../components/Sections/TeamSection';
import { CTASection } from '../../components/Sections/CTASection';
import { Footer } from '../../components/Footer/Footer';
import { Preloader } from '../../components/Loader/Preloader';
import { useCurrencyPricing } from '../../hooks/useCurrencyPricing';

export const Home: React.FC = () => {
  const { currency, setCurrency } = useCurrencyPricing();

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden selection:bg-[#c8ff00] selection:text-black">
      {/* Professional Preloader */}
      <Preloader />

      {/* Noise overlay */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-40" />

      {/* Navigation */}
      <Navbar currentCurrency={currency} onCurrencyChange={setCurrency} />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero */}
        <CodexHero />

        {/* 2. Infinite Tech Marquee */}
        <BrandMarquee />

        {/* 3. About Company / Why Clients Choose Us */}
        <AboutSection />

        {/* 4. Core Services Showcase */}
        <ServicesSection />

        {/* 5. Battle-Tested Execution / Experience Section */}
        <ExperienceSection />

        {/* 6. Specialist Standards / Pillars */}
        <ExpertsServicesSection />

        {/* 7. Live Project Portfolio Carousel */}
        <PortfolioSection />

        {/* 8. Client Reviews & Verified Results */}
        <TestimonialsSection />

        {/* 9. Investment & Multi-Currency Pricing */}
        <PricingSection
          currentCurrency={currency}
          onCurrencyChange={setCurrency}
        />

        {/* 10. Leadership Team */}
        <TeamSection />

        {/* 11. Conversion CTA Banner */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
