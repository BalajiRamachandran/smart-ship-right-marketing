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
    "Smart Ship Right is a warehouse management system that helps e-commerce teams pick, pack, and ship orders with accuracy. Real-time inventory, Shopify and ShipStation integration, SIB/MIB batch picking, mobile barcode scanning, and contract management.",
  keywords: [
    "warehouse management system",
    "WMS",
    "pick pack ship",
    "inventory management",
    "order fulfillment",
    "Shopify WMS",
    "ShipStation integration",
    "barcode scanning",
    "batch picking",
    "e-commerce fulfillment",
    "contract management",
  ],
  authors: [{ name: "Smart Ship Right" }],
  openGraph: {
    title: "Smart Ship Right | Pick, Pack & Ship with Accuracy",
    description:
      "Warehouse management system for e-commerce. Real-time inventory, batch picking, shipping labels, and contract management in one platform.",
    type: "website",
    siteName: "Smart Ship Right",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakarta.variable} antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
