'use client';

import { Award, ShieldCheck, ClipboardCheck, Users, Zap, CheckCircle } from 'lucide-react';

const credentials = [
  {
    icon: Award,
    title: 'Master Tradesman Certification',
    description: 'Fully certified master tradesman with extensive training and expertise in all aspects of property restoration and maintenance.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed General Contractor',
    description: 'Fully licensed and insured general contractor operating in compliance with all Ontario regulatory requirements.',
  },
  {
    icon: ClipboardCheck,
    title: 'WSIB Compliant',
    description: 'Workplace Safety and Insurance Board compliant ensuring comprehensive coverage and workplace safety standards.',
  },
  {
    icon: Users,
    title: 'Liability Insurance Coverage',
    description: 'Comprehensive liability insurance protecting both clients and properties throughout all project phases.',
  },
  {
    icon: Zap,
    title: 'Safety Certified Operations',
    description: 'Rigorous safety protocols and certified procedures ensuring safe work environments on all project sites.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance Standards',
    description: 'Systematic quality control processes ensuring every project meets the highest standards of craftsmanship.',
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
  'Mississauga',
];

export function Credentials() {
  return (
    <section id="credentials" className="py-20 sm:py-32 relative">
      <div className="absolute inset-0 architectural-pattern -z-10 opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif">
            Professional <span className="text-accent">Credentials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Licensed, certified, and committed to the highest standards of professional excellence
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {credentials.map((credential) => {
            const Icon = credential.icon;
            return (
              <div
                key={credential.title}
                className="p-6 rounded-2xl bg-card border border-border gold-border-thin hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
              >
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
            );
          })}
        </div>

        {/* Service Areas */}
        <div className="bg-card border border-border gold-border rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2 font-serif">
              Service Area
            </h3>
            <p className="text-muted-foreground">
              Proudly serving the Greater Golden Horseshoe region
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-accent/10 border border-accent/20 text-accent text-sm font-medium rounded-full"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}