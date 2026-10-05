import React from 'react';
import {
  TECH_MARQUEE,
  APP_DEV_MARQUEE,
  WEB_DEV_MARQUEE,
  DIGITAL_MARKETING_MARQUEE,
  COURSES_MARQUEE
} from '../../constants';
import { Layers, Smartphone, Globe, TrendingUp, GraduationCap } from 'lucide-react';

export type MarqueeField = 'app-dev' | 'web-dev' | 'digital-marketing' | 'courses' | 'general';

interface BrandMarqueeProps {
  field?: MarqueeField;
  items?: { name: string; category: string }[];
}

export const BrandMarquee: React.FC<BrandMarqueeProps> = ({ field, items }) => {
  // Auto-detect field from window pathname if not explicitly provided
  const detectField = (): MarqueeField => {
    if (field) return field;
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.includes('app-development')) return 'app-dev';
      if (path.includes('web-development')) return 'web-dev';
      if (path.includes('digital-marketing')) return 'digital-marketing';
      if (path.includes('online-courses')) return 'courses';
    }
    return 'general';
  };

  const activeField = detectField();

  // Pick dataset based on detected field
  const getFieldData = () => {
    if (items && items.length > 0) {
      return {
        data: items,
        accent: '#c8ff00',
        icon: <Layers className="w-3.5 h-3.5" />,
        badgeText: 'TECH ECOSYSTEM'
      };
    }

    switch (activeField) {
      case 'app-dev':
        return {
          data: APP_DEV_MARQUEE,
          accent: '#F5D061',
          icon: <Smartphone className="w-3.5 h-3.5" />,
          badgeText: 'MOBILE TECH STACK'
        };
      case 'web-dev':
        return {
          data: WEB_DEV_MARQUEE,
          accent: '#c8ff00',
          icon: <Globe className="w-3.5 h-3.5" />,
          badgeText: 'WEB & CLOUD STACK'
        };
      case 'digital-marketing':
        return {
          data: DIGITAL_MARKETING_MARQUEE,
          accent: '#ec4899',
          icon: <TrendingUp className="w-3.5 h-3.5" />,
          badgeText: 'GROWTH ENGINE'
        };
      case 'courses':
        return {
          data: COURSES_MARQUEE,
          accent: '#fbbf24',
          icon: <GraduationCap className="w-3.5 h-3.5" />,
          badgeText: 'ACADEMY SYLLABUS'
        };
      default:
        return {
          data: TECH_MARQUEE,
          accent: '#c8ff00',
          icon: <Layers className="w-3.5 h-3.5" />,
          badgeText: 'CORE STACK'
        };
    }
  };

  const { data, accent, icon } = getFieldData();

  // Duplicate array to ensure infinite seamless loop matching -50% translation
  const marqueeItems = [...data, ...data];

  return (
    <div className="relative w-full py-6 border-y border-white/10 bg-black/60 backdrop-blur-md overflow-hidden">
      {/* Edge gradient masks for smooth fade in/out */}
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="animate-infinite-marquee flex items-center gap-4">
        {marqueeItems.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] transition-all cursor-default group shrink-0"
            style={{
              borderColor: 'rgba(255, 255, 255, 0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${accent}80`;
              e.currentTarget.style.backgroundColor = `${accent}10`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
            }}
          >
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform"
              style={{
                backgroundColor: `${accent}20`,
                color: accent,
              }}
            >
              {icon}
            </div>

            <span
              className="text-sm font-bold text-white tracking-wide transition-colors group-hover:text-white"
            >
              {tech.name}
            </span>

            <span
              className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded"
              style={{
                color: accent,
                backgroundColor: `${accent}15`,
              }}
            >
              {tech.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
