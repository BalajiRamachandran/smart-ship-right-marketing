import { WarehouseSketch, InventorySketch, PickingSketch, OrderSketch, DashboardSketch, IntegrationSketch } from '@/components/Sketches';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features | Inventory, Picking, Packing, Shipping & Automation',
  description:
    'Explore Smart Ship Right features: real-time inventory, single and multi batch picking, barcode scanning, shipping labels, automation rules, dropship support, cycle counting, and Shopify sync.',
};

const features = [
  {
    title: 'Inventory Management',
    description: 'Real-time tracking with location-based storage. Multi-location inventory support with reserved quantity management, backorder detection, and automatic capacity constraint validation.',
    Sketch: InventorySketch,
    screenshotSrc: '/screenshots/sku-detail.png',
    screenshotAlt: 'SKU detail with inventory by location, history audit trail, and product images',
    details: [
      'Real-time inventory tracking by SKU and location',
      'Multi-location inventory with reserved quantity management',
      'Backorder detection (computed at read time)',
      'Inventory reservations (reserve on paid, unreserve on ship)',
      'Dropship-only SKU flag (excluded from pick/pack)',
      'Stock movement audit trail and history',
      'CSV import and export for bulk updates',
      'Inventory variance checks with Shopify',
    ],
  },
  {
    title: 'Order Processing',
    description: 'Complete order lifecycle management from import to fulfillment. Hold management for payment, fraud, and address issues. Risk assessment and exchange handling built in.',
    Sketch: OrderSketch,
    screenshotSrc: '/screenshots/order-detail.png',
    screenshotAlt: 'Order detail page with items, shipping info, status timeline, and notes',
    details: [
      'Complete order lifecycle (Pending → Picking → Packed → Shipped → Delivered)',
      'Hold management (payment, fraud, review, address, operator)',
      'Risk assessment and fraud detection',
      'Exchange handling (ReturnZap integration)',
      'Address validation and editing with Shopify sync',
      'Invoice generation and order tags',
      'CSV export for order data',
      'Real-time updates via WebSocket',
    ],
  },
  {
    title: 'Single & Multi Batch Picking',
    description: 'Single-batch, multi-batch, and single-order picking with location-optimized routes, barcode scanning validation, and tote assignment. Flag problem locations to hospital directly from the picking flow.',
    Sketch: PickingSketch,
    screenshotSrc: '/screenshots/picking-batch.png',
    screenshotAlt: 'Active picking batch showing items to pick, scan status, and tote assignment',
    details: [
      'Single-batch workflow for high-volume single-SKU orders',
      'Multi-batch workflow for complex multi-SKU orders',
      'Single-order batch for priority shipments',
      'Location-optimized pick lists (Zone → Aisle → Shelf)',
      'Barcode scanning validation at every pick',
      'Out-of-order scanning support',
      'Tote assignment and tracking',
      'Hospital flag from picking flow',
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
    description: 'Packing hub with batch and order-based flows. Scan totes, verify items, and print labels directly to your warehouse printer — no browser dialogs. ShipStation powers labels, rate shopping, carriers, and manifests.',
    Sketch: IntegrationSketch,
    screenshotSrc: '/screenshots/packing-batch.png',
    screenshotAlt: 'Packing batch with order verification, item scanning, and label generation',
    details: [
      'Packing hub by batch or by order',
      'Direct-to-packing (skip picking batch)',
      'Scan tote and SKU for verification',
      'Direct-to-printer for shipping labels and packing slips',
      'Supports Zebra, DYMO, and thermal label printers',
      'Auto-print on label creation — no browser print dialog',
      'Packing slips (PDF, HTML — Letter, A4, Thermal)',
      'Multi-carrier rate comparison via ShipStation (USPS, UPS, FedEx)',
      'EOD manifests and SCAN forms',
      'Missing weight warnings on packing pages',
    ],
  },
  {
    title: 'Warehouse Management',
    description: 'Full warehouse layout management with 3D map, zones, locations, and capacity tracking. Tote management, barcode pages, and warehouse analytics.',
    Sketch: WarehouseSketch,
    screenshotSrc: '/screenshots/warehouse-map.png',
    screenshotAlt: '3D warehouse map visualization with zones, aisles, and shelves',
    details: [
      '3D warehouse map with zones, aisles, and shelves',
      'Location CRUD with types, capacity, and hierarchy',
      'Location barcode pages for scanning',
      'Capacity and utilization analytics',
      'Tote management with barcode support',
      'CSV import for locations',
    ],
  },
  {
    title: 'Hospital & Quarantine',
    description: 'Quarantine damaged or suspect inventory at the SKU or location level. Flag issues directly from picking, resolve from the hospital dashboard, and track everything.',
    Sketch: WarehouseSketch,
    screenshotSrc: '/screenshots/hospital.png',
    screenshotAlt: 'Hospital quarantine zone with held items and resolution workflow',
    details: [
      'SKU and location-level quarantine',
      'Flag issues directly from picking workflow',
      'Resolve and release from hospital dashboard',
      'Reason tracking (not enough units, damaged, empty, needs count)',
      'Hospital stats on main dashboard',
      'Automation rules can bulk-hold inventory',
    ],
  },
  {
    title: 'Cycle Counting',
    description: 'Schedule counts by location or SKU, assign to staff, and track variance. Scan-to-count workflow ensures accuracy without shutting down operations.',
    Sketch: InventorySketch,
    screenshotSrc: '/screenshots/cycle-counts.png',
    screenshotAlt: 'Cycle counting page with scheduled counts and variance tracking',
    details: [
      'Schedule counts by location, zone, or SKU',
      'Assign counts to warehouse staff',
      'Scan-to-count workflow',
      'Auto-reconcile discrepancies against on-hand',
      'Variance reports and history',
      'No warehouse shutdown required',
    ],
  },
  {
    title: 'Automation Rules',
    description: 'Rule engine with triggers, conditions, and actions. Auto-hold fraud orders, auto-prioritize by carrier, route damaged inventory to hospital, and more — no code required.',
    Sketch: DashboardSketch,
    screenshotSrc: '/screenshots/settings.png',
    screenshotAlt: 'Automation rules engine with conditions, actions, and triggers',
    details: [
      'Triggers, conditions, and actions',
      'Auto-hold fraud-flagged orders',
      'Auto-prioritize by shipping method',
      'Auto-tag orders by category',
      'Route damaged inventory to hospital',
      'Set items as dropship via automation',
      'Execution history and statistics',
    ],
  },
  {
    title: 'Real-time Dashboard',
    description: 'WebSocket-powered dashboard with orders to ship, late orders, holds, POs, hospital stats, and picker performance. Know exactly where every order stands.',
    Sketch: DashboardSketch,
    screenshotSrc: '/screenshots/dashboard.png',
    screenshotAlt: 'Smart Ship Right dashboard showing orders to ship, inventory stats, and real-time metrics',
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
    title: 'Shopify & ShipStation Integration',
    description: 'Full Shopify integration with OAuth, REST + GraphQL, and 15+ webhooks. Per-action sync controls let you gate exactly which operations push to Shopify. ShipStation for labels, tracking, and manifests.',
    Sketch: IntegrationSketch,
    screenshotSrc: '/screenshots/shopify-settings.png',
    screenshotAlt: 'Shopify integration settings with sync controls and webhook configuration',
    details: [
      'Shopify OAuth with bidirectional sync',
      'REST + GraphQL API support',
      '15+ webhooks (orders, products, inventory, fulfillments)',
      'Per-action-type sync controls (7 toggles)',
      'Sync log with status filters and history',
      'ShipStation labels, rates, carriers, manifests',
      'ReturnZap exchange handling',
    ],
  },
  {
    title: 'Mobile Warehouse Operations',
    description: 'The web app is fully responsive and works on tablets and phones. Camera barcode scanning, mobile picking, SKU moves, and inventory adjustments — all from the browser.',
    Sketch: DashboardSketch,
    screenshotSrc: '/screenshots/move-sku.png',
    screenshotAlt: 'Move SKU workflow with source location, destination, and quantity',
    details: [
      'Responsive web app works on any device',
      'Camera barcode scanning (Code128 & QR)',
      'Mobile batch picking with tote and item scan',
      'Move SKU between locations (guided workflow)',
      'Inventory adjustment with reason codes',
      'Bluetooth barcode scanner support',
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="bg-white">
      <PageHeader
        title="Powerful features for modern warehouses"
        description="Everything you need to streamline operations, boost productivity, and scale warehouse execution."
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
              'Dropship Support (SKU-level flag)',
              'Exchange & Return Handling',
              'Inventory Reservations',
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
              'Direct-to-Printer (Zebra/DYMO/Thermal)',
              'Packing Weight Warnings',
              'Camera Barcode Scanner',
              'Code128 & QR Barcodes',
              'WebSocket Real-time Updates',
              'JWT Authentication (24h)',
              'RBAC (Admin/Manager/Operator/Viewer)',
              'Granular Permissions & Groups',
              'Tote Management',
              'CSV Import & Export',
              'Alert System',
              'SKU History & Audit Trail',
              'Order Tags & Categories',
              'Address Validation & Editing',
              'Shopify OAuth + 15+ Webhooks',
              'Sync Log UI',
              'In-App Help Center',
              'Google Cloud (Run, Tasks, Storage)',
              'Neon PostgreSQL + Alembic',
              'Entity Notes & Attachments',
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
