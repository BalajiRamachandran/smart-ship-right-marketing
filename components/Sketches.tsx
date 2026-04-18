// Modern UI-card-style sketch illustrations for Smart Ship Right marketing site
// Each sketch looks like a mini app screenshot — clean, labeled, self-explanatory

export function WarehouseSketch() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-auto" aria-label="Warehouse layout with zones and locations">
      <defs>
        <linearGradient id="wh-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>
      </defs>
      {/* Card background */}
      <rect x="8" y="8" width="384" height="244" rx="12" fill="url(#wh-bg)" stroke="#e2e8f0" strokeWidth="1" />

      {/* Title bar */}
      <rect x="8" y="8" width="384" height="36" rx="12" fill="#1e293b" />
      <rect x="8" y="32" width="384" height="12" fill="#1e293b" />
      <circle cx="26" cy="26" r="5" fill="#ef4444" />
      <circle cx="42" cy="26" r="5" fill="#f59e0b" />
      <circle cx="58" cy="26" r="5" fill="#22c55e" />
      <text x="200" y="30" fontSize="11" fill="#94a3b8" textAnchor="middle" fontWeight="600">Warehouse Map</text>

      {/* Zone A */}
      <rect x="24" y="56" width="168" height="80" rx="6" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
      <text x="32" y="72" fontSize="9" fill="#3b82f6" fontWeight="700">ZONE A — Picking</text>
      <rect x="32" y="80" width="32" height="20" rx="3" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1" />
      <text x="48" y="94" fontSize="7" fill="#2563eb" textAnchor="middle" fontWeight="600">A-01</text>
      <rect x="70" y="80" width="32" height="20" rx="3" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1" />
      <text x="86" y="94" fontSize="7" fill="#2563eb" textAnchor="middle" fontWeight="600">A-02</text>
      <rect x="108" y="80" width="32" height="20" rx="3" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1" />
      <text x="124" y="94" fontSize="7" fill="#2563eb" textAnchor="middle" fontWeight="600">A-03</text>
      <rect x="146" y="80" width="32" height="20" rx="3" fill="#bbf7d0" stroke="#86efac" strokeWidth="1" />
      <text x="162" y="94" fontSize="7" fill="#16a34a" textAnchor="middle" fontWeight="600">A-04</text>
      {/* Capacity bars */}
      <rect x="32" y="106" width="32" height="4" rx="2" fill="#e2e8f0" />
      <rect x="32" y="106" width="26" height="4" rx="2" fill="#3b82f6" />
      <rect x="70" y="106" width="32" height="4" rx="2" fill="#e2e8f0" />
      <rect x="70" y="106" width="18" height="4" rx="2" fill="#3b82f6" />
      <rect x="108" y="106" width="32" height="4" rx="2" fill="#e2e8f0" />
      <rect x="108" y="106" width="30" height="4" rx="2" fill="#f59e0b" />
      <rect x="146" y="106" width="32" height="4" rx="2" fill="#e2e8f0" />
      <rect x="146" y="106" width="10" height="4" rx="2" fill="#22c55e" />
      <text x="32" y="124" fontSize="7" fill="#64748b">81%</text>
      <text x="70" y="124" fontSize="7" fill="#64748b">56%</text>
      <text x="108" y="124" fontSize="7" fill="#d97706">94%</text>
      <text x="146" y="124" fontSize="7" fill="#64748b">31%</text>

      {/* Zone B */}
      <rect x="208" y="56" width="168" height="80" rx="6" fill="#fefce8" stroke="#fde68a" strokeWidth="1" />
      <text x="216" y="72" fontSize="9" fill="#ca8a04" fontWeight="700">ZONE B — Bulk Storage</text>
      <rect x="216" y="80" width="32" height="20" rx="3" fill="#fef9c3" stroke="#fde68a" strokeWidth="1" />
      <text x="232" y="94" fontSize="7" fill="#a16207" textAnchor="middle" fontWeight="600">B-01</text>
      <rect x="254" y="80" width="32" height="20" rx="3" fill="#fef9c3" stroke="#fde68a" strokeWidth="1" />
      <text x="270" y="94" fontSize="7" fill="#a16207" textAnchor="middle" fontWeight="600">B-02</text>
      <rect x="292" y="80" width="32" height="20" rx="3" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1" />
      <text x="308" y="94" fontSize="7" fill="#dc2626" textAnchor="middle" fontWeight="600">B-03</text>
      <rect x="330" y="80" width="32" height="20" rx="3" fill="#fef9c3" stroke="#fde68a" strokeWidth="1" />
      <text x="346" y="94" fontSize="7" fill="#a16207" textAnchor="middle" fontWeight="600">B-04</text>
      <rect x="216" y="106" width="32" height="4" rx="2" fill="#e2e8f0" />
      <rect x="216" y="106" width="20" height="4" rx="2" fill="#eab308" />
      <rect x="254" y="106" width="32" height="4" rx="2" fill="#e2e8f0" />
      <rect x="254" y="106" width="28" height="4" rx="2" fill="#eab308" />
      <rect x="292" y="106" width="32" height="4" rx="2" fill="#e2e8f0" />
      <rect x="292" y="106" width="32" height="4" rx="2" fill="#ef4444" />
      <rect x="330" y="106" width="32" height="4" rx="2" fill="#e2e8f0" />
      <rect x="330" y="106" width="14" height="4" rx="2" fill="#eab308" />
      <text x="216" y="124" fontSize="7" fill="#64748b">63%</text>
      <text x="254" y="124" fontSize="7" fill="#64748b">88%</text>
      <text x="292" y="124" fontSize="7" fill="#dc2626">Full</text>
      <text x="330" y="124" fontSize="7" fill="#64748b">44%</text>

      {/* Bottom stats row */}
      <rect x="24" y="148" width="108" height="48" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="34" y="164" fontSize="8" fill="#64748b" fontWeight="500">Total Locations</text>
      <text x="34" y="184" fontSize="18" fill="#1e293b" fontWeight="700">248</text>
      <text x="80" y="184" fontSize="9" fill="#22c55e" fontWeight="600">+12</text>

      <rect x="146" y="148" width="108" height="48" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="156" y="164" fontSize="8" fill="#64748b" fontWeight="500">Avg Utilization</text>
      <text x="156" y="184" fontSize="18" fill="#1e293b" fontWeight="700">72%</text>

      <rect x="268" y="148" width="108" height="48" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="278" y="164" fontSize="8" fill="#64748b" fontWeight="500">Hospital</text>
      <text x="278" y="184" fontSize="18" fill="#ef4444" fontWeight="700">3</text>
      <text x="302" y="184" fontSize="9" fill="#64748b">locations</text>

      {/* Legend */}
      <rect x="24" y="208" width="352" height="32" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <circle cx="44" cy="224" r="5" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1" />
      <text x="54" y="228" fontSize="8" fill="#64748b">Normal</text>
      <circle cx="104" cy="224" r="5" fill="#bbf7d0" stroke="#86efac" strokeWidth="1" />
      <text x="114" y="228" fontSize="8" fill="#64748b">Low stock</text>
      <circle cx="180" cy="224" r="5" fill="#fef9c3" stroke="#fde68a" strokeWidth="1" />
      <text x="190" y="228" fontSize="8" fill="#64748b">Bulk</text>
      <circle cx="234" cy="224" r="5" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1" />
      <text x="244" y="228" fontSize="8" fill="#64748b">Full / Hospital</text>
      <rect x="316" y="220" width="20" height="8" rx="2" fill="#3b82f6" />
      <text x="340" y="228" fontSize="8" fill="#64748b">Capacity</text>
    </svg>
  );
}

export function InventorySketch() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-auto" aria-label="Inventory dashboard showing SKU stock levels">
      <defs>
        <linearGradient id="inv-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="384" height="244" rx="12" fill="url(#inv-bg)" stroke="#e2e8f0" strokeWidth="1" />

      {/* Title bar */}
      <rect x="8" y="8" width="384" height="36" rx="12" fill="#1e293b" />
      <rect x="8" y="32" width="384" height="12" fill="#1e293b" />
      <circle cx="26" cy="26" r="5" fill="#ef4444" />
      <circle cx="42" cy="26" r="5" fill="#f59e0b" />
      <circle cx="58" cy="26" r="5" fill="#22c55e" />
      <text x="200" y="30" fontSize="11" fill="#94a3b8" textAnchor="middle" fontWeight="600">Inventory Management</text>

      {/* Summary cards */}
      <rect x="20" y="52" width="86" height="44" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="28" y="66" fontSize="7" fill="#64748b" fontWeight="500">On Hand</text>
      <text x="28" y="84" fontSize="16" fill="#1e293b" fontWeight="700">4,218</text>

      <rect x="114" y="52" width="86" height="44" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="122" y="66" fontSize="7" fill="#64748b" fontWeight="500">Reserved</text>
      <text x="122" y="84" fontSize="16" fill="#f59e0b" fontWeight="700">892</text>

      <rect x="208" y="52" width="86" height="44" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="216" y="66" fontSize="7" fill="#64748b" fontWeight="500">Available</text>
      <text x="216" y="84" fontSize="16" fill="#22c55e" fontWeight="700">3,326</text>

      <rect x="302" y="52" width="86" height="44" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="310" y="66" fontSize="7" fill="#64748b" fontWeight="500">Backordered</text>
      <text x="310" y="84" fontSize="16" fill="#ef4444" fontWeight="700">14</text>

      {/* Table header */}
      <rect x="20" y="106" width="368" height="22" rx="4" fill="#f1f5f9" />
      <text x="32" y="120" fontSize="8" fill="#64748b" fontWeight="600">SKU</text>
      <text x="120" y="120" fontSize="8" fill="#64748b" fontWeight="600">Product</text>
      <text x="220" y="120" fontSize="8" fill="#64748b" fontWeight="600">Location</text>
      <text x="280" y="120" fontSize="8" fill="#64748b" fontWeight="600">Qty</text>
      <text x="320" y="120" fontSize="8" fill="#64748b" fontWeight="600">Status</text>

      {/* Row 1 */}
      <rect x="20" y="130" width="368" height="26" rx="0" fill="#ffffff" />
      <line x1="20" y1="156" x2="388" y2="156" stroke="#f1f5f9" strokeWidth="1" />
      <text x="32" y="147" fontSize="9" fill="#1e293b" fontWeight="600" fontFamily="monospace">WH-1042</text>
      <text x="120" y="147" fontSize="9" fill="#475569">Blue Widget Pro</text>
      <text x="220" y="147" fontSize="9" fill="#475569">A-01</text>
      <text x="280" y="147" fontSize="9" fill="#1e293b" fontWeight="600">150</text>
      <rect x="320" y="138" width="48" height="16" rx="8" fill="#dcfce7" />
      <text x="344" y="150" fontSize="7" fill="#16a34a" textAnchor="middle" fontWeight="600">In Stock</text>

      {/* Row 2 */}
      <rect x="20" y="158" width="368" height="26" rx="0" fill="#fefce8" />
      <line x1="20" y1="184" x2="388" y2="184" stroke="#f1f5f9" strokeWidth="1" />
      <text x="32" y="175" fontSize="9" fill="#1e293b" fontWeight="600" fontFamily="monospace">WH-2087</text>
      <text x="120" y="175" fontSize="9" fill="#475569">Red Gadget X</text>
      <text x="220" y="175" fontSize="9" fill="#475569">B-03</text>
      <text x="280" y="175" fontSize="9" fill="#92400e" fontWeight="600">8</text>
      <rect x="320" y="166" width="48" height="16" rx="8" fill="#fef3c7" />
      <text x="344" y="178" fontSize="7" fill="#92400e" textAnchor="middle" fontWeight="600">Low</text>

      {/* Row 3 */}
      <rect x="20" y="186" width="368" height="26" rx="0" fill="#fff1f2" />
      <line x1="20" y1="212" x2="388" y2="212" stroke="#f1f5f9" strokeWidth="1" />
      <text x="32" y="203" fontSize="9" fill="#1e293b" fontWeight="600" fontFamily="monospace">WH-3155</text>
      <text x="120" y="203" fontSize="9" fill="#475569">Green Cable 2m</text>
      <text x="220" y="203" fontSize="9" fill="#475569">A-04</text>
      <text x="280" y="203" fontSize="9" fill="#dc2626" fontWeight="600">0</text>
      <rect x="320" y="194" width="56" height="16" rx="8" fill="#fee2e2" />
      <text x="348" y="206" fontSize="7" fill="#dc2626" textAnchor="middle" fontWeight="600">Backorder</text>

      {/* Row 4 */}
      <rect x="20" y="214" width="368" height="26" rx="0" fill="#ffffff" />
      <text x="32" y="231" fontSize="9" fill="#1e293b" fontWeight="600" fontFamily="monospace">WH-4201</text>
      <text x="120" y="231" fontSize="9" fill="#475569">Silver Mount Kit</text>
      <text x="220" y="231" fontSize="9" fill="#475569">C-02</text>
      <text x="280" y="231" fontSize="9" fill="#1e293b" fontWeight="600">312</text>
      <rect x="320" y="222" width="48" height="16" rx="8" fill="#dcfce7" />
      <text x="344" y="234" fontSize="7" fill="#16a34a" textAnchor="middle" fontWeight="600">In Stock</text>
    </svg>
  );
}

export function PickingSketch() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-auto" aria-label="Batch picking workflow with scan validation">
      <defs>
        <linearGradient id="pk-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="384" height="244" rx="12" fill="url(#pk-bg)" stroke="#e2e8f0" strokeWidth="1" />

      {/* Title bar */}
      <rect x="8" y="8" width="384" height="36" rx="12" fill="#1e293b" />
      <rect x="8" y="32" width="384" height="12" fill="#1e293b" />
      <circle cx="26" cy="26" r="5" fill="#ef4444" />
      <circle cx="42" cy="26" r="5" fill="#f59e0b" />
      <circle cx="58" cy="26" r="5" fill="#22c55e" />
      <text x="200" y="30" fontSize="11" fill="#94a3b8" textAnchor="middle" fontWeight="600">Batch Picking — BT-0042</text>

      {/* Batch info bar */}
      <rect x="20" y="52" width="368" height="28" rx="6" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
      <rect x="28" y="58" width="52" height="16" rx="8" fill="#3b82f6" />
      <text x="54" y="70" fontSize="8" fill="#ffffff" textAnchor="middle" fontWeight="600">Multi Batch</text>
      <text x="96" y="70" fontSize="8" fill="#64748b">5 orders</text>
      <text x="148" y="70" fontSize="8" fill="#64748b">12 items</text>
      <text x="204" y="70" fontSize="8" fill="#64748b">Tote: T-108</text>
      <rect x="268" y="58" width="112" height="16" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <rect x="268" y="58" width="75" height="16" rx="8" fill="#22c55e" />
      <text x="324" y="70" fontSize="8" fill="#ffffff" textAnchor="middle" fontWeight="700">8 / 12</text>
      <text x="356" y="70" fontSize="7" fill="#64748b">67%</text>

      {/* Pick list items */}
      {/* Item 1 — completed */}
      <rect x="20" y="88" width="368" height="32" rx="6" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
      <circle cx="38" cy="104" r="8" fill="#22c55e" />
      <path d="M34 104 L37 107 L42 101" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <text x="54" y="100" fontSize="8" fill="#16a34a" fontWeight="600">A-01</text>
      <text x="54" y="112" fontSize="8" fill="#64748b">WH-1042 · Blue Widget Pro</text>
      <text x="310" y="100" fontSize="8" fill="#16a34a" fontWeight="700">3 / 3</text>
      <text x="310" y="112" fontSize="7" fill="#16a34a">Scanned ✓</text>

      {/* Item 2 — completed */}
      <rect x="20" y="124" width="368" height="32" rx="6" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
      <circle cx="38" cy="140" r="8" fill="#22c55e" />
      <path d="M34 140 L37 143 L42 137" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <text x="54" y="136" fontSize="8" fill="#16a34a" fontWeight="600">A-03</text>
      <text x="54" y="148" fontSize="8" fill="#64748b">WH-2087 · Red Gadget X</text>
      <text x="310" y="136" fontSize="8" fill="#16a34a" fontWeight="700">5 / 5</text>
      <text x="310" y="148" fontSize="7" fill="#16a34a">Scanned ✓</text>

      {/* Item 3 — active / scanning */}
      <rect x="20" y="160" width="368" height="32" rx="6" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
      <circle cx="38" cy="176" r="8" fill="#3b82f6" />
      <text x="38" y="180" fontSize="8" fill="#ffffff" textAnchor="middle" fontWeight="700">3</text>
      <text x="54" y="172" fontSize="8" fill="#2563eb" fontWeight="600">B-02</text>
      <text x="54" y="184" fontSize="8" fill="#64748b">WH-4201 · Silver Mount Kit</text>
      <text x="310" y="172" fontSize="8" fill="#2563eb" fontWeight="700">2 / 3</text>
      <rect x="310" y="178" width="60" height="12" rx="6" fill="#3b82f6" />
      <text x="340" y="188" fontSize="7" fill="#ffffff" textAnchor="middle" fontWeight="600">Scan item</text>

      {/* Item 4 — pending */}
      <rect x="20" y="196" width="368" height="32" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <circle cx="38" cy="212" r="8" fill="#e2e8f0" />
      <text x="38" y="216" fontSize="8" fill="#94a3b8" textAnchor="middle" fontWeight="700">4</text>
      <text x="54" y="208" fontSize="8" fill="#94a3b8" fontWeight="600">C-01</text>
      <text x="54" y="220" fontSize="8" fill="#cbd5e1">WH-3155 · Green Cable 2m</text>
      <text x="310" y="208" fontSize="8" fill="#94a3b8" fontWeight="700">0 / 1</text>
      <text x="310" y="220" fontSize="7" fill="#cbd5e1">Pending</text>

      {/* Bottom action bar */}
      <rect x="20" y="234" width="176" height="14" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="108" y="244" fontSize="8" fill="#64748b" textAnchor="middle">Navigate to B-02 → Shelf 3</text>
      <rect x="212" y="234" width="80" height="14" rx="4" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" />
      <text x="252" y="244" fontSize="8" fill="#64748b" textAnchor="middle">Skip Order</text>
      <rect x="300" y="234" width="88" height="14" rx="4" fill="#ef4444" />
      <text x="344" y="244" fontSize="8" fill="#ffffff" textAnchor="middle" fontWeight="600">Flag Hospital</text>
    </svg>
  );
}

export function OrderSketch() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-auto" aria-label="Order detail with status timeline and items">
      <defs>
        <linearGradient id="ord-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="384" height="244" rx="12" fill="url(#ord-bg)" stroke="#e2e8f0" strokeWidth="1" />

      {/* Title bar */}
      <rect x="8" y="8" width="384" height="36" rx="12" fill="#1e293b" />
      <rect x="8" y="32" width="384" height="12" fill="#1e293b" />
      <circle cx="26" cy="26" r="5" fill="#ef4444" />
      <circle cx="42" cy="26" r="5" fill="#f59e0b" />
      <circle cx="58" cy="26" r="5" fill="#22c55e" />
      <text x="200" y="30" fontSize="11" fill="#94a3b8" textAnchor="middle" fontWeight="600">Order #ORD-78234</text>

      {/* Status timeline — horizontal */}
      <rect x="20" y="52" width="368" height="36" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      {/* Step 1 done */}
      <circle cx="60" cy="66" r="7" fill="#22c55e" />
      <path d="M57 66 L59 68 L63 64" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <text x="60" y="82" fontSize="7" fill="#16a34a" textAnchor="middle" fontWeight="600">Pending</text>
      <line x1="67" y1="66" x2="123" y2="66" stroke="#22c55e" strokeWidth="2" />
      {/* Step 2 done */}
      <circle cx="130" cy="66" r="7" fill="#22c55e" />
      <path d="M127 66 L129 68 L133 64" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <text x="130" y="82" fontSize="7" fill="#16a34a" textAnchor="middle" fontWeight="600">Picking</text>
      <line x1="137" y1="66" x2="193" y2="66" stroke="#22c55e" strokeWidth="2" />
      {/* Step 3 active */}
      <circle cx="200" cy="66" r="7" fill="#3b82f6" />
      <circle cx="200" cy="66" r="3" fill="#ffffff" />
      <text x="200" y="82" fontSize="7" fill="#2563eb" textAnchor="middle" fontWeight="600">Packing</text>
      <line x1="207" y1="66" x2="263" y2="66" stroke="#e2e8f0" strokeWidth="2" />
      {/* Step 4 pending */}
      <circle cx="270" cy="66" r="7" fill="#e2e8f0" />
      <text x="270" y="82" fontSize="7" fill="#94a3b8" textAnchor="middle">Shipped</text>
      <line x1="277" y1="66" x2="333" y2="66" stroke="#e2e8f0" strokeWidth="2" />
      {/* Step 5 pending */}
      <circle cx="340" cy="66" r="7" fill="#e2e8f0" />
      <text x="340" y="82" fontSize="7" fill="#94a3b8" textAnchor="middle">Delivered</text>

      {/* Order info */}
      <rect x="20" y="96" width="180" height="64" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="30" y="112" fontSize="8" fill="#64748b" fontWeight="500">Customer</text>
      <text x="30" y="126" fontSize="10" fill="#1e293b" fontWeight="600">Acme Corp</text>
      <text x="30" y="140" fontSize="8" fill="#64748b">order@acme.com</text>
      <text x="30" y="152" fontSize="8" fill="#64748b">Priority: High</text>

      <rect x="208" y="96" width="180" height="64" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="218" y="112" fontSize="8" fill="#64748b" fontWeight="500">Shipping</text>
      <text x="218" y="126" fontSize="10" fill="#1e293b" fontWeight="600">FedEx Ground</text>
      <text x="218" y="140" fontSize="8" fill="#64748b">123 Main St, NY 10001</text>
      <rect x="218" y="146" width="56" height="12" rx="6" fill="#dbeafe" />
      <text x="246" y="155" fontSize="7" fill="#2563eb" textAnchor="middle" fontWeight="600">Validated ✓</text>

      {/* Items table */}
      <rect x="20" y="168" width="368" height="18" rx="4" fill="#f1f5f9" />
      <text x="30" y="180" fontSize="7" fill="#64748b" fontWeight="600">Item</text>
      <text x="180" y="180" fontSize="7" fill="#64748b" fontWeight="600">SKU</text>
      <text x="260" y="180" fontSize="7" fill="#64748b" fontWeight="600">Qty</text>
      <text x="310" y="180" fontSize="7" fill="#64748b" fontWeight="600">Status</text>

      <text x="30" y="200" fontSize="8" fill="#1e293b">Blue Widget Pro</text>
      <text x="180" y="200" fontSize="8" fill="#475569" fontFamily="monospace">WH-1042</text>
      <text x="260" y="200" fontSize="8" fill="#1e293b" fontWeight="600">3</text>
      <rect x="310" y="192" width="40" height="14" rx="7" fill="#dcfce7" />
      <text x="330" y="202" fontSize="7" fill="#16a34a" textAnchor="middle" fontWeight="600">Picked</text>

      <line x1="20" y1="208" x2="388" y2="208" stroke="#f1f5f9" strokeWidth="1" />
      <text x="30" y="222" fontSize="8" fill="#1e293b">Red Gadget X</text>
      <text x="180" y="222" fontSize="8" fill="#475569" fontFamily="monospace">WH-2087</text>
      <text x="260" y="222" fontSize="8" fill="#1e293b" fontWeight="600">1</text>
      <rect x="310" y="214" width="40" height="14" rx="7" fill="#dcfce7" />
      <text x="330" y="224" fontSize="7" fill="#16a34a" textAnchor="middle" fontWeight="600">Picked</text>

      <line x1="20" y1="230" x2="388" y2="230" stroke="#f1f5f9" strokeWidth="1" />
      <text x="30" y="244" fontSize="8" fill="#1e293b">Green Cable 2m</text>
      <text x="180" y="244" fontSize="8" fill="#475569" fontFamily="monospace">WH-3155</text>
      <text x="260" y="244" fontSize="8" fill="#1e293b" fontWeight="600">2</text>
      <rect x="310" y="236" width="56" height="14" rx="7" fill="#fef3c7" />
      <text x="338" y="246" fontSize="7" fill="#92400e" textAnchor="middle" fontWeight="600">Packing</text>
    </svg>
  );
}

export function DashboardSketch() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-auto" aria-label="Real-time dashboard with stats and chart">
      <defs>
        <linearGradient id="db-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>
        <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="384" height="244" rx="12" fill="url(#db-bg)" stroke="#e2e8f0" strokeWidth="1" />

      {/* Title bar */}
      <rect x="8" y="8" width="384" height="36" rx="12" fill="#1e293b" />
      <rect x="8" y="32" width="384" height="12" fill="#1e293b" />
      <circle cx="26" cy="26" r="5" fill="#ef4444" />
      <circle cx="42" cy="26" r="5" fill="#f59e0b" />
      <circle cx="58" cy="26" r="5" fill="#22c55e" />
      <text x="200" y="30" fontSize="11" fill="#94a3b8" textAnchor="middle" fontWeight="600">Dashboard — Today</text>
      {/* Live indicator */}
      <circle cx="360" cy="26" r="4" fill="#22c55e" />
      <text x="350" y="30" fontSize="7" fill="#22c55e" textAnchor="end" fontWeight="600">LIVE</text>

      {/* Stat cards row */}
      <rect x="20" y="52" width="84" height="52" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="28" y="66" fontSize="7" fill="#64748b" fontWeight="500">To Ship</text>
      <text x="28" y="88" fontSize="20" fill="#1e293b" fontWeight="700">47</text>
      <text x="68" y="88" fontSize="8" fill="#ef4444" fontWeight="600">↑ 8</text>

      <rect x="112" y="52" width="84" height="52" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="120" y="66" fontSize="7" fill="#64748b" fontWeight="500">Shipped Today</text>
      <text x="120" y="88" fontSize="20" fill="#22c55e" fontWeight="700">124</text>

      <rect x="204" y="52" width="84" height="52" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="212" y="66" fontSize="7" fill="#64748b" fontWeight="500">Late Orders</text>
      <text x="212" y="88" fontSize="20" fill="#ef4444" fontWeight="700">3</text>

      <rect x="296" y="52" width="92" height="52" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="304" y="66" fontSize="7" fill="#64748b" fontWeight="500">Active Batches</text>
      <text x="304" y="88" fontSize="20" fill="#3b82f6" fontWeight="700">6</text>
      <text x="332" y="88" fontSize="8" fill="#64748b">picking</text>

      {/* Chart area */}
      <rect x="20" y="112" width="240" height="100" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="30" y="128" fontSize="8" fill="#1e293b" fontWeight="600">Orders — Last 7 Days</text>
      {/* Area chart */}
      <path d="M36 196 L72 184 L108 188 L144 172 L180 164 L216 156 L244 148" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M36 196 L72 184 L108 188 L144 172 L180 164 L216 156 L244 148 L244 200 L36 200 Z" fill="url(#chart-fill)" />
      {/* Data points */}
      <circle cx="36" cy="196" r="3" fill="#ffffff" stroke="#3b82f6" strokeWidth="2" />
      <circle cx="72" cy="184" r="3" fill="#ffffff" stroke="#3b82f6" strokeWidth="2" />
      <circle cx="108" cy="188" r="3" fill="#ffffff" stroke="#3b82f6" strokeWidth="2" />
      <circle cx="144" cy="172" r="3" fill="#ffffff" stroke="#3b82f6" strokeWidth="2" />
      <circle cx="180" cy="164" r="3" fill="#ffffff" stroke="#3b82f6" strokeWidth="2" />
      <circle cx="216" cy="156" r="3" fill="#ffffff" stroke="#3b82f6" strokeWidth="2" />
      <circle cx="244" cy="148" r="3" fill="#3b82f6" stroke="#3b82f6" strokeWidth="2" />
      {/* X axis labels */}
      <text x="36" y="208" fontSize="6" fill="#94a3b8" textAnchor="middle">Mon</text>
      <text x="72" y="208" fontSize="6" fill="#94a3b8" textAnchor="middle">Tue</text>
      <text x="108" y="208" fontSize="6" fill="#94a3b8" textAnchor="middle">Wed</text>
      <text x="144" y="208" fontSize="6" fill="#94a3b8" textAnchor="middle">Thu</text>
      <text x="180" y="208" fontSize="6" fill="#94a3b8" textAnchor="middle">Fri</text>
      <text x="216" y="208" fontSize="6" fill="#94a3b8" textAnchor="middle">Sat</text>
      <text x="244" y="208" fontSize="6" fill="#94a3b8" textAnchor="middle">Sun</text>

      {/* Right side — holds & pickers */}
      <rect x="268" y="112" width="120" height="48" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="278" y="128" fontSize="8" fill="#1e293b" fontWeight="600">Holds</text>
      <text x="278" y="142" fontSize="7" fill="#64748b">Payment: <tspan fill="#f59e0b" fontWeight="600">2</tspan></text>
      <text x="278" y="152" fontSize="7" fill="#64748b">Fraud: <tspan fill="#ef4444" fontWeight="600">1</tspan></text>

      <rect x="268" y="164" width="120" height="48" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="278" y="180" fontSize="8" fill="#1e293b" fontWeight="600">Top Pickers</text>
      <text x="278" y="194" fontSize="7" fill="#64748b">Alex — <tspan fill="#22c55e" fontWeight="600">42 orders</tspan></text>
      <text x="278" y="204" fontSize="7" fill="#64748b">Sam — <tspan fill="#3b82f6" fontWeight="600">38 orders</tspan></text>

      {/* Bottom bar */}
      <rect x="20" y="220" width="368" height="24" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="30" y="236" fontSize="8" fill="#64748b">Yesterday: <tspan fill="#1e293b" fontWeight="600">118 shipped</tspan></text>
      <text x="200" y="236" fontSize="8" fill="#64748b">Hospital: <tspan fill="#ef4444" fontWeight="600">3 locations</tspan></text>
      <text x="340" y="236" fontSize="8" fill="#64748b">POs: <tspan fill="#3b82f6" fontWeight="600">2 pending</tspan></text>
    </svg>
  );
}

export function IntegrationSketch() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-auto" aria-label="Integration map showing connected services">
      <defs>
        <linearGradient id="int-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="384" height="244" rx="12" fill="url(#int-bg)" stroke="#e2e8f0" strokeWidth="1" />

      {/* Title bar */}
      <rect x="8" y="8" width="384" height="36" rx="12" fill="#1e293b" />
      <rect x="8" y="32" width="384" height="12" fill="#1e293b" />
      <circle cx="26" cy="26" r="5" fill="#ef4444" />
      <circle cx="42" cy="26" r="5" fill="#f59e0b" />
      <circle cx="58" cy="26" r="5" fill="#22c55e" />
      <text x="200" y="30" fontSize="11" fill="#94a3b8" textAnchor="middle" fontWeight="600">Integrations</text>

      {/* Central hub */}
      <rect x="140" y="100" width="120" height="56" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="2" />
      <text x="200" y="124" fontSize="10" fill="#ffffff" textAnchor="middle" fontWeight="700">Smart Ship Right</text>
      <text x="200" y="140" fontSize="7" fill="#94a3b8" textAnchor="middle">Warehouse Management</text>

      {/* Shopify — top left */}
      <rect x="20" y="52" width="100" height="40" rx="8" fill="#ffffff" stroke="#96bf48" strokeWidth="1.5" />
      <circle cx="40" cy="72" r="8" fill="#96bf48" opacity="0.15" />
      <text x="40" y="76" fontSize="8" fill="#96bf48" textAnchor="middle" fontWeight="700">S</text>
      <text x="60" y="68" fontSize="9" fill="#1e293b" fontWeight="600">Shopify</text>
      <text x="60" y="80" fontSize="7" fill="#64748b">15+ webhooks</text>
      {/* Connection line */}
      <line x1="120" y1="72" x2="140" y2="116" stroke="#96bf48" strokeWidth="1.5" strokeDasharray="4,3" />
      <circle cx="130" cy="94" r="3" fill="#96bf48" />

      {/* ShipStation — top right */}
      <rect x="280" y="52" width="100" height="40" rx="8" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
      <circle cx="300" cy="72" r="8" fill="#3b82f6" opacity="0.15" />
      <text x="300" y="76" fontSize="8" fill="#3b82f6" textAnchor="middle" fontWeight="700">SS</text>
      <text x="322" y="68" fontSize="9" fill="#1e293b" fontWeight="600">ShipStation</text>
      <text x="322" y="80" fontSize="7" fill="#64748b">Labels & rates</text>
      <line x1="280" y1="72" x2="260" y2="116" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,3" />
      <circle cx="270" cy="94" r="3" fill="#3b82f6" />

      {/* Google Cloud — bottom left */}
      <rect x="20" y="168" width="100" height="40" rx="8" fill="#ffffff" stroke="#ea4335" strokeWidth="1.5" />
      <circle cx="40" cy="188" r="8" fill="#ea4335" opacity="0.15" />
      <text x="40" y="192" fontSize="8" fill="#ea4335" textAnchor="middle" fontWeight="700">G</text>
      <text x="60" y="184" fontSize="9" fill="#1e293b" fontWeight="600">Google Cloud</text>
      <text x="60" y="196" fontSize="7" fill="#64748b">Tasks & Storage</text>
      <line x1="120" y1="188" x2="140" y2="144" stroke="#ea4335" strokeWidth="1.5" strokeDasharray="4,3" />
      <circle cx="130" cy="166" r="3" fill="#ea4335" />

      {/* PostgreSQL — bottom right */}
      <rect x="280" y="168" width="100" height="40" rx="8" fill="#ffffff" stroke="#336791" strokeWidth="1.5" />
      <circle cx="300" cy="188" r="8" fill="#336791" opacity="0.15" />
      <text x="300" y="192" fontSize="8" fill="#336791" textAnchor="middle" fontWeight="700">PG</text>
      <text x="322" y="184" fontSize="9" fill="#1e293b" fontWeight="600">PostgreSQL</text>
      <text x="322" y="196" fontSize="7" fill="#64748b">Neon serverless</text>
      <line x1="280" y1="188" x2="260" y2="144" stroke="#336791" strokeWidth="1.5" strokeDasharray="4,3" />
      <circle cx="270" cy="166" r="3" fill="#336791" />

      {/* Stripe — bottom center-left */}
      <rect x="80" y="218" width="80" height="28" rx="6" fill="#ffffff" stroke="#635bff" strokeWidth="1.5" />
      <text x="120" y="236" fontSize="9" fill="#635bff" textAnchor="middle" fontWeight="600">Stripe</text>
      <line x1="120" y1="218" x2="180" y2="156" stroke="#635bff" strokeWidth="1" strokeDasharray="3,3" />

      {/* Supabase — bottom center-right */}
      <rect x="240" y="218" width="80" height="28" rx="6" fill="#ffffff" stroke="#3ecf8e" strokeWidth="1.5" />
      <text x="280" y="236" fontSize="9" fill="#3ecf8e" textAnchor="middle" fontWeight="600">Supabase</text>
      <line x1="280" y1="218" x2="220" y2="156" stroke="#3ecf8e" strokeWidth="1" strokeDasharray="3,3" />

      {/* Data flow labels */}
      <rect x="126" y="86" width="56" height="12" rx="6" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
      <text x="154" y="95" fontSize="6" fill="#16a34a" textAnchor="middle" fontWeight="600">Bidirectional</text>
      <rect x="224" y="86" width="44" height="12" rx="6" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
      <text x="246" y="95" fontSize="6" fill="#2563eb" textAnchor="middle" fontWeight="600">API sync</text>
    </svg>
  );
}
