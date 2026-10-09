'use client';

import { CheckCircle } from 'lucide-react';

const points = [
  'Owner-operated with 15+ years of experience',
  'Direct communication — no middleman',
  'Respect for your home and belongings',
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-4xl">
          <div>
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">About Brent</p>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">Honest work, done right</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Steel City Painting & Handyman Services is built on a simple philosophy: listen carefully, explain the work clearly, and leave every job better than you found it. When you hire Brent, you get one point of contact from estimate to completion.
            </p>
            <div className="space-y-3">
              {points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Why Brent</p>
            <h3 className="text-2xl font-extrabold mb-5">Preparation is everything</h3>
            <p className="text-muted-foreground leading-relaxed">
              A quality paint job is not about the final coat — it is about the prep. Scraping, patching, sanding, and priming are not extras. They are the work. Brent's approach combines practical experience with respect for your space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
