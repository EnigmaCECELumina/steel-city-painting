'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Phone, X } from 'lucide-react';
import { ThemeSwitcher } from './ThemeSwitcher';

const links = [
  { name: 'Services', href: '/#services' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="text-2xl font-extrabold text-accent" aria-label="Steel City Painting home">
            Steel City
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-semibold text-foreground hover:text-accent transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:2897752020" className="hidden sm:flex items-center gap-2 text-sm font-bold text-foreground hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>(289) 775-2020</span>
            </a>
            <ThemeSwitcher />
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground" aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setOpen(false)} className="py-3 text-sm font-semibold text-foreground hover:text-accent">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
