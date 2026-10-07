import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use | Steel City Painting & Handyman",
  description: "Terms for using this website and for service quotes.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-32">
        {/* Not legal advice. Have a lawyer review this before publishing. */}
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl">
          <h1 className="text-4xl font-bold text-accent mb-2">Terms of Use</h1>
          <p className="text-sm text-zinc-400 mb-8">Last updated: {currentDate}</p>

          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">About this site</h2>
              <p className="text-zinc-300 leading-relaxed">
                This site describes the painting and handyman services offered by Steel City Painting & Handyman in Hamilton, Ontario. It's information, not a contract.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">Quotes</h2>
              <p className="text-zinc-300 leading-relaxed">
                Quotes are provided in writing and are based on the information and photos you send. If the job turns out to differ from what was described, Brent will tell you before any extra work is done.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">Booking and payment</h2>
              <p className="text-zinc-300 leading-relaxed">
                [Brent to fill in: deposit, payment methods, when payment is due.]
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">Scheduling and weather</h2>
              <p className="text-zinc-300 leading-relaxed">
                Exterior work depends on the weather. Dates may shift for rain, cold, or conditions that affect the paint. Brent will let you know as early as he can.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">Cancellations</h2>
              <p className="text-zinc-300 leading-relaxed">
                [Brent to fill in: notice required, any deposit policy.]
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">Service area</h2>
              <p className="text-zinc-300 leading-relaxed">
                Work is offered in Stinson, Beasley, Central, Kirkendall, Barton, Keith and Janesville. Other areas are at Brent's discretion.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">Warranty</h2>
              <p className="text-zinc-300 leading-relaxed">
                Covered by the written 3-year workmanship warranty. See the <Link href="/warranty" className="text-accent hover:underline">Warranty page</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">Website content</h2>
              <p className="text-zinc-300 leading-relaxed">
                Text, photos, and design on this site belong to Steel City Painting & Handyman and can't be copied or reused without permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">Limits</h2>
              <p className=\"text-zinc-300 leading-relaxed\">
                This site is provided as-is. Nothing here replaces your rights under Ontario law. These terms are governed by the laws of Ontario.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">Contact</h2>
              <p className="text-zinc-300 leading-relaxed">
                [EMAIL] | [PHONE]
              </p>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
