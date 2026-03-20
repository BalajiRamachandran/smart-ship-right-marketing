import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works | Smart Ship Right',
  description:
    'Business process flow for Smart Ship Right from order intake to picking, packing, shipping, and reporting.',
};

const flowSteps = [
  {
    title: 'Order intake',
    detail: 'Orders sync from connected channels and enter a controlled processing queue.',
  },
  {
    title: 'Inventory allocation',
    detail: 'Available stock is validated by SKU and location before releasing work to the floor.',
  },
  {
    title: 'Picking execution',
    detail: 'Teams run SIB or MIB waves with barcode confirmation and tote-based handling.',
  },
  {
    title: 'Packing and QA',
    detail: 'Picked orders move to pack stations for final verification, boxing, and label readiness.',
  },
  {
    title: 'Shipping and manifest',
    detail: 'Rates, labels, carrier services, and manifests are generated through shipping integrations.',
  },
  {
    title: 'Tracking and analytics',
    detail: 'Shipment updates sync back to channels while dashboards track throughput and bottlenecks.',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-white">
      <PageHeader
        title="How Smart Ship Right works"
        description="A business-first process flow from order intake to shipped status, with operational visibility at each step."
      />

      <Section>
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-center text-3xl font-bold text-slate-900">Process flow</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
            This flow shows how warehouse and operations teams move work through Smart Ship Right in a consistent,
            auditable lifecycle.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {flowSteps.map((step, index) => (
              <article key={step.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-slate-900">{step.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <h2 className="font-display text-2xl font-bold text-slate-900">Align process with your warehouse setup</h2>
          <p className="mt-3 text-slate-600">
            We can map this flow to your exact SKU profile, team structure, picking strategy, and shipping carriers.
          </p>
          <div className="mt-6">
            <Button href="/contact" size="lg">
              Discuss your process
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
