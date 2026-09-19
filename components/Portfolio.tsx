'use client';

import { Camera, Hammer, House, Paintbrush, Wrench } from 'lucide-react';

const categories = [
  { title: 'Interior painting', icon: Paintbrush },
  { title: 'Exterior painting', icon: House },
  { title: 'Drywall repair', icon: Hammer },
  { title: 'Custom handyman fixes', icon: Wrench },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Work quality showcase</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">A gallery built around real work.</h2>
          <p className="text-zinc-300 text-lg leading-relaxed">
            Photos are being rebuilt after older records were lost. We will add current Hamilton job-site photos as homeowners approve them—no stock images and no invented case studies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map(({ title, icon: Icon }) => (
            <div key={title} className="relative min-h-64 border border-border bg-background p-5 flex flex-col justify-between overflow-hidden group hover:border-accent transition-colors">
              <div className="absolute inset-0 opacity-30 architectural-pattern" />
              <div className="relative w-12 h-12 bg-accent flex items-center justify-center">
                <Icon className="w-6 h-6 text-black" />
              </div>
              <div className="relative">
                <h3 className="text-lg font-extrabold mb-2">{title}</h3>
                <p className="text-xs text-zinc-400">Photo gallery updating — real Hamilton job site photos coming soon.</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-accent/50 p-6 flex flex-col sm:flex-row gap-4 items-start">
          <Camera className="w-6 h-6 text-accent shrink-0" />
          <p className="text-sm text-zinc-300 leading-relaxed">
            <strong className="text-white">Have a project in mind?</strong> Send photos with your estimate request and Brent can talk through the condition, likely preparation, and whether it is a good fit.
          </p>
        </div>
      </div>
    </section>
  );
}
