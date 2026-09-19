'use client';

import { Paintbrush, Hammer, Wrench, Trees, Clock, CheckCircle2, ShieldAlert } from 'lucide-react';

const services = [
  {
    icon: Paintbrush,
    title: 'Interior Wall, Ceiling & Trim Repainting',
    duration: 'Typical: 1 – 3 Days per Floor',
    description: 'Crisp, razor-sharp cut lines, low-VOC washable finishes, and complete floor and furniture protection for occupied residences.',
    features: [
      'Walls, ceilings, doors & baseboards',
      'Laser-straight cut lines & corner feathering',
      'Low-VOC Sherwin-Williams & Benjamin Moore paints',
      'Full drop cloth & poly furniture masking',
    ],
  },
  {
    icon: Wrench,
    title: 'Kitchen Cabinet Spray Refinishing',
    duration: 'Typical: 4 – 5 Days Turnaround',
    description: 'Transform dated oak, maple, or thermofoil cabinets into durable, factory-smooth satin lacquer without costly replacements.',
    features: [
      'Doors & drawers sprayed in containment',
      'Heavy wood grain filled smooth (Aquacoat)',
      'Bonding shellac primer (Zinsser BIN)',
      'Durable chip-resistant enamel (BM Command/Advance)',
    ],
  },
  {
    icon: Hammer,
    title: 'Drywall Repair & Water Stain Patching',
    duration: 'Typical: 1 Day (2 Scheduled Visits)',
    description: 'Fixing holes, settlement cracks, popping screws, and past ceiling water leaks with seamless, invisible feathering.',
    features: [
      'Plumbing leak ceiling drywall cutouts & backing',
      'Door knob punch holes & moving gouges',
      'Settlement hairline cracks & corner tape repair',
      'HEPA vacuum sanding capturing 99.5% of dust',
    ],
  },
  {
    icon: Wrench,
    title: 'Board & Batten Accent Walls & Trim Installation',
    duration: 'Typical: 1.5 – 2 Days',
    description: 'Custom millwork detailing that adds character and architectural depth to master bedrooms, living rooms, and entryways.',
    features: [
      'Board-and-batten, wainscoting & picture framing',
      'Baseboard & door casing replacement',
      'Elastomeric caulking for invisible seams',
      'Countersunk nail hole filling & 220-grit prep',
    ],
  },
  {
    icon: Trees,
    title: 'Cedar Deck & Fence Pressure Wash & Staining',
    duration: 'Typical: 2 Days (+ Moisture Dry Window)',
    description: 'Revitalizing grey, weathered outdoor wood using deep wood cleaners and hand-brushed penetrating oil stains.',
    features: [
      'Oxygenated wood wash (no high-pressure wood gouging)',
      'Moisture meter testing prior to application (<12%)',
      'Hand-brushed penetrating oils (Armstrong-Clark)',
      'Mildew & UV-protective long-lasting seal',
    ],
  },
  {
    icon: Hammer,
    title: 'Home Handyman & Punch-List Repairs',
    duration: 'Typical: Half-Day to Full-Day Visits',
    description: 'Reliable completion of those nagging home maintenance tasks that need a skilled, meticulous hand.',
    features: [
      'Interior & exterior door sticking/latch alignment',
      'Cabinet hardware & modern handle installation',
      'Bathroom silicone recaulking & shower seal repair',
      'Light fixture & ceiling fan replacements',
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-32 relative bg-background">
      <div className="absolute inset-0 architectural-pattern -z-10 opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3">
            Realistic Solo Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif">
            Services Built for <span className="text-accent">Residential Quality</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Honest work scopes that one master tradesman can personally deliver to perfection. No overpromising, no rushed multi-crew chaos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative p-6 sm:p-8 rounded-2xl bg-card border border-border gold-border-thin hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Duration Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors border border-accent/20">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-md">
                      <Clock className="w-3 h-3" />
                      {service.duration}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors font-serif">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2 pt-4 border-t border-border">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Honest Scope & Capacity Box */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-muted/40 border border-border p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 flex-shrink-0 mt-0.5">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold font-serif text-foreground">
                Our Honest Capacity Promise
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                As a solo contractor, I prioritize <strong>uncompromising quality over volume</strong>. I accept only one client at a time so your project receives 100% of my daily focus from start to completion. For projects outside my realistic solo scope (such as whole-building exterior stucco, full electrical panel overhauls, or commercial retail buildouts), I am happy to recommend trusted local trade partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}