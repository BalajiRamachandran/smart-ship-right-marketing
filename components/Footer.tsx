import Image from 'next/image';
import Link from 'next/link';
import { Container } from './ui/Container';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image src="/logo.svg" alt="Smart Ship Right" width={182} height={40} className="h-9 w-auto brightness-200" />
            </div>
            <p className="mb-6 text-sm leading-relaxed text-slate-400">
              Warehouse management system for Shopify merchants. Pick, pack, ship with real-time inventory and barcode scanning.
            </p>
            <a href="mailto:contact@smartshipright.com" className="text-slate-400 hover:text-white transition-colors" aria-label="Email us">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </a>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Product</h3>
            <ul className="space-y-3">
              {[
                { href: '/features', label: 'Features' },
                { href: '/pricing', label: 'Pricing' },
                { href: '/how-it-works', label: 'How It Works' },
                { href: '/mobile', label: 'Mobile App' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contact@smartshipright.com" className="text-sm text-slate-400 hover:text-white transition-colors">
                  contact@smartshipright.com
                </a>
              </li>
              <li className="text-sm text-slate-400">Response within 24 hours</li>
              <li className="text-sm text-slate-400">Free onboarding included</li>
            </ul>
            <div className="mt-6 rounded-lg bg-slate-800 p-4">
              <p className="text-xs font-medium text-slate-300 mb-1">Ready to get started?</p>
              <Link href="/contact" className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                Start free trial →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Smart Ship Right. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Built for Shopify merchants
          </p>
        </div>
      </Container>
    </footer>
  );
}
