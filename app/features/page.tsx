import { WarehouseSketch, InventorySketch, PickingSketch, OrderSketch, DashboardSketch, IntegrationSketch } from '@/components/Sketches';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features | Smart Ship Right WMS',
  description:
    'Comprehensive features for modern warehouse management: inventory, orders, single and multi batch picking, packing, shipping, Shopify and ShipStation integration, mobile app, and contract management.',
};

const features = [
  {
    title: 'Inventory Management',
    description: 'Real-time tracking with location-based storage. Multi-location inventory support with reserved quantity management and automatic capacity constraint validation.',
    Sketch: InventorySketch,
    screenshotSrc: '/screenshots/skus.png',
    screenshotAlt: 'Inventory management — SKU levels, locations, and stock movements',
    details: [
      'Real-time inventory tracking by SKU and location',
      'Multi-location inventory with reserved quantity management',
      'Capacity and utilization tracking per location',
      'Stock movement audit trail and history',
      'CSV import for bulk updates',
      'Inventory variance checks with Shopify',
    ],
  },
  {
    title: 'Order Processing',
    description: 'Complete order lifecycle management from import to fulfillment. Support for priority handling, hold management, and real-time status updates via WebSocket.',
    Sketch: OrderSketch,
    screenshotSrc: '/screenshots/orders.png',
    screenshotAlt: 'Order processing — lifecycle from import to shipped',
    details: [
      'Complete order lifecycle from import to shipped',
      'Status tracking with holds (payment, fraud, review, address, operator)',
      'Reserve and unreserve inventory per order',
      'Shopify order import and fulfillment sync',
      'Order filtering, search, and dashboard stats',
      'Real-time updates via WebSocket',
    ],
  },
  {
    title: 'Single & Multi Batch Picking',
    description: 'Single-batch and multi-batch picking with location-optimized routes, barcode scanning validation, and tote assignment. Designed for maximum picker efficiency.',
    Sketch: PickingSketch,
    screenshotSrc: '/screenshots/picking.png',
    screenshotAlt: 'Batch picking — single and multi batch workflows with barcode validation',
    details: [
      'Single-batch workflow for high-volume single-SKU orders',
      'Multi-batch workflow for complex multi-SKU orders',
      'Location-optimized pick lists (Zone → X → Level)',
      'Barcode scanning validation at every pick',
      'Tote assignment and tracking',
      'Batch reservation system prevents overselling',
    ],
    expanded: {
      singleBatch: {
        title: 'Single Batch Picking',
        steps: [
          'System groups pending orders with the same SKU into a batch',
          'Pick list sorted by warehouse location to minimize travel',
          'Picker scans barcode at each location to validate item and quantity',
          'Each order assigned to a specific tote — scan tote before placing items',
          'On completion, inventory updates in real time and orders move to packing',
        ],
      },
      multiBatch: {
        title: 'Multi Batch Picking',
        steps: [
          'System analyzes order characteristics and groups compatible orders',
          'Consolidated pick list shows all items for all orders in the batch',
          'Picker follows optimized route, scanning each location and item',
          'Items sorted into correct totes based on order assignment',
          'Quality validation before batch completion — missing items trigger alerts',
        ],
      },
    },
  },
  {
    title: 'Packing & Shipping',
    description: 'Packing hub with batch and order-based flows. Scan totes, verify items, print labels and packing slips. ShipStation powers labels, rate shopping, carriers, and manifests.',
    Sketch: IntegrationSketch,
    screenshotSrc: '/screenshots/packing.png',
    screenshotAlt: 'Packing and shipping — label generation and carrier selection',
    details: [
      'Packing hub by batch or by order',
      'Direct-to-packing (skip picking batch)',
      'Scan tote and SKU for verification',
      'Pack and pack-and-print workflows',
      'Multi-carrier rate comparison via ShipStation',
      'Bulk ship and manifest generation',
    ],
  },
  {
    title: 'Warehouse Management',
    description: 'Full warehouse layout management with zones, locations, and capacity tracking. Tote management, barcode pages, and warehouse analytics.',
    Sketch: WarehouseSketch,
    screenshotSrc: '/screenshots/warehouse-locations.png',
    screenshotAlt: 'Warehouse management — locations, zones, and capacity',
    details: [
      'Warehouse map and location management',
      'Zones, locations, SKUs, and totes',
      'Location barcode pages for scanning',
      'Capacity and utilization analytics',
      'Tote management and barcode support',
      'Warehouse address and settings',
    ],
  },
  {
    title: 'Real-time Dashboard',
    description: 'WebSocket-powered dashboard with orders to ship, late orders, holds, POs, hospital stats, and picker performance. Know exactly where every order stands.',
    Sketch: DashboardSketch,
    screenshotSrc: '/screenshots/dashboard.png',
    screenshotAlt: 'Real-time dashboard — orders, stats, and performance metrics',
    details: [
      'Orders to ship, late orders, and holds',
      'Purchase orders and inventory changes',
      'Hospital stats and packer metrics',
      'Today/yesterday orders received and shipped',
      'WebSocket real-time updates',
      'Role-based access control',
    ],
  },
  {
    title: 'Mobile Warehouse App',
    description: 'Take Smart Ship Right to the warehouse floor. Camera barcode scanning, mobile picking, SKU moves, and inventory adjustments — all from a phone or tablet.',
    Sketch: DashboardSketch,
    screenshotSrc: '/screenshots/settings.png',
    screenshotAlt: 'Mobile app — barcode scanning and picking on the floor',
    details: [
      'Auth-gated mobile workflow with persisted sessions',
      'Camera barcode scanning for picking and inventory tasks',
      'Batch picking execution: tote assignment, item scan, complete',
      'Move SKU workflow between locations',
      'Inventory adjustment with reason codes',
      'On-device API endpoint configuration',
    ],
  },
  {
    title: 'Shopify & ShipStation Integration',
    description: 'Full Shopify integration for products, orders, inventory, and fulfillment. ShipStation for labels, tracking, carriers, and manifests. Webhooks keep everything in sync.',
    Sketch: IntegrationSketch,
    screenshotSrc: '/screenshots/settings.png',
    screenshotAlt: 'Integrations — Shopify and ShipStation connected',
    details: [
      'Shopify product, order, and inventory sync',
      'Fulfillment updates back to Shopify',
      'Webhooks for orders, products, inventory, locations',
      'ShipStation label generation and rate shopping',
      'Multi-carrier support and tracking sync',
      'Carrier manifests (create, list, download)',
    ],
  },
  {
    title: 'Contract Management (Mudra)',
    description: 'AI-powered contract generation, review, and e-signatures. Manage vendor agreements, analyze risk, and maintain audit trails — all built into the platform.',
    Sketch: OrderSketch,
    screenshotSrc: '/screenshots/order-detail.png',
    screenshotAlt: 'Contract management — AI review, e-signatures, and audit trail',
    details: [
      'AI-powered contract generation from descriptions',
      'Automated risk analysis with severity levels',
      'Plain language summaries for non-lawyers',
      'Multi-signer e-signature workflow',
      'Template management with dynamic fields',
      'Append-only audit logs with IP tracking',
    ],
  },
  {
    title: 'Backorder Tracking',
    description: 'Automatically detect when reserved quantity exceeds on-hand stock. Backordered SKUs are flagged across orders and SKU pages, excluded from picking batches, and can auto-populate purchase orders.',
    Sketch: InventorySketch,
    screenshotSrc: '/screenshots/skus.png',
    screenshotAlt: 'Backorder tracking — SKU and order-level backorder indicators',
    details: [
      'Computed at read time — no extra DB columns needed',
      'Backordered badge on SKU list and detail pages',
      'Order-level has_backordered_items indicator',
      'Backordered orders excluded from picking batches',
      'Auto-populate PO line items from backordered SKUs',
      'Filter orders by backorder status',
    ],
  },
  {
    title: 'Shopify Sync Controls',
    description: 'Granular per-action-type inventory sync toggles. Control exactly which operations push inventory changes to Shopify — manual adjustments, PO receiving, bulk updates, hospital actions, and more.',
    Sketch: IntegrationSketch,
    screenshotSrc: '/screenshots/settings.png',
    screenshotAlt: 'Shopify sync controls — per-action toggle panel',
    details: [
      'Master sync toggle plus 7 per-action toggles',
      'Gate manual adjustments, PO receive, bulk updates',
      'Gate hospital quarantine/resolve/report actions',
      'Gate external fulfillment sync',
      'Fail-closed semantics — errors block sync, not allow it',
      'Settings panel in Shopify configuration page',
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="bg-white">
      <PageHeader
        title="Powerful features for modern warehouses"
        description="Everything you need to streamline operations, boost productivity, and scale warehouse execution — plus built-in contract management."
      />

      <Section>
        <Container>
          <div className="space-y-24">
            {features.map((feature, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={feature.title}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                >
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">{feature.title}</h2>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-3 mb-8">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-slate-700">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Expanded picking content */}
                    {feature.expanded && (
                      <div className="space-y-6">
                        {Object.values(feature.expanded).map((section) => (
                          <div key={section.title} className="rounded-xl border border-blue-200 bg-blue-50 p-5">
                            <h3 className="font-display text-lg font-bold text-slate-900 mb-3">{section.title}</h3>
                            <ol className="space-y-2">
                              {section.steps.map((step, i) => (
                                <li key={i} className="flex items-start text-sm">
                                  <span className="mr-3 mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                                    {i + 1}
                                  </span>
                                  <span className="text-slate-700">{step}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className={isEven ? '' : 'lg:order-1'}>
                    <div className="flex flex-col gap-4">
                      <div className="overflow-hidden rounded-xl border border-slate-200 shadow-lg">
                        <Image src={feature.screenshotSrc} alt={feature.screenshotAlt} width={800} height={500} className="w-full" />
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                        <feature.Sketch />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Additional Capabilities */}
      <Section alt>
        <Container>
          <h2 className="font-display text-3xl font-bold text-slate-900 mb-12 text-center">
            Additional capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Purchase Order Management',
              'Vendor Management',
              'Receiving Workflows',
              'Hospital & Quarantine',
              'Automation Rules Engine',
              'Backorder Tracking',
              'Shopify Sync Controls',
              'Risk Assessment & Fraud Detection',
              'Invoice Generation',
              'Packing Slips (PDF/HTML/Thermal)',
              'Camera Barcode Scanner',
              'Code128 & QR Barcodes',
              'WebSocket Real-time Updates',
              'JWT Authentication (24h)',
              'RBAC (Admin/Manager/Operator/Viewer)',
              'Granular Permissions & Groups',
              'Tote Management',
              'CSV Import (Orders/Products/Locations/SKUs)',
              'Alert System',
              'Entity Notes & Attachments',
              'Order Tags & Categories',
              'Address Validation & Editing',
              'Shopify OAuth + 15+ Webhooks',
              'Google Cloud Tasks & Storage',
            ].map((capability) => (
              <div key={capability} className="card-hover flex items-center rounded-lg border border-slate-200 bg-white p-4">
                <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-slate-700">{capability}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900">
              Ready to see these features in action?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Start your free trial or book a demo to see how Smart Ship Right fits your operation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">Start Free Trial</Button>
              <Button href="/pricing" variant="outline" size="lg">View Pricing</Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
