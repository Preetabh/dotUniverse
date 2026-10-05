import React, { useEffect } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import { BrandMarquee } from '../../components/Sections/BrandMarquee';
import { AboutBackground } from './components/AboutBackground';
import { AboutHero } from './components/AboutHero';
import { AboutFoundersSpotlight } from './components/AboutFoundersSpotlight';
import { AboutOriginTimeline } from './components/AboutOriginTimeline';
import { AboutPillars } from './components/AboutPillars';
import { AboutGlobalRadar } from './components/AboutGlobalRadar';
import { AboutTechMatrix } from './components/AboutTechMatrix';
import { AboutCulturePerks } from './components/AboutCulturePerks';
import { AboutCTA } from './components/AboutCTA';
import { useCurrencyPricing } from '../../hooks/useCurrencyPricing';

export const About: React.FC = () => {
  const { currency, setCurrency } = useCurrencyPricing();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-white relative overflow-x-hidden selection:bg-cyan-400 selection:text-black">
      {/* Background Noise Texture */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-25" />

      {/* Cosmic Gravity Particle Canvas Background */}
      <AboutBackground />

      {/* Primary DotUniverse Navigation */}
      <Navbar currentCurrency={currency} onCurrencyChange={setCurrency} />

      {/* Main Page Flow */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Kinetic Hero with Interactive DNA Terminal */}
        <AboutHero />

        {/* 2. Infinite Tech Ecosystem & Partner Marquee */}
        <BrandMarquee />

        {/* 3. Executive Founders Spotlight (Vishu Awasthi & Sardar Japnam Singh Lal) */}
        <AboutFoundersSpotlight />

        {/* 4. Interactive Origin Scrubber: Barabanki to Global Stage */}
        <AboutOriginTimeline />

        {/* 5. Core Operational Tenets & Engineering Pillars */}
        <AboutPillars />

        {/* 6. Live Telemetry Global Radar & Timezone Hubs */}
        <AboutGlobalRadar />

        {/* 7. Zero Compromise Architectural Tech Matrix */}
        <AboutTechMatrix />

        {/* 8. Culture & The Builder Dojo Ethos */}
        <AboutCulturePerks />

        {/* 9. Direct Partnership Call to Action */}
        <AboutCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
