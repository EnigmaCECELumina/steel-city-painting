'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Star, Quote, MapPin, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah & Mark L.',
    location: 'Westdale, Hamilton',
    rating: 5,
    project: 'Kitchen Cabinet Refinishing (4 Days)',
    text: "Brent refinished our 1990s honey oak cabinets over four days. He set up a clean spray containment booth for the doors and hand-painted the face frames in our kitchen. The finish looks and feels like brand new factory cabinetry. Having just one person in our house who was polite, tidy, and completely focused was such a relief.",
    verified: true,
  },
  {
    id: 2,
    name: 'David R.',
    location: 'Kirkendall, Hamilton',
    rating: 5,
    project: 'High Stairwell & Hallway Repaint (2.5 Days)',
    text: "We have an 18-foot stairwell ceiling with awkward angles that three other contractors wouldn't touch without charging ridiculous fees. Brent brought proper ladder levelers, protected every inch of our hardwood stairs, and finished the job in under three days. His cut lines against our crown molding are razor sharp.",
    verified: true,
  },
  {
    id: 3,
    name: 'Elena & Greg M.',
    location: 'Dundas, ON',
    rating: 5,
    project: 'Ceiling Drywall Water Patch & Repaint',
    text: "After an upstairs bathroom leak, we had a yellow, sagging water ring on our dining room ceiling. Brent cut out the damaged drywall, added wood backing, taped, and mudded three feathered coats with a vacuum sander so there was zero dust. You literally cannot tell where the repair was made.",
    verified: true,
  },
  {
    id: 4,
    name: 'Robert K.',
    location: 'Ancaster, ON',
    rating: 5,
    project: 'Primary Bedroom Accent Wall & Trim',
    text: "Brent installed and painted a board-and-batten accent wall in Hale Navy for our master bedroom. He spent half a day just caulking and filling nail holes before ever opening a paint can. That level of meticulous prep is why the final wall looks like something out of an architectural magazine.",
    verified: true,
  },
  {
    id: 5,
    name: 'Patricia H.',
    location: 'Stoney Creek, ON',
    rating: 5,
    project: 'Cedar Deck Pressure Wash & Oil Stain',
    text: "Our back cedar deck was greying and peeling. Brent power-washed it gently so he wouldn't gouge the wood, waited 48 hours to test the moisture level with a meter, and then hand-brushed penetrating oil stain into every spindle and board. Outstanding personal craftsmanship.",
    verified: true,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 sm:py-32 relative bg-background">
      <div className="absolute inset-0 architectural-pattern -z-10 opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3">
            Real Homeowner Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif">
            What Homeowners Say About <span className="text-accent">Brent&apos;s Work</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Honest reviews from Hamilton, Ancaster, and Dundas clients who experienced the peace of mind of working with a solo craftsman.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border gold-border rounded-2xl p-6 sm:p-12 relative shadow-xl">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-accent/20">
              <Quote className="w-12 sm:w-16 h-12 sm:h-16" />
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-6 relative z-10">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-accent fill-accent" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-base sm:text-lg text-foreground leading-relaxed mb-8 italic relative z-10">
              &ldquo;{currentTestimonial.text}&rdquo;
            </blockquote>

            {/* Client Info */}
            <div className="flex items-start justify-between relative z-10 pt-4 border-t border-border">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-base sm:text-lg font-bold text-foreground font-serif">
                    {currentTestimonial.name}
                  </h4>
                  {currentTestimonial.verified && (
                    <span className="px-2 py-0.5 bg-accent/10 text-accent text-[11px] font-semibold rounded-full uppercase tracking-wider flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified Homeowner
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>{currentTestimonial.location}</span>
                </div>
                <p className="text-xs sm:text-sm text-accent font-medium mt-1">
                  {currentTestimonial.project}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2.5 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors border border-border"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2.5 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors border border-border"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-200",
                    index === currentIndex ? "bg-accent w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Realistic Stats Bar */}
        <div className="mt-14 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 rounded-xl bg-card border border-border text-center">
            <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 font-serif">100%</div>
            <div className="text-xs text-muted-foreground">Owner-Executed Jobs</div>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border text-center">
            <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 font-serif">5.0 / 5.0</div>
            <div className="text-xs text-muted-foreground">Local Homeowner Rating</div>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border text-center">
            <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 font-serif">15+</div>
            <div className="text-xs text-muted-foreground">Years Trade Mastery</div>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border text-center">
            <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 font-serif">2-Year</div>
            <div className="text-xs text-muted-foreground">Adhesion Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
}