# Screenshot Integration Guide for Marketing Site

## Overview

24 sanitized product screenshots are available at `public/screenshots/`. All customer PII (emails, names, addresses, phone numbers, order numbers) and client branding ("Svaha") have been replaced with demo data. Images are 2x retina PNGs at 1440x900.

**IMPORTANT:** These are real product screenshots, not mockups. Use them to replace ALL `<ScreenshotPlaceholder>` components across the site.

---

## How to Use

Replace every `<ScreenshotPlaceholder>` with a Next.js `<Image>`:

```tsx
import Image from 'next/image';

// Basic usage
<Image
  src="/screenshots/dashboard.png"
  alt="Smart Ship Right dashboard showing orders, inventory stats, and real-time metrics"
  width={1440}
  height={900}
  className="rounded-xl border border-slate-200 shadow-lg"
  quality={90}
/>

// With aspect ratio container (for consistent sizing)
<div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-200 shadow-lg">
  <Image
    src="/screenshots/dashboard.png"
    alt="Smart Ship Right dashboard"
    fill
    className="object-cover object-top"
    quality={90}
  />
</div>
```

After replacing all placeholders, remove the `<ScreenshotPlaceholder>` import and delete `components/ScreenshotPlaceholder.tsx`.

---

## Complete Screenshot Inventory

### Core Pages

| File | Page | Best Used On | Alt Text |
|---|---|---|---|
| `dashboard.png` | Main dashboard | Homepage hero, How It Works step 6, About page | Smart Ship Right dashboard showing orders to ship, inventory stats, and real-time metrics |
| `orders.png` | Orders list | Homepage gallery, Features (Orders) | Order management list with status filters, search, and bulk actions |
| `order-detail.png` | Order detail | Features (Orders), How It Works step 1 | Order detail page with items, shipping info, status timeline, and notes |
| `skus.png` | SKU inventory list | Homepage gallery, Features (Inventory) | SKU inventory list with stock levels, locations, categories, and filters |
| `sku-detail.png` | SKU detail | Features (Inventory), Products page | SKU detail with inventory by location, history audit trail, and product images |

### Picking & Packing

| File | Page | Best Used On | Alt Text |
|---|---|---|---|
| `picking.png` | Picking dashboard | Homepage gallery, Features (Picking) | Picking dashboard with batch list, status tracking, and batch creation |
| `picking-batch.png` | Active picking batch | Features (Picking), How It Works step 3 | Active picking batch showing items to pick, scan status, and tote assignment |
| `packing.png` | Packing hub | Homepage gallery, Features (Packing) | Packing hub with batch and order-based packing workflows |
| `packing-batch.png` | Packing a batch | Features (Packing), How It Works step 4 | Packing batch with order verification, item scanning, and label generation |

### Warehouse

| File | Page | Best Used On | Alt Text |
|---|---|---|---|
| `warehouse-locations.png` | Locations grid | Features (Warehouse), Products page | Warehouse locations grid with capacity, utilization, and zone management |
| `location-detail.png` | Location detail | Features (Warehouse) | Warehouse location detail with assigned SKUs and capacity |
| `warehouse-map.png` | 3D warehouse map | Features (Warehouse), About page | 3D warehouse map visualization with zones, aisles, and shelves |
| `totes.png` | Tote management | Features (Warehouse), Mobile page | Tote management list with barcode, status, and batch assignment |
| `hospital.png` | Hospital/quarantine | Features (Hospital) | Hospital quarantine zone with held items and resolution workflow |
| `cycle-counts.png` | Cycle counting | Features (Cycle Counting) | Cycle counting page with scheduled counts and variance tracking |
| `warehouse-analytics.png` | Warehouse analytics | Features (Dashboard), About page | Warehouse analytics with inventory utilization and performance charts |

### Utilities & Workflows

| File | Page | Best Used On | Alt Text |
|---|---|---|---|
| `move-sku.png` | Move SKU | Features (Inventory), Mobile page | Move SKU workflow with source location, destination, and quantity |
| `adjust-inventory.png` | Adjust inventory | Features (Inventory), Mobile page | Inventory adjustment with reason codes and Shopify sync feedback |

### Settings & Admin

| File | Page | Best Used On | Alt Text |
|---|---|---|---|
| `settings.png` | Settings overview | Products page | Settings page with general, Shopify, and warehouse configuration |
| `shopify-settings.png` | Shopify integration | Features (Shopify Sync), Products page | Shopify integration settings with sync controls and webhook configuration |
| `sync-log.png` | Sync log | Features (Shopify Sync) | Shopify sync log showing sync history with status filters and details |
| `users.png` | User management | Features (RBAC), Products page | User management with roles, status, and activity tracking |
| `permissions.png` | Permissions editor | Features (RBAC) | Role-based permissions editor with granular access controls |
| `help-center.png` | Help center | Features page, About page | In-app help center with searchable articles and categories |

---

## Page-by-Page Integration Map

### Homepage (`app/page.tsx`)

1. **Hero section** — Replace `ScreenshotPlaceholder` with `dashboard.png`
2. **Demo video section** — Replace `VideoPlaceholder` with `dashboard.png` as a static fallback (or embed a real video)
3. **Feature 1 (Inventory)** — Use `skus.png` + `sku-detail.png`
4. **Feature 2 (Picking)** — Use `picking.png` + `picking-batch.png`
5. **Feature 3 (Shipping)** — Use `packing-batch.png` + `shopify-settings.png`
6. **Screenshot gallery** — Use 6 images in 3-column grid: `dashboard.png`, `picking-batch.png`, `packing-batch.png`, `orders.png`, `skus.png`, `warehouse-map.png`

### Features Page (`app/features/page.tsx`)

| Feature Section | Screenshot(s) |
|---|---|
| Inventory Management | `skus.png`, `sku-detail.png` |
| Order Processing | `orders.png`, `order-detail.png` |
| Single & Multi Batch Picking | `picking.png`, `picking-batch.png` |
| Packing & Shipping | `packing.png`, `packing-batch.png` |
| Warehouse Management | `warehouse-locations.png`, `warehouse-map.png` |
| Real-time Dashboard | `dashboard.png`, `warehouse-analytics.png` |
| Mobile Warehouse App | `move-sku.png`, `adjust-inventory.png` |
| Shopify & ShipStation Integration | `shopify-settings.png`, `sync-log.png` |
| Backorder Tracking | `sku-detail.png` |
| Shopify Sync Controls | `shopify-settings.png`, `sync-log.png` |

### How It Works Page (`app/how-it-works/page.tsx`)

| Step | Screenshot |
|---|---|
| 01 — Orders sync | `orders.png` |
| 02 — Inventory validated | `skus.png` |
| 03 — Pickers execute batches | `picking-batch.png` |
| 04 — Orders packed and verified | `packing-batch.png` |
| 05 — Labels printed and shipped | `packing.png` |
| 06 — Dashboard tracks everything | `dashboard.png` |

### Products Page (`app/products/page.tsx`)

- WMS Backend card — `dashboard.png`
- Web Frontend card — `orders.png`
- Mobile App section — `move-sku.png` + `adjust-inventory.png`

### Mobile Page (`app/mobile/page.tsx`)

- Hero section — `move-sku.png` + `adjust-inventory.png` (use `aspect-[9/16]` for mobile-style framing)
- Batch Picking workflow — `picking-batch.png`
- Move SKU workflow — `move-sku.png`
- Inventory Adjustment workflow — `adjust-inventory.png`

### About Page (`app/about/page.tsx`)

- Mission section — `warehouse-map.png`
- Replace the `WarehouseSketch` with `dashboard.png` or `warehouse-analytics.png`

---

## Cleanup After Integration

1. Remove all `import { ScreenshotPlaceholder, VideoPlaceholder } from '@/components/ScreenshotPlaceholder'` imports
2. Delete `components/ScreenshotPlaceholder.tsx`
3. Keep `components/Sketches.tsx` — the SVG sketches can complement screenshots as secondary visuals

---

## Re-Capturing Screenshots

If the app UI changes and screenshots need updating:

```bash
cd marketing-site
npx tsx scripts/capture-screenshots.ts
```

This will re-capture all 24 pages with PII sanitization. No database changes — it only modifies the browser DOM before taking screenshots.


---

## Hero Section — Key Features to Highlight

The homepage hero should immediately communicate what Ship Right does and why it's different. Below the headline and subheadline, add a row of 4-6 key feature badges or icons.

### Recommended Hero Feature Badges

Display these as a horizontal row of small icon + label pairs below the CTA buttons:

```
✅ Shopify Sync     ✅ Batch Picking     ✅ Barcode Scanning     ✅ Shipping Labels     ✅ Automation Rules     ✅ Direct-to-Printer
```

Implementation:

```tsx
<div className="mt-8 flex flex-wrap gap-4">
  {[
    { icon: '🔄', label: 'Real-Time Shopify Sync' },
    { icon: '📋', label: 'Batch Picking' },
    { icon: '📱', label: 'Barcode Scanning' },
    { icon: '🏷️', label: 'Shipping Labels' },
    { icon: '⚡', label: 'Automation Rules' },
    { icon: '🖨️', label: 'Direct-to-Printer' },
  ].map((f) => (
    <div key={f.label} className="flex items-center gap-2 rounded-full bg-white/80 border border-slate-200 px-4 py-2 text-sm text-slate-700 shadow-sm">
      <span>{f.icon}</span>
      <span className="font-medium">{f.label}</span>
    </div>
  ))}
</div>
```

Or use Heroicons SVGs instead of emojis for a more professional look (matching the app's style).

### Hero Screenshot

Use `dashboard.png` as the hero image. Wrap it in a browser-frame mockup for polish:

```tsx
<div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
  <Image
    src="/screenshots/dashboard.png"
    alt="Smart Ship Right Dashboard — orders, inventory, and picking at a glance"
    width={1440}
    height={900}
    className="rounded-xl"
    priority
    quality={90}
  />
</div>
```

### Hero Floating Stats (keep existing pattern but update values)

```tsx
{/* Floating stat card — bottom left of hero image */}
<div className="absolute -bottom-6 -left-6 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-lg">
  <p className="text-2xl font-bold text-blue-600">99.8%</p>
  <p className="text-sm text-slate-500">Order accuracy</p>
</div>

{/* Floating stat card — top right */}
<div className="absolute -top-4 -right-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-lg">
  <p className="text-2xl font-bold text-green-600">40%</p>
  <p className="text-sm text-slate-500">Faster picking</p>
</div>
```

---

## Navigation Review & Recommendations

### Current Navigation Links

```
Home | Features | How It Works | Pricing | Products | About | Contact
```

### Issues

1. **Too many top-level links (7)** — Visitors get decision fatigue. Most SaaS sites have 4-5 nav items.
2. **"Products" is confusing** — It currently shows the tech stack (FastAPI, Next.js, etc.) which is developer-focused, not buyer-focused. Shopify merchants don't care about the backend stack.
3. **"How It Works" and "Features" overlap** — Both explain what the product does. Merge or differentiate clearly.
4. **No "Integrations" page** — Shopify and ShipStation integration is a top selling point but buried inside Features.

### Recommended Navigation

```
Features | Pricing | How It Works | About | Contact
```

**Changes:**
- **Remove "Products"** — Merge relevant content into Features. The tech stack details can go on the About page under a "Built With" section.
- **Remove "Home"** — The logo already links home. Having "Home" in the nav is redundant.
- **Keep "Features"** as the first link — it's the most visited page after homepage.
- **Keep "How It Works"** — the 6-step process flow is valuable for buyers evaluating the product.
- **Consider adding "Integrations"** as a dropdown under Features, or as a standalone page later.

### Updated Navigation Code

```tsx
const links = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];
```

### Mobile Page

The `/mobile` page is not in the navigation — it's only linked from the footer. This is fine since it's a secondary page. Keep it in the footer under "Product" links.

### Footer Links Review

Current footer has:

**Product:** Features, Pricing, Products, How It Works, Mobile App
**Company:** About Us, Contact, Documentation, Changelog
**Support:** Email, response time, demo CTA

**Recommended changes:**
- Remove "Products" from footer (same reason as nav)
- "Documentation" and "Changelog" link to `#` — either create these pages or remove the links
- Add "Integrations" under Product if you create that page
- Add "Help Center" under Support (links to the in-app `/help` page or a public docs site)

### Pages to Keep vs Remove vs Merge

| Page | Action | Reason |
|---|---|---|
| `/` (Home) | ✅ Keep | Landing page |
| `/features` | ✅ Keep | Core selling page |
| `/pricing` | ✅ Keep | Conversion page |
| `/how-it-works` | ✅ Keep | Process explanation |
| `/about` | ✅ Keep | Trust building |
| `/contact` | ✅ Keep | Lead capture |
| `/mobile` | ✅ Keep (footer only) | Secondary feature page |
| `/products` | ❌ Remove or merge into Features/About | Developer-focused, confusing for buyers. Move tech stack to About page. |

---

## Complete Feature List for Marketing Site

These are ALL features actually built in Ship Right. Use this as the source of truth when writing copy for any page.

### Inventory & Warehouse
- Real-time inventory tracking by SKU and location
- Multi-location stock with reserved quantity management
- Backorder detection and tracking (computed, no extra DB columns)
- Inventory reservations (reserve on paid, unreserve on ship)
- Cycle counting with scheduled counts and variance tracking
- Hospital/quarantine zones for damaged or suspect inventory
- Warehouse 3D map with zones, aisles, shelves
- Location capacity and utilization tracking
- Tote management with barcode support
- Move SKU between locations (guided workflow)
- Inventory adjustment with reason codes
- CSV import for bulk inventory updates
- Inventory change log (full audit trail)
- Low stock alerts
- Dropship-only SKU flag (excluded from pick/pack/ship)

### Orders
- Shopify order sync via OAuth + webhooks
- Complete order lifecycle (Pending → Picking → Packed → Shipped → Delivered)
- Partially shipped status support
- Hold management (payment, fraud, review, address, operator)
- Order priority and category assignment
- Order tags and notes
- Address validation and editing with Shopify sync
- Risk assessment and fraud detection
- Invoice generation
- Exchange handling (ReturnZap integration)
- CSV export for order data

### Picking
- Single-item batch picking
- Multi-item batch picking
- Single-order batch picking
- Location-optimized pick lists (Zone → Aisle → Shelf)
- Barcode scanning validation at every pick
- Tote assignment and tracking
- Out-of-order scanning support
- Hospital flag from picking flow
- Batch reservation system (prevents overselling)
- Picking dashboard with batch status tracking

### Packing & Shipping
- Packing hub (batch-based and order-based)
- Direct-to-packing (skip picking)
- Scan tote and SKU verification
- Packing slips (PDF, HTML — Letter, A4, Thermal sizes)
- Batch packing slip printing
- Direct-to-printer support (Zebra, DYMO, thermal printers)
- Multi-carrier rate comparison via ShipStation (USPS, UPS, FedEx)
- One-click shipping label generation
- Label void and reprint
- EOD manifests and SCAN forms
- Tracking number sync to Shopify
- Missing weight warnings on packing pages
- Dropship items excluded from packing

### Integrations
- Shopify OAuth with bidirectional sync
- Shopify REST + GraphQL API
- 15+ Shopify webhooks (orders, products, inventory, fulfillments)
- Per-action-type Shopify sync controls (7 toggles)
- ShipStation labels, rates, carriers, manifests
- Google Cloud (Cloud Run, Cloud Tasks, Cloud Storage)
- ReturnZap exchange handling

### Automation
- Rules engine with conditions, actions, and triggers
- Auto-prioritize orders by shipping method
- Auto-hold fraud-flagged orders
- Auto-tag orders by category
- Auto-route damaged inventory to hospital
- Set items as dropship via automation
- Webhook-triggered automation execution

### Users & Permissions
- JWT authentication (24h tokens)
- Role-based access control (Admin, Manager, Operator, Viewer)
- Granular permissions with groups
- Permission editor UI
- User activity tracking
- Alert system with severity levels

### Reporting & Analytics
- Real-time WebSocket dashboard
- Orders to ship, late orders, holds
- Inventory reports (movements, low stock, utilization)
- SKU performance metrics
- Shopify sync log with filters
- Complete audit trail on every entity
- CSV export on all DataTables

### Developer & Admin
- In-app help center with searchable articles
- Error reporting with screenshots and GitHub issues
- Barcode system (Code128, QR)
- Camera barcode scanning (iPhone/Android)
- Bluetooth barcode scanner support
- Entity notes and attachments
- Consolidated type-safe API client
- WebSocket real-time updates with auto-reconnect


---

## Pricing Recommendation

### Competitive Landscape

| Competitor | Lowest Plan | Mid-Tier | Enterprise | Notes |
|---|---|---|---|---|
| **ShipHero** | $499/mo | $1,995/mo (3PL) | $2,750/mo | Many brands end up at $2,000+/mo |
| **SKULabs** | $299/mo | $699/mo | $1,999/mo | 5 tiers on Shopify App Store |
| **ShipBob WMS** | Quote-based | Quote-based | Quote-based | Per-pick + per-storage fees on top |

### Recommended Ship Right Pricing

Replace the current $49/$149/Custom tiers with:

| Plan | Price | Orders/mo | Users | Key Features |
|---|---|---|---|---|
| **Starter** | **$249/mo** | Up to 2,000 | 5 | Shopify sync, single-batch picking, barcode scanning, basic dashboard, email support |
| **Professional** | **$499/mo** *(Most Popular)* | Up to 10,000 | 15 | Everything in Starter + multi-batch picking, ShipStation integration, packing hub, automation rules, dropship support, cycle counting, direct-to-printer, Shopify sync controls, priority support |
| **Enterprise** | **$999/mo** | Unlimited | Unlimited | Everything in Professional + multi-warehouse, hospital/quarantine, custom integrations, dedicated onboarding, SLA guarantee, phone support |
| **Custom** | **Contact us** | Unlimited | Unlimited | 3PL/multi-tenant, SSO/SAML, custom reporting, dedicated account manager |

### Pricing Page Headline

> **ShipHero features at half the price.**

### Pricing Page Subheadline

> Brands pay $2,000+/month for ShipHero. Ship Right gives you the same pick-pack-ship workflow, Shopify sync, and barcode scanning — starting at $249/mo with no per-order fees.

### Savings Callout (add below the pricing cards)

```tsx
<div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center mt-10">
  <p className="text-3xl font-bold text-green-700">Save $18,000+/year</p>
  <p className="text-sm text-green-600 mt-1">
    compared to ShipHero — same features, flat pricing, no per-order fees
  </p>
</div>
```

### Feature Comparison Table (replace current)

| Feature | Starter | Professional | Enterprise |
|---|---|---|---|
| Monthly orders | 2,000 | 10,000 | Unlimited |
| Users | 5 | 15 | Unlimited |
| Warehouses | 1 | Multiple | Unlimited |
| Shopify integration | ✅ | ✅ | ✅ |
| ShipStation integration | — | ✅ | ✅ |
| Single-batch picking | ✅ | ✅ | ✅ |
| Multi-batch picking | — | ✅ | ✅ |
| Barcode scanning | ✅ | ✅ | ✅ |
| Packing hub | ✅ | ✅ | ✅ |
| Packing slips (PDF/HTML/Thermal) | ✅ | ✅ | ✅ |
| Direct-to-printer | — | ✅ | ✅ |
| Multi-carrier rate comparison | — | ✅ | ✅ |
| Automation rules | — | ✅ | ✅ |
| Dropship support | — | ✅ | ✅ |
| Cycle counting | — | ✅ | ✅ |
| Shopify sync controls | — | ✅ | ✅ |
| Backorder tracking | ✅ | ✅ | ✅ |
| Hospital & quarantine | — | — | ✅ |
| Custom API integrations | — | — | ✅ |
| Dedicated onboarding | — | ✅ | ✅ |
| SLA guarantee | — | — | ✅ |
| Per-order fees | **None** | **None** | **None** |

---

## FAQ (Replace Current)

Replace the existing FAQ section on the pricing page with these questions. These are based on what Shopify merchants actually ask when evaluating a WMS.

```tsx
const faqs = [
  {
    q: 'Is there a free trial?',
    a: 'Yes. Every plan includes a 14-day free trial with full access to all features. No credit card required. Your data is preserved if you subscribe after the trial.',
  },
  {
    q: 'How does Ship Right compare to ShipHero?',
    a: 'Ship Right offers the same core capabilities — Shopify sync, batch picking, barcode scanning, shipping labels, and automation — at a fraction of the cost. ShipHero starts at $499/mo and most brands pay $2,000+/mo. Ship Right starts at $249/mo with no per-order fees.',
  },
  {
    q: 'Are there any per-order or per-label fees?',
    a: 'No. All plans are flat monthly pricing. There are no per-order, per-pick, per-label, or per-shipment fees. Shipping label costs (postage) are billed through your ShipStation account, not through Ship Right.',
  },
  {
    q: 'What counts as an "order"?',
    a: 'An order is any sales order imported from Shopify or created manually. Cancelled orders before picking do not count toward your monthly limit. Exchange orders created by ReturnZap count as separate orders.',
  },
  {
    q: 'Can I change plans later?',
    a: 'Yes. Upgrade or downgrade at any time. Changes take effect on your next billing cycle. If you upgrade mid-cycle, we prorate the difference.',
  },
  {
    q: 'Do I need ShipStation?',
    a: 'ShipStation is required for shipping label generation and multi-carrier rate comparison (USPS, UPS, FedEx). It is included in Professional and Enterprise plans. Starter plan users can add ShipStation separately. You can still use Ship Right for inventory, picking, and packing without ShipStation.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most teams are live within a day. Connect your Shopify store (60 seconds), import your warehouse locations, and start picking. Professional and Enterprise plans include a free onboarding call where we configure everything with you.',
  },
  {
    q: 'Does Ship Right work on mobile?',
    a: 'Yes. The web app is fully responsive and works on phones and tablets. Camera barcode scanning is built into the browser — no native app required. Bluetooth barcode scanners are also supported.',
  },
  {
    q: 'Can I use Ship Right with platforms other than Shopify?',
    a: 'Currently we integrate natively with Shopify and ShipStation. Enterprise and Custom plans support custom API integrations for other platforms like WooCommerce, Amazon, and eBay. Contact us to discuss your setup.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. Ship Right runs on Google Cloud with encrypted connections (HTTPS), JWT authentication, role-based access control, and a complete audit trail on every action. Your warehouse data is the single source of truth — external systems cannot overwrite it.',
  },
  {
    q: 'What kind of support do you offer?',
    a: 'Starter: email support (24-hour response). Professional: priority email and chat support. Enterprise: phone and video support with a dedicated account manager. All plans include free onboarding.',
  },
  {
    q: 'Can Ship Right handle exchanges and returns?',
    a: 'Yes. Ship Right integrates with ReturnZap for exchange handling. Exchange items are tracked separately from the original order, shipped orders are protected from status downgrades, and inventory stays accurate throughout the process.',
  },
];
```


---

## Third-Party Costs Transparency Section

Add this section below the pricing cards and above the FAQ on the pricing page. Being upfront about additional costs builds trust and prevents surprises.

### Section Title: "What's included — and what's not"

```tsx
<Section>
  <Container>
    <h2 className="font-display text-2xl font-bold text-slate-900 text-center mb-4">
      What&apos;s included — and what&apos;s not
    </h2>
    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
      Ship Right is your warehouse management system. Shipping labels and postage are handled by your carrier account. Here&apos;s what to expect.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {/* Included */}
      <div className="rounded-xl border border-green-200 bg-green-50/50 p-6">
        <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Included in your Ship Right plan
        </h3>
        <ul className="space-y-2 text-sm text-slate-700">
          <li>✅ Unlimited SKUs and inventory tracking</li>
          <li>✅ Shopify integration and sync</li>
          <li>✅ Picking, packing, and warehouse workflows</li>
          <li>✅ Barcode scanning (camera + Bluetooth)</li>
          <li>✅ Packing slips (PDF, HTML, Thermal)</li>
          <li>✅ Direct-to-printer support</li>
          <li>✅ Dashboard, reports, and audit trail</li>
          <li>✅ Role-based access control</li>
          <li>✅ Free onboarding and support</li>
          <li>✅ All software updates</li>
        </ul>
      </div>

      {/* Not included */}
      <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-6">
        <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Separate costs (your existing accounts)
        </h3>
        <ul className="space-y-3 text-sm text-slate-700">
          <li>
            <strong>ShipStation</strong> — from $9.99/mo
            <p className="text-slate-500 text-xs mt-0.5">Required for shipping labels and carrier rates. You use your own ShipStation account. Ship Right connects via API.</p>
          </li>
          <li>
            <strong>Shipping postage</strong> — varies by carrier
            <p className="text-slate-500 text-xs mt-0.5">USPS, UPS, FedEx label costs are billed through ShipStation, not Ship Right. You get the same negotiated rates you already have.</p>
          </li>
          <li>
            <strong>Shopify</strong> — from $39/mo
            <p className="text-slate-500 text-xs mt-0.5">You need an active Shopify store. Ship Right connects via Shopify OAuth — no additional Shopify charges.</p>
          </li>
          <li>
            <strong>Barcode hardware</strong> — optional
            <p className="text-slate-500 text-xs mt-0.5">Camera scanning works on any phone. USB/Bluetooth scanners ($30-$150) and thermal printers ($200-$400) are optional upgrades.</p>
          </li>
        </ul>
      </div>
    </div>

    {/* Reassurance */}
    <p className="text-center text-sm text-slate-500 mt-8">
      No hidden fees. No per-order charges. No setup costs. Your Ship Right subscription covers the entire WMS platform.
    </p>
  </Container>
</Section>
```

### Alternative: Compact Version (for FAQ)

If you prefer to keep it shorter, add this as an FAQ entry:

```tsx
{
  q: 'Are there any additional costs beyond the monthly plan?',
  a: 'Ship Right covers the entire WMS platform — inventory, picking, packing, dashboard, and integrations. Shipping labels and postage are billed through your ShipStation account (from $9.99/mo). You also need an active Shopify store (from $39/mo). There are no per-order, per-label, or per-user fees from Ship Right. Barcode hardware (scanners, thermal printers) is optional — camera scanning works on any phone.',
}
```

---

## Plan Enforcement Architecture (for future backend implementation)

When ready to enforce plan limits, here's the approach. **No backend changes needed now** — this is for when you onboard paying customers.

### Database Changes

Add to shop/tenant settings:
```python
plan = Column(String(20), default='professional')  # starter, professional, enterprise
plan_order_limit = Column(Integer, default=10000)   # monthly order cap
plan_user_limit = Column(Integer, default=15)       # max users
plan_started_at = Column(DateTime)                  # billing cycle start
```

### Feature Gating Map

```python
PLAN_FEATURES = {
    'starter': {
        'order_limit': 2000,
        'user_limit': 5,
        'warehouses': 1,
        'features': [
            'shopify_sync', 'single_batch_picking', 'barcode_scanning',
            'packing_slips', 'backorder_tracking', 'dashboard',
            'csv_import', 'csv_export', 'help_center',
        ],
    },
    'professional': {
        'order_limit': 10000,
        'user_limit': 15,
        'warehouses': 5,
        'features': ['*'],  # All features
    },
    'enterprise': {
        'order_limit': None,  # Unlimited
        'user_limit': None,
        'warehouses': None,
        'features': ['*'],
    },
}

# Features gated to Professional+
PROFESSIONAL_FEATURES = [
    'multi_batch_picking', 'shipstation_integration', 'automation_rules',
    'dropship_support', 'cycle_counting', 'direct_to_printer',
    'shopify_sync_controls', 'packing_hub',
]

# Features gated to Enterprise
ENTERPRISE_FEATURES = [
    'hospital_quarantine', 'custom_api_integrations', 'sla_guarantee',
]
```

### Enforcement Points

1. **Order creation** — Check monthly count vs `plan_order_limit`
2. **User creation** — Check user count vs `plan_user_limit`
3. **Feature access** — Middleware checks plan before allowing access to gated endpoints
4. **Frontend** — Show upgrade prompts when user tries to access a gated feature

### Frontend Upgrade Prompt Pattern

```tsx
// When a Starter user tries to access automation rules:
<div className="bg-blue-900/20 border border-blue-700 rounded-lg p-6 text-center">
  <h3 className="text-lg font-semibold text-white mb-2">Automation Rules</h3>
  <p className="text-gray-400 text-sm mb-4">
    Automation rules are available on the Professional plan.
  </p>
  <a href="/settings/billing" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
    Upgrade to Professional
  </a>
</div>
```


---

## Updated Third-Party Costs — ShipStation & Shipping

Replace the earlier ShipStation cost reference with this more accurate breakdown. The key point: **customers bring their own ShipStation API key** — Ship Right doesn't resell ShipStation.

### ShipStation Pricing by Region (as of 2025)

| Plan | US & Canada | Australia | UK |
|---|---|---|---|
| **Starter** (3 users) | $14.99/mo | $20/mo (AUD) | £10/mo |
| **Standard** (10 users) | $29.99/mo | $50/mo (AUD) | £25/mo |
| **Premium** (15 users) | $349.99/mo | $540/mo (AUD) | £270/mo |

Note: ShipStation also charges per-shipment fees when using your own carrier accounts (not ShipStation's discounted rates). This varies by plan.

### Updated "What's Not Included" Section

Replace the ShipStation line item with:

```tsx
<li>
  <strong>ShipStation</strong> — from $14.99/mo (US)
  <p className="text-slate-500 text-xs mt-0.5">
    Required for shipping labels and carrier rate comparison. You bring your own ShipStation account and API key — Ship Right connects to it. 
    Pricing varies by region: US/Canada from $14.99/mo, Australia from $20 AUD/mo, UK from £10/mo.
    <a href="https://www.shipstation.com/pricing/" target="_blank" rel="noopener" className="text-blue-500 hover:underline ml-1">
      See ShipStation pricing →
    </a>
  </p>
</li>
<li>
  <strong>Shipping postage & carrier fees</strong> — varies
  <p className="text-slate-500 text-xs mt-0.5">
    USPS, UPS, FedEx, DHL label costs are billed through your ShipStation account or directly by your carrier. 
    Ship Right does not mark up postage. You keep your existing negotiated carrier rates.
    International shipping rates depend on your carrier agreements.
  </p>
</li>
```

### Updated FAQ Entry

Replace the ShipStation FAQ with:

```tsx
{
  q: 'Do I need ShipStation? What does it cost?',
  a: 'ShipStation is required for shipping label generation and multi-carrier rate comparison. You bring your own ShipStation account and API key — Ship Right connects to it via API. ShipStation plans start at $14.99/mo in the US ($20 AUD in Australia, £10 in the UK). Postage and carrier fees are billed through ShipStation or your carrier, not through Ship Right. You can use Ship Right for inventory, picking, and packing without ShipStation — you just won\'t be able to generate labels from within the app.',
}
```

### Key Messaging Points

1. **"Bring your own API key"** — Ship Right doesn't resell ShipStation. Customers connect their existing account. This means:
   - No markup on shipping costs
   - Customers keep their negotiated carrier rates
   - Works with any ShipStation plan (Starter, Standard, Premium)

2. **International shipping** — Don't quote a single ShipStation price. Say "from $14.99/mo" and link to ShipStation's pricing page. Mention that pricing varies by region.

3. **ShipStation is optional** — Ship Right works without ShipStation for inventory, picking, and packing. ShipStation is only needed for label generation. This matters for customers who use a different shipping provider or print labels elsewhere.

4. **Future: Shippo / EasyPost alternative** — If you plan to support other label providers (Shippo, EasyPost, Pirate Ship), mention it as "coming soon" on the pricing page. This reduces the perceived lock-in to ShipStation.
