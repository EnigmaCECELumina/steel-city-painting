'use client';

import { cn } from '@/lib/utils';
import { Paintbrush, Hammer, Home, Wrench, Trees, Building2 } from 'lucide-react';

const services = [
  {
    icon: Paintbrush,
    title: 'Interior & Exterior Architectural Painting',
    description: 'Premium painting services delivering sophisticated finishes for discerning residential and commercial properties.',
    features: ['High-End Interior Finishes', 'Exterior Facade Restoration', 'Specialty Wall Treatments', 'Color Consultation'],
  },
  {
    icon: Hammer,
    title: 'Drywall, Plaster & Structural Surface Repair',
    description: 'Expert surface restoration and structural repair with seamless integration and premium finishing standards.',
    features: ['Precision Drywall Installation', 'Plaster Restoration', 'Water Damage Remediation', 'Texture Matching'],
  },
  {
    icon: Wrench,
    title: 'Custom Carpentry & Architectural Millwork',
    description: 'Bespoke carpentry and millwork services creating architectural elements of exceptional quality and craftsmanship.',
    features: ['Custom Millwork Fabrication', 'Crown Molding Installation', 'Built-in Cabinetry', 'Architectural Details'],
  },
  {
    icon: Building2,
    title: 'Commercial Property Maintenance',
    description: 'Comprehensive maintenance programs for commercial properties ensuring consistent quality and operational excellence.',
    features: ['Preventive Maintenance', 'Facility Upkeep', 'Tenant Improvement', 'Emergency Services'],
  },
  {
    icon: Home,
    title: 'Residential Property Restoration',
    description: 'Complete residential restoration services transforming properties with meticulous attention to detail and quality.',
    features: ['Full Home Renovation', 'Historic Restoration', 'Kitchen & Bath Updates', 'Structural Repairs'],
  },
  {
    icon: Trees,
    title: 'Exterior Structure Refinishing',
    description: 'Professional exterior refinishing services protecting and enhancing outdoor structures with premium materials.',
    features: ['Deck Restoration', 'Fence Refinishing', 'Exterior Wood Care', 'Weather Protection'],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-32 relative">
      <div className="absolute inset-0 architectural-pattern -z-10 opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif">
            Core Service <span className="text-accent">Divisions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive property services delivered with master-level craftsmanship and corporate excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative p-6 sm:p-8 rounded-2xl bg-card border border-border gold-border-thin hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors border border-accent/20">
                  <Icon className="w-8 h-8 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors font-serif">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}