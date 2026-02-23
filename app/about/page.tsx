import { WarehouseSketch, IntegrationSketch } from '@/components/Sketches';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Ship-Right WMS',
  description: 'Learn about Ship-Right, a modern warehouse management system built for efficiency, scalability, and reliability.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Ship-Right
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern warehouse management built for the future
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                Ship-Right was created to provide a comprehensive, modern warehouse management system 
                that combines the power of enterprise-grade solutions with the flexibility and 
                accessibility of open-source software.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We believe that warehouse operations should be streamlined, efficient, and scalable. 
                Our platform is designed to help businesses of all sizes optimize their inventory 
                management, order processing, and fulfillment workflows.
              </p>
              <p className="text-lg text-gray-600">
                Built with industry best practices and modern technologies, Ship-Right delivers 
                the reliability and performance your warehouse operations demand.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <WarehouseSketch />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built with Modern Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging the best tools and frameworks for maximum performance and developer experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'FastAPI', desc: 'High-performance Python framework' },
              { name: 'Next.js 14', desc: 'React framework with SSR' },
              { name: 'PostgreSQL', desc: 'Enterprise-grade database' },
              { name: 'TypeScript', desc: 'Type-safe development' },
              { name: 'Tailwind CSS', desc: 'Utility-first styling' },
              { name: 'WebSocket', desc: 'Real-time communication' },
              { name: 'JWT Auth', desc: 'Secure authentication' },
              { name: 'SQLAlchemy', desc: 'Python ORM' },
            ].map((tech) => (
              <div key={tech.name} className="bg-white rounded-lg p-6 shadow-sm text-center">
                <h3 className="font-semibold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance</h3>
              <p className="text-gray-600">
                Optimized for speed and efficiency. Handle thousands of orders and SKUs with ease.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliability</h3>
              <p className="text-gray-600">
                Built with enterprise-grade technologies for maximum uptime and data integrity.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalability</h3>
              <p className="text-gray-600">
                Designed to grow with your business. From startup to enterprise scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">75%</div>
              <div className="text-blue-100">Feature Complete</div>
              <p className="text-sm text-blue-200 mt-2">Core warehouse operations fully functional</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Orders/Day Capacity</div>
              <p className="text-sm text-blue-200 mt-2">Tested and optimized for high volume</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">&lt;100ms</div>
              <div className="text-blue-100">Average API Response</div>
              <p className="text-sm text-blue-200 mt-2">Lightning-fast performance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

