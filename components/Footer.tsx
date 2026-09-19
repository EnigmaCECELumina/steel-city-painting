'use client';

import { Phone, Mail, MapPin, Clock, PaintBucket, Award, ShieldCheck, FileText } from 'lucide-react';

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

  const businessHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  const credentials = [
    { icon: Award, text: 'Master Tradesman' },
    { icon: ShieldCheck, text: 'Licensed & Insured' },
    { icon: FileText, text: 'WSIB Compliant' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Credentials Bar */}
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-8">
            {credentials.map((credential) => {
              const Icon = credential.icon;
              return (
                <div key={credential.text} className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-foreground">{credential.text}</span>
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
                <p className="text-xs text-muted-foreground">& Handyman Services</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Hamilton's Premier Artistry in Restoration & Repair. Delivering uncompromising quality for discerning properties across Ontario since 2023.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground font-serif">Corporate Contact</h4>
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
                  className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground font-serif">Business Hours</h4>
            <div className="space-y-2">
              {businessHours.map((schedule) => (
                <div key={schedule.day} className="flex items-start gap-3 text-sm">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium">{schedule.day}</p>
                    <p className="text-muted-foreground">{schedule.hours}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Steel City Painting & Handyman Services. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}