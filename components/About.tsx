'use client';

import { Award, Users, Wrench, ShieldCheck, Briefcase } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Distinguished Clients', value: '200+' },
  { icon: Wrench, label: 'Projects Completed', value: '500+' },
  { icon: Award, label: 'Years Experience', value: '15+' },
  { icon: ShieldCheck, label: 'Licensed & Insured', value: '100%' },
];

const values = [
  {
    title: 'Uncompromising Quality',
    description: 'Every project receives master-level attention and precision craftsmanship, ensuring results that exceed expectations.',
  },
  {
    title: 'Corporate Reliability',
    description: 'Professional project management, clear communication, and deliverable excellence that business and residential clients trust.',
  },
  {
    title: 'Client Partnership',
    description: 'We collaborate closely with clients to understand their vision and deliver solutions that align with their highest standards.',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 relative">
      <div className="absolute inset-0 architectural-pattern -z-10 opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif">
            About <span className="text-accent">Steel City</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hamilton's premier property restoration and general contracting firm since 2023
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-card border border-border gold-border-thin"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4 border border-accent/20">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1 font-serif">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Story */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Steel City Painting & Handyman Services was founded in 2023 with a singular vision: 
            to elevate property restoration and maintenance to an art form. As a master tradesman-led 
            general contracting firm, we bring decades of expertise to every project, from historic 
            home restoration to commercial property refurbishment.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our commitment to uncompromising quality and corporate-level reliability has established 
            us as the trusted choice for discerning clients across Hamilton and the Greater Golden 
            Horseshoe region. We approach every project with the precision and artistry that defines 
            true craftsmanship.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {values.map((value) => (
            <div
              key={value.title}
              className="p-6 rounded-2xl bg-card border border-border gold-border-thin hover:border-accent transition-colors"
            >
              <h3 className="text-xl font-bold text-foreground mb-3 font-serif">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Careers CTA */}
        <div id="careers" className="bg-card border border-border gold-border rounded-2xl p-8 sm:p-12 text-center">
          <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-6 border border-accent/20">
            <Briefcase className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3 font-serif">
            Join Our Team of Craftsmen
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We're always seeking skilled tradespeople who share our commitment to excellence. 
            If you're a master craftsman looking to join a premier contracting firm, we'd like to hear from you.
          </p>
          <a
            href="mailto:careers@steelcityservices.ca"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white rounded-lg text-base font-semibold hover:bg-accent-secondary transition-colors uppercase tracking-wider"
          >
            Inquire About Opportunities
          </a>
        </div>
      </div>
    </section>
  );
}