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
