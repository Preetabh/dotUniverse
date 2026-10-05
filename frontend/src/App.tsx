import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home/Home';
import { WebDevelopment } from './pages/WebDevelopment/WebDevelopment';
import { AppDevelopment } from './pages/AppDevelopment/AppDevelopment';
import { DigitalMarketing } from './pages/DigitalMarketing/DigitalMarketing';
import { OnlineCourses } from './pages/OnlineCourses/OnlineCourses';
import { About } from './pages/About/About';
import { Work } from './pages/Work/Work';
import { Careers } from './pages/Careers/Careers';
import { Contact } from './pages/Contact/Contact';

import { ScrollProgress } from './components/Navigation/ScrollProgress';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Intercept link clicks for SPA smooth navigation
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (href && href.startsWith('/') && !href.startsWith('//') && target.target !== '_blank') {
        e.preventDefault();
        window.history.pushState({}, '', href);
        setCurrentPath(href);
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  const renderCurrentPage = () => {
    if (currentPath === '/work' || currentPath === '/projects') return <Work />;
    if (currentPath === '/careers') return <Careers />;
    if (currentPath === '/contact') return <Contact />;
    if (currentPath === '/about') return <About />;
    if (currentPath === '/web-development') return <WebDevelopment />;
    if (currentPath === '/app-development') return <AppDevelopment />;
    if (currentPath === '/digital-marketing') return <DigitalMarketing />;
    if (currentPath === '/online-courses') return <OnlineCourses />;
    return <Home />;
  };

  return (
    <>
      {/* Top glowing scroll progress bar & back-to-top */}
      <ScrollProgress />

      {/* Route-dependent page */}
      {renderCurrentPage()}
    </>
  );
};

export default App;
