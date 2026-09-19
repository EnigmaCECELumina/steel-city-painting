'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Send, CheckCircle, Loader2, Building2, Home } from 'lucide-react';

const propertyTypes = [
  'Residential - Single Family',
  'Residential - Multi-Family',
  'Commercial - Office Space',
  'Commercial - Retail',
  'Commercial - Industrial',
  'Heritage / Historic Property',
  'Other',
];

const serviceCategories = [
  'Interior & Exterior Architectural Painting',
  'Drywall, Plaster & Structural Surface Repair',
  'Custom Carpentry & Architectural Millwork',
  'Commercial Property Maintenance',
  'Residential Property Restoration',
  'Exterior Structure Refinishing',
  'Multiple Services / Comprehensive Project',
];

const projectScopes = [
  'Minor Repair / Touch-Up',
  'Single Room Renovation',
  'Multiple Room Renovation',
  'Full Property Restoration',
  'New Construction Finish Work',
  'Commercial Fit-Out',
  'Historic Restoration',
  'Custom / Specialized Project',
];

const contactTimes = [
  'Morning (8AM - 12PM)',
  'Afternoon (12PM - 5PM)',
  'Evening (5PM - 8PM)',
  'Anytime',
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
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
      // Replace with your actual Web3Forms access key
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace this with your actual access key
          subject: 'Enterprise Consultation Request - Steel City Painting & Handyman Services',
          from_name: formData.name,
          reply_to: formData.email,
          company: formData.company,
          phone: formData.phone,
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
          company: '',
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
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 sm:py-32 relative">
      <div className="absolute inset-0 architectural-pattern -z-10 opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif">
              Enterprise <span className="text-accent">Consultation</span> Portal
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Begin your project consultation with our team of master craftsmen and project specialists
            </p>
          </div>

          <div className="bg-card border border-border gold-border rounded-2xl p-6 sm:p-8 lg:p-10">
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2 font-serif">
                  Consultation Request Received
                </h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for your inquiry. Our project team will contact you within 24 hours to schedule your private consultation.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-secondary transition-colors uppercase tracking-wider"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                      placeholder="(289) 775-2020"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium text-foreground mb-2">
                      Property Type *
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      required
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    >
                      <option value="">Select property type</option>
                      {propertyTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="serviceCategory" className="block text-sm font-medium text-foreground mb-2">
                      Service Category *
                    </label>
                    <select
                      id="serviceCategory"
                      name="serviceCategory"
                      required
                      value={formData.serviceCategory}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    >
                      <option value="">Select service category</option>
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
                    <label htmlFor="projectScope" className="block text-sm font-medium text-foreground mb-2">
                      Project Scope *
                    </label>
                    <select
                      id="projectScope"
                      name="projectScope"
                      required
                      value={formData.projectScope}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    >
                      <option value="">Select project scope</option>
                      {projectScopes.map((scope) => (
                        <option key={scope} value={scope}>
                          {scope}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
                      Desired Timeline
                    </label>
                    <input
                      type="text"
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                      placeholder="e.g., Within 3 months, Flexible, etc."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectDescription" className="block text-sm font-medium text-foreground mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    required
                    rows={5}
                    value={formData.projectDescription}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none"
                    placeholder="Please provide detailed information about your project, including specific requirements, challenges, and any special considerations..."
                  />
                </div>

                <div>
                  <label htmlFor="preferredContactTime" className="block text-sm font-medium text-foreground mb-2">
                    Preferred Contact Time
                  </label>
                  <select
                    id="preferredContactTime"
                    name="preferredContactTime"
                    value={formData.preferredContactTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
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
                    There was an error submitting your request. Please try again or contact us directly at (289) 775-2020.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-lg text-lg font-semibold hover:bg-accent-secondary transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none uppercase tracking-wider"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Request Private Consultation
                    </>
                  )}
                </button>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
                  <p>
                    For immediate assistance, call:{' '}
                    <a href="tel:2897752020" className="text-accent hover:underline font-medium">
                      (289) 775-2020
                    </a>
                  </p>
                  <span className="hidden sm:inline">|</span>
                  <p>
                    Email:{' '}
                    <a href="mailto:inquiries@steelcityservices.ca" className="text-accent hover:underline font-medium">
                      inquiries@steelcityservices.ca
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}