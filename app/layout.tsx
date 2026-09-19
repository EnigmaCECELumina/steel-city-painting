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
  title: "Steel City Painting & Handyman Services | Hamilton's Premier General Contractor",
  description: "Premier Artistry in Restoration & Repair for Hamilton Properties. Delivering Uncompromising Quality for Discerning Properties Across Ontario. Master Tradesman & General Contractor Services.",
  keywords: ["Hamilton general contractor", "enterprise painting services", "luxury home restoration", "commercial property maintenance", "architectural painting", "custom millwork", "historic restoration", "Ontario general contractor", "Hamilton property restoration"],
  authors: [{ name: "Steel City Painting & Handyman Services" }],
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
    title: 'Steel City Painting & Handyman Services | Hamilton Premier General Contractor',
    description: 'Premier Artistry in Restoration & Repair for Hamilton Properties. Delivering Uncompromising Quality for Discerning Properties Across Ontario.',
    siteName: 'Steel City Painting & Handyman Services',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Steel City Painting & Handyman Services - Hamilton Premier General Contractor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Steel City Painting & Handyman Services | Hamilton Premier General Contractor',
    description: 'Premier Artistry in Restoration & Repair for Hamilton Properties. Delivering Uncompromising Quality for Discerning Properties Across Ontario.',
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
