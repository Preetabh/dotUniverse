import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home/Home';
import { WebDevelopment } from './pages/WebDevelopment/WebDevelopment';
import { AppDevelopment } from './pages/AppDevelopment/AppDevelopment';
import { DigitalMarketing } from './pages/DigitalMarketing/DigitalMarketing';
import { OnlineCourses } from './pages/OnlineCourses/OnlineCourses';
import { About } from './pages/About/About';
import { Work } from './pages/Work/Work';

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

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const renderCurrentPage = () => {
    if (currentPath === '/work' || currentPath === '/projects') return <Work />;
    if (currentPath === '/about') return <About />;
    if (currentPath === '/web-development') return <WebDevelopment />;
    if (currentPath === '/app-development') return <AppDevelopment />;
    if (currentPath === '/digital-marketing') return <DigitalMarketing />;
    if (currentPath === '/online-courses') return <OnlineCourses />;
    return <Home />;
  };

  return (
    <>
      {/* Route-dependent page */}
      {renderCurrentPage()}

      {/* Floating Quick Route Switcher for instant testing */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-1.5 p-1.5 rounded-full bg-zinc-900/90 border border-white/20 backdrop-blur-xl shadow-2xl">
        <button
          type="button"
          onClick={() => navigateTo('/')}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
            currentPath === '/'
              ? 'bg-[#c8ff00] text-black shadow-md'
              : 'text-white/70 hover:text-white'
          }`}
        >
          Home
        </button>
        <button
          type="button"
          onClick={() => navigateTo('/work')}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
            currentPath === '/work' || currentPath === '/projects'
              ? 'bg-gradient-to-r from-cyan-400 via-sky-300 to-[#c8ff00] text-black shadow-[0_0_15px_rgba(200,255,0,0.4)]'
              : 'text-[#c8ff00]/80 hover:text-[#c8ff00]'
          }`}
        >
          Work / Portals
        </button>
        <button
          type="button"
          onClick={() => navigateTo('/about')}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
            currentPath === '/about'
              ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-black shadow-[0_0_15px_rgba(34,211,238,0.5)]'
              : 'text-cyan-300/80 hover:text-cyan-200'
          }`}
        >
          About Us
        </button>
        <button
          type="button"
          onClick={() => navigateTo('/web-development')}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
            currentPath === '/web-development'
              ? 'bg-[#c8ff00] text-black shadow-md'
              : 'text-white/70 hover:text-white'
          }`}
        >
          Web Dev
        </button>
        <button
          type="button"
          onClick={() => navigateTo('/app-development')}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
            currentPath === '/app-development'
              ? 'bg-gradient-to-r from-[#F5D061] to-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]'
              : 'text-[#F5D061]/80 hover:text-[#F5D061]'
          }`}
        >
          App Dev
        </button>
        <button
          type="button"
          onClick={() => navigateTo('/digital-marketing')}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
            currentPath === '/digital-marketing'
              ? 'bg-gradient-to-r from-[#ec4899] to-[#a855f7] text-white shadow-[0_0_15px_rgba(236,72,153,0.4)]'
              : 'text-[#f472b6]/80 hover:text-[#f472b6]'
          }`}
        >
          Growth Marketing
        </button>
        <button
          type="button"
          onClick={() => navigateTo('/online-courses')}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
            currentPath === '/online-courses'
              ? 'bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]'
              : 'text-[#fbbf24]/80 hover:text-[#fbbf24]'
          }`}
        >
          Academy (Courses)
        </button>
      </div>
    </>
  );
};

export default App;
