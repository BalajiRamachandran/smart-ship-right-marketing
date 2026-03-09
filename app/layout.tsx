import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Smart Ship Right | Modern Warehouse Management System",
  description: "Comprehensive warehouse management system built for efficiency, scalability, and reliability. Streamline your operations with our modern WMS solution.",
  keywords: ["warehouse management", "WMS", "inventory management", "order fulfillment", "picking system"],
  authors: [{ name: "Smart Ship Right Team" }],
  openGraph: {
    title: "Smart Ship Right | Modern Warehouse Management System",
    description: "Comprehensive warehouse management system built for efficiency, scalability, and reliability.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
