// Sketch components for visual representations

export function WarehouseSketch() {
  return (
<svg viewBox="0 0 400 300" className="w-full h-auto" aria-label="Warehouse sketch">
  {/* Floor */}
  <rect x="0" y="250" width="400" height="50" fill="#f1f5f9" />
  <line x1="0" y1="250" x2="400" y2="250" stroke="#cbd5e1" strokeWidth="1" />
  
  {/* Warehouse building - main structure */}
  <rect x="50" y="100" width="300" height="150" fill="#ffffff" stroke="#3b82f6" strokeWidth="2.5" />
  
  {/* Roof */}
  <polygon points="50,100 200,60 350,100" fill="#e0e7ff" stroke="#3b82f6" strokeWidth="2.5" />
  <line x1="200" y1="60" x2="200" y2="100" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4,2" />
  
  {/* Center dividing wall */}
  <line x1="200" y1="100" x2="200" y2="250" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,3" />
  
  {/* Left section shelves */}
  <g>
    {/* Shelf unit posts */}
    <line x1="70" y1="120" x2="70" y2="180" stroke="#3b82f6" strokeWidth="2" />
    <line x1="180" y1="120" x2="180" y2="180" stroke="#3b82f6" strokeWidth="2" />
    
    {/* Shelves */}
    <rect x="70" y="120" width="110" height="10" fill="#e0e7ff" stroke="#3b82f6" strokeWidth="1.5" />
    <rect x="70" y="145" width="110" height="10" fill="#e0e7ff" stroke="#3b82f6" strokeWidth="1.5" />
    <rect x="70" y="170" width="110" height="10" fill="#e0e7ff" stroke="#3b82f6" strokeWidth="1.5" />
    
    {/* Boxes on shelves */}
    <rect x="75" y="108" width="18" height="12" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
    <rect x="98" y="108" width="18" height="12" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
    <rect x="121" y="108" width="18" height="12" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
    <rect x="144" y="108" width="18" height="12" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
    
    <rect x="75" y="133" width="18" height="12" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
    <rect x="98" y="133" width="18" height="12" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
    <rect x="144" y="133" width="18" height="12" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
    
    <rect x="121" y="158" width="18" height="12" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
    <rect x="144" y="158" width="18" height="12" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
  </g>
  
  {/* Right section shelves */}
  <g>
    {/* Shelf unit posts */}
    <line x1="220" y1="120" x2="220" y2="180" stroke="#3b82f6" strokeWidth="2" />
    <line x1="330" y1="120" x2="330" y2="180" stroke="#3b82f6" strokeWidth="2" />
    
    {/* Shelves */}
    <rect x="220" y="120" width="110" height="10" fill="#e0e7ff" stroke="#3b82f6" strokeWidth="1.5" />
    <rect x="220" y="145" width="110" height="10" fill="#e0e7ff" stroke="#3b82f6" strokeWidth="1.5" />
    <rect x="220" y="170" width="110" height="10" fill="#e0e7ff" stroke="#3b82f6" strokeWidth="1.5" />
    
    {/* Boxes on shelves */}
    <rect x="225" y="108" width="18" height="12" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
    <rect x="271" y="108" width="18" height="12" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
    <rect x="294" y="108" width="18" height="12" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
    
    <rect x="225" y="133" width="18" height="12" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
    <rect x="248" y="133" width="18" height="12" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
    <rect x="271" y="133" width="18" height="12" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
    <rect x="294" y="133" width="18" height="12" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
    
    <rect x="248" y="158" width="18" height="12" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
    <rect x="271" y="158" width="18" height="12" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
  </g>
  
  {/* Floor boxes/pallets */}
  <rect x="80" y="220" width="30" height="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
  <line x1="80" y1="235" x2="110" y2="235" stroke="#3b82f6" strokeWidth="1" />
  <line x1="95" y1="220" x2="95" y2="250" stroke="#3b82f6" strokeWidth="1" />
  
  <rect x="240" y="215" width="35" height="35" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
  <line x1="240" y1="232.5" x2="275" y2="232.5" stroke="#3b82f6" strokeWidth="1" />
  <line x1="257.5" y1="215" x2="257.5" y2="250" stroke="#3b82f6" strokeWidth="1" />
  
  {/* Door */}
  <rect x="175" y="200" width="50" height="50" fill="#ffffff" stroke="#3b82f6" strokeWidth="2.5" />
  <line x1="200" y1="200" x2="200" y2="250" stroke="#3b82f6" strokeWidth="2" />
  <circle cx="215" cy="225" r="3" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
  <circle cx="185" cy="225" r="3" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
  
  {/* Window */}
  <rect x="290" y="120" width="40" height="30" fill="#e0f2fe" stroke="#3b82f6" strokeWidth="2" />
  <line x1="310" y1="120" x2="310" y2="150" stroke="#3b82f6" strokeWidth="1.5" />
  <line x1="290" y1="135" x2="330" y2="135" stroke="#3b82f6" strokeWidth="1.5" />
  
  {/* Labels with backgrounds */}
  <rect x="65" y="103" width="35" height="14" fill="#ffffff" stroke="#3b82f6" strokeWidth="1" rx="2" />
  <text x="82.5" y="113" fontSize="10" fill="#3b82f6" fontFamily="monospace" textAnchor="middle" fontWeight="600">A01</text>
  
  <rect x="215" y="103" width="35" height="14" fill="#ffffff" stroke="#3b82f6" strokeWidth="1" rx="2" />
  <text x="232.5" y="113" fontSize="10" fill="#3b82f6" fontFamily="monospace" textAnchor="middle" fontWeight="600">B02</text>
  
  {/* Additional details - loading dock marker */}
  <line x1="155" y1="250" x2="155" y2="260" stroke="#f59e0b" strokeWidth="3" />
  <line x1="245" y1="250" x2="245" y2="260" stroke="#f59e0b" strokeWidth="3" />
</svg>
  );
}

export function InventorySketch() {
  return (
<svg viewBox="0 0 400 300" className="w-full h-auto" aria-label="Inventory management sketch">
  {/* Product boxes with 3D effect */}
  <g>
    {/* Box 1 */}
    <rect x="50" y="50" width="60" height="60" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2.5" rx="3" />
    <polygon points="50,50 55,45 115,45 110,50" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
    <polygon points="110,50 115,45 115,105 110,110" fill="#93c5fd" stroke="#3b82f6" strokeWidth="2" />
    <line x1="60" y1="60" x2="100" y2="60" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
    <line x1="60" y1="70" x2="100" y2="70" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
    <text x="80" y="88" fontSize="11" fill="#1e40af" textAnchor="middle" fontFamily="monospace" fontWeight="600">SKU-001</text>
    <rect x="60" y="95" width="40" height="12" fill="#ffffff" stroke="#3b82f6" strokeWidth="1" rx="2" />
    <text x="80" y="103" fontSize="9" fill="#3b82f6" textAnchor="middle" fontWeight="600">Qty: 150</text>
    
    {/* Box 2 */}
    <rect x="150" y="50" width="60" height="60" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2.5" rx="3" />
    <polygon points="150,50 155,45 215,45 210,50" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
    <polygon points="210,50 215,45 215,105 210,110" fill="#93c5fd" stroke="#3b82f6" strokeWidth="2" />
    <line x1="160" y1="60" x2="200" y2="60" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
    <line x1="160" y1="70" x2="200" y2="70" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
    <text x="180" y="88" fontSize="11" fill="#1e40af" textAnchor="middle" fontFamily="monospace" fontWeight="600">SKU-002</text>
    <rect x="160" y="95" width="40" height="12" fill="#ffffff" stroke="#3b82f6" strokeWidth="1" rx="2" />
    <text x="180" y="103" fontSize="9" fill="#3b82f6" textAnchor="middle" fontWeight="600">Qty: 89</text>
    
    {/* Box 3 */}
    <rect x="250" y="50" width="60" height="60" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2.5" rx="3" />
    <polygon points="250,50 255,45 315,45 310,50" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
    <polygon points="310,50 315,45 315,105 310,110" fill="#93c5fd" stroke="#3b82f6" strokeWidth="2" />
    <line x1="260" y1="60" x2="300" y2="60" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
    <line x1="260" y1="70" x2="300" y2="70" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
    <text x="280" y="88" fontSize="11" fill="#1e40af" textAnchor="middle" fontFamily="monospace" fontWeight="600">SKU-003</text>
    <rect x="260" y="95" width="40" height="12" fill="#ffffff" stroke="#3b82f6" strokeWidth="1" rx="2" />
    <text x="280" y="103" fontSize="9" fill="#3b82f6" textAnchor="middle" fontWeight="600">Qty: 234</text>
  </g>
  
  {/* Location indicators with icons */}
  <g>
    <circle cx="80" cy="145" r="18" fill="#d1fae5" stroke="#10b981" strokeWidth="2.5" />
    <path d="M 80 135 L 80 155 M 75 140 L 80 135 L 85 140" stroke="#10b981" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <text x="80" y="168" fontSize="10" fill="#059669" textAnchor="middle" fontWeight="600">A01-L2</text>
    
    <circle cx="180" cy="145" r="18" fill="#d1fae5" stroke="#10b981" strokeWidth="2.5" />
    <path d="M 180 135 L 180 155 M 175 140 L 180 135 L 185 140" stroke="#10b981" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <text x="180" y="168" fontSize="10" fill="#059669" textAnchor="middle" fontWeight="600">B03-L1</text>
    
    <circle cx="280" cy="145" r="18" fill="#d1fae5" stroke="#10b981" strokeWidth="2.5" />
    <path d="M 280 135 L 280 155 M 275 140 L 280 135 L 285 140" stroke="#10b981" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <text x="280" y="168" fontSize="10" fill="#059669" textAnchor="middle" fontWeight="600">C02-L3</text>
  </g>
  
  {/* Connection lines */}
  <line x1="80" y1="110" x2="80" y2="127" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4,3" />
  <line x1="180" y1="110" x2="180" y2="127" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4,3" />
  <line x1="280" y1="110" x2="280" y2="127" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4,3" />
  
  {/* Dashboard with gradient background */}
  <defs>
    <linearGradient id="dashGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#eff6ff" />
      <stop offset="100%" stopColor="#dbeafe" />
    </linearGradient>
  </defs>
  
  <rect x="40" y="190" width="320" height="95" fill="url(#dashGrad)" stroke="#3b82f6" strokeWidth="2.5" rx="6" />
  
  {/* Dashboard header */}
  <rect x="40" y="190" width="320" height="35" fill="#3b82f6" stroke="#3b82f6" strokeWidth="2.5" rx="6" />
  <rect x="40" y="215" width="320" height="10" fill="#3b82f6" />
  <text x="200" y="212" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="700">Real-time Dashboard</text>
  
  {/* Dashboard metrics with icons */}
  <g>
    {/* Left column */}
    <circle cx="65" cy="245" r="8" fill="#3b82f6" opacity="0.2" />
    <rect x="62" y="242" width="6" height="6" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
    <text x="80" y="248" fontSize="11" fill="#1e40af" fontWeight="600">Total SKUs:</text>
    <text x="150" y="248" fontSize="11" fill="#3b82f6" fontWeight="700">10,868</text>
    
    <circle cx="65" cy="265" r="8" fill="#10b981" opacity="0.2" />
    <path d="M 65 260 L 65 270 M 60 265 L 65 260 L 70 265" stroke="#10b981" strokeWidth="1.5" fill="none" />
    <text x="80" y="268" fontSize="11" fill="#059669" fontWeight="600">Locations:</text>
    <text x="150" y="268" fontSize="11" fill="#10b981" fontWeight="700">6,654</text>
    
    {/* Right column */}
    <circle cx="215" cy="245" r="8" fill="#f59e0b" opacity="0.2" />
    <path d="M 212 243 L 218 243 L 215 248 L 218 248" stroke="#f59e0b" strokeWidth="1.5" fill="none" />
    <text x="230" y="248" fontSize="11" fill="#d97706" fontWeight="600">Orders:</text>
    <text x="285" y="248" fontSize="11" fill="#f59e0b" fontWeight="700">290+</text>
    
    <circle cx="215" cy="265" r="8" fill="#8b5cf6" opacity="0.2" />
    <rect x="211" y="262" width="8" height="6" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
    <text x="230" y="268" fontSize="11" fill="#7c3aed" fontWeight="600">Inventory:</text>
    <text x="293" y="268" fontSize="11" fill="#8b5cf6" fontWeight="700">195K+</text>
  </g>
  
  {/* Decorative elements */}
  <circle cx="350" cy="200" r="3" fill="#10b981" />
  <circle cx="343" cy="203" r="2" fill="#3b82f6" />
  <circle cx="357" cy="205" r="2" fill="#f59e0b" />
</svg>
  );
}

export function PickingSketch() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-auto" aria-label="Picking workflow sketch">
      {/* Picker with cart */}
      <circle cx="100" cy="150" r="20" fill="none" stroke="#3b82f6" strokeWidth="2" />
      <line x1="100" y1="170" x2="100" y2="200" stroke="#3b82f6" strokeWidth="2" />
      <line x1="100" y1="200" x2="80" y2="220" stroke="#3b82f6" strokeWidth="2" />
      <line x1="100" y1="200" x2="120" y2="220" stroke="#3b82f6" strokeWidth="2" />
      
      {/* Cart */}
      <rect x="120" y="180" width="40" height="30" fill="none" stroke="#3b82f6" strokeWidth="2" />
      <circle cx="130" cy="215" r="5" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
      <circle cx="150" cy="215" r="5" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
      
      {/* Pick list */}
      <rect x="200" y="50" width="150" height="200" fill="none" stroke="#3b82f6" strokeWidth="2" rx="4" />
      <text x="275" y="75" fontSize="14" fill="#3b82f6" textAnchor="middle" fontWeight="bold">Pick List</text>
      <line x1="210" y1="85" x2="340" y2="85" stroke="#3b82f6" strokeWidth="1" />
      
      {/* List items */}
      <text x="220" y="110" fontSize="11" fill="#3b82f6">1. SKU-001 - A01-L2 (Qty: 5)</text>
      <text x="220" y="130" fontSize="11" fill="#3b82f6">2. SKU-002 - B03-L1 (Qty: 3)</text>
      <text x="220" y="150" fontSize="11" fill="#3b82f6">3. SKU-003 - C02-L3 (Qty: 2)</text>
      <text x="220" y="170" fontSize="11" fill="#3b82f6">4. SKU-004 - A05-L1 (Qty: 1)</text>
      
      {/* Checkmarks */}
      <path d="M 210 105 L 215 110 L 225 100" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
      <path d="M 210 125 L 215 130 L 225 120" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
      
      {/* Progress bar */}
      <rect x="210" y="200" width="130" height="15" fill="none" stroke="#3b82f6" strokeWidth="2" />
      <rect x="212" y="202" width="65" height="11" fill="#10b981" />
      <text x="275" y="230" fontSize="10" fill="#3b82f6" textAnchor="middle">50% Complete</text>
      
      {/* Barcode scanner */}
      <rect x="50" y="50" width="60" height="40" fill="none" stroke="#3b82f6" strokeWidth="2" rx="4" />
      <line x1="55" y1="60" x2="105" y2="60" stroke="#3b82f6" strokeWidth="1" />
      <line x1="55" y1="70" x2="105" y2="70" stroke="#3b82f6" strokeWidth="1" />
      <line x1="55" y1="80" x2="105" y2="80" stroke="#3b82f6" strokeWidth="1" />
      <text x="80" y="95" fontSize="9" fill="#3b82f6" textAnchor="middle">Scanner</text>
    </svg>
  );
}

export function OrderSketch() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-auto" aria-label="Order management sketch">
      {/* Order card */}
      <rect x="50" y="50" width="300" height="200" fill="none" stroke="#3b82f6" strokeWidth="2" rx="8" />
      
      {/* Header */}
      <rect x="50" y="50" width="300" height="40" fill="#3b82f6" opacity="0.1" />
      <text x="70" y="75" fontSize="14" fill="#3b82f6" fontWeight="bold">Order #ORD-12345</text>
      <text x="280" y="75" fontSize="12" fill="#10b981" textAnchor="end">Processing</text>
      
      {/* Customer info */}
      <text x="70" y="110" fontSize="12" fill="#3b82f6" fontWeight="bold">Customer:</text>
      <text x="70" y="130" fontSize="11" fill="#6b7280">John Doe</text>
      <text x="70" y="145" fontSize="11" fill="#6b7280">john@example.com</text>
      
      {/* Items */}
      <text x="70" y="170" fontSize="12" fill="#3b82f6" fontWeight="bold">Items:</text>
      <text x="70" y="190" fontSize="11" fill="#6b7280">• SKU-001 x 5</text>
      <text x="70" y="205" fontSize="11" fill="#6b7280">• SKU-002 x 3</text>
      <text x="70" y="220" fontSize="11" fill="#6b7280">• SKU-003 x 2</text>
      
      {/* Status timeline */}
      <circle cx="320" cy="100" r="8" fill="#10b981" />
      <text x="320" y="125" fontSize="9" fill="#6b7280" textAnchor="middle">Pending</text>
      
      <circle cx="320" cy="150" r="8" fill="#10b981" />
      <text x="320" y="175" fontSize="9" fill="#6b7280" textAnchor="middle">Picking</text>
      
      <circle cx="320" cy="200" r="8" fill="#e5e7eb" />
      <text x="320" y="225" fontSize="9" fill="#6b7280" textAnchor="middle">Shipped</text>
      
      <line x1="320" y1="108" x2="320" y2="142" stroke="#10b981" strokeWidth="2" />
      <line x1="320" y1="158" x2="320" y2="192" stroke="#e5e7eb" strokeWidth="2" />
    </svg>
  );
}

export function DashboardSketch() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-auto" aria-label="Dashboard sketch">
      {/* Dashboard container */}
      <rect x="20" y="20" width="360" height="260" fill="none" stroke="#3b82f6" strokeWidth="2" rx="8" />
      
      {/* Header */}
      <text x="200" y="45" fontSize="16" fill="#3b82f6" textAnchor="middle" fontWeight="bold">Dashboard</text>
      <line x1="30" y1="55" x2="370" y2="55" stroke="#3b82f6" strokeWidth="1" />
      
      {/* Stats cards */}
      <rect x="40" y="70" width="100" height="80" fill="none" stroke="#3b82f6" strokeWidth="1.5" rx="4" />
      <text x="90" y="95" fontSize="12" fill="#3b82f6" textAnchor="middle" fontWeight="bold">Orders</text>
      <text x="90" y="115" fontSize="20" fill="#3b82f6" textAnchor="middle" fontWeight="bold">290</text>
      <text x="90" y="135" fontSize="10" fill="#10b981" textAnchor="middle">+12% today</text>
      
      <rect x="160" y="70" width="100" height="80" fill="none" stroke="#3b82f6" strokeWidth="1.5" rx="4" />
      <text x="210" y="95" fontSize="12" fill="#3b82f6" textAnchor="middle" fontWeight="bold">Items</text>
      <text x="210" y="115" fontSize="20" fill="#3b82f6" textAnchor="middle" fontWeight="bold">1,450</text>
      <text x="210" y="135" fontSize="10" fill="#10b981" textAnchor="middle">In progress</text>
      
      <rect x="280" y="70" width="100" height="80" fill="none" stroke="#3b82f6" strokeWidth="1.5" rx="4" />
      <text x="330" y="95" fontSize="12" fill="#3b82f6" textAnchor="middle" fontWeight="bold">Batches</text>
      <text x="330" y="115" fontSize="20" fill="#3b82f6" textAnchor="middle" fontWeight="bold">24</text>
      <text x="330" y="135" fontSize="10" fill="#10b981" textAnchor="middle">Active</text>
      
      {/* Chart area */}
      <rect x="40" y="170" width="320" height="90" fill="none" stroke="#3b82f6" strokeWidth="1.5" rx="4" />
      <text x="200" y="190" fontSize="12" fill="#3b82f6" textAnchor="middle" fontWeight="bold">Order Trends</text>
      
      {/* Simple line chart */}
      <polyline
        points="60,250 100,230 140,240 180,220 220,210 260,200 300,190 340,180"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2"
      />
      
      {/* Data points */}
      <circle cx="60" cy="250" r="3" fill="#3b82f6" />
      <circle cx="100" cy="230" r="3" fill="#3b82f6" />
      <circle cx="140" cy="240" r="3" fill="#3b82f6" />
      <circle cx="180" cy="220" r="3" fill="#3b82f6" />
      <circle cx="220" cy="210" r="3" fill="#3b82f6" />
      <circle cx="260" cy="200" r="3" fill="#3b82f6" />
      <circle cx="300" cy="190" r="3" fill="#3b82f6" />
      <circle cx="340" cy="180" r="3" fill="#3b82f6" />
    </svg>
  );
}

export function IntegrationSketch() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-auto" aria-label="Integration sketch">
      {/* Central hub */}
      <circle cx="200" cy="150" r="50" fill="none" stroke="#3b82f6" strokeWidth="3" />
      <text x="200" y="155" fontSize="14" fill="#3b82f6" textAnchor="middle" fontWeight="bold">Ship-Right</text>
      
      {/* Shopify */}
      <circle cx="80" cy="80" r="30" fill="none" stroke="#96bf48" strokeWidth="2" />
      <text x="80" y="85" fontSize="11" fill="#96bf48" textAnchor="middle" fontWeight="bold">Shopify</text>
      <line x1="110" y1="80" x2="150" y2="130" stroke="#96bf48" strokeWidth="2" />
      
      {/* FastAPI Backend */}
      <circle cx="320" cy="80" r="30" fill="none" stroke="#009688" strokeWidth="2" />
      <text x="320" y="85" fontSize="10" fill="#009688" textAnchor="middle" fontWeight="bold">FastAPI</text>
      <line x1="290" y1="80" x2="250" y2="130" stroke="#009688" strokeWidth="2" />
      
      {/* Next.js Frontend */}
      <circle cx="80" cy="220" r="30" fill="none" stroke="#000000" strokeWidth="2" />
      <text x="80" y="225" fontSize="10" fill="#000000" textAnchor="middle" fontWeight="bold">Next.js</text>
      <line x1="110" y1="220" x2="150" y2="170" stroke="#000000" strokeWidth="2" />
      
      {/* PostgreSQL */}
      <circle cx="320" cy="220" r="30" fill="none" stroke="#336791" strokeWidth="2" />
      <text x="320" y="225" fontSize="10" fill="#336791" textAnchor="middle" fontWeight="bold">PostgreSQL</text>
      <line x1="290" y1="220" x2="250" y2="170" stroke="#336791" strokeWidth="2" />
      
      {/* Data flow indicators */}
      <circle cx="130" cy="105" r="3" fill="#96bf48" />
      <circle cx="270" cy="105" r="3" fill="#009688" />
      <circle cx="130" cy="195" r="3" fill="#000000" />
      <circle cx="270" cy="195" r="3" fill="#336791" />
    </svg>
  );
}

