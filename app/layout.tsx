import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Steel City Painting & Handyman Services | Hamilton, ON",
  description: "Owner-operated residential painting, drywall repair, trim work, and handyman services in Hamilton and surrounding communities. Brent brings 15+ years of hands-on experience.",
  keywords: ["Hamilton painter", "Hamilton handyman", "residential painting Hamilton", "drywall repair Hamilton", "interior painting Ancaster"],
  authors: [{ name: "Brent - Steel City Painting" }],
  creator: "Steel City Painting & Handyman Services",
  metadataBase: new URL("https://steelcityservices.ca/"),
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_CA", url: "https://steelcityservices.ca", title: "Steel City Painting & Handyman Services | Hamilton, ON", description: "Straightforward residential painting and handyman work from an experienced, owner-operated contractor.", siteName: "Steel City Painting & Handyman Services" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${inter.variable} h-full antialiased`} data-theme="industrial"><body className="min-h-full flex flex-col"><ThemeProvider><JsonLd />{children}</ThemeProvider></body></html>;
}
