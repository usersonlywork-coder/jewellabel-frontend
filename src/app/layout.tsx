import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jewel Label - Launch Your Diamond Jewelry Brand in 60 Days",
  description: "A premium brand. Certified diamonds. Zero inventory. Jewel Label turns your vision into a living, breathing jewelry brand — built on world-class technology, trusted certification, and a seamless supply chain.",
  keywords: "diamond jewelry, lab-grown diamonds, jewelry brand, e-commerce, certified diamonds, luxury jewelry",
  authors: [{ name: "Jewel Label" }],
  openGraph: {
    title: "Jewel Label - Launch Your Diamond Jewelry Brand in 60 Days",
    description: "Create, inspire, and sell diamond jewelry without ever touching stock.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
