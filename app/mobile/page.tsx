import { StorysetIllustration } from '@/components/StorysetIllustration';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile App | Smart Ship Right',
  description:
    'Smart Ship Right mobile app: camera barcode scanning, mobile picking flows, move SKU operations, and inventory adjustment workflows.',
};

export default function MobilePage() {
  const roles = [
    {
      title: 'Picker',
      items: [
        'Create/select picking batches on mobile',
        'Assign totes, scan items, and track progress',
        'Skip blocked orders and complete batches',
      ],
    },
    {
      title: 'Inventory Control',
      items: [
        'Move SKU between locations with guided flow',
        'Adjust inventory with reason codes',
        'Use camera barcode scanning in each step',
      ],
    },
    {
      title: 'Supervisor',
      items: [
        'Configure API endpoint on-device',
        'Manage session/login on shared devices',
        'Coordinate mobile workflows with web dashboard',
      ],
    },
  ];

  return (
    <div className="bg-white">
      <PageHeader
        title="Mobile operations app"
        description="Take Smart Ship Right to the warehouse floor with authenticated mobile workflows for scanning, picking, SKU movement, and inventory adjustments."
      />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-slate-900">Confirmed mobile capabilities</h2>
            <ul className="mt-6 space-y-3 text-slate-700">
              {[
                'Auth-gated app flow with persisted session/token',
                'On-device API URL setup and settings-based endpoint changes',
                'Camera barcode scanner with reusable scan screen',
                'Mobile batch picking execution with tote and item scan',
                'Move SKU workflow (SKU, source, destination, quantity)',
                'Inventory adjustment with reason and sync feedback',
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <StorysetIllustration name="dashboard" className="max-h-72" />
            <StorysetIllustration name="picking" className="max-h-72" />
          </div>
        </div>
      </Section>

      <Section alt>
        <h2 className="font-display text-center text-3xl font-bold text-slate-900">Role-based workflows</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {roles.map((role) => (
            <article key={role.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-display text-xl font-semibold text-slate-900">{role.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {role.items.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
          <h2 className="font-display text-2xl font-bold text-slate-900">Implementation notes</h2>
          <p className="mt-3 text-slate-600">
            Current mobile implementation is camera-based scanning. Offline sync and push notifications are not
            advertised because they are not currently implemented.
          </p>
          <div className="mt-6">
            <Button href="/contact" size="lg">
              Discuss mobile rollout
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
