'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, PaintBucket, Award, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

export function Footer() {
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

  const credentials = [
    { icon: Award, text: 'Master Tradesman' },
    { icon: ShieldCheck, text: 'Licensed & $2M Insured' },
    { icon: FileText, text: 'WSIB Ontario Compliant' },
    { icon: CheckCircle2, text: '2-Year Craftsmanship Guarantee' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Credentials Bar */}
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            {credentials.map((credential) => {
              const Icon = credential.icon;
              return (
                <div key={credential.text} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-accent" />
                  <span className="text-xs sm:text-sm font-medium text-foreground">{credential.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <PaintBucket className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground leading-tight font-serif">
                  Steel City Painting
                </h3>
                <p className="text-xs text-muted-foreground">&amp; Handyman Services</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Hamilton&apos;s Premier Solo Artistry in Restoration &amp; Repair. Master tradesman personally executing every interior repaint, cabinet refinishing, and surface repair across the Golden Horseshoe.
            </p>
            <div className="pt-2 text-xs text-accent font-semibold">
              Owner-Operated &bull; Free In-Home Written Estimates
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground font-serif">Contractor Direct Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:2897752020"
                className="flex items-start gap-3 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>(289) 775-2020</span>
              </a>
              <a
                href="mailto:inquiries@steelcityservices.ca"
                className="flex items-start gap-3 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>inquiries@steelcityservices.ca</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Hamilton, ON, Canada<br />Greater Golden Horseshoe</span>
              </div>
            </div>
          </div>

          {/* Service Area */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground font-serif">Service Region</h4>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground pt-1">
              Residential in-home services, light commercial &amp; rental turnovers.
            </p>
          </div>

          {/* Policies & Contractor Standards */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground font-serif">Contractor Policies</h4>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link href="/terms" className="hover:text-accent transition-colors flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Terms of Service &amp; Agreement
              </Link>
              <Link href="/terms#payments" className="hover:text-accent transition-colors flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Payment Terms &amp; Milestones
              </Link>
              <Link href="/terms#cancellations" className="hover:text-accent transition-colors flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Cancellation &amp; Weather Policy
              </Link>
              <Link href="/terms#liability" className="hover:text-accent transition-colors flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Liability Limits &amp; Disclaimers
              </Link>
              <Link href="/terms#safety-lead" className="hover:text-accent transition-colors flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Safety &amp; Lead-Safe Protocols
              </Link>
              <Link href="/privacy" className="hover:text-accent transition-colors flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Privacy Policy &amp; Photo Consent
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Steel City Painting &amp; Handyman Services. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link href="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link href="/terms#liability" className="hover:text-accent transition-colors">
                Liability Waivers
              </Link>
              <Link href="/terms#insurance-warranty" className="hover:text-accent transition-colors">
                Insurance &amp; Warranty
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}