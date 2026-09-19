'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Star, Quote, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Jonathan & Sarah Mitchell',
    location: 'Ancaster, ON',
    rating: 5,
    project: 'Historic Home Restoration',
    text: "Steel City transformed our 1890s Victorian home with extraordinary attention to historical detail. Brent's expertise in period-appropriate restoration was remarkable. The quality of work exceeded our highest expectations, and the project was completed on schedule. Truly master-level craftsmanship.",
    verified: true,
  },
  {
    id: 2,
    name: 'Dr. Elizabeth Chen',
    location: 'Hamilton, ON',
    rating: 5,
    project: 'Executive Office Suite',
    text: "As a business owner, I needed a general contractor who understood the importance of both aesthetics and functionality. Steel City delivered an executive space that perfectly balances sophistication with practical design. Their project management was exemplary, and the attention to detail was outstanding.",
    verified: true,
  },
  {
    id: 3,
    name: 'Robert & Margaret Fitzgerald',
    location: 'Dundas, ON',
    rating: 5,
    project: 'Luxury Interior Finishes',
    text: "We've worked with many contractors over the years, but Steel City stands apart for their commitment to excellence. From the initial consultation to final walkthrough, every interaction was professional. The custom millwork and painting work in our home is absolutely stunning.",
    verified: true,
  },
  {
    id: 4,
    name: 'Hamilton Heritage Trust',
    location: 'Stoney Creek, ON',
    rating: 5,
    project: 'Heritage Library Millwork',
    text: "Steel City demonstrated exceptional expertise in heritage preservation. Their understanding of historical conservation requirements combined with modern restoration techniques produced results that exceeded our preservation standards. Highly recommended for heritage projects.",
    verified: true,
  },
  {
    id: 5,
    name: 'Thomas Anderson',
    location: 'Hamilton, ON',
    rating: 5,
    project: 'Commercial Retail Space',
    text: "The transformation of our retail space was remarkable. Steel City's team worked efficiently while maintaining the highest quality standards. The project was delivered on time and within budget, with finishes that perfectly align with our brand identity.",
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
    <section className="py-20 sm:py-32 relative">
      <div className="absolute inset-0 architectural-pattern -z-10 opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif">
            Client <span className="text-accent">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Verified feedback from distinguished clients across Hamilton's finest properties
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border gold-border rounded-2xl p-8 sm:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-accent/20">
              <Quote className="w-16 h-16" />
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-accent" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed mb-8 italic">
              "{currentTestimonial.text}"
            </blockquote>

            {/* Client Info */}
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-lg font-bold text-foreground font-serif">
                    {currentTestimonial.name}
                  </h4>
                  {currentTestimonial.verified && (
                    <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-medium rounded-full uppercase tracking-wider">
                      Verified
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{currentTestimonial.location}</span>
                </div>
                <p className="text-sm text-accent mt-1">
                  {currentTestimonial.project}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
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
                    "w-2 h-2 rounded-full transition-colors",
                    index === currentIndex ? "bg-accent" : "bg-muted-foreground/30"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-1 font-serif">200+</div>
            <div className="text-sm text-muted-foreground">Satisfied Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-1 font-serif">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-1 font-serif">15+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-1 font-serif">100%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}