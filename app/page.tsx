import { WarehouseSketch, InventorySketch, PickingSketch, DashboardSketch, IntegrationSketch } from '@/components/Sketches';
import { StorysetIllustration } from '@/components/StorysetIllustration';
import { ScreenshotPlaceholder, VideoPlaceholder } from '@/components/ScreenshotPlaceholder';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/60 to-indigo-50/50 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                Warehouse &amp; Contract Management
              </div>
              <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
                Pick, pack &amp; ship with
                <span className="gradient-text"> zero errors</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                Smart Ship Right helps e-commerce teams run inventory, batch picking, packing, and shipping in one platform.
                Integrated with Shopify and ShipStation. Plus built-in contract management for your vendor agreements.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" size="lg">
                  Start Free Trial
                </Button>
                <Button href="/features" variant="outline" size="lg">
                  See All Features
                </Button>
              </div>
              <p className="mt-4 text-sm text-slate-500">No credit card required · Free onboarding call</p>
            </div>

            <div className="relative hidden lg:block">
              <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
                <ScreenshotPlaceholder
                  alt="Smart Ship Right Dashboard — orders, inventory, and picking at a glance"
                  caption="Real-time warehouse dashboard"
                  priority
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-lg">
                <p className="text-2xl font-bold text-blue-600">99.8%</p>
                <p className="text-sm text-slate-500">Order accuracy</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Trusted integrations bar ── */}
      <section className="border-y border-slate-100 bg-slate-50/50 py-8">
        <Container>
          <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-slate-400">
            Integrated with the tools you already use
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {['Shopify', 'ShipStation', 'Stripe', 'PostgreSQL', 'Supabase'].map((name) => (
              <span key={name} className="text-lg font-semibold text-slate-300 transition-colors hover:text-slate-500">
                {name}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Demo Video ── */}
      <Section>
        <Container>
          <div className="mx-auto max-w-4xl text-center mb-10">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              See Smart Ship Right in action
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Watch how teams go from order import to shipped in minutes, not hours.
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <VideoPlaceholder alt="Smart Ship Right product demo — picking, packing, and shipping workflow" />
          </div>
        </Container>
      </Section>

      {/* ── Core Features (iPacky-style alternating) ── */}
      <Section alt>
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need in one WMS
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
              From order intake to delivery confirmation — manage your entire warehouse operation without switching tools.
            </p>
          </div>

          <div className="space-y-20">
            {/* Feature 1 — Inventory */}
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900">Real-time inventory control</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Track stock by SKU and location in real time. Manage reservations, capacity constraints, and multi-location inventory.
                  CSV import for bulk updates and automatic Shopify variance checks keep everything in sync.
                </p>
                <ul className="mt-5 space-y-2">
                  {['Multi-location stock tracking', 'Reserved quantity management', 'Shopify inventory sync', 'CSV bulk import'].map((item) => (
                    <li key={item} className="flex items-center text-sm text-slate-700">
                      <svg className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <ScreenshotPlaceholder alt="Inventory management dashboard showing SKU levels and locations" />
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                  <InventorySketch />
                </div>
              </div>
            </div>

            {/* Feature 2 — Picking (reversed) */}
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div className="order-2 lg:order-1 flex flex-col gap-4">
                <ScreenshotPlaceholder alt="Batch picking interface with SIB and MIB workflows" />
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                  <PickingSketch />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900">Pick with 100% accuracy</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Single-item batch (SIB) and multi-item batch (MIB) picking with location-optimized routes.
                  Barcode scanning validates every pick. Tote assignment prevents mix-ups.
                </p>
                <ul className="mt-5 space-y-2">
                  {['SIB & MIB batch workflows', 'Location-optimized pick lists', 'Barcode scan validation', 'Tote assignment & tracking'].map((item) => (
                    <li key={item} className="flex items-center text-sm text-slate-700">
                      <svg className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 3 — Shipping */}
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                  <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900">Ship faster with ShipStation</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Compare rates across carriers, generate labels, and create manifests — all from Smart Ship Right.
                  Tracking numbers sync back to Shopify automatically so customers stay informed.
                </p>
                <ul className="mt-5 space-y-2">
                  {['Multi-carrier rate comparison', 'One-click label generation', 'Automatic tracking sync', 'Bulk ship & manifests'].map((item) => (
                    <li key={item} className="flex items-center text-sm text-slate-700">
                      <svg className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <ScreenshotPlaceholder alt="Shipping label generation and carrier rate comparison" />
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                  <IntegrationSketch />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Benefits (iPacky-style) ── */}
      <Section>
        <Container>
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What are the benefits?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              One solution for all your warehouse and contract needs. Smart Ship Right puts a stop to fulfillment mistakes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                ),
                title: 'Eliminate packing errors',
                desc: 'Barcode scanning at every step validates items, quantities, and tote assignments. Up to 50% of customers reduce orders after receiving wrong items — never let that happen.',
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                ),
                title: 'Increase picking speed by 40%',
                desc: 'Location-optimized pick lists and batch workflows reduce travel time. SIB and MIB modes let pickers handle more orders per hour with fewer steps.',
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                ),
                title: 'Get started in 5 minutes',
                desc: 'No complex setup or training required. Connect Shopify, import your catalog, and start picking. The interface is designed for warehouse teams, not IT departments.',
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                ),
                title: 'Real-time visibility',
                desc: 'WebSocket-powered dashboard shows orders to ship, late orders, holds, and picker performance. Know exactly where every order stands at any moment.',
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                ),
                title: 'Mobile warehouse app',
                desc: 'Camera barcode scanning, mobile picking, SKU moves, and inventory adjustments — all from a phone or tablet on the warehouse floor.',
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                ),
                title: 'Contract management built in',
                desc: 'AI-powered contract generation, risk analysis, e-signatures, and audit trails. Manage vendor agreements alongside your warehouse operations.',
              },
            ].map((benefit) => (
              <div key={benefit.title} className="card-hover rounded-xl border border-slate-200 bg-white p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50">
                  {benefit.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-900">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Stats ── */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-white lg:py-20">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '10,868', label: 'SKUs Supported' },
              { value: '6,654', label: 'Warehouse Locations' },
              { value: '1,000+', label: 'Orders / Day' },
              { value: '<100ms', label: 'API Response Time' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Product Screenshots Gallery ── */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Built for warehouse teams
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Every screen is designed for speed and clarity on the warehouse floor.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { alt: 'Dashboard — orders to ship, late orders, and real-time stats', caption: 'Dashboard' },
              { alt: 'Picking batches — SIB and MIB batch management', caption: 'Batch Picking' },
              { alt: 'Packing station — scan, verify, and pack orders', caption: 'Packing Hub' },
              { alt: 'Shipping — labels, rates, and carrier selection', caption: 'Shipping' },
              { alt: 'Inventory — SKU levels across all locations', caption: 'Inventory' },
              { alt: 'Mobile app — barcode scanning on the warehouse floor', caption: 'Mobile App' },
            ].map((item) => (
              <ScreenshotPlaceholder
                key={item.caption}
                alt={item.alt}
                caption={item.caption}
                aspect="aspect-[4/3]"
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Testimonials ── */}
      <Section alt>
        <Container>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">Testimonials</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Trusted by warehouse teams
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote: 'Smart Ship Right cut our packing errors to nearly zero. The barcode validation on every pick means we ship the right items every time. Our return rate dropped by 60%.',
                name: 'Operations Manager',
                company: 'E-commerce Retailer',
              },
              {
                quote: 'The SIB and MIB picking workflows are a game changer. Our pickers handle 40% more orders per shift, and the location-optimized routes mean less walking and more shipping.',
                name: 'Warehouse Supervisor',
                company: 'Multi-channel Brand',
              },
              {
                quote: 'Having contract management built into the same platform we use for warehouse ops saves us from juggling multiple tools. The AI contract review catches things we would miss.',
                name: 'Director of Operations',
                company: 'DTC Brand',
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="testimonial-card rounded-xl border border-slate-200 bg-white p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-semibold text-slate-900 text-sm">{testimonial.name}</p>
                  <p className="text-slate-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── How It Works (SKULabs-style steps) ── */}
      <Section>
        <Container>
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Get started in 4 simple steps
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Connect your store', desc: 'Link Shopify and ShipStation. Products, orders, and inventory sync automatically.' },
              { step: '02', title: 'Set up your warehouse', desc: 'Define locations, zones, and SKU mappings. Import inventory via CSV or Shopify sync.' },
              { step: '03', title: 'Train your team', desc: 'Intuitive interface means pickers are productive in under 5 minutes. No IT required.' },
              { step: '04', title: 'Go live', desc: 'Start picking, packing, and shipping. Real-time dashboard tracks everything from day one.' },
            ].map((item) => (
              <div key={item.step} className="relative rounded-xl border border-slate-200 bg-white p-6">
                <span className="text-4xl font-bold text-blue-100">{item.step}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/how-it-works" variant="outline" size="lg">
              Learn more about the process
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── Pricing Preview ── */}
      <Section alt>
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              No contracts, no onboarding fees. Start free and scale as you grow.
            </p>
            <div className="mt-8">
              <Button href="/pricing" size="lg">
                View Pricing Plans
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Final CTA ── */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to ship with confidence?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Join warehouse teams using Smart Ship Right to eliminate errors, speed up fulfillment, and keep customers happy.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-blue-700 transition-colors hover:bg-blue-50"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
