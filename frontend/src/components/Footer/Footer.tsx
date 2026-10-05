import React from 'react';
import { Logo } from '../Logo/Logo';
import { Mail, MessageSquare, MapPin, ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/codexconquer", icon: "in" },
    { name: "Instagram", href: "https://www.instagram.com/codexconquer", icon: "ig" },
    { name: "Facebook", href: "https://www.facebook.com/codexconquerofficial/", icon: "fb" },
    { name: "YouTube", href: "https://youtube.com/@codexconquer", icon: "yt" },
    { name: "X", href: "https://x.com/CodexConquer", icon: "x" },
  ];

  const serviceLinks = [
    { name: "Website Development", href: "#services" },
    { name: "Mobile App Development", href: "#services" },
    { name: "Digital Growth Marketing", href: "#services" },
    { name: "DesignX (UI/UX & Brand)", href: "#services" },
    { name: "AI Solutions & Bots", href: "#services" },
    { name: "dotUniverse Academy", href: "#services" },
  ];

  const companyLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Work & Case Studies", href: "#portfolio" },
    { name: "Client Testimonials", href: "#testimonials" },
    { name: "Investment & Pricing", href: "#pricing" },
    { name: "Leadership Team", href: "#team" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Recruitment Fraud Alert", href: "#" },
    { name: "Security & Compliance", href: "#" },
  ];

  return (
    <footer className="relative bg-zinc-950 border-t border-white/10 text-white pt-20 pb-12 overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#c8ff00]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#hero">
              <Logo size="lg" />
            </a>

            <p className="mt-6 text-sm text-white/60 leading-relaxed max-w-sm">
              Transforming businesses through innovative digital solutions, high-converting website engineering, mobile app development, and scalable performance marketing.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-xs font-bold text-white/80 hover:text-black hover:bg-[#c8ff00] hover:border-[#c8ff00] transition-colors"
                  aria-label={s.name}
                >
                  {s.icon.toUpperCase()}
                </a>
              ))}
            </div>

            {/* Global Hubs */}
            <div className="mt-8 flex items-center gap-4 text-xs text-white/50">
              <span className="flex items-center gap-1.5">
                <span>🇮🇳</span> India
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span>🇬🇧</span> UK
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span>🇦🇪</span> UAE
              </span>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6">
              Core Capabilities
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-xs sm:text-sm text-white/60 hover:text-[#c8ff00] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-xs sm:text-sm text-white/60 hover:text-[#c8ff00] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Inquiries Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-white/60">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c8ff00]" />
                <a href="mailto:contact@dotuniverse.io" className="hover:text-white transition-colors">
                  contact@dotuniverse.io
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#00f0ff]" />
                <a href="mailto:contact@dotuniverse.io?subject=Project%20Consultation%20Inquiry" className="hover:text-white transition-colors">
                  Book a Consultation
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ff005e] shrink-0 mt-0.5" />
                <span>Global Remote Operations with Hubs in Delhi NCR, London &amp; Dubai</span>
              </li>
            </ul>

            <div className="mt-8 pt-4 border-t border-white/10">
              <span className="text-[11px] font-bold text-white/40 block mb-2">Legal</span>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {legalLinks.map((legal) => (
                  <a
                    key={legal.name}
                    href={legal.href}
                    className="text-[11px] text-white/50 hover:text-white transition-colors"
                  >
                    {legal.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            &copy; {new Date().getFullYear()} dotUniverse Technologies. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-white/60">
            <span>Engineered with</span>
            <Heart className="w-3.5 h-3.5 fill-[#ff005e] text-[#ff005e]" />
            <span>by dotUniverse Team</span>
          </div>

          {/* Scroll to Top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-[#c8ff00] hover:text-black transition-all"
            aria-label="Scroll to top"
          >
            <span className="text-[11px] font-bold uppercase">Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
