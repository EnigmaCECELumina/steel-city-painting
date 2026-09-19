'use client';

import { useState } from 'react';
import { Send, CheckCircle, Loader2, Phone, Mail } from 'lucide-react';

const propertyTypes = [
  'Single-Family Detached Home',
  'Townhouse / Semi-Detached',
  'Condo / Apartment',
  'Historic / Century Home',
  'Rental Property / Duplex',
  'Other Residential Space',
];

const serviceCategories = [
  'Interior Painting (Walls, Ceilings & Trim)',
  'Kitchen Cabinet Spray Refinishing',
  'Drywall Repair & Water Stain Patching',
  'Board & Batten / Accent Trim Millwork',
  'Cedar Deck & Fence Staining',
  'Handyman & Punch-List Repairs',
  'Multiple Surface Improvements',
];

const projectScopes = [
  'Single Room or Drywall Patch (1 Day)',
  'Bedroom Suite or Living Room (2–3 Days)',
  'Kitchen Cabinet Refinishing (4–5 Days)',
  'Multi-Room / Full Floor Refresh',
  'Exterior Deck / Porch Trim Project',
  'Small Handyman / Maintenance Visit',
];

const contactTimes = [
  'Morning (8:00 AM - 12:00 PM)',
  'Afternoon (12:00 PM - 5:00 PM)',
  'Evening (5:00 PM - 7:30 PM)',
  'Anytime via Text or Email',
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    propertyType: '',
    serviceCategory: '',
    projectScope: '',
    projectDescription: '',
    preferredContactTime: '',
    timeline: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
          subject: 'Residential Estimate Request - Steel City Painting (Brent)',
          from_name: formData.name,
          reply_to: formData.email,
          phone: formData.phone,
          address_or_neighborhood: formData.address,
          property_type: formData.propertyType,
          service_category: formData.serviceCategory,
          project_scope: formData.projectScope,
          project_description: formData.projectDescription,
          preferred_contact_time: formData.preferredContactTime,
          timeline: formData.timeline,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          address: '',
          phone: '',
          email: '',
          propertyType: '',
          serviceCategory: '',
          projectScope: '',
          projectDescription: '',
          preferredContactTime: '',
          timeline: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 sm:py-32 relative bg-background">
      <div className="absolute inset-0 architectural-pattern -z-10 opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3">
              Direct Craftsman Communication
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif">
              Request a Free <span className="text-accent">In-Home Estimate</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Speak directly with Brent. Receive an honest assessment, realistic timeframe, and an upfront written quote with zero sales pressure.
            </p>
          </div>

          <div className="bg-card border border-border gold-border rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl">
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2 font-serif">
                  Estimate Request Received
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you for reaching out! Brent personally reviews all inquiries and will follow up within 24 hours to discuss your project and arrange an in-home walkthrough.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="px-6 py-3 bg-accent text-white rounded-lg text-xs font-semibold hover:bg-accent-secondary transition-colors uppercase tracking-wider"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                      placeholder="e.g., Jennifer Miller"
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                      Neighborhood / City in Hamilton Area *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                      placeholder="e.g., Westdale, Ancaster, Dundas"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                      placeholder="(289) 775-2020"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                      placeholder="your.name@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="propertyType" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                      Property Type *
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      required
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    >
                      <option value="">Select home type</option>
                      {propertyTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="serviceCategory" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                      Primary Service Needed *
                    </label>
                    <select
                      id="serviceCategory"
                      name="serviceCategory"
                      required
                      value={formData.serviceCategory}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    >
                      <option value="">Select primary service</option>
                      {serviceCategories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectScope" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                      Realistic Project Scope *
                    </label>
                    <select
                      id="projectScope"
                      name="projectScope"
                      required
                      value={formData.projectScope}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    >
                      <option value="">Select approximate scope</option>
                      {projectScopes.map((scope) => (
                        <option key={scope} value={scope}>
                          {scope}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                      Desired Start Timing
                    </label>
                    <input
                      type="text"
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                      placeholder="e.g., Next 2 weeks, within a month, flexible"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectDescription" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                    Project Details &amp; Surfaces to Paint *
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    required
                    rows={4}
                    value={formData.projectDescription}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none"
                    placeholder="Tell Brent about the rooms or surfaces, ceiling height, whether drywall patching or trim is needed, and any color ideas you have in mind..."
                  />
                </div>

                <div>
                  <label htmlFor="preferredContactTime" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                    Preferred Contact Time
                  </label>
                  <select
                    id="preferredContactTime"
                    name="preferredContactTime"
                    value={formData.preferredContactTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  >
                    <option value="">Select preferred time</option>
                    {contactTimes.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                {submitStatus === 'error' && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
                    There was an error submitting your request. Please contact Brent directly by phone at (289) 775-2020 or email inquiries@steelcityservices.ca.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-accent-secondary transition-all transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none uppercase tracking-wider shadow-md shadow-accent/20"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending to Brent...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Request Free In-Home Walkthrough
                    </>
                  )}
                </button>

                {/* Direct Contact Bar */}
                <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-accent" />
                    <span>Direct Call/Text: <a href="tel:2897752020" className="text-foreground font-semibold hover:text-accent">(289) 775-2020</a></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-accent" />
                    <span>Email: <a href="mailto:inquiries@steelcityservices.ca" className="text-foreground font-semibold hover:text-accent">inquiries@steelcityservices.ca</a></span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}