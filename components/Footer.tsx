'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-extrabold mb-4">Steel City Painting</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional painting and handyman services in Hamilton, ON. 15+ years of trusted, owner-operated work.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="/#services" className="text-sm text-muted-foreground hover:text-accent transition-colors block">Services</Link>
              <Link href="/#about" className="text-sm text-muted-foreground hover:text-accent transition-colors block">About</Link>
              <Link href="/#contact" className="text-sm text-muted-foreground hover:text-accent transition-colors block">Contact</Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors block">Privacy</Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-accent transition-colors block">Terms</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="tel:2897752020" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                (289) 775-2020
              </a>
              <a href="mailto:inquiries@steelcityservices.ca" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                inquiries@steelcityservices.ca
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Hamilton, ON</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Steel City Painting & Handyman Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
