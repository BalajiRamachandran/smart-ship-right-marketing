import { WarehouseSketch, InventorySketch, PickingSketch, DashboardSketch } from '@/components/Sketches';
import { StorysetIllustration } from '@/components/StorysetIllustration';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/70 to-indigo-50/70 py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Order-to-delivery execution
              </p>
              <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Smart Ship Right for
                <span className="text-blue-600"> fast warehouse flow</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                Run inventory, orders, SIB/MIB picking, packing, and shipping in one platform. Connected with Shopify,
                ShipStation, and real-time warehouse workflows across web and mobile.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact" size="lg">
                  Get Started
                </Button>
                <Button href="/features" variant="outline" size="lg">
                  Learn More
                </Button>
                <Button href="/mobile" variant="outline" size="lg">
                  Mobile App
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:flex flex-col gap-6">
              <StorysetIllustration name="hero" priority className="rounded-xl" />
              <div className="rounded-xl border border-slate-200/80 bg-white/80 p-4 shadow-lg">
                <WarehouseSketch />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Overview */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything You Need to Manage Your Warehouse
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
              Inventory, orders, SIB/MIB picking, packing and shipping, Shopify and ShipStation integration, purchase
              orders and receiving, hospital, automation rules, and mobile warehouse operations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="card-hover rounded-xl border border-slate-200 bg-white p-6">
              <div className="mb-5 flex flex-col gap-4">
                <StorysetIllustration name="inventory" className="max-h-36" />
                <InventorySketch />
              </div>
              <h3 className="font-display text-xl font-semibold text-slate-900">Inventory Management</h3>
              <p className="mt-2 text-slate-600">
                Real-time inventory by SKU and location, reservations, CSV import, and Shopify variance checks.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card-hover rounded-xl border border-slate-200 bg-white p-6">
              <div className="mb-5 flex flex-col gap-4">
                <StorysetIllustration name="picking" className="max-h-36" />
                <PickingSketch />
              </div>
              <h3 className="font-display text-xl font-semibold text-slate-900">Smart Picking</h3>
              <p className="mt-2 text-slate-600">
                Single-item (SIB) and multi-item (MIB) batch picking with tote scan, location-optimized pick lists, and barcode validation.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card-hover rounded-xl border border-slate-200 bg-white p-6">
              <div className="mb-5 flex flex-col gap-4">
                <StorysetIllustration name="dashboard" className="max-h-36" />
                <DashboardSketch />
              </div>
              <h3 className="font-display text-xl font-semibold text-slate-900">Real-time Dashboard</h3>
              <p className="mt-2 text-slate-600">
                Dashboard with orders to ship, late orders, holds, POs, hospital stats, and real-time WebSocket updates.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section alt>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ['Inventory & Orders', 'Real-time stock, reservations, holds, and order lifecycle control.'],
            ['Picking & Packing', 'SIB/MIB picking, tote scans, direct-to-packing, and pack-and-print.'],
            ['Shipping & Carriers', 'ShipStation labels, manifests, shipping methods, and tracking sync.'],
            ['Mobile App', 'Camera barcode scanning, mobile picking, move SKU, and inventory adjustment flows.'],
          ].map(([title, desc]) => (
            <article key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-display text-base font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <section className="bg-blue-600 py-16 text-white lg:py-20">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10,868</div>
              <div className="text-blue-100">SKUs Supported</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">6,654</div>
              <div className="text-blue-100">Warehouse Locations</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">290+</div>
              <div className="text-blue-100">Orders Processed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">195K+</div>
              <div className="text-blue-100">Inventory Units</div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <Section alt>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Ready to Transform Your Warehouse?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Join forward-thinking companies using Smart Ship Right to streamline their operations
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
            Get Started Today
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
