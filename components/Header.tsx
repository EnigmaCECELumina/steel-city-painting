'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Phone, Menu, X, PaintBucket } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Credentials', href: '#credentials' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <PaintBucket className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold text-foreground leading-tight font-serif">
                Steel City Painting
              </h1>
              <p className="text-xs text-muted-foreground">& Handyman Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA and Theme Switcher */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent-secondary transition-colors uppercase tracking-wider"
            >
              Request Consultation
            </a>
            <ThemeSwitcher />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors py-2 uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-secondary transition-colors uppercase tracking-wider"
              >
                Request Consultation
              </a>
              <a
                href="tel:2897752020"
                className="flex items-center justify-center gap-2 px-4 py-3 border border-accent text-accent rounded-lg text-sm font-medium hover:bg-accent hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(289) 775-2020</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}