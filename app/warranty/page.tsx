import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "3-Year Workmanship Warranty | Steel City Painting",
  description: "Brent's written 3-year workmanship warranty: what it covers, what it doesn't, and how to make a claim.",
  robots: { index: true, follow: true },
};

export default function WarrantyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-32">
        {/* Not legal advice. Have a lawyer review this before publishing. */}
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl">
          <h1 className="text-4xl font-bold text-accent mb-8">The 3-Year Warranty</h1>
          <p className="text-lg text-zinc-300 mb-8">
            Every painting job comes with a written 3-year workmanship warranty. Here's exactly what that means.
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">What's covered</h2>
              <p className="text-zinc-300 leading-relaxed">
                If paint peels, flakes, blisters, or cracks because of how the work was done (prep, priming, or application), Brent will come back and fix it at no charge. That includes the labour and the paint needed to repair the affected area.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">What's not covered</h2>
              <ul className="text-zinc-300 space-y-2 ml-4 list-disc">
                <li>Damage from water, leaks, moisture, mould, or condensation</li>
                <li>Settling, structural movement, or cracks that reopen in the wall itself</li>
                <li>Impact, scuffs, scratches, or damage from furniture, pets, or cleaning</li>
                <li>Normal fading, chalking, or wear over time</li>
                <li>Surfaces or areas that were not part of the original job</li>
                <li>Problems with surfaces the customer asked not to be prepped or repaired</li>
                <li>Paint or materials supplied by the customer</li>
                <li>Work done or altered by anyone else after Brent finished</li>
                <li>[EXTERIOR NOTE: Brent to decide. e.g. "Exterior work is covered for [X] years."]</li>
                <li>[HANDYMAN NOTE: Brent to decide. e.g. "Handyman repairs are covered for [X] months/years."]</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">How to make a claim</h2>
              <ol className="text-zinc-300 space-y-3 ml-4 list-decimal">
                <li>Contact Brent in writing at [EMAIL] or use the contact form.</li>
                <li>Include your name, address, the date of the job, and a few photos of the problem.</li>
                <li>Brent will review it, usually with a quick visit, and let you know the plan.</li>
                <li>If it's covered, he'll schedule the repair as soon as he reasonably can, weather permitting for exterior work.</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">The fine print, in plain words</h2>
              <p className="text-zinc-300 leading-relaxed">
                The warranty starts on the day the job is finished and paid in full. [Brent to decide: "It stays with the home if it's sold." OR "It applies to the original customer only."] It covers workmanship only. It does not replace any rights you have under Ontario law.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-700">
              <Link href="/#contact" className="inline-block px-6 py-3 bg-accent text-black font-bold hover:bg-white transition-colors">
                Get free estimate
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
