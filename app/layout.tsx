import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Steel City Painting And Handyman - Trusted House Painter",
  description: "15+ years of trusted interior & exterior painting and handyman services in Hamilton, ON. Verified profile on Trusted House Painter. Direct quality by Brent.",
  keywords: ["Hamilton painter", "Hamilton handyman", "interior painting Hamilton", "drywall repair Hamilton", "exterior painting Hamilton"],
  authors: [{ name: "Brent - Steel City Painting And Handyman" }],
  creator: "Steel City Painting And Handyman",
  metadataBase: new URL("https://steelcityservices.ca/"),
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_CA", url: "https://steelcityservices.ca/", title: "Steel City Painting And Handyman - Trusted House Painter", description: "15+ years of honest, owner-operated painting and handyman work in Hamilton, Ontario.", siteName: "Steel City Painting And Handyman" },
  twitter: { card: "summary_large_image", title: "Steel City Painting And Handyman - Trusted House Painter", description: "Direct, owner-operated painting and handyman services in Hamilton, ON." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${inter.variable} h-full antialiased`} data-theme="industrial"><body className="min-h-full flex flex-col"><ThemeProvider><JsonLd />{children}</ThemeProvider></body></html>;
}
