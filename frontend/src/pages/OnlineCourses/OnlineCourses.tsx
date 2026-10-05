import React, { useEffect } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import { BrandMarquee } from '../../components/Sections/BrandMarquee';
import { OnlineCoursesBackground } from './components/OnlineCoursesBackground';
import { OnlineCoursesHero } from './components/OnlineCoursesHero';
import { OnlineCoursesStatsBar } from './components/OnlineCoursesStatsBar';
import { OnlineCoursesExplorer } from './components/OnlineCoursesExplorer';
import { OnlineCoursesInteractiveLab } from './components/OnlineCoursesInteractiveLab';
import { OnlineCoursesCurriculumStructure } from './components/OnlineCoursesCurriculumStructure';
import { OnlineCoursesMentors } from './components/OnlineCoursesMentors';
import { OnlineCoursesReviews } from './components/OnlineCoursesReviews';
import { OnlineCoursesFAQ } from './components/OnlineCoursesFAQ';
import { OnlineCoursesCTA } from './components/OnlineCoursesCTA';
import { useCurrencyPricing } from '../../hooks/useCurrencyPricing';

export const OnlineCourses: React.FC = () => {
  const { currency, setCurrency } = useCurrencyPricing();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#06070a] text-white relative overflow-x-hidden selection:bg-[#f59e0b] selection:text-black">
      {/* Background Noise Texture */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-30" />

      {/* Dynamic Cosmic Constellation Background */}
      <OnlineCoursesBackground />

      {/* Primary DotUniverse Navbar */}
      <Navbar currentCurrency={currency} onCurrencyChange={setCurrency} />

      {/* Main Content Stream */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero with Interactive Masterclass Switcher */}
        <OnlineCoursesHero />

        {/* 2. Rapid Academy Growth Stats Bar */}
        <OnlineCoursesStatsBar />

        {/* 3. Global Alumni Hiring Partner Marquee */}
        <BrandMarquee field="courses" />

        {/* 4. Filterable Masterclass Catalog with Syllabus Drawers */}
        <OnlineCoursesExplorer currentCurrency={currency} />

        {/* 5. Interactive Career & Salary Simulator */}
        <OnlineCoursesInteractiveLab currentCurrency={currency} />

        {/* 6. The 4 Pillars of the Practitioner Method */}
        <OnlineCoursesCurriculumStructure />

        {/* 7. Active Agency Founder Mentors */}
        <OnlineCoursesMentors />

        {/* 8. Verified Alumni Transformations & Salary Jumps */}
        <OnlineCoursesReviews />

        {/* 9. Academy Admissions FAQ */}
        <OnlineCoursesFAQ />

        {/* 10. Cohort Admissions CTA */}
        <OnlineCoursesCTA />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default OnlineCourses;
