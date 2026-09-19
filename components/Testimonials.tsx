'use client';

import { ArrowRight, MessageSquareQuote } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-white text-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <MessageSquareQuote className="w-10 h-10 text-yellow-700 mx-auto mb-5" />
          <p className="text-2xl sm:text-4xl font-extrabold leading-tight">
            Good work starts with listening and finishes with leaving the place cleaner than you found it.
          </p>

          <div className="mt-12 p-6 sm:p-8 bg-zinc-50 border border-zinc-200 text-left">
            <h2 className="text-2xl font-extrabold mb-3">Real references, not made-up reviews.</h2>
            <p className="text-zinc-600 leading-relaxed mb-5">
              Real references available upon request. Ask Brent to connect you directly with past homeowners in Hamilton.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 font-bold hover:text-yellow-700">
              Ask about a project
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
