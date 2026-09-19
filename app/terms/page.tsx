import React from 'react';
import Link from 'next/link';
import { ShieldCheck, DollarSign, Calendar, Award } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service & Contractor Policies | Steel City Painting',
  description: 'In-home service terms, liability waivers, payment schedule, cancellation policies, insurance coverage, and safety standards for Steel City Painting.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-secondary transition-colors font-medium"
            >
              &larr; Return to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground mt-4 mb-3">
              Contractor Terms &amp; In-Home Policies
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Effective Date: September 2026 &bull; Steel City Painting &amp; Handyman Services (Hamilton, Ontario)
            </p>
          </div>

          {/* Quick Summary Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="p-4 rounded-xl bg-card border border-border gold-border-thin">
              <ShieldCheck className="w-6 h-6 text-accent mb-2" />
              <div className="text-sm font-bold font-serif">\$2M Liability &amp; WSIB</div>
              <p className="text-xs text-muted-foreground mt-1">Full commercial policy + WSIB clearance certificates.</p>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border gold-border-thin">
              <Award className="w-6 h-6 text-accent mb-2" />
              <div className="text-sm font-bold font-serif">2-Year Warranty</div>
              <p className="text-xs text-muted-foreground mt-1">Guaranteed against peeling or blistering from prep defects.</p>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border gold-border-thin">
              <DollarSign className="w-6 h-6 text-accent mb-2" />
              <div className="text-sm font-bold font-serif">Transparent Payments</div>
              <p className="text-xs text-muted-foreground mt-1">25% deposit, final balance upon customer sign-off.</p>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border gold-border-thin">
              <Calendar className="w-6 h-6 text-accent mb-2" />
              <div className="text-sm font-bold font-serif">Flexible Rescheduling</div>
              <p className="text-xs text-muted-foreground mt-1">48-hour notice for interiors; zero fee weather postponements.</p>
            </div>
          </div>

          {/* Detailed Policy Sections */}
          <div className="space-y-12 text-sm sm:text-base leading-relaxed text-foreground/90">
            {/* Section 1 */}
            <section id="independent-contractor" className="p-6 sm:p-8 rounded-2xl bg-card border border-border">
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold">1</span>
                Solo Contractor Operational Standard
              </h2>
              <p className="text-muted-foreground mb-4">
                Steel City Painting &amp; Handyman Services operates with an owner-craftsman business model. When you hire our service, you are engaging a dedicated master tradesman who personally evaluates, prepares, paints, and inspects your property. We do not sell your contract to unvetted third-party crews or rotating temporary laborers.
              </p>
              <p className="text-muted-foreground">
                This structure guarantees direct communication, consistent work ethic, and singular accountability throughout the duration of your project.
              </p>
            </section>

            {/* Section 2 */}
            <section id="scope-of-work" className="p-6 sm:p-8 rounded-2xl bg-card border border-border">
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold">2</span>
                Written Estimates &amp; Change Orders
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
                <li><strong className="text-foreground">Scope Specification:</strong> Every project proposal itemizes surfaces to be addressed (ceilings, walls, baseboards, door casings, window sills, cabinetry), surface preparation steps, number of coats, and specified paint manufacturer/sheen.</li>
                <li><strong className="text-foreground">30-Day Price Guarantee:</strong> Written quotes remain valid for thirty (30) days from issuance.</li>
                <li><strong className="text-foreground">Unforeseen Defects:</strong> If hidden structural defects are uncovered during preparation (such as deteriorated plaster, concealed mold, active water leaks, or unbonded previous paint layers), work on that specific area will be halted immediately. The client will be provided with photographic documentation and a written Change Order detailing additional scope and cost before proceeding.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="payments" className="p-6 sm:p-8 rounded-2xl bg-card border border-border">
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold">3</span>
                Payment Terms &amp; Schedule
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-muted border border-border">
                  <span className="text-xs uppercase tracking-wider text-accent font-semibold">Stage 1</span>
                  <div className="text-lg font-bold font-serif text-foreground mt-1">25% Booking Deposit</div>
                  <p className="text-xs text-muted-foreground mt-1">Required to secure your calendar slot and procure custom-tinted materials.</p>
                </div>
                <div className="p-4 rounded-xl bg-muted border border-border">
                  <span className="text-xs uppercase tracking-wider text-accent font-semibold">Stage 2</span>
                  <div className="text-lg font-bold font-serif text-foreground mt-1">Progress Billing (If Applicable)</div>
                  <p className="text-xs text-muted-foreground mt-1">For multi-room projects exceeding 5 consecutive days, a mid-point payment may be specified.</p>
                </div>
                <div className="p-4 rounded-xl bg-muted border border-border">
                  <span className="text-xs uppercase tracking-wider text-accent font-semibold">Stage 3</span>
                  <div className="text-lg font-bold font-serif text-foreground mt-1">Remaining Balance</div>
                  <p className="text-xs text-muted-foreground mt-1">Due immediately upon final walkthrough inspection and complete client satisfaction.</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Accepted payment methods include Interac e-Transfer, Cheque, and major Credit Cards (3% merchant processing fee applies to credit card payments). Invoices overdue by 14 days or more accrue interest at 1.5% per month (18% per annum).
              </p>
            </section>

            {/* Section 4 */}
            <section id="cancellations" className="p-6 sm:p-8 rounded-2xl bg-card border border-border">
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold">4</span>
                Cancellation &amp; Rescheduling Policy
              </h2>
              <p className="text-muted-foreground mb-3">
                Because our calendar is reserved exclusively for one client at a time, last-minute cancellations directly impact contractor scheduling:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm">
                <li><strong className="text-foreground">Rescheduling with 48+ Hours Notice:</strong> Your full deposit transfers to the newly agreed upon date without any penalty fee.</li>
                <li><strong className="text-foreground">Cancellations within 48 Hours:</strong> If a scheduled interior project is cancelled on short notice without rescheduling, the deposit may be retained to cover custom mixed paint supplies and unfillable calendar downtime.</li>
                <li><strong className="text-foreground">Exterior Weather Delays:</strong> High-performance exterior paint and deck stain require surface moisture under 12% and temperatures consistently above 10&deg;C. Weather-related delays are communicated promptly and rescheduled for the next available dry window without fees.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="property-access" className="p-6 sm:p-8 rounded-2xl bg-card border border-border">
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold">5</span>
                In-Home Property Access, Valuables &amp; Pets
              </h2>
              <p className="text-muted-foreground mb-4">
                To ensure maximum safety and protect your home environment, we adhere to strict in-home protocols:
              </p>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="p-3 rounded-lg bg-muted border border-border">
                  <strong className="text-foreground">Home Access &amp; Security:</strong> The client will provide clear access to the work area, water, and electrical supply during working hours (typically 8:00 AM – 5:00 PM). All access codes or keys provided are kept secure and returned upon job completion.
                </div>
                <div className="p-3 rounded-lg bg-muted border border-border">
                  <strong className="text-foreground">Valuables &amp; Breakables:</strong> The client is requested to remove all personal valuables, artwork, picture frames, small electronics, and fragile heirlooms from adjacent walls, dressers, and shelving before work begins.
                </div>
                <div className="p-3 rounded-lg bg-muted border border-border">
                  <strong className="text-foreground">Furniture Movement:</strong> We assist with moving large centered furniture items and seal them with clean poly sheeting and drops. Small personal items, clothing, and closet contents must be cleared by the client.
                </div>
                <div className="p-3 rounded-lg bg-muted border border-border">
                  <strong className="text-foreground">Pet &amp; Child Safety:</strong> For the safety of your pets and young children, they must be kept strictly away from active work zones, open ladders, paint trays, and wet surfaces.
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="liability" className="p-6 sm:p-8 rounded-2xl bg-card border border-border">
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold">6</span>
                Liability Waivers &amp; Substrate Disclaimers
              </h2>
              <p className="text-muted-foreground mb-4 text-sm">
                Steel City Painting exercises supreme diligence in floor masking (using leak-proof drop cloths and rosin paper) and border tape protection. However, the client agrees to the following standard trade limitations:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm">
                <li><strong className="text-foreground">Pre-Existing Settling &amp; Moisture:</strong> Contractor cannot be held liable for cracks reopening due to building settling, shifting foundations, or unmitigated moisture penetration behind walls.</li>
                <li><strong className="text-foreground">Aged Plastic Brackets &amp; Blinds:</strong> Plastic clips and aged window hardware often become brittle over decades of UV exposure. We take exceptional care when removing window coverings, but cannot be held responsible for brittle aged plastic clips that fracture upon standard disassembly.</li>
                <li><strong className="text-foreground">Color Matching &amp; Ambient Lighting:</strong> Paint colors appear differently depending on room exposure (North vs. South light) and bulb color temperature (2700K Warm vs 5000K Daylight). The client is ultimately responsible for final color code approval. Sample swatch testing on the wall is always recommended prior to full purchase.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="insurance-warranty" className="p-6 sm:p-8 rounded-2xl bg-card border border-border">
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold">7</span>
                Insurance, WSIB &amp; 2-Year Craftsmanship Warranty
              </h2>
              <div className="bg-accent/10 border border-accent/30 rounded-xl p-5 mb-4">
                <h3 className="font-bold text-foreground font-serif mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                  Full Commercial General Liability &amp; Workers&apos; Compensation
                </h3>
                <p className="text-sm text-foreground/90">
                  We maintain \$2,000,000 in active Commercial General Liability insurance and full compliance with the Workplace Safety and Insurance Board (WSIB) of Ontario. Proof of Insurance and WSIB Clearance Certificates can be provided directly to the homeowner upon request.
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">24-Month Craftsmanship Guarantee:</strong> All interior painting work is warranted for two (2) full years against peeling, blistering, or flaking resulting from defective workmanship or surface preparation. This warranty does not cover normal wear-and-tear, physical abrasion, substrate water damage, or structural settling.
              </p>
            </section>

            {/* Section 8 */}
            <section id="safety-lead" className="p-6 sm:p-8 rounded-2xl bg-card border border-border">
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold">8</span>
                Safety, Ventilation &amp; Historic Lead Protocols
              </h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Dust Control &amp; HEPA Sanding:</strong> We utilize specialized dust extraction sanders with HEPA vacuum filtration to capture over 99.5% of drywall and wood sanding dust right at the tool, keeping your home air clean.
                </p>
                <p>
                  <strong className="text-foreground">Eco-Friendly &amp; Low-VOC Products:</strong> We prioritize zero-VOC and ultra-low-VOC premium coatings (such as Benjamin Moore Regal Select and Sherwin-Williams Emerald) so your family can comfortably occupy adjacent living spaces without harsh chemical fumes.
                </p>
                <p>
                  <strong className="text-foreground">Homes Built Prior to 1978:</strong> For historic Hamilton properties that may contain legacy lead coatings, we utilize lead-safe prep methods: wet scraping, HEPA extraction, and sealed containment. Open-flame burning or uncontrolled mechanical sanding is strictly prohibited.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="governing-law" className="p-6 sm:p-8 rounded-2xl bg-card border border-border">
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold">9</span>
                Governing Law &amp; Dispute Resolution
              </h2>
              <p className="text-muted-foreground text-sm">
                These terms and any service agreements entered into shall be governed by and construed in accordance with the laws of the Province of Ontario and the applicable federal laws of Canada, including adherence to the Ontario Consumer Protection Act. Both parties commit to resolving any questions or disputes in good faith through direct discussion and mutual site inspection prior to any formal dispute resolution.
              </p>
            </section>
          </div>

          {/* Contact Bar */}
          <div className="mt-12 p-8 rounded-2xl bg-card border border-border text-center">
            <h3 className="text-xl font-bold font-serif text-foreground mb-2">
              Have Questions About Our In-Home Terms?
            </h3>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto mb-6">
              We believe in complete transparency before any tool enters your residence. Contact our master craftsman directly to discuss your project specifics.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:2897752020"
                className="px-6 py-3 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent-secondary transition-colors"
              >
                Call (289) 775-2020
              </a>
              <Link
                href="/#contact"
                className="px-6 py-3 border border-border hover:border-accent text-foreground rounded-full text-sm font-medium transition-colors"
              >
                Request In-Home Consultation
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
