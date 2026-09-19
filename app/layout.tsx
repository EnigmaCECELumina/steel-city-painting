import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { JsonLd } from "@/components/JsonLd";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Steel City Painting & Handyman Services | Solo Craftsman in Hamilton, ON",
  description: "Residential interior painting, kitchen cabinet spray refinishing, and drywall repairs personally completed by master tradesman Brent in Hamilton & Greater Golden Horseshoe. Licensed & $2M Insured.",
  keywords: ["Hamilton painter", "solo painting contractor", "cabinet spray refinishing Hamilton", "drywall repair Hamilton", "interior house painting Dundas", "Ancaster painter", "residential handyman Hamilton", "WSIB insured painter"],
  authors: [{ name: "Brent - Steel City Painting" }],
  creator: "Steel City Painting & Handyman Services",
  publisher: "Steel City Painting & Handyman Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://steelcityservices.ca/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://steelcityservices.ca',
    title: 'Steel City Painting & Handyman Services | Solo Craftsman in Hamilton, ON',
    description: 'Residential interior painting, cabinet refinishing, and drywall repairs personally completed by master tradesman Brent. Licensed & $2M Insured.',
    siteName: 'Steel City Painting & Handyman Services',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Steel City Painting & Handyman Services - Solo Craftsman in Hamilton, ON',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Steel City Painting & Handyman Services | Solo Craftsman in Hamilton, ON',
    description: 'Residential interior painting, cabinet refinishing, and drywall repairs personally completed by master tradesman Brent. Licensed & $2M Insured.',
    images: ['/og-image.jpg'],
    creator: '@steelcityservices',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} h-full antialiased`}
      data-theme="slate-brass"
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <JsonLd />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
