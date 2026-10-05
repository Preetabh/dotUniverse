import React from 'react';
import { TESTIMONIALS } from '../../constants';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden border-t border-white/10 bg-black/60">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#c8ff00]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c8ff00] px-3.5 py-1.5 rounded-full bg-[#c8ff00]/10 border border-[#c8ff00]/30">
            ✦ Client Validation
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Hear From Our Partners
          </h2>
          <p className="mt-4 text-white/60 text-base sm:text-lg">
            Real founders, direct revenue impacts, and zero inflated agency fluff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#c8ff00] text-[#c8ff00]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-white/10" />
                </div>

                {/* Quote Text */}
                <p className="text-sm text-white/80 leading-relaxed font-normal italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Highlighted Result Badge */}
                <div className="mt-6 p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c8ff00] shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-[#c8ff00] leading-tight">
                    {testimonial.result}
                  </span>
                </div>
              </div>

              {/* Client Info */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#c8ff00]/40"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{testimonial.name}</h4>
                  <p className="text-xs text-white/50">{testimonial.role}</p>
                  <p className="text-[10px] text-white/40 mt-0.5">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
