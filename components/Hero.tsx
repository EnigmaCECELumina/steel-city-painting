'use client';

import { ArrowRight, Award, Star } from 'lucide-react';

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
                <Star className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent uppercase tracking-wider">
                  Established 2023
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 font-serif premium-shadow">
                HAMILTON'S PREMIER{' '}
                <span className="text-accent">ARTISTRY</span> IN{' '}
                <span className="text-accent">RESTORATION</span> & REPAIR
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Delivering Uncompromising Quality for Discerning Properties Across Ontario.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <a
                  href="#contact"
                  className="group flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-lg text-base font-semibold hover:bg-accent-secondary transition-all transform hover:scale-105 shadow-lg hover:shadow-xl uppercase tracking-wider"
                >
                  Request Private Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#portfolio"
                  className="flex items-center gap-2 px-8 py-4 bg-card border-2 border-accent text-accent rounded-lg text-base font-semibold hover:bg-accent hover:text-white transition-all uppercase tracking-wider"
                >
                  View Portfolio of Excellence
                </a>
              </div>
            </div>

            {/* Right Content - Founder Spotlight */}
            <div className="relative">
              <div className="bg-card border border-border gold-border-thin rounded-2xl p-8 shadow-2xl">
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
                      <p className="text-accent font-medium uppercase tracking-wider text-sm">Founder & Principal</p>
                    </div>
                  </div>

                  {/* Credentials */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm text-foreground">Master Tradesman</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm text-foreground">Licensed General Contractor</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm text-foreground">15+ Years Industry Excellence</span>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm italic text-muted-foreground leading-relaxed">
                      "Every project deserves the same precision and artistry we would demand for our own homes."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}