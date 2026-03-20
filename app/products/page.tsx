import { IntegrationSketch, WarehouseSketch, DashboardSketch } from '@/components/Sketches';
import { StorysetIllustration } from '@/components/StorysetIllustration';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | Smart Ship Right WMS',
  description:
    'Explore Smart Ship Right products: FastAPI backend, Next.js web frontend, and Expo mobile app for warehouse floor operations.',
};

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <PageHeader
        title="Complete warehouse management solution"
        description="A production-focused FastAPI backend, Next.js web frontend, and Expo mobile app for inventory, picking, packing, and shipping operations."
      />

      {/* Products */}
      <Section>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Backend Product */}
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6">
                <h2 className="font-display text-3xl font-bold text-white mb-2">FastAPI Backend</h2>
                <p className="text-green-50">Robust REST API for warehouse operations</p>
              </div>
              <div className="p-8">
                <div className="mb-6 flex flex-col gap-4">
                  <StorysetIllustration name="integration" className="max-h-40" />
                  <IntegrationSketch />
                </div>
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Core Technologies</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        FastAPI (Python 3.8+)
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        PostgreSQL 12+ / SQLite
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        SQLAlchemy 2.0 ORM
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        JWT Authentication
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        WebSocket Support
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Key Features</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>• RESTful API with OpenAPI docs</li>
                      <li>• Real-time WebSocket updates</li>
                      <li>• Role-based access control</li>
                      <li>• Comprehensive error handling</li>
                      <li>• Database migration support</li>
                      <li>• Health check endpoints</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">API Capabilities</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Inventory, orders, picking (SIB/MIB), packing, shipping</li>
                      <li>• Warehouse (locations, zones, SKUs, totes, map, analytics)</li>
                      <li>• Purchase orders, receiving, vendors</li>
                      <li>• Hospital (quarantine), automation rules</li>
                      <li>• Shopify and ShipStation (labels, manifests, shipping methods)</li>
                      <li>• Dashboard, history, notes, permissions, CSV import, alerts</li>
                    </ul>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-sm text-slate-600">
                    <strong>Performance:</strong> Handles 1,000+ orders/day, 50+ concurrent pickers, 
                    &lt;100ms average API response time
                  </p>
                </div>
              </div>
            </div>

            {/* Frontend Product */}
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
                <h2 className="font-display text-3xl font-bold text-white mb-2">Next.js Frontend</h2>
                <p className="text-blue-50">Modern, responsive web application</p>
              </div>
              <div className="p-8">
                <div className="mb-6 flex flex-col gap-4">
                  <StorysetIllustration name="dashboard" className="max-h-40" />
                  <DashboardSketch />
                </div>
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Core Technologies</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Next.js (App Router)
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        TypeScript
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Tailwind CSS
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        React 18
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        WebSocket Client
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Key Features</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Real-time updates via WebSocket</li>
                      <li>• Camera barcode scanner and barcode pages</li>
                      <li>• Responsive design (tablet-optimized)</li>
                      <li>• Role-based UI and permissions</li>
                      <li>• Type-safe API integration</li>
                      <li>• Packing hub, shipping, manifests, boxes</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Pages & Modules</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Dashboard, orders, picking (SIB/MIB), packing, shipping</li>
                      <li>• Warehouse (locations, SKUs, totes, hospital, map, analytics)</li>
                      <li>• Inventory, purchase orders, receiving, products, vendors</li>
                      <li>• Automation rules, alerts, settings, users</li>
                    </ul>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-sm text-slate-600">
                    <strong>Performance:</strong> Supports 1000+ items per table, &lt;1s real-time latency, 
                    5 concurrent WebSocket connections
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Overview */}
          <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-8">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-6 text-center">System Architecture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="mb-4 flex flex-col items-center gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <StorysetIllustration name="warehouse" className="max-h-36" />
                  <WarehouseSketch />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Backend API</h3>
                <p className="text-sm text-slate-600">
                  FastAPI REST endpoints with WebSocket support for real-time communication
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex flex-col items-center gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <StorysetIllustration name="integration" className="max-h-36" />
                  <IntegrationSketch />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Database</h3>
                <p className="text-sm text-slate-600">
                  PostgreSQL with SQLAlchemy ORM for reliable data persistence
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex flex-col items-center gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <StorysetIllustration name="dashboard" className="max-h-36" />
                  <DashboardSketch />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Frontend</h3>
                <p className="text-sm text-slate-600">
                  Next.js application with TypeScript for type-safe development
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Button href="/contact" size="lg">Talk to the team</Button>
          </div>

          <div className="mt-12 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-gradient-to-r from-purple-500 to-violet-600 p-6">
              <h2 className="font-display text-3xl font-bold text-white mb-2">Expo Mobile App</h2>
              <p className="text-purple-50">Operational workflows on the warehouse floor</p>
            </div>
            <div className="grid grid-cols-1 gap-8 p-8 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900">Confirmed Mobile Capabilities</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Authenticated app flow with persisted token/session</li>
                  <li>• On-device API URL configuration and settings-based changes</li>
                  <li>• Camera barcode scanner with reusable scan screen</li>
                  <li>• Mobile picking: create/select batch, scan item, skip order, complete</li>
                  <li>• Move SKU flow (SKU, source, destination, quantity)</li>
                  <li>• Inventory adjustment with reason and sync feedback</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900">Cross-Platform Alignment</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Same backend APIs power web and mobile operations</li>
                  <li>• Shared workflows for picking, inventory moves, and adjustments</li>
                  <li>• Role-based authentication and bearer token access</li>
                </ul>
                <div className="rounded-lg bg-slate-50 p-4 text-sm text-slate-600">
                  <strong>Note:</strong> current mobile implementation is camera-based scanning. Offline sync and push
                  notifications are not advertised because they are not currently implemented.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

