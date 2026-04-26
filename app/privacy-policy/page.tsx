import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Smart Ship Right collects, uses, and protects your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <PageHeader
        title="Privacy Policy"
        description="This policy explains how Smart Ship Right handles personal data for website visitors and customers."
      />

      <Section>
        <Container className="max-w-4xl">
          <div className="space-y-8 text-slate-700">
            <p className="text-sm text-slate-500">Last updated: April 26, 2026</p>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-slate-900">1. Information we collect</h2>
              <p>
                We may collect contact details you submit through forms (such as name, email, company name, and message),
                product usage data required to operate the service, and technical information like browser type, IP address,
                and device data.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-slate-900">2. How we use information</h2>
              <p>
                We use data to provide and improve Smart Ship Right, respond to support requests, send operational notices,
                maintain security, and comply with legal obligations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-slate-900">3. Data sharing</h2>
              <p>
                We do not sell personal data. We may share data with trusted service providers that help us run the platform,
                process payments, or deliver support. These providers are required to protect your information.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-slate-900">4. Data retention</h2>
              <p>
                We keep personal data only as long as needed for legitimate business purposes, contract performance, and legal
                compliance. We delete or anonymize data when retention is no longer required.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-slate-900">5. Security</h2>
              <p>
                We use administrative, technical, and organizational safeguards designed to protect data. No system is
                completely secure, but we continually monitor and improve our controls.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-slate-900">6. Your rights</h2>
              <p>
                Depending on your location, you may have rights to access, correct, delete, or restrict processing of your
                personal data. You may also request a copy of your data.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-slate-900">7. Contact us</h2>
              <p>
                For privacy requests, email us at{' '}
                <a className="text-blue-600 hover:text-blue-700" href="mailto:contact@smartshipright.com">
                  contact@smartshipright.com
                </a>
                .
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </div>
  );
}
