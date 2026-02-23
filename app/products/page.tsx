import Link from 'next/link';
import { IntegrationSketch, WarehouseSketch, DashboardSketch } from '@/components/Sketches';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | Ship-Right WMS',
  description: 'Explore our comprehensive warehouse management system products: FastAPI backend and Next.js frontend.',
};

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Warehouse Management Solution
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with modern technologies for maximum performance and scalability
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Backend Product */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6">
                <h2 className="text-3xl font-bold text-white mb-2">FastAPI Backend</h2>
                <p className="text-green-50">Robust REST API for warehouse operations</p>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <IntegrationSketch />
                </div>
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Core Technologies</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        FastAPI (Python 3.8+)
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        PostgreSQL 12+ / SQLite
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        SQLAlchemy 2.0 ORM
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        JWT Authentication
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        WebSocket Support
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Key Features</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• RESTful API with OpenAPI docs</li>
                      <li>• Real-time WebSocket updates</li>
                      <li>• Role-based access control</li>
                      <li>• Comprehensive error handling</li>
                      <li>• Database migration support</li>
                      <li>• Health check endpoints</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">API Capabilities</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Inventory management endpoints</li>
                      <li>• Order processing APIs</li>
                      <li>• Picking batch operations</li>
                      <li>• Purchase order management</li>
                      <li>• Warehouse analytics</li>
                      <li>• Shopify integration</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Performance:</strong> Handles 1,000+ orders/day, 50+ concurrent pickers, 
                    &lt;100ms average API response time
                  </p>
                </div>
              </div>
            </div>

            {/* Frontend Product */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
                <h2 className="text-3xl font-bold text-white mb-2">Next.js Frontend</h2>
                <p className="text-blue-50">Modern, responsive web application</p>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <DashboardSketch />
                </div>
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Core Technologies</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Next.js 14 (App Router)
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        TypeScript
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Tailwind CSS
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        React 18
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        WebSocket Client
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Key Features</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Server-side rendering (SSR)</li>
                      <li>• Real-time updates via WebSocket</li>
                      <li>• Bluetooth scanner integration</li>
                      <li>• Responsive design (tablet-optimized)</li>
                      <li>• Role-based UI components</li>
                      <li>• Type-safe API integration</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Pages & Modules</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Dashboard with real-time metrics</li>
                      <li>• Order management interface</li>
                      <li>• Picking system with workflows</li>
                      <li>• Inventory management</li>
                      <li>• Warehouse 3D visualization</li>
                      <li>• Settings & user management</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Performance:</strong> Supports 1000+ items per table, &lt;1s real-time latency, 
                    5 concurrent WebSocket connections
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Overview */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">System Architecture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
                  <WarehouseSketch />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Backend API</h3>
                <p className="text-sm text-gray-600">
                  FastAPI REST endpoints with WebSocket support for real-time communication
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
                  <IntegrationSketch />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Database</h3>
                <p className="text-sm text-gray-600">
                  PostgreSQL with SQLAlchemy ORM for reliable data persistence
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
                  <DashboardSketch />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Frontend</h3>
                <p className="text-sm text-gray-600">
                  Next.js application with TypeScript for type-safe development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

