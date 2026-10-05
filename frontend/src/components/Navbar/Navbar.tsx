import React, { useState, useEffect } from 'react';
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
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero">
          <Logo size="md" />
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            if (link.dropdown) {
              return (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white/80 hover:text-white rounded-full transition-colors hover:bg-white/5"
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-white/50 group-hover:rotate-180 transition-transform duration-200" />
                  </button>

                  {/* Dropdown Menu */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-0 mt-3 w-80 rounded-2xl bg-black/95 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl p-2.5 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
                      {link.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors group/item"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#c8ff00]/10 border border-[#c8ff00]/20 flex items-center justify-center text-[#c8ff00] mt-0.5 group-hover/item:bg-[#c8ff00] group-hover/item:text-black transition-colors">
                            <Sparkles className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold text-white group-hover/item:text-[#c8ff00] transition-colors">
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
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-white/80 hover:text-white rounded-full transition-colors hover:bg-white/5"
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
                  Region & Currency
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
          <CTAButton href="#pricing" variant="primary" size="md">
            <span>LET&apos;S CONNECT</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </CTAButton>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <CTAButton href="#pricing" variant="primary" size="sm">
            Connect
          </CTAButton>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-white/15 bg-white/5 text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[70px] bg-black/95 backdrop-blur-2xl border-b border-white/15 p-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-white/90 hover:text-[#c8ff00] py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-white/40" />
              </a>
            ))}

            <div className="mt-4 pt-2 flex flex-col gap-3">
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
                href="#pricing"
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
