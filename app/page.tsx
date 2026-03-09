import Link from 'next/link';
import { WarehouseSketch, InventorySketch, PickingSketch, DashboardSketch } from '@/components/Sketches';
import { StorysetIllustration } from '@/components/StorysetIllustration';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Modern Warehouse
                <span className="text-blue-600"> Management</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Streamline your warehouse operations with our comprehensive WMS solution. 
                Built for efficiency, scalability, and reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Get Started
                </Link>
                <Link
                  href="/features"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:flex flex-col gap-6">
              <StorysetIllustration name="hero" priority className="rounded-xl" />
              <div className="rounded-xl border border-slate-200/80 bg-white/80 p-4 shadow-lg">
                <WarehouseSketch />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Manage Your Warehouse
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to optimize your operations and boost productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="mb-5 flex flex-col gap-4">
                <StorysetIllustration name="inventory" className="max-h-36" />
                <InventorySketch />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Inventory Management</h3>
              <p className="text-gray-600">
                Real-time tracking with location-based storage. Manage 10,000+ SKUs across multiple warehouse locations.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="mb-5 flex flex-col gap-4">
                <StorysetIllustration name="picking" className="max-h-36" />
                <PickingSketch />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Picking</h3>
              <p className="text-gray-600">
                Optimized picking routes with single-item and multi-item batch workflows. Increase picker efficiency by 40%.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="mb-5 flex flex-col gap-4">
                <StorysetIllustration name="dashboard" className="max-h-36" />
                <DashboardSketch />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Dashboard</h3>
              <p className="text-gray-600">
                Comprehensive analytics and monitoring. Track orders, inventory, and warehouse utilization in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Warehouse?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join forward-thinking companies using Smart Ship Right to streamline their operations
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
