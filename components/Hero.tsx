'use client';

import { ArrowRight, CheckCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative py-28 sm:py-40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Professional painting & handyman services in Hamilton
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            15+ years of trusted interior and exterior painting, drywall repair, and handyman work. Owner-operated, no crew, no surprises.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-slate-900 font-bold rounded-lg hover:bg-opacity-90 transition-colors">
              Get free estimate
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:2897752020" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-border rounded-lg font-bold hover:bg-muted transition-colors">
              Call (289) 775-2020
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-md text-sm font-semibold">
            <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> 15+ years experience</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Owner-operated</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Hamilton area</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Free estimates</span>
          </div>
        </div>
      </div>
    </section>
  );
}
