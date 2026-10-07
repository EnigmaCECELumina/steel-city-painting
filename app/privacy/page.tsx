import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Steel City Painting & Handyman",
  description: "What information this site collects and how it's used.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold text-accent mb-2">Privacy Policy</h1>
          <p className="text-sm text-zinc-400 mb-8">Last updated: {currentDate}</p>

          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">What we collect</h2>
              <p className="text-zinc-300 leading-relaxed">
                Only what you send through the contact form or by email or phone: your name, phone number or email, your address or neighbourhood, a description of the job, and any photos you attach.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">How it's used</h2>
              <p className="text-zinc-300 leading-relaxed">
                To reply to you, give you a price, and schedule and complete the work. That's it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">What we don't do</h2>
              <p className="text-zinc-300 leading-relaxed">
                We don't sell your information. We don't share it with advertisers. We don't send marketing emails you didn't ask for.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">Who sees it</h2>
              <p className="text-zinc-300 leading-relaxed">
                Brent. If a service handles the contact form or hosts the site, they process the data to deliver it. [Fill in the form service, e.g. Formspree/Netlify, once chosen.]
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">Photos</h2>
              <p className="text-zinc-300 leading-relaxed">
                Photos you send are used only to quote and complete your job. They may be kept in Brent's records of the job. [Brent to confirm retention, e.g. "for the length of the warranty period."]
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">Cookies and analytics</h2>
              <p className="text-zinc-300 leading-relaxed">
                [If no analytics: "This site doesn't use tracking cookies."] [If analytics are added, name the tool and what it tracks.]
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">Your rights</h2>
              <p className="text-zinc-300 leading-relaxed">
                You can ask to see, correct, or delete the information we have about you. Email [EMAIL] and it'll be handled within [30] days.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">Contact</h2>
              <p className="text-zinc-300 leading-relaxed">
                Steel City Painting & Handyman, Hamilton, Ontario. [EMAIL]
              </p>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
