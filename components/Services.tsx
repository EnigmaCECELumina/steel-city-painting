'use client';

import { Hammer, Paintbrush, Wrench } from 'lucide-react';

const services = [
  {
    icon: Paintbrush,
    title: 'Interior & Exterior Painting',
    description: 'Professional painting for walls, ceilings, doors, trim, siding, and cabinets with expert prep and finishing.',
  },
  {
    icon: Hammer,
    title: 'Drywall & Plaster Repair',
    description: 'Quality repairs for holes, cracks, water damage, and worn surfaces before painting.',
  },
  {
    icon: Wrench,
    title: 'General Handyman Work',
    description: 'Reliable repairs and maintenance to keep your home safe, functional, and looking its best.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Services</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">What we offer</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="p-6 border border-border rounded-lg hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-xl font-extrabold mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
