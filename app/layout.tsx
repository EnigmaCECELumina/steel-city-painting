import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Steel City Painting & Handyman - Hamilton, ON",
  description: "15+ years of trusted interior & exterior painting and handyman services in Hamilton, ON. Owner-operated, direct contact with Brent.",
  keywords: ["Hamilton painter", "Hamilton handyman", "interior painting", "exterior painting", "drywall repair"],
  authors: [{ name: "Brent - Steel City Painting & Handyman" }],
  creator: "Steel City Painting & Handyman",
  metadataBase: new URL("https://steelcityservices.ca/"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://steelcityservices.ca/",
    title: "Steel City Painting & Handyman - Hamilton, ON",
    description: "Professional interior & exterior painting and handyman services in Hamilton, Ontario.",
    siteName: "Steel City Painting & Handyman",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steel City Painting & Handyman - Hamilton, ON",
    description: "Professional painting and handyman services in Hamilton, ON.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} data-theme="dark" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
