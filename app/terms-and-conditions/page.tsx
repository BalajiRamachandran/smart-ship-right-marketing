import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Read the terms and conditions for using Smart Ship Right.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-white">
      <PageHeader
        title="Terms and Conditions"
        description="These terms govern your use of the Smart Ship Right website and software services."
      />

      <Section>
        <Container className="max-w-4xl">
          <div className="space-y-8 text-slate-700">
            <p className="text-sm text-slate-500">Last updated: April 26, 2026</p>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-slate-900">1. Acceptance of terms</h2>
              <p>
                By accessing or using Smart Ship Right, you agree to these terms and all applicable laws. If you do not agree,
                do not use the service.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-slate-900">2. Service usage</h2>
              <p>
                You agree to use the platform only for lawful business purposes. You are responsible for account credentials,
                user permissions, and activity performed under your account.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-slate-900">3. Subscription and billing</h2>
              <p>
                Paid plans are billed based on your selected subscription. Fees are non-refundable unless required by law or
                otherwise stated in a separate written agreement.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-slate-900">4. Intellectual property</h2>
              <p>
                Smart Ship Right and all related content, trademarks, and software are owned by Smart Ship Right or its
                licensors. No rights are granted except those explicitly stated in these terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-slate-900">5. Disclaimer and liability</h2>
              <p>
                The service is provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the maximum extent permitted by law, Smart
                Ship Right disclaims implied warranties and is not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-slate-900">6. Termination</h2>
              <p>
                We may suspend or terminate access for violations of these terms, security concerns, or misuse. You may stop
                using the service at any time.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-slate-900">7. Contact</h2>
              <p>
                If you have questions about these terms, contact{' '}
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
