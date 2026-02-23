import { WarehouseSketch, InventorySketch, PickingSketch, OrderSketch, DashboardSketch, IntegrationSketch } from '@/components/Sketches';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features | Ship-Right WMS',
  description: 'Comprehensive features for modern warehouse management including detailed batch picking processes (single-item and multi-item), ShipStation shipping integration, inventory tracking, order processing, and real-time analytics.',
};

export default function FeaturesPage() {
  const features = [
    {
      title: 'Inventory Management',
      description: 'Real-time tracking with location-based storage. Multi-location inventory support with reserved quantity management and automatic capacity constraint validation.',
      sketch: InventorySketch,
      details: [
        'Real-time inventory tracking',
        'Multi-location inventory support',
        'Reserved quantity management',
        'Automatic capacity validation',
        'Stock movement audit trail',
        '10,868+ SKUs supported',
      ],
    },
    {
      title: 'Order Processing',
      description: 'Complete order lifecycle management from creation to fulfillment. Support for priority handling, order filtering, and real-time status updates.',
      sketch: OrderSketch,
      details: [
        'Complete order lifecycle',
        'Status tracking (pending → shipped)',
        'Priority handling (normal, high, urgent)',
        'Customer information management',
        'Order filtering and search',
        'Real-time order updates',
      ],
    },
    {
      title: 'Advanced Picking Operations',
      description: 'Comprehensive batch picking workflows designed for maximum efficiency. Support for both single-item and multi-item batch processes with intelligent route optimization and real-time validation.',
      sketch: PickingSketch,
      details: [
        'Single-item batch (SIB) workflow',
        'Multi-item batch (MIB) workflow',
        'Location-optimized pick lists',
        'Barcode scanning validation',
        'Tote assignment and tracking',
        'Batch reservation system',
      ],
      expandedContent: {
        singleItemBatch: {
          title: 'Single-Item Batch (SIB) Picking Process',
          description: 'Ideal for high-volume orders with single SKU requirements. Streamlines picking operations by grouping orders with identical items into efficient batches.',
          steps: [
            {
              step: '1. Batch Creation',
              detail: 'System automatically groups pending orders containing the same SKU into a single batch. Configurable batch size limits ensure optimal picker workload.',
            },
            {
              step: '2. Batch Assignment',
              detail: 'Warehouse manager or system assigns batches to available pickers. Real-time batch status tracking prevents double-assignment and ensures accountability.',
            },
            {
              step: '3. Location Optimization',
              detail: 'Pick list is automatically sorted by warehouse location (Zone → X coordinate → Level) to minimize travel time and maximize picking efficiency.',
            },
            {
              step: '4. Picking Execution',
              detail: 'Picker navigates through optimized route, scans barcode at each location to validate item and quantity. System provides real-time feedback on accuracy.',
            },
            {
              step: '5. Tote Management',
              detail: 'Each order in the batch is assigned to a specific tote. Picker scans tote barcode before placing items to ensure correct order-to-tote mapping.',
            },
            {
              step: '6. Batch Completion',
              detail: 'Upon completion, system validates all items, updates inventory in real-time, and marks orders as ready for packing. Automatic reservation release prevents stock conflicts.',
            },
          ],
          benefits: [
            'Reduces travel time by up to 40%',
            'Minimizes picking errors through barcode validation',
            'Enables parallel picking with multiple pickers',
            'Real-time inventory updates prevent overselling',
          ],
        },
        multiItemBatch: {
          title: 'Multi-Item Batch (MIB) Picking Process',
          description: 'Perfect for complex orders with multiple SKUs. Groups multiple orders into a single batch, allowing pickers to collect all items in one efficient pass through the warehouse.',
          steps: [
            {
              step: '1. Intelligent Batching',
              detail: 'System analyzes order characteristics (item count, locations, priority) and groups compatible orders into batches. Considers warehouse layout and picker capacity.',
            },
            {
              step: '2. Route Optimization',
              detail: 'Advanced algorithm creates optimal picking route that minimizes backtracking. Groups items by zone and level, ensuring efficient warehouse traversal.',
            },
            {
              step: '3. Multi-Order Pick List',
              detail: 'Picker receives consolidated pick list showing all items needed for all orders in the batch. Each item clearly marked with destination order and tote assignment.',
            },
            {
              step: '4. Sequential Picking',
              detail: 'Picker follows optimized route, scanning each location and item barcode. System validates quantity and ensures items are placed in correct order totes.',
            },
            {
              step: '5. Order Segregation',
              detail: 'Items are automatically sorted into correct totes based on order assignment. Visual indicators and barcode scanning prevent cross-contamination between orders.',
            },
            {
              step: '6. Quality Validation',
              detail: 'Before batch completion, system verifies all items are picked correctly. Missing or incorrect items trigger alerts for immediate resolution.',
            },
            {
              step: '7. Batch Finalization',
              detail: 'Completed batch releases inventory reservations, updates order statuses, and prepares totes for packing station. Real-time dashboard reflects completion status.',
            },
          ],
          benefits: [
            'Handles complex multi-SKU orders efficiently',
            'Reduces warehouse traffic and congestion',
            'Improves picker productivity by 50%+',
            'Ensures order accuracy through validation',
          ],
        },
      },
    },
    {
      title: 'Warehouse Management',
      description: '3D warehouse visualization with location management. Track capacity, utilization, and optimize space allocation.',
      sketch: WarehouseSketch,
      details: [
        '3D warehouse mapping',
        'Location format: {Zone}{X}-L{Y}',
        '5 zones (A-E), 4 levels (L1-L4)',
        'Location types (shelf, floor, staging)',
        'Capacity tracking',
        'Utilization analytics',
      ],
    },
    {
      title: 'Real-time Dashboard',
      description: 'Comprehensive analytics and monitoring. Track orders, inventory, batches, and warehouse utilization in real-time.',
      sketch: DashboardSketch,
      details: [
        'Real-time metrics display',
        'Key performance indicators',
        'Recent orders tracking',
        'Low stock alerts',
        'WebSocket integration',
        'Role-based dashboards',
      ],
    },
    {
      title: 'E-commerce Integration',
      description: 'Seamless integration with Shopify and other e-commerce platforms. Automatic product sync, order import, and fulfillment updates.',
      sketch: IntegrationSketch,
      details: [
        'Shopify integration',
        'Product synchronization',
        'Order import automation',
        'Inventory variance checking',
        'Fulfillment management',
        'Webhook support',
      ],
    },
    {
      title: 'ShipStation Integration',
      description: 'Seamless shipping and tracking integration with ShipStation. Automate label creation, carrier selection, and real-time tracking updates across your entire fulfillment workflow.',
      sketch: IntegrationSketch,
      details: [
        'Automated label generation',
        'Multi-carrier support',
        'Real-time tracking sync',
        'Shipping rate comparison',
        'Order fulfillment automation',
        'Tracking number management',
      ],
      expandedContent: {
        shipping: {
          title: 'Automated Shipping Process',
          description: 'Streamline your shipping operations with direct ShipStation integration. From order fulfillment to label printing, automate every step of the shipping process.',
          steps: [
            {
              step: '1. Order Fulfillment',
              detail: 'Once orders are picked and packed in Ship-Right, system automatically marks orders as ready for shipment. Packing information (weight, dimensions, items) is captured and prepared for ShipStation.',
            },
            {
              step: '2. ShipStation Sync',
              detail: 'Fulfilled orders are automatically synchronized with ShipStation via API. Order details, customer information, and shipping preferences are seamlessly transferred.',
            },
            {
              step: '3. Carrier Selection',
              detail: 'ShipStation compares rates across multiple carriers (USPS, FedEx, UPS, DHL, etc.) based on package details and delivery requirements. System can auto-select best rate or present options for manual selection.',
            },
            {
              step: '4. Label Generation',
              detail: 'Shipping labels are automatically generated in ShipStation with all required information. Labels can be printed directly from Ship-Right interface or through ShipStation dashboard.',
            },
            {
              step: '5. Tracking Number Capture',
              detail: 'Upon label creation, tracking numbers are automatically captured and stored in Ship-Right. System updates order status to "shipped" and associates tracking information.',
            },
            {
              step: '6. Customer Notification',
              detail: 'Tracking numbers are automatically synced back to your e-commerce platform (Shopify, WooCommerce, etc.) for customer notifications. Customers receive shipping confirmations with tracking links.',
            },
          ],
          benefits: [
            'Eliminates manual data entry',
            'Reduces shipping errors by 95%',
            'Saves 2-3 hours daily on shipping tasks',
            'Access to discounted carrier rates',
          ],
        },
        tracking: {
          title: 'Real-Time Tracking & Updates',
          description: 'Comprehensive tracking integration keeps you and your customers informed at every stage of the shipping process.',
          features: [
            {
              feature: 'Automatic Tracking Sync',
              detail: 'ShipStation automatically updates tracking status as packages move through carrier networks. Ship-Right receives real-time updates via webhook integration.',
            },
            {
              feature: 'Multi-Carrier Tracking',
              detail: 'Unified tracking interface supports all major carriers. Single view shows status across USPS, FedEx, UPS, DHL, and regional carriers.',
            },
            {
              feature: 'Customer Portal Integration',
              detail: 'Tracking information automatically appears in customer accounts on your e-commerce platform. Customers can track orders without leaving your site.',
            },
            {
              feature: 'Delivery Confirmation',
              detail: 'Upon delivery, ShipStation captures delivery confirmation and signature (if required). Ship-Right automatically updates order status to "delivered" and triggers post-delivery workflows.',
            },
            {
              feature: 'Exception Handling',
              detail: 'System alerts you to shipping exceptions (delays, failed delivery attempts, address issues) in real-time. Proactive notifications enable quick resolution.',
            },
            {
              feature: 'Analytics & Reporting',
              detail: 'Comprehensive shipping analytics track delivery times, carrier performance, shipping costs, and customer satisfaction metrics. Export reports for business intelligence.',
            },
          ],
        },
        integrationDetails: {
          title: 'Integration Capabilities',
          features: [
            'RESTful API integration with ShipStation',
            'Bi-directional data synchronization',
            'Webhook support for real-time updates',
            'Bulk shipping operations',
            'Custom shipping rules and automation',
            'Multi-warehouse shipping support',
            'International shipping support',
            'Insurance and signature options',
          ],
        },
      },
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Warehouses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to streamline operations, boost productivity, and scale your warehouse management
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {features.map((feature, index) => {
              const SketchComponent = feature.sketch;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={feature.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                    <ul className="space-y-3 mb-8">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Expanded Content for Picking Operations */}
                    {feature.expandedContent?.singleItemBatch && (
                      <div className="mt-8 space-y-8">
                        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.expandedContent.singleItemBatch.title}</h3>
                          <p className="text-gray-700 mb-6">{feature.expandedContent.singleItemBatch.description}</p>
                          <div className="space-y-4 mb-6">
                            {feature.expandedContent.singleItemBatch.steps.map((stepItem, stepIdx) => (
                              <div key={stepIdx} className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                                <h4 className="font-semibold text-gray-900 mb-2">{stepItem.step}</h4>
                                <p className="text-gray-600 text-sm">{stepItem.detail}</p>
                              </div>
                            ))}
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {feature.expandedContent.singleItemBatch.benefits.map((benefit, benefitIdx) => (
                              <div key={benefitIdx} className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-sm text-gray-700">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.expandedContent.multiItemBatch.title}</h3>
                          <p className="text-gray-700 mb-6">{feature.expandedContent.multiItemBatch.description}</p>
                          <div className="space-y-4 mb-6">
                            {feature.expandedContent.multiItemBatch.steps.map((stepItem, stepIdx) => (
                              <div key={stepIdx} className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                                <h4 className="font-semibold text-gray-900 mb-2">{stepItem.step}</h4>
                                <p className="text-gray-600 text-sm">{stepItem.detail}</p>
                              </div>
                            ))}
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {feature.expandedContent.multiItemBatch.benefits.map((benefit, benefitIdx) => (
                              <div key={benefitIdx} className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-sm text-gray-700">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Expanded Content for ShipStation Integration */}
                    {feature.expandedContent?.shipping && (
                      <div className="mt-8 space-y-8">
                        <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.expandedContent.shipping.title}</h3>
                          <p className="text-gray-700 mb-6">{feature.expandedContent.shipping.description}</p>
                          <div className="space-y-4 mb-6">
                            {feature.expandedContent.shipping.steps.map((stepItem, stepIdx) => (
                              <div key={stepIdx} className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                                <h4 className="font-semibold text-gray-900 mb-2">{stepItem.step}</h4>
                                <p className="text-gray-600 text-sm">{stepItem.detail}</p>
                              </div>
                            ))}
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {feature.expandedContent.shipping.benefits.map((benefit, benefitIdx) => (
                              <div key={benefitIdx} className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-sm text-gray-700">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.expandedContent.tracking.title}</h3>
                          <p className="text-gray-700 mb-6">{feature.expandedContent.tracking.description}</p>
                          <div className="space-y-4">
                            {feature.expandedContent.tracking.features.map((featureItem, featureIdx) => (
                              <div key={featureIdx} className="bg-white rounded-lg p-4 border-l-4 border-indigo-500">
                                <h4 className="font-semibold text-gray-900 mb-2">{featureItem.feature}</h4>
                                <p className="text-gray-600 text-sm">{featureItem.detail}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.expandedContent.integrationDetails.title}</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {feature.expandedContent.integrationDetails.features.map((integrationFeature, idx) => (
                              <div key={idx} className="flex items-start">
                                <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-sm text-gray-700">{integrationFeature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center">
                      <SketchComponent />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Additional Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Purchase Order Management',
              'Vendor Management',
              'Receiving Workflows',
              'Shipping Integration',
              'Bluetooth Scanner Support',
              'WebSocket Real-time Updates',
              'JWT Authentication',
              'Role-based Access Control',
              'Multi-warehouse Support',
              'Batch Automation',
              'Tote Management',
              'Alert System',
            ].map((capability) => (
              <div key={capability} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-600 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">{capability}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

