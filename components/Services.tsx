'use client';

import { CheckCircle2, Hammer, House, Paintbrush, Wrench } from 'lucide-react';

const services = [
  {
    icon: Paintbrush,
    title: 'Interior & exterior painting',
    description: 'Walls, ceilings, doors, trim, siding, and cabinets—prepared properly and finished with care.',
    features: ['Colour changes and repainting', 'Trim, doors, and baseboards', 'Exterior touch-ups and staining'],
  },
  {
    icon: Hammer,
    title: 'Drywall & plaster repair',
    description: 'Repairing holes, dents, cracks, water damage patches, seams, and tired surfaces before paint goes on.',
    features: ['Patching and feathering', 'Minor plaster and drywall work', 'Sanding and spot priming'],
  },
  {
    icon: Wrench,
    title: 'General handyman work',
    description: 'Practical repairs and maintenance that help keep a home safe, functional, and looking its best.',
    features: ['Fixtures and hardware', 'Small carpentry and trim', 'Doors, caulking, and punch lists'],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white text-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-yellow-700 text-sm font-bold uppercase tracking-widest mb-3">What Brent does</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">Useful work for real homes.</h2>
          <p className="text-zinc-600 text-lg leading-relaxed">
            Not every project needs a big crew. These are the painting, repair, and finishing jobs that benefit from experience and a steady hand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, description, features }) => (
            <article key={title} className="p-6 border border-zinc-200 hover:border-yellow-500 hover:shadow-xl transition-all">
              <div className="w-11 h-11 bg-yellow-400 flex items-center justify-center mb-5">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-extrabold mb-3">{title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-5">{description}</p>
              <ul className="space-y-2">
                {features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-yellow-700 shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
