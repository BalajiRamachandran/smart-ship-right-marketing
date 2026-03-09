import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Smart Ship Right WMS',
  description: "Get in touch with the Smart Ship Right team. Ready to transform your warehouse operations? Let's discuss how Smart Ship Right can help your business.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

