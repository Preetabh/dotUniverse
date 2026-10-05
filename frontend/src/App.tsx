import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home/Home';
import { WebDevelopment } from './pages/WebDevelopment/WebDevelopment';
import { AppDevelopment } from './pages/AppDevelopment/AppDevelopment';

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
    if (currentPath === '/web-development') return <WebDevelopment />;
    if (currentPath === '/app-development') return <AppDevelopment />;
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
          App Dev (Luxury)
        </button>
      </div>
    </>
  );
};

export default App;
