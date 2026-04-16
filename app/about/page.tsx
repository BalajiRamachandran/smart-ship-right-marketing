import { WarehouseSketch } from '@/components/Sketches';
import { StorysetIllustration } from '@/components/StorysetIllustration';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Smart Ship Right',
  description: 'Learn about Smart Ship Right — a modern warehouse management and contract operations platform built for e-commerce teams.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <PageHeader
        title="About Smart Ship Right"
        description="Built for warehouse teams that need real-time visibility, reliable fulfillment, and streamlined contract operations."
      />

      {/* Mission */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-slate-900 mb-6">Our mission</h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Smart Ship Right was built to give e-commerce teams a warehouse management system that combines
                enterprise-grade reliability with the simplicity of modern software. No bloated interfaces,
                no six-month implementations.
              </p>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                We believe warehouse operations should be fast, accurate, and visible. Every feature — from
                batch picking to contract management — is designed to reduce errors, save time, and scale
                with your business.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our platform handles the full lifecycle: inventory control, order processing, picking, packing,
                shipping, and vendor contract management — all in one place.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <StorysetIllustration name="warehouse" className="max-h-52" />
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <WarehouseSketch />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Technology */}
      <Section alt>
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">Built with modern technology</h2>
            <p className="mx-auto max-w-3xl text-lg text-slate-600">
              We chose each tool for performance, reliability, and developer experience.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'FastAPI', desc: 'High-performance Python API' },
              { name: 'Next.js 15', desc: 'React framework with SSR' },
              { name: 'PostgreSQL', desc: 'Enterprise-grade database' },
              { name: 'TypeScript', desc: 'Type-safe development' },
              { name: 'Tailwind CSS', desc: 'Utility-first styling' },
              { name: 'WebSocket', desc: 'Real-time communication' },
              { name: 'Supabase', desc: 'Auth & database platform' },
              { name: 'Google Gemini', desc: 'AI contract analysis' },
            ].map((tech) => (
              <div key={tech.name} className="card-hover rounded-xl border border-slate-200 bg-white p-5 text-center">
                <h3 className="font-semibold text-slate-900 mb-1">{tech.name}</h3>
                <p className="text-sm text-slate-500">{tech.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-slate-900">What we stand for</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                ),
                title: 'Performance',
                desc: 'Optimized for speed. Handle thousands of orders and SKUs with sub-100ms API responses and real-time WebSocket updates.',
                color: 'blue',
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                ),
                title: 'Reliability',
                desc: 'Enterprise-grade PostgreSQL, JWT authentication, role-based access, and append-only audit logs. Your data is safe.',
                color: 'green',
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                ),
                title: 'Scalability',
                desc: 'From 10 orders a day to 1,000+. Multi-warehouse, multi-user, and multi-channel — designed to grow with you.',
                color: 'purple',
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className={`w-16 h-16 bg-${value.color}-50 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: '1,000+', label: 'Orders / Day Capacity', sub: 'Tested and optimized for high volume' },
              { value: '<100ms', label: 'Average API Response', sub: 'Fast enough for real-time warehouse ops' },
              { value: '50+', label: 'Concurrent Pickers', sub: 'Multi-user picking without conflicts' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-blue-200 font-medium">{stat.label}</div>
                <p className="text-sm text-blue-300 mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Support */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-slate-900">Customer support you can count on</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                ),
                title: 'Email & Chat',
                desc: 'Reach us anytime. Most tickets answered within 24 hours.',
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                ),
                title: 'Free Onboarding',
                desc: 'Dedicated onboarding call to configure your warehouse and train your team.',
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                ),
                title: 'Documentation',
                desc: 'Comprehensive docs, API reference, and guides for every feature.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/contact" size="lg">Get in touch</Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
