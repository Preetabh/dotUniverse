import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  desc: string;
  img: string;
  color: string;
  tag: string;
  features: string[];
}

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-6 lg:p-8 backdrop-blur-xl transition-all duration-500 hover:border-white/30 hover:bg-white/[0.05] hover:-translate-y-2 overflow-hidden shadow-xl">
      {/* Accent Background Glow on Hover */}
      <div
        className="absolute -right-20 -top-20 w-56 h-56 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
        style={{ backgroundColor: service.color }}
      />

      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-6">
          <span
            className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border"
            style={{
              borderColor: `${service.color}40`,
              backgroundColor: `${service.color}15`,
              color: service.color,
            }}
          >
            {service.category}
          </span>

          <span className="text-[11px] font-semibold text-white/50 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5">
            {service.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-[#c8ff00] transition-colors leading-tight">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm text-white/60 leading-relaxed">
          {service.desc}
        </p>

        {/* Image Preview with Hover Zoom */}
        <div className="mt-6 relative h-48 sm:h-52 w-full rounded-2xl overflow-hidden border border-white/10">
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Key Features List */}
        <div className="mt-6 space-y-2.5">
          {service.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2.5 text-xs text-white/80">
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${service.color}30` }}
              >
                <Check className="w-2.5 h-2.5 text-white" />
              </div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Link */}
      <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
        <a
          href="#pricing"
          className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-[#c8ff00] transition-colors"
        >
          <span>Get Started</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
        <span className="text-xs text-white/40">Custom SLA</span>
      </div>
    </div>
  );
};
