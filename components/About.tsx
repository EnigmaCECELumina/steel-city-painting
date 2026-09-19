'use client';

import { Award, Wrench, ShieldCheck, UserCheck, Calendar } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Years Hands-on Experience', value: '15+' },
  { icon: UserCheck, label: 'Owner-Operated Focus', value: '100%' },
  { icon: ShieldCheck, label: 'Liability Insured & WSIB', value: '$2M' },
  { icon: Wrench, label: 'Craftsmanship Warranty', value: '2 Years' },
];

const values = [
  {
    title: 'Singular Accountability',
    description: 'When you hire Steel City Painting, you work exclusively with Brent from your first in-home estimate through the final touch-up walkthrough. No strangers or unsupervised crews.',
  },
  {
    title: 'Clean In-Home Protocols',
    description: 'We respect your living space. We utilize heavy leak-proof drop cloths, plastic containment sheeting, and HEPA-filtered vacuum sanders capturing 99.5% of drywall dust.',
  },
  {
    title: '80% Prep / 20% Paint Philosophy',
    description: 'Flawless paint starts underneath. We never paint over peeling substrates, open baseboard gaps, or drywall gouges. Every surface is scraped, filled, sanded smooth, and primed.',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 relative bg-background">
      <div className="absolute inset-0 architectural-pattern -z-10 opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3">
            The Solo Contractor Difference
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif">
            About <span className="text-accent">Steel City Painting</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Founded on honest trade principles: one skilled craftsman taking the time to do residential painting and repairs right.
          </p>
        </div>

        {/* Realistic Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-card border border-border gold-border-thin"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3 border border-accent/20">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1 font-serif">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Founder Story & Approach */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Steel City Painting &amp; Handyman Services was established to bring personal craftsmanship back to home improvements. In an industry dominated by franchises that bid high and dispatch inexperienced, rotating sub-contractors, we believe homeowners deserve better.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            As a master tradesman with over 15 years of hands-on experience, Brent personally handles every aspect of your project. By booking one project at a time, your home receives undivided attention, meticulous surface prep, and quiet, courteous service from start to finish.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {values.map((value) => (
            <div
              key={value.title}
              className="p-6 sm:p-8 rounded-2xl bg-card border border-border gold-border-thin hover:border-accent transition-colors flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 font-serif">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Solo Calendar & Booking Box */}
        <div id="booking-info" className="bg-card border border-border gold-border rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5 border border-accent/20">
            <Calendar className="w-7 h-7 text-accent" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3 font-serif">
            Booking &amp; Calendar Availability
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            Because Brent works as a solo craftsman and gives each client 100% undivided attention, calendar slots are limited. Projects are booked on a first-come basis with an in-home written estimate and a 25% scheduling deposit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white rounded-full text-sm font-semibold hover:bg-accent-secondary transition-colors uppercase tracking-wider shadow-md shadow-accent/20"
            >
              Check Calendar Availability
            </a>
            <a
              href="/terms"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-border hover:border-accent text-foreground rounded-full text-sm font-medium transition-colors"
            >
              Review Contractor Terms
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}