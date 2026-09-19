'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, Phone, X } from 'lucide-react';

const profile = 'https://app.trustedhousepainter.com/viewPainterProfile/SteelCityPaintingAndHandyman';
export function Header() {
  const [open, setOpen] = useState(false);
  const links = [{ name: 'Services', href: '/#services' }, { name: 'About Brent', href: '/#about' }, { name: 'Work quality', href: '/#portfolio' }, { name: 'Contact', href: '/#contact' }];
  return <header className="fixed top-0 left-0 right-0 z-50 glass"><nav className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="flex items-center justify-between h-16 sm:h-20"><Link href="/" className="flex items-center"><img src="/images/steel-city-logo.svg" alt="Steel City Painting And Handyman" className="w-[190px] sm:w-[235px] h-auto" /></Link><div className="hidden lg:flex items-center gap-7">{links.map((link) => <Link key={link.name} href={link.href} className="text-sm font-semibold text-zinc-200 hover:text-accent transition-colors">{link.name}</Link>)}</div><div className="flex items-center gap-3"><a href="tel:2897752020" className="hidden sm:flex items-center gap-2 text-sm font-bold text-zinc-100 hover:text-accent"><Phone className="w-4 h-4 text-accent" />(289) 775-2020</a><a href="#contact" className="hidden md:inline-flex px-4 py-2.5 bg-accent text-black text-sm font-bold hover:bg-white transition-colors">Get free estimate</a><button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-white" aria-label="Toggle menu">{open ? <X /> : <Menu />}</button></div></div>{open && <div className="lg:hidden py-4 border-t border-border"><div className="flex flex-col gap-1">{links.map((link) => <Link key={link.name} href={link.href} onClick={() => setOpen(false)} className="py-3 text-sm font-semibold text-zinc-200">{link.name}</Link>)}<a href={profile} target="_blank" rel="noreferrer" className="py-3 text-sm font-semibold text-accent">Verified Trusted House Painter profile</a><a href="#contact" onClick={() => setOpen(false)} className="mt-2 text-center py-3 bg-accent text-black font-bold">Get free estimate</a></div></div>}</nav></header>;
}
