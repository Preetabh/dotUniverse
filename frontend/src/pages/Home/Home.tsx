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
import { CareersSection } from '../../components/Sections/CareersSection';
import { TeamSection } from '../../components/Sections/TeamSection';
import { ContactSection } from '../../components/Sections/ContactSection';
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
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-30" />

      {/* Global Ambient Cosmic Atmosphere (Eliminates flat boring black) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft top-left cyan orb */}
        <div className="absolute top-[5%] -left-[10%] w-[600px] h-[600px] bg-[#00f0ff]/[0.06] rounded-full blur-[160px]" />
        {/* Soft middle-right lime aura */}
        <div className="absolute top-[35%] -right-[10%] w-[700px] h-[700px] bg-[#c8ff00]/[0.05] rounded-full blur-[180px]" />
        {/* Soft lower-left magenta accent */}
        <div className="absolute top-[65%] -left-[5%] w-[650px] h-[650px] bg-[#ec4899]/[0.05] rounded-full blur-[180px]" />
        {/* Soft bottom violet anchor */}
        <div className="absolute bottom-[5%] right-[10%] w-[600px] h-[600px] bg-[#8b5cf6]/[0.06] rounded-full blur-[160px]" />
      </div>

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

        {/* 7. Live Project Portfolio & Portals Showcase */}
        <PortfolioSection />

        {/* 8. Client Reviews & Verified Results */}
        <TestimonialsSection />

        {/* 9. Join The Builder Guild • Careers Section */}
        <CareersSection />

        {/* 10. Leadership Team */}
        <TeamSection />

        {/* 11. Direct Founder Gateway & Interactive Proposal • Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
