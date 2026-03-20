import Image from 'next/image';
import Link from 'next/link';
import { Container } from './ui/Container';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Image src="/logo.svg" alt="Smart Ship Right" width={182} height={40} className="h-10 w-auto" />
            </div>
            <p className="mb-4 max-w-md text-gray-400">
              From order import to shipment, Smart Ship Right helps operations teams run inventory, picking, packing,
              and shipping in one workflow.
            </p>
            <p className="text-sm text-gray-500">Illustrations by unDraw</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/mobile" className="hover:text-white transition-colors">
                  Mobile App
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="mailto:contact@shipright.com" className="hover:text-white transition-colors">Email Support</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Smart Ship Right. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

