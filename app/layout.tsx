import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "Smart Ship Right | Warehouse Management for Shopify",
    template: "%s | Smart Ship Right",
  },
  description:
    "Smart Ship Right is a warehouse management system built for Shopify merchants. Real-time inventory, batch picking, barcode scanning, shipping labels, and automation — all synced with your store.",
  keywords: [
    "warehouse management system",
    "WMS for Shopify",
    "Shopify WMS",
    "pick pack ship",
    "inventory management software",
    "order fulfillment software",
    "batch picking",
    "barcode scanning warehouse",
    "ShipStation integration",
    "shipping label software",
    "e-commerce fulfillment",
    "warehouse automation",
    "inventory tracking",
    "packing slip generator",
    "Shopify inventory sync",
    "dropship management",
    "cycle counting software",
    "warehouse barcode system",
    "order management system",
    "ShipHero alternative",
  ],
  authors: [{ name: "Smart Ship Right" }],
  creator: "Smart Ship Right",
  publisher: "Smart Ship Right",
  metadataBase: new URL("https://www.smartshipright.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Smart Ship Right | Warehouse Management for Shopify",
    description:
      "Pick, pack, and ship with zero errors. Real-time inventory, batch picking, shipping labels, and Shopify sync in one platform.",
    type: "website",
    siteName: "Smart Ship Right",
    locale: "en_US",
    images: [
      {
        url: "/screenshots/dashboard.png",
        width: 1440,
        height: 900,
        alt: "Smart Ship Right WMS Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Ship Right | Warehouse Management for Shopify",
    description:
      "Pick, pack, and ship with zero errors. Built for Shopify merchants.",
    images: ["/screenshots/dashboard.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Smart Ship Right",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Warehouse management system for Shopify merchants. Pick, pack, ship with real-time inventory and barcode scanning.",
  url: "https://www.smartshipright.com",
  offers: {
    "@type": "Offer",
    price: "99",
    priceCurrency: "USD",
    priceValidUntil: "2027-12-31",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "12",
  },
  featureList: [
    "Shopify Integration",
    "Batch Picking",
    "Barcode Scanning",
    "Shipping Labels",
    "Inventory Management",
    "Automation Rules",
    "Packing Slips",
    "Cycle Counting",
    "Dropship Support",
    "Direct-to-Printer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${plusJakarta.variable} antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
