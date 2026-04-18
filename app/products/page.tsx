import { IntegrationSketch, DashboardSketch } from '@/components/Sketches';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | Smart Ship Right',
  description:
    'Explore Smart Ship Right products: WMS backend, web frontend, and mobile-ready web app.',
};

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <PageHeader
        title="The Smart Ship Right platform"
        description="A complete warehouse management system with a FastAPI backend, Next.js web app, and mobile-ready responsive interface."
      />

      {/* Product Cards */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* WMS Backend */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6">
                <h2 className="font-display text-2xl font-bold text-white">WMS Backend</h2>
                <p className="mt-1 text-emerald-50">FastAPI · PostgreSQL · WebSocket</p>
              </div>
              <div className="p-6">
                <div className="overflow-hidden rounded-xl mb-6"><Image src="/screenshots/settings.png" alt="Backend API — endpoints and configuration" width={800} height={500} className="w-full" /></div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Core stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {['FastAPI', 'Python 3.11', 'PostgreSQL (Neon)', 'SQLAlchemy 2.0', 'JWT Auth', 'WebSocket'].map((tech) => (
                        <span key={tech} className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 border border-emerald-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">API coverage</h3>
                    <ul className="grid grid-cols-2 gap-1 text-sm text-slate-600">
                      {[
                        'Inventory & locations',
                        'Orders & fulfillment',
                        'Picking (single/multi)',
                        'Packing & shipping',
                        'Direct-to-printer labels',
                        'Purchase orders',
                        'Warehouse analytics',
                        'Hospital & quarantine',
                        'Automation rules',
                        'Dropship support',
                        'Inventory reservations',
                        'Backorder tracking',
                        'Shopify sync controls',
                      ].map((item) => (
                        <li key={item} className="flex items-center">
                          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-4 text-sm text-slate-600">
                    <strong>Scale:</strong> Handles 1,000+ orders/day with &lt;100ms API response times across 200+ endpoints.
                  </div>
                </div>
              </div>
            </div>

            {/* Web Frontend */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
                <h2 className="font-display text-2xl font-bold text-white">Web Frontend</h2>
                <p className="mt-1 text-blue-50">Next.js · TypeScript · Tailwind CSS</p>
              </div>
              <div className="p-6">
                <div className="overflow-hidden rounded-xl mb-6"><Image src="/screenshots/dashboard.png" alt="Web frontend — dashboard, picking, packing, and shipping" width={800} height={500} className="w-full" /></div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Core stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'WebSocket Client', 'Recharts'].map((tech) => (
                        <span key={tech} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 border border-blue-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Pages & modules</h3>
                    <ul className="grid grid-cols-2 gap-1 text-sm text-slate-600">
                      {[
                        'Dashboard & analytics',
                        'Orders & order detail',
                        'Picking batches',
                        'Packing hub',
                        'Shipping & labels',
                        'Direct-to-printer setup',
                        'Inventory management',
                        'Warehouse map & locations',
                        'Purchase orders & receiving',
                        'Automation rules',
                        'Sync log & settings',
                        'CSV export on all tables',
                        'In-app help center',
                      ].map((item) => (
                        <li key={item} className="flex items-center">
                          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-4 text-sm text-slate-600">
                    <strong>Scale:</strong> 50+ pages with real-time WebSocket updates and responsive design for tablet and mobile.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile App */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm mb-16">
            <div className="bg-gradient-to-r from-purple-500 to-violet-600 p-6">
              <h2 className="font-display text-2xl font-bold text-white">Mobile-Ready Web App</h2>
              <p className="mt-1 text-purple-50">Responsive · Camera Barcode Scanning · Works on Any Device</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
              <div>
                <div className="overflow-hidden rounded-xl"><Image src="/screenshots/picking.png" alt="Responsive web app — picking and scanning on tablet" width={800} height={500} className="w-full" /></div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900">Mobile capabilities (web-based)</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  {[
                    'Responsive web app works on tablets and phones',
                    'Camera barcode scanning (Code128 & QR) via browser',
                    'Batch picking with tote and item scan on mobile',
                    'Inventory adjustments with reason codes',
                    'Barcode pages for locations, totes, and SKUs',
                    'Bluetooth barcode scanner support',
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <svg className="mr-2 mt-0.5 h-4 w-4 text-purple-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="rounded-lg bg-slate-50 p-4 text-sm text-slate-600">
                  <strong>Note:</strong> The web app is fully responsive and works on mobile browsers today. A dedicated native Expo mobile app with offline support is on the roadmap.
                </div>
              </div>
            </div>
          </div>

          {/* Architecture */}
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50/30 p-8">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-8 text-center">System architecture</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: 'Frontend', desc: 'Next.js web app with TypeScript and real-time WebSocket updates', color: 'blue' },
                { title: 'Backend API', desc: 'FastAPI REST endpoints with WebSocket support and JWT auth', color: 'emerald' },
                { title: 'Database', desc: 'PostgreSQL with SQLAlchemy ORM for reliable data persistence', color: 'purple' },
                { title: 'Integrations', desc: 'Shopify (OAuth + 15 webhooks), ShipStation, Google Cloud (Cloud Run, Tasks, Storage)', color: 'amber' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 text-center">
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button href="/contact" size="lg">Talk to the team</Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
