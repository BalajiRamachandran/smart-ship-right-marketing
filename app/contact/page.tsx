'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    orderVolume: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', orderVolume: '', message: '' });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white">
      <PageHeader
        title="Get in touch"
        description="Tell us about your operation and we'll help you plan the right rollout for Smart Ship Right."
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="font-display text-2xl font-bold text-slate-900 mb-2">Thank you!</h2>
                    <p className="text-slate-600">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-slate-700">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label htmlFor="orderVolume" className="mb-1.5 block text-sm font-medium text-slate-700">
                          Monthly order volume
                        </label>
                        <select
                          id="orderVolume"
                          name="orderVolume"
                          value={formData.orderVolume}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-white"
                        >
                          <option value="">Select range</option>
                          <option value="0-100">0 – 100 orders</option>
                          <option value="100-500">100 – 500 orders</option>
                          <option value="500-1000">500 – 1,000 orders</option>
                          <option value="1000-5000">1,000 – 5,000 orders</option>
                          <option value="5000+">5,000+ orders</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full resize-none rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        placeholder="Tell us about your warehouse setup, current challenges, or what you're looking for..."
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-4">Quick contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 text-sm">Email</p>
                      <a href="mailto:contact@smartshipright.com" className="text-sm text-blue-600 hover:text-blue-700">
                        contact@smartshipright.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 text-sm">Response time</p>
                      <p className="text-sm text-slate-600">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">Book a demo</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Want a live walkthrough? We&apos;ll show you how Smart Ship Right fits your specific warehouse setup.
                </p>
                <Button href="/contact" variant="primary" className="w-full">
                  Schedule Demo Call
                </Button>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-3">What to expect</h3>
                <ul className="space-y-3">
                  {[
                    'We respond within 24 hours',
                    'Free onboarding call included',
                    'No pressure, no obligations',
                    '14-day free trial on all plans',
                  ].map((item) => (
                    <li key={item} className="flex items-center text-sm text-slate-600">
                      <svg className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
