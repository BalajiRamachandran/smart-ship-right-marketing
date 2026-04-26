import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Account & Data Deletion — Smart Ship Right',
  description: 'How to request deletion of your Smart Ship Right account and associated data.',
};

export default function AccountDeletionPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Account & Data Deletion
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          Smart Ship Right — Warehouse Management System
        </p>

        <div className="prose prose-slate max-w-none">
          <h2>How to Request Account Deletion</h2>
          <p>
            Smart Ship Right accounts are managed by your organization&apos;s administrator.
            To request deletion of your account and associated data, follow these steps:
          </p>

          <ol>
            <li>
              <strong>Contact your administrator</strong> — Ask your organization&apos;s
              Smart Ship Right admin to remove your account from Settings → Users.
            </li>
            <li>
              <strong>Or email us directly</strong> — Send a request to{' '}
              <a href="mailto:support@smartshipright.com" className="text-blue-600 hover:underline">
                support@smartshipright.com
              </a>{' '}
              with the subject line &quot;Account Deletion Request&quot; and include your
              username and the organization name.
            </li>
            <li>
              <strong>We will process your request</strong> within 30 days and confirm
              deletion via email.
            </li>
          </ol>

          <h2>What Data Is Deleted</h2>
          <p>When your account is deleted, the following data is permanently removed:</p>
          <ul>
            <li>Your user profile (username, email, role)</li>
            <li>Login credentials</li>
            <li>User preferences and settings</li>
            <li>Session and authentication tokens</li>
          </ul>

          <h2>What Data Is Retained</h2>
          <p>
            The following data may be retained for business and compliance purposes,
            but will no longer be linked to your personal account:
          </p>
          <ul>
            <li>
              <strong>Order history and audit logs</strong> — Required for business
              record-keeping and regulatory compliance. Your name in these records
              will be anonymized.
            </li>
            <li>
              <strong>Inventory change logs</strong> — Required for audit trail
              integrity. References to your user ID will be anonymized.
            </li>
          </ul>
          <p>
            Retained data is kept for the duration required by applicable business
            and tax regulations (typically 7 years), after which it is permanently deleted.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about data deletion or privacy, contact us at{' '}
            <a href="mailto:support@smartshipright.com" className="text-blue-600 hover:underline">
              support@smartshipright.com
            </a>.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-400">
          Last updated: April 2026
        </div>
      </div>
    </main>
  );
}
