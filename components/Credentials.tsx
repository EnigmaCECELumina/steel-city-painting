'use client';

import { Award, ShieldCheck, ClipboardCheck, Sparkles, Shield, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const credentials = [
  {
    icon: Award,
    title: 'Master Tradesman Certification',
    description: 'Over 15 years of hands-on expertise in fine interior finishing, substrate preparation, cabinet spray techniques, and architectural repairs.',
  },
  {
    icon: ShieldCheck,
    title: '$2,000,000 Liability Insurance',
    description: 'Comprehensive commercial general liability policy specifically protecting residential properties and homeowner belongings.',
  },
  {
    icon: ClipboardCheck,
    title: 'WSIB Ontario Compliant',
    description: 'In full standing with the Workplace Safety and Insurance Board of Ontario, with clearance certificates available upon request.',
  },
  {
    icon: Sparkles,
    title: 'HEPA Dust-Free Vacuum Sanding',
    description: 'Specialized Festool-style vacuum extraction units capture 99.5% of drywall and wood sanding dust directly at the source.',
  },
  {
    icon: Shield,
    title: 'Historic Lead-Safe Practices',
    description: 'Trained in containment, wet-scraping, and HEPA cleanup for older Hamilton and Dundas properties built prior to 1978.',
  },
  {
    icon: CheckCircle2,
    title: '2-Year Craftsmanship Guarantee',
    description: 'A written two-year warranty guaranteeing all interior paint against peeling, flaking, or blistering from preparation defects.',
  },
];

const serviceAreas = [
  'Hamilton',
  'Ancaster',
  'Dundas',
  'Stoney Creek',
  'Grimsby',
  'Burlington',
  'Oakville',
  'Waterdown',
];

export function Credentials() {
  return (
    <section id="credentials" className="py-20 sm:py-32 relative bg-background">
      <div className="absolute inset-0 architectural-pattern -z-10 opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3">
            Verified Contractor Standards
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif">
            Credentials That Protect <span className="text-accent">Your Home</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Proper licensing, comprehensive insurance, and verified safety practices so you can welcome a craftsman into your home with total confidence.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {credentials.map((credential) => {
            const Icon = credential.icon;
            return (
              <div
                key={credential.title}
                className="p-6 rounded-2xl bg-card border border-border gold-border-thin hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 border border-accent/20">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 font-serif">
                    {credential.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {credential.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Areas & Policy Link */}
        <div className="bg-card border border-border gold-border rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2 font-serif">
              Local Service Region
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Brent personally travels to residential homes across Hamilton and the surrounding Golden Horseshoe communities
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-8">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm font-medium rounded-full"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="text-center pt-6 border-t border-border">
            <Link
              href="/terms#insurance-warranty"
              className="text-xs sm:text-sm text-accent hover:text-accent-secondary font-semibold underline underline-offset-4"
            >
              Read full Insurance, WSIB, and Craftsmanship Warranty details in our Terms of Service &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}