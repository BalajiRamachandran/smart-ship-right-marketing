import { ScreenshotPlaceholder } from '@/components/ScreenshotPlaceholder';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile App | Smart Ship Right',
  description:
    'Smart Ship Right mobile app: camera barcode scanning, mobile picking, move SKU, and inventory adjustment workflows for the warehouse floor.',
};

const workflows = [
  {
    title: 'Batch Picking',
    description: 'Create or select picking batches, assign totes, scan items, skip blocked orders, and complete batches — all from your phone.',
    screenshotAlt: 'Mobile batch picking — tote assignment and item scanning',
    steps: [
      'Select or create a picking batch',
      'Assign tote via barcode scan',
      'Navigate to location and scan item',
      'Confirm quantity and move to next',
      'Skip blocked orders if needed',
      'Complete batch and release to packing',
    ],
  },
  {
    title: 'Move SKU',
    description: 'Move inventory between locations with a guided flow. Scan source, destination, and quantity — the system handles the rest.',
    screenshotAlt: 'Move SKU workflow — source, destination, and quantity',
    steps: [
      'Scan or search for the SKU',
      'Scan the source location',
      'Scan the destination location',
      'Enter quantity to move',
      'Confirm and submit',
    ],
  },
  {
    title: 'Inventory Adjustment',
    description: 'Adjust inventory counts with reason codes. Changes sync to the backend and optionally to Shopify.',
    screenshotAlt: 'Inventory adjustment — reason codes and sync feedback',
    steps: [
      'Scan or search for the SKU',
      'Enter new quantity',
      'Select reason code',
      'Submit adjustment',
      'View sync confirmation',
    ],
  },
];

const roles = [
  {
    title: 'Picker',
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
    ),
    items: [
      'Create and select picking batches',
      'Assign totes and scan items',
      'Track progress through the batch',
    ],
  },
  {
    title: 'Inventory Control',
    icon: (
      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
    ),
    items: [
      'Move SKU between locations',
      'Adjust inventory with reason codes',
      'Camera barcode scanning at every step',
    ],
  },
  {
    title: 'Supervisor',
    icon: (
      <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
    items: [
      'Configure API endpoint on-device',
      'Manage sessions on shared devices',
      'Coordinate with web dashboard',
    ],
  },
];

export default function MobilePage() {
  return (
    <div className="bg-white">
      <PageHeader
        title="Mobile warehouse app"
        description="Take Smart Ship Right to the warehouse floor. The web app works on mobile browsers with camera barcode scanning. A dedicated native mobile app is on the roadmap."
      />

      {/* Hero capabilities */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-slate-900 mb-6">Built for the floor</h2>
            <p className="text-slate-600 mb-4">
              The Smart Ship Right web frontend is responsive and works on tablets and phones. Camera barcode scanning is built into the web app for picking, inventory, and receiving workflows.
            </p>
            <ul className="space-y-4">
                {[
                  'Camera barcode scanning (Code128 & QR) via web browser',
                  'Responsive web app works on tablets and phones',
                  'Batch picking with tote and item scan',
                  'Inventory adjustments with reason codes',
                  'Barcode pages for locations and totes',
                  'Dedicated native Expo mobile app on the roadmap',
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <svg className="mr-3 mt-0.5 h-5 w-5 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ScreenshotPlaceholder alt="Mobile app — picking screen" aspect="aspect-[9/16]" />
              <ScreenshotPlaceholder alt="Mobile app — barcode scanner" aspect="aspect-[9/16]" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Workflows */}
      <Section alt>
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-slate-900">Mobile workflows</h2>
            <p className="mt-4 text-lg text-slate-600">
              Three core workflows designed for speed and accuracy on the warehouse floor.
            </p>
          </div>
          <div className="space-y-16">
            {workflows.map((workflow, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={workflow.title} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">{workflow.title}</h3>
                    <p className="text-slate-600 mb-5 leading-relaxed">{workflow.description}</p>
                    <ol className="space-y-2">
                      {workflow.steps.map((step, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <span className="mr-3 mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                            {i + 1}
                          </span>
                          <span className="text-slate-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <ScreenshotPlaceholder alt={workflow.screenshotAlt} aspect="aspect-[4/3]" />
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Role-based workflows */}
      <Section>
        <Container>
          <h2 className="font-display text-center text-3xl font-bold text-slate-900 mb-10">Role-based workflows</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roles.map((role) => (
              <div key={role.title} className="card-hover rounded-xl border border-slate-200 bg-white p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50">
                  {role.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-3">{role.title}</h3>
                <ul className="space-y-2">
                  {role.items.map((item) => (
                    <li key={item} className="flex items-start text-sm text-slate-600">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section alt>
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <h2 className="font-display text-2xl font-bold text-slate-900">Ready to go mobile?</h2>
            <p className="mt-3 text-slate-600">
              The responsive web app with camera barcode scanning works on any device today. A dedicated native mobile app with offline support is on the roadmap.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">Start Free Trial</Button>
              <Button href="/pricing" variant="outline" size="lg">View Pricing</Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
