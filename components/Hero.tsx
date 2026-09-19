'use client';

import { ArrowRight, Award, CheckCircle, Clock, ShieldCheck, UserCheck } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 architectural-pattern -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Establishment Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
                <UserCheck className="w-4 h-4 text-accent" />
                <span className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">
                  Solo Craftsman &bull; Owner-Operated
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6 font-serif premium-shadow">
                DEDICATED SOLO{' '}
                <span className="text-accent">CRAFTSMANSHIP</span> IN{' '}
                <span className="text-accent">RESIDENTIAL</span> PAINTING
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                No subcontracted crews or rushed production work. Master tradesman Brent personally estimates, preps, and paints your home with clean, quiet, and meticulous attention to detail.
              </p>

              {/* Realistic Work Highlights */}
              <div className="grid grid-cols-2 gap-3 mb-8 text-left text-xs sm:text-sm text-foreground">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-card border border-border">
                  <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>One Project at a Time</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-card border border-border">
                  <ShieldCheck className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>\$2M Insured &amp; WSIB</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-card border border-border">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>HEPA Dust-Free Sanding</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-card border border-border">
                  <Award className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>2-Year Work Warranty</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <a
                  href="#contact"
                  className="group flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-accent-secondary transition-all transform hover:scale-105 shadow-lg hover:shadow-xl uppercase tracking-wider"
                >
                  Request In-Home Estimate
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#portfolio"
                  className="flex items-center gap-2 px-8 py-4 bg-card border-2 border-accent text-accent rounded-lg text-sm sm:text-base font-semibold hover:bg-accent hover:text-white transition-all uppercase tracking-wider"
                >
                  View Solo Projects
                </a>
              </div>
            </div>

            {/* Right Content - Founder Spotlight */}
            <div className="relative">
              <div className="bg-card border border-border gold-border rounded-2xl p-8 shadow-2xl">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-accent/5 rounded-tr-full" />

                {/* Founder Badge */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center border-2 border-accent">
                      <Award className="w-10 h-10 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground font-serif">Brent</h3>
                      <p className="text-accent font-semibold uppercase tracking-wider text-xs sm:text-sm">
                        Solo Master Craftsman &amp; Owner
                      </p>
                    </div>
                  </div>

                  {/* Realistic Solo Promises */}
                  <div className="space-y-3.5">
                    <div className="flex items-start gap-3 text-sm">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-foreground">
                        <strong>Personal Accountability:</strong> The person who inspects your walls and provides your quote is the same person holding the brush every single day.
                      </span>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-foreground">
                        <strong>Clean &amp; Respectful In-Home Work:</strong> Full floor drop cloths, clean poly masking, and daily HEPA vacuum cleanup so your living space stays comfortable.
                      </span>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-foreground">
                        <strong>Realistic &amp; Honest Timelines:</strong> Detailed, reliable turnaround estimates (e.g. 2 days for bedrooms, 4 days for kitchen cabinets) with zero disappearing acts.
                      </span>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm italic text-muted-foreground leading-relaxed">
                      &ldquo;I treat every home with the exact same care, cleanliness, and patience that I would expect in my own house.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}