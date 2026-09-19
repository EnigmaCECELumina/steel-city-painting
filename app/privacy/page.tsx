import React from 'react';
import Link from 'next/link';
import { Shield, Eye, Lock, Camera } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Steel City Painting',
  description: 'Privacy policy and client data protection practices for Steel City Painting & Handyman Services.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-secondary transition-colors font-medium"
            >
              &larr; Return to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground mt-4 mb-3">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Effective Date: September 2026 &bull; Steel City Painting &amp; Handyman Services
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border space-y-8 text-sm sm:text-base leading-relaxed text-foreground/90">
            <section>
              <h2 className="text-xl font-bold font-serif text-foreground mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent" />
                1. Our Commitment to Your Privacy
              </h2>
              <p className="text-muted-foreground">
                At Steel City Painting &amp; Handyman Services, we respect your right to privacy. As a residential contractor working inside private homes across Hamilton and the Greater Golden Horseshoe, we treat our clients&apos; personal information with the same high level of discretion and protection that we treat their physical properties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold font-serif text-foreground mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5 text-accent" />
                2. Information We Collect
              </h2>
              <p className="text-muted-foreground mb-3">
                We only collect personal information that you voluntarily supply when communicating with us:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm">
                <li><strong className="text-foreground">Contact Details:</strong> Your name, phone number, and email address submitted through our inquiry form or direct phone call.</li>
                <li><strong className="text-foreground">Service Address:</strong> Your home or site address required to conduct in-person consultations, assess project scope, and deliver services.</li>
                <li><strong className="text-foreground">Project Details &amp; Photos:</strong> Client-provided photos of rooms, surfaces, drywall damage, or cabinet layouts submitted for preliminary estimating.</li>
                <li><strong className="text-foreground">Billing Records:</strong> Transaction histories and invoices necessary for accounting and tax compliance. We do not store sensitive payment card details on our servers.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold font-serif text-foreground mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5 text-accent" />
                3. How We Use Your Information &amp; No-Sale Policy
              </h2>
              <p className="text-muted-foreground mb-3">
                Your personal details are used strictly to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm mb-4">
                <li>Formulate and deliver written quotes and work orders.</li>
                <li>Coordinate arrival windows and progress notifications.</li>
                <li>Provide post-project warranty documentation.</li>
              </ul>
              <div className="p-4 rounded-xl bg-muted border border-border">
                <p className="font-semibold text-foreground text-sm">
                  We will NEVER sell, rent, trade, or distribute your private contact details, address, or phone number to any third-party marketing networks, contractors, or data brokers.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold font-serif text-foreground mb-3 flex items-center gap-2">
                <Camera className="w-5 h-5 text-accent" />
                4. Residential Portfolio Photography Policy
              </h2>
              <p className="text-muted-foreground mb-3">
                We document our prep work and finished transformations to showcase craftsmanship to prospective clients. When taking photos of work completed in your residence:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm">
                <li><strong className="text-foreground">Anonymity &amp; Privacy:</strong> We strictly avoid photographing house numbers, street signs, vehicle license plates, personal family portraits, diplomas, or confidential documents.</li>
                <li><strong className="text-foreground">Homeowner Opt-Out:</strong> If you prefer that photos of your home interior or exterior not be featured on our website or social media channels, simply notify us in writing and we will fully honor your preference with zero reservations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold font-serif text-foreground mb-3">
                5. Website Analytics &amp; Cookies
              </h2>
              <p className="text-muted-foreground text-sm">
                Our website may utilize standard, non-invasive performance cookies (such as basic visitor analytics) to evaluate website traffic and ensure optimal page loading speed. You can configure your browser to decline cookies at any time without impacting site navigation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold font-serif text-foreground mb-3">
                6. Contacting Us Regarding Your Privacy
              </h2>
              <p className="text-muted-foreground text-sm">
                If you have questions regarding our privacy practices or wish to review or delete any contact details we have on file, please contact:
              </p>
              <div className="mt-3 p-4 rounded-xl bg-muted border border-border text-sm">
                <strong className="text-foreground">Steel City Painting &amp; Handyman Services</strong><br />
                Email: <a href="mailto:inquiries@steelcityservices.ca" className="text-accent underline">inquiries@steelcityservices.ca</a><br />
                Phone: <a href="tel:2897752020" className="text-accent underline">(289) 775-2020</a><br />
                Service Area: Hamilton, Ontario, Canada
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
