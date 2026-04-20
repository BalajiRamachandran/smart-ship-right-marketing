import { InventorySketch, PickingSketch, IntegrationSketch } from '@/components/Sketches';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import HeroCarousel from '@/components/HeroCarousel';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/60 to-indigo-50/50 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <Container>
          <div className="text-center mb-12 lg:mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Warehouse Management for Shopify
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              Pick, pack &amp; ship with
              <span className="gradient-text"> zero errors</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Smart Ship Right is the warehouse management system built for Shopify merchants
              who&apos;ve outgrown spreadsheets but don&apos;t need enterprise complexity. Real-time inventory,
              batch picking, shipping labels, and automation — all synced with your store.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row justify-center">
              <Button href="/contact" size="lg">
                Start Free Trial
              </Button>
              <Button href="/features" variant="outline" size="lg">
                See All Features
              </Button>
            </div>
            <p className="mt-4 text-sm text-slate-500">No credit card required · Free onboarding call</p>

            {/* Feature badges */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {[
                { icon: <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>, label: 'Shopify Sync' },
                { icon: <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>, label: 'Batch Picking' },
                { icon: <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>, label: 'Barcode Scanning' },
                { icon: <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>, label: 'Shipping Labels' },
                { icon: <svg className="w-4 h-4 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, label: 'Automation Rules' },
                { icon: <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>, label: 'Direct-to-Printer' },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-2 rounded-full bg-white/80 border border-slate-200 px-3 py-1.5 text-xs text-slate-700 shadow-sm">
                  {f.icon}
                  <span className="font-medium">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full-width carousel */}
          <div className="mx-auto max-w-5xl">
            <HeroCarousel />
          </div>
        </Container>
      </section>

      {/* ── Integration bar ── */}
      <section className="border-y border-slate-100 bg-slate-50/50 py-8">
        <Container>
          <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-slate-500">
            Integrated with the tools you already use
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {['Shopify', 'ShipStation', 'USPS', 'UPS', 'FedEx', 'Google Cloud'].map((name) => (
              <span key={name} className="text-lg font-semibold text-slate-400 transition-colors hover:text-slate-600">
                {name}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Core Features (alternating with real screenshots) ── */}
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
                  CSV import for bulk updates, automatic Shopify variance checks, and granular per-action sync controls keep everything accurate.
                </p>
                <ul className="mt-5 space-y-2">
                  {['Multi-location stock tracking', 'Reserved quantity management', 'Backorder detection & tracking', 'Shopify sync with per-action toggles', 'CSV bulk import & reconciliation'].map((item) => (
                    <li key={item} className="flex items-center text-sm text-slate-700">
                      <svg className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <div className="overflow-hidden rounded-xl border border-slate-200 shadow-lg">
                  <Image src="/screenshots/skus.png" alt="SKU inventory list with stock levels, locations, and category filters" width={800} height={500} className="w-full" />
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                  <InventorySketch />
                </div>
              </div>
            </div>

            {/* Feature 2 — Picking (reversed) */}
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div className="order-2 lg:order-1 flex flex-col gap-4">
                <div className="overflow-hidden rounded-xl border border-slate-200 shadow-lg">
                  <Image src="/screenshots/picking-batch.png" alt="Active picking batch showing items to pick, scan status, and tote assignment" width={800} height={500} className="w-full" />
                </div>
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
                  Single-batch and multi-batch picking with location-optimized routes.
                  Barcode scanning validates every pick. Tote assignment prevents mix-ups. Flag problem locations to hospital directly from the picking flow.
                </p>
                <ul className="mt-5 space-y-2">
                  {['Single & multi batch workflows', 'Location-optimized pick lists', 'Barcode scan validation', 'Tote assignment & tracking', 'Hospital flag from picking flow'].map((item) => (
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
                  Compare rates across carriers, generate labels, print packing slips (PDF/HTML, Letter/A4/Thermal), and create EOD manifests — all from Smart Ship Right.
                  Tracking numbers sync back to Shopify automatically so customers stay informed.
                </p>
                <ul className="mt-5 space-y-2">
                  {['Multi-carrier rate comparison', 'One-click label generation', 'Packing slips (PDF, HTML, Thermal)', 'Direct-to-printer — Zebra, DYMO, thermal (no browser dialogs)', 'EOD manifests & SCAN forms', 'Automatic tracking sync to Shopify'].map((item) => (
                    <li key={item} className="flex items-center text-sm text-slate-700">
                      <svg className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <div className="overflow-hidden rounded-xl border border-slate-200 shadow-lg">
                  <Image src="/screenshots/packing-batch.png" alt="Packing batch with order verification, item scanning, and label generation" width={800} height={500} className="w-full" />
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                  <IntegrationSketch />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Benefits ── */}
      <Section>
        <Container>
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What are the benefits?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              One solution for all your warehouse needs. Smart Ship Right puts a stop to fulfillment mistakes.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: 'Eliminate packing errors', desc: 'Barcode scanning validates every pick. Labels auto-print to your thermal printer the moment they\'re created — no pop-ups, no extra clicks.' },
              { icon: <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, title: 'Pick 40% faster', desc: 'Location-optimized pick lists and batch workflows reduce travel time. Handle more orders per hour with fewer steps.' },
              { icon: <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Set up in under 5 minutes', desc: 'Connect Shopify, import your catalog, and start picking. Designed for warehouse teams, not IT departments.' },
              { icon: <svg className="w-7 h-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>, title: 'Real-time visibility', desc: 'Live dashboard shows orders to ship, late orders, holds, and picker performance. Know where every order stands.' },
              { icon: <svg className="w-7 h-7 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>, title: 'Backorder tracking', desc: 'Automatically detect when reserved stock exceeds on-hand. Backordered SKUs are flagged and excluded from picking.' },
              { icon: <svg className="w-7 h-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>, title: '24/7 Shopify sync', desc: 'Orders, products, inventory, and fulfillment stay in sync around the clock. Changes in either direction update instantly.' },
            ].map((b) => (
              <div key={b.title} className="card-hover rounded-xl border border-slate-200 bg-white p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50">{b.icon}</div>
                <h3 className="font-display text-lg font-semibold text-slate-900">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.desc}</p>
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
              { value: '99.8%', label: 'Order Accuracy' },
              { value: '40%', label: 'Faster Picking' },
              { value: '< 5 min', label: 'Setup Time' },
              { value: '24/7', label: 'Shopify Sync' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
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
              { src: '/screenshots/dashboard.png', alt: 'Smart Ship Right dashboard showing orders to ship, inventory stats, and real-time metrics', caption: 'Dashboard' },
              { src: '/screenshots/picking-batch.png', alt: 'Active picking batch showing items to pick, scan status, and tote assignment', caption: 'Batch Picking' },
              { src: '/screenshots/packing-batch.png', alt: 'Packing batch with order verification, item scanning, and label generation', caption: 'Packing' },
              { src: '/screenshots/orders.png', alt: 'Order management list with status filters, search, and bulk actions', caption: 'Orders' },
              { src: '/screenshots/skus.png', alt: 'SKU inventory list with stock levels, locations, and category filters', caption: 'Inventory' },
              { src: '/screenshots/warehouse-map.png', alt: '3D warehouse map visualization with zones, aisles, and shelves', caption: 'Warehouse Map' },
            ].map((item) => (
              <figure key={item.caption}>
                <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm transition-shadow hover:shadow-lg">
                  <Image src={item.src} alt={item.alt} width={600} height={400} className="w-full" />
                </div>
                <figcaption className="mt-3 text-center text-sm text-slate-500">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Trusted By (replaces fake testimonials) ── */}
      <Section alt>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-4">In Production</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Powering real warehouse operations
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Smart Ship Right is used in production by Shopify merchants managing thousands of SKUs
              and hundreds of orders daily. The system handles the full lifecycle from order import
              through picking, packing, and shipment.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-slate-200 bg-white p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">200+</div>
                <div className="text-sm text-slate-600">API endpoints in production</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">50+</div>
                <div className="text-sm text-slate-600">Pages and workflows</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">15+</div>
                <div className="text-sm text-slate-600">Shopify webhooks syncing</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── How It Works ── */}
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
              <Button href="/pricing" size="lg">View Pricing Plans</Button>
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
              <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-blue-700 transition-colors hover:bg-blue-50">
                Start Free Trial
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-lg border border-white/30 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10">
                Book a Demo
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
