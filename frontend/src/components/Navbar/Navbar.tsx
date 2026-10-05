import React, { useState, useEffect, useRef } from 'react';
import { NAV_LINKS, COUNTRIES } from '../../constants';
import { CTAButton } from '../Buttons/CTAButton';
import { Logo } from '../Logo/Logo';
import { Menu, X, ChevronDown, Sparkles, Globe, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentCurrency?: string;
  onCurrencyChange?: (c: any) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentCurrency, onCurrencyChange }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  });

  const dropdownContainerRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sync scroll and path
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handleLocationChange);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(e.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Safe dropdown hover handlers with delay buffer
  const handleDropdownMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    // 250ms buffer prevents menu from abruptly vanishing when moving cursor
    closeTimerRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 250);
  };

  // Helper to determine active state
  const isLinkActive = (linkHref: string, isDropdown?: boolean) => {
    if (isDropdown) {
      return [
        '/web-development',
        '/app-development',
        '/digital-marketing',
        '/online-courses'
      ].includes(currentPath);
    }
    if (linkHref === '/') {
      return currentPath === '/' || currentPath === '';
    }
    if (linkHref.startsWith('/')) {
      return currentPath === linkHref || currentPath.startsWith(linkHref);
    }
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/">
          <Logo size="md" />
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/5 border border-white/10 rounded-full p-1.5 backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            if (link.dropdown) {
              const servicesActive = isLinkActive(link.href, true);
              return (
                <div
                  key={link.name}
                  ref={dropdownContainerRef}
                  className="relative"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => setServicesDropdownOpen((prev) => !prev)}
                    className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                      servicesActive
                        ? 'bg-[#c8ff00] text-black shadow-[0_0_15px_rgba(200,255,0,0.4)]'
                        : servicesDropdownOpen
                        ? 'bg-white/10 text-white'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        servicesDropdownOpen ? 'rotate-180' : ''
                      } ${servicesActive ? 'text-black' : 'text-white/60'}`}
                    />
                  </button>

                  {/* Dropdown Menu Container with Hover Bridge */}
                  {servicesDropdownOpen && (
                    <div
                      className="absolute top-full left-0 pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      {/* Invisible hover bridge to prevent cursor gap drop */}
                      <div className="w-full rounded-2xl bg-[#070b14]/95 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur-2xl p-2.5 grid gap-1 relative before:absolute before:-top-2 before:left-0 before:right-0 before:h-3 before:content-['']">
                        {link.dropdown.map((subItem) => {
                          const isSubItemActive = currentPath === subItem.href;
                          return (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setServicesDropdownOpen(false)}
                              className={`flex items-start gap-3 p-2.5 rounded-xl transition-all group/item ${
                                isSubItemActive
                                  ? 'bg-[#c8ff00]/15 text-[#c8ff00] border border-[#c8ff00]/30 shadow-inner'
                                  : 'hover:bg-white/10 text-white/90'
                              }`}
                            >
                              <div
                                className={`w-8 h-8 rounded-lg flex items-center justify-center mt-0.5 transition-colors ${
                                  isSubItemActive
                                    ? 'bg-[#c8ff00] text-black'
                                    : 'bg-[#c8ff00]/10 border border-[#c8ff00]/20 text-[#c8ff00] group-hover/item:bg-[#c8ff00] group-hover/item:text-black'
                                }`}
                              >
                                <Sparkles className="w-4 h-4" />
                              </div>

                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <span
                                    className={`text-sm font-semibold transition-colors ${
                                      isSubItemActive
                                        ? 'text-[#c8ff00]'
                                        : 'text-white group-hover/item:text-[#c8ff00]'
                                    }`}
                                  >
                                    {subItem.name}
                                  </span>
                                  {subItem.trending && (
                                    <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-[#ff005e]/20 text-[#ff005e] border border-[#ff005e]/30">
                                      Hot
                                    </span>
                                  )}
                                </div>
                                {subItem.description && (
                                  <p className="text-xs text-white/50 line-clamp-1 mt-0.5">
                                    {subItem.description}
                                  </p>
                                )}
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            const active = isLinkActive(link.href);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  active
                    ? 'bg-[#c8ff00] text-black shadow-[0_0_15px_rgba(200,255,0,0.4)]'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Country / Currency Selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white/70 hover:text-white rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-[#c8ff00]" />
              <span>{COUNTRIES.find((c) => c.currency === currentCurrency)?.flag || '🇮🇳'}</span>
              <span>{currentCurrency || 'INR'}</span>
              <ChevronDown className="w-3 h-3 text-white/40" />
            </button>

            {countryDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 rounded-xl bg-zinc-950 border border-white/15 p-1.5 shadow-2xl backdrop-blur-xl z-50">
                <div className="px-2 py-1 text-[10px] uppercase tracking-wider text-white/40 font-bold">
                  Region &amp; Currency
                </div>
                {COUNTRIES.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => {
                      if (onCurrencyChange) onCurrencyChange(country.currency);
                      setCountryDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      currentCurrency === country.currency
                        ? 'bg-[#c8ff00]/15 text-[#c8ff00]'
                        : 'text-white/80 hover:bg-white/10'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{country.flag}</span>
                      <span>{country.name}</span>
                    </span>
                    <span className="font-bold text-white/60">{country.symbol}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Primary CTA Button */}
          <CTAButton href="/contact" variant="primary" size="md">
            <span>LET&apos;S CONNECT</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </CTAButton>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <CTAButton href="/contact" variant="primary" size="sm">
            Connect
          </CTAButton>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-white/15 bg-white/5 text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[70px] bg-black/95 backdrop-blur-2xl border-b border-white/15 p-5 animate-in slide-in-from-top duration-300 max-h-[calc(100vh-70px)] overflow-y-auto z-50">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.name} className="flex flex-col rounded-xl overflow-hidden border border-white/10 bg-white/[0.03]">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="text-base font-semibold py-2.5 px-3 flex items-center justify-between text-white hover:text-[#c8ff00] transition-colors cursor-pointer w-full text-left"
                    >
                      <span className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#c8ff00]" />
                        <span>{link.name}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#c8ff00]/15 text-[#c8ff00] border border-[#c8ff00]/30 font-bold">
                          {link.dropdown.length}
                        </span>
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-white/60 transition-transform duration-200 ${
                          mobileServicesOpen ? 'rotate-180 text-[#c8ff00]' : ''
                        }`}
                      />
                    </button>

                    {mobileServicesOpen && (
                      <div className="flex flex-col gap-1 pb-2 px-2 border-t border-white/5 pt-1.5 bg-black/40">
                        {link.dropdown.map((subItem) => {
                          const isSubItemActive = currentPath === subItem.href;
                          return (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`flex items-center justify-between p-2.5 rounded-lg text-sm transition-colors ${
                                isSubItemActive
                                  ? 'bg-[#c8ff00] text-black font-bold shadow-md'
                                  : 'text-white/80 hover:text-white hover:bg-white/10'
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                <span className={`w-1.5 h-1.5 rounded-full ${isSubItemActive ? 'bg-black' : 'bg-[#c8ff00]'}`} />
                                <span className="font-medium">{subItem.name}</span>
                              </div>
                              {subItem.trending ? (
                                <span className={`text-[9px] uppercase font-bold px-1.5 py-0.5 rounded ${isSubItemActive ? 'bg-black text-[#c8ff00]' : 'bg-[#ff005e]/20 text-[#ff005e] border border-[#ff005e]/30'}`}>
                                  Hot
                                </span>
                              ) : (
                                <ArrowRight className={`w-3.5 h-3.5 ${isSubItemActive ? 'text-black' : 'text-white/30'}`} />
                              )}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              const active = isLinkActive(link.href, false);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold py-2.5 px-3 rounded-xl flex items-center justify-between transition-colors ${
                    active
                      ? 'bg-[#c8ff00] text-black shadow-md'
                      : 'text-white/90 hover:text-[#c8ff00] hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className={`w-4 h-4 ${active ? 'text-black' : 'text-white/40'}`} />
                </a>
              );
            })}

            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>Select Currency:</span>
                <div className="flex gap-2">
                  {COUNTRIES.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => {
                        if (onCurrencyChange) onCurrencyChange(c.currency);
                      }}
                      className={`px-2 py-1 rounded text-xs font-bold ${
                        currentCurrency === c.currency
                          ? 'bg-[#c8ff00] text-black'
                          : 'bg-white/10 text-white'
                      }`}
                    >
                      {c.flag} {c.currency}
                    </button>
                  ))}
                </div>
              </div>

              <CTAButton
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Free Call →
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
