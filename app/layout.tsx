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
  title: "Smart Ship Right | Pick, Pack & Ship with Accuracy",
  description:
    "Smart Ship Right is a warehouse management system for Shopify merchants. Real-time inventory, batch picking, shipping labels, and automation — all synced with your store.",
  keywords: [
    "warehouse management system",
    "WMS",
    "pick pack ship",
    "Shopify WMS",
    "ShipStation integration",
    "inventory management",
    "order fulfillment",
    "barcode scanning",
    "batch picking",
    "e-commerce fulfillment",
    "shipping labels",
    "warehouse automation",
  ],
  authors: [{ name: "Smart Ship Right" }],
  metadataBase: new URL("https://smartshipright.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Smart Ship Right | Pick, Pack & Ship with Accuracy",
    description:
      "Warehouse management system for Shopify merchants. Real-time inventory, batch picking, shipping labels, and automation.",
    type: "website",
    siteName: "Smart Ship Right",
    url: "https://smartshipright.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Smart Ship Right",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Warehouse management system for Shopify merchants. Real-time inventory, batch picking, shipping labels, and automation.",
  url: "https://smartshipright.com",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "99",
    highPrice: "249",
    offerCount: "3",
  },
  featureList: [
    "Real-time inventory management",
    "Single and multi batch picking",
    "ShipStation shipping labels",
    "Shopify bidirectional sync",
    "Barcode scanning",
    "Packing slips (PDF, HTML, Thermal)",
    "Backorder tracking",
    "Automation rules engine",
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
