import { Button } from '@/components/ui/Button';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | Smart Ship Right',
  description:
    'Simple, transparent pricing for Smart Ship Right warehouse management and contract management. No contracts, no onboarding fees.',
};

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'For small teams getting started with organized fulfillment.',
    highlight: false,
    features: [
      'Up to 500 orders / month',
      '1 warehouse location',
      '2 user accounts',
      'Shopify integration',
      'Single-item batch picking (SIB)',
      'Barcode scanning',
      'Basic dashboard & reports',
      'Email support',
    ],
    cta: 'Start Free Trial',
    href: '/contact',
  },
  {
    name: 'Professional',
    price: '$149',
    period: '/month',
    description: 'For growing teams that need advanced picking and shipping.',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Up to 3,000 orders / month',
      'Multi-warehouse support',
      '10 user accounts',
      'Shopify + ShipStation integration',
      'SIB & MIB batch picking',
      'Packing hub with scan verification',
      'Multi-carrier shipping & labels',
      'Packing slips (PDF/HTML/Thermal)',
      'Backorder tracking',
      'Shopify sync controls',
      'Mobile-ready responsive web app',
      'Purchase orders & receiving',
      'Real-time WebSocket dashboard',
      'Contract management (Mudra)',
      'Priority email & chat support',
    ],
    cta: 'Start Free Trial',
    href: '/contact',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For high-volume operations with custom requirements.',
    highlight: false,
    features: [
      'Unlimited orders',
      'Unlimited warehouses',
      'Unlimited users',
      'All Professional features',
      'Automation rules engine',
      'Hospital & quarantine workflows',
      'Custom API integrations',
      'Dedicated onboarding manager',
      'SLA & uptime guarantee',
      'SSO / SAML authentication',
      'Custom reporting & analytics',
      'Phone & video support',
    ],
    cta: 'Contact Sales',
    href: '/contact',
  },
];

const faqs = [
  {
    q: 'Is there a free trial?',
    a: 'Yes. Every plan includes a 14-day free trial with full access to all features. No credit card required to start.',
  },
  {
    q: 'Can I change plans later?',
    a: 'Absolutely. Upgrade or downgrade at any time. Changes take effect on your next billing cycle, and we prorate any differences.',
  },
  {
    q: 'What counts as an "order"?',
    a: 'An order is any sales order imported from Shopify or created manually in Smart Ship Right. Cancelled orders before picking do not count toward your limit.',
  },
  {
    q: 'Do you charge onboarding or setup fees?',
    a: 'No. All plans include free onboarding. Professional and Enterprise plans include a dedicated onboarding call to help you configure your warehouse.',
  },
  {
    q: 'What is Mudra contract management?',
    a: 'Mudra is our built-in contract management module. It includes AI-powered contract generation, risk analysis, e-signatures, and audit trails — included in Professional and Enterprise plans.',
  },
  {
    q: 'Can I use Smart Ship Right with platforms other than Shopify?',
    a: 'Currently we integrate natively with Shopify and ShipStation. Enterprise plans support custom API integrations for other platforms. Contact us to discuss your specific needs.',
  },
];

export default function PricingPage() {
  return (
    <div className="bg-white">
      <PageHeader
        title="Simple, transparent pricing"
        description="No contracts, no onboarding fees. Start free and scale as your warehouse grows."
      />

      {/* Plans */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 ${
                  plan.highlight
                    ? 'border-blue-500 bg-white shadow-xl ring-1 ring-blue-500'
                    : 'border-slate-200 bg-white shadow-sm'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white">
                    {plan.badge}
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold text-slate-900">{plan.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  {plan.period && <span className="text-slate-500">{plan.period}</span>}
                </div>

                <Button
                  href={plan.href}
                  variant={plan.highlight ? 'primary' : 'outline'}
                  className="w-full mb-8"
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm">
                      <svg
                        className={`mr-3 h-5 w-5 flex-shrink-0 ${
                          plan.highlight ? 'text-blue-500' : 'text-green-500'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Feature Comparison */}
      <Section alt>
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 text-center mb-10">
            Compare plans at a glance
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-4 pr-4 text-left font-semibold text-slate-900">Feature</th>
                  <th className="py-4 px-4 text-center font-semibold text-slate-900">Starter</th>
                  <th className="py-4 px-4 text-center font-semibold text-blue-600">Professional</th>
                  <th className="py-4 pl-4 text-center font-semibold text-slate-900">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { feature: 'Monthly orders', starter: '500', pro: '3,000', enterprise: 'Unlimited' },
                  { feature: 'Warehouses', starter: '1', pro: 'Multiple', enterprise: 'Unlimited' },
                  { feature: 'User accounts', starter: '2', pro: '10', enterprise: 'Unlimited' },
                  { feature: 'Shopify integration', starter: true, pro: true, enterprise: true },
                  { feature: 'ShipStation integration', starter: false, pro: true, enterprise: true },
                  { feature: 'SIB batch picking', starter: true, pro: true, enterprise: true },
                  { feature: 'MIB batch picking', starter: false, pro: true, enterprise: true },
                  { feature: 'Mobile warehouse app', starter: false, pro: true, enterprise: true },
                  { feature: 'Packing hub', starter: false, pro: true, enterprise: true },
                  { feature: 'Packing slips (PDF/HTML/Thermal)', starter: false, pro: true, enterprise: true },
                  { feature: 'Backorder tracking', starter: false, pro: true, enterprise: true },
                  { feature: 'Shopify sync controls', starter: false, pro: true, enterprise: true },
                  { feature: 'Purchase orders & receiving', starter: false, pro: true, enterprise: true },
                  { feature: 'Contract management (Mudra)', starter: false, pro: true, enterprise: true },
                  { feature: 'Automation rules', starter: false, pro: false, enterprise: true },
                  { feature: 'Hospital & quarantine', starter: false, pro: false, enterprise: true },
                  { feature: 'Custom API integrations', starter: false, pro: false, enterprise: true },
                  { feature: 'Dedicated onboarding', starter: false, pro: true, enterprise: true },
                  { feature: 'SLA guarantee', starter: false, pro: false, enterprise: true },
                ].map((row) => (
                  <tr key={row.feature}>
                    <td className="py-3 pr-4 text-slate-700">{row.feature}</td>
                    {[row.starter, row.pro, row.enterprise].map((val, i) => (
                      <td key={i} className="py-3 px-4 text-center">
                        {typeof val === 'boolean' ? (
                          val ? (
                            <svg className="mx-auto h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <span className="text-slate-300">—</span>
                          )
                        ) : (
                          <span className="text-slate-700 font-medium">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-slate-900 text-center mb-10">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-slate-200 bg-white p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-white">
              Start your 14-day free trial today
            </h2>
            <p className="mt-4 text-blue-100">
              No credit card required. Full access to all features. Cancel anytime.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
