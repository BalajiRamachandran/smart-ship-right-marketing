import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works | From Order to Shipped in 6 Steps',
  description:
    'See how Smart Ship Right manages your warehouse workflow: order sync, inventory validation, batch picking, packing verification, label generation, and real-time tracking.',
};

const processSteps = [
  {
    step: '01',
    title: 'Orders sync automatically',
    detail: 'Connect Shopify and orders flow into Smart Ship Right in real time via webhooks. Manual order creation is also supported. Each order enters a controlled processing queue with hold management for payment, fraud, and address issues.',
    screenshotAlt: 'Order sync — Shopify orders flowing into Smart Ship Right',
    screenshotSrc: '/screenshots/orders.png',
  },
  {
    step: '02',
    title: 'Inventory is validated',
    detail: 'Available stock is checked by SKU and location before releasing work to the floor. Reservations prevent overselling. Capacity constraints are validated automatically. Variance checks against Shopify catch discrepancies early.',
    screenshotAlt: 'Inventory validation — stock levels and reservation checks',
    screenshotSrc: '/screenshots/skus.png',
  },
  {
    step: '03',
    title: 'Pickers execute batches',
    detail: 'Teams run single-batch or multi-batch picking waves. Pick lists are sorted by warehouse location to minimize travel. Barcode scanning confirms every item. Tote assignment ensures orders stay separated.',
    screenshotAlt: 'Picking execution — barcode scanning and tote assignment',
    screenshotSrc: '/screenshots/picking-batch.png',
  },
  {
    step: '04',
    title: 'Orders are packed and verified',
    detail: 'Picked orders move to the packing hub. Packers scan totes and verify items against the order. Pack-and-print workflows generate packing slips and labels in one step. Direct-to-packing is available for orders that skip batch picking.',
    screenshotAlt: 'Packing station — scan verification and label printing',
    screenshotSrc: '/screenshots/packing-batch.png',
  },
  {
    step: '05',
    title: 'Labels are printed and shipped',
    detail: 'ShipStation integration compares rates across carriers and generates labels. Labels print directly to your warehouse printer — no pop-ups, no extra clicks. Tracking numbers are captured automatically and synced back to Shopify. Manifests are created for carrier pickup.',
    screenshotAlt: 'Shipping — carrier rates, labels, and manifest generation',
    screenshotSrc: '/screenshots/packing.png',
  },
  {
    step: '06',
    title: 'Dashboard tracks everything',
    detail: 'Real-time WebSocket dashboard shows orders to ship, late orders, holds, picker performance, and hospital stats. Yesterday vs. today comparisons help spot trends. Role-based access ensures the right people see the right data.',
    screenshotAlt: 'Dashboard — real-time stats and performance tracking',
    screenshotSrc: '/screenshots/dashboard.png',
  },
];

const onboardingSteps = [
  {
    step: '1',
    title: 'Connect your store',
    detail: 'Link your Shopify store and ShipStation account. Products, orders, and inventory sync automatically within minutes.',
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
    ),
  },
  {
    step: '2',
    title: 'Configure your warehouse',
    detail: 'Set up locations, zones, and SKU mappings. Import existing inventory via CSV or let Shopify sync handle it. Define totes and barcode formats.',
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    ),
  },
  {
    step: '3',
    title: 'Train your team',
    detail: 'The interface is designed for warehouse teams, not IT. Pickers are productive in under 5 minutes. We provide a free onboarding call for Professional and Enterprise plans.',
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    ),
  },
  {
    step: '4',
    title: 'Go live',
    detail: 'Enable inventory tracking, start picking batches, and ship orders. The real-time dashboard tracks everything from day one. Scale up as your volume grows.',
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-white">
      <PageHeader
        title="How Smart Ship Right works"
        description="From order intake to shipped status — a clear, auditable workflow at every step."
      />

      {/* Process Flow */}
      <Section>
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="space-y-16">
              {processSteps.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={item.step}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                  >
                    <div className={isEven ? '' : 'lg:order-2'}>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                          {item.step}
                        </span>
                        <h3 className="font-display text-2xl font-bold text-slate-900">{item.title}</h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{item.detail}</p>
                    </div>
                    <div className={isEven ? '' : 'lg:order-1'}>
                      <div className="overflow-hidden rounded-xl border border-slate-200 shadow-lg">
                        <Image src={item.screenshotSrc} alt={item.screenshotAlt} width={600} height={400} className="w-full" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Onboarding Steps (SKULabs-style) */}
      <Section alt>
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-slate-900">
              Get started in 4 simple steps
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Onboarding is free. Most teams are live within a day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {onboardingSteps.map((item) => (
              <div key={item.step} className="rounded-xl border border-slate-200 bg-white p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                  {item.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50/50 p-8 md:p-12 text-center">
            <h2 className="font-display text-2xl font-bold text-slate-900">
              Ready to align this process with your warehouse?
            </h2>
            <p className="mt-3 text-slate-600">
              We can map this workflow to your exact SKU profile, team structure, picking strategy, and shipping carriers.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">Book a Demo</Button>
              <Button href="/pricing" variant="outline" size="lg">View Pricing</Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
