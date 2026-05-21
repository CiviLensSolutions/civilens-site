import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "CiviLens — Civic Intelligence for Government & Nonprofits",
  description: "Veteran-owned AI company building smarter tools for the public sector. Book a free 30-minute AI workflow consult.",
  metadataBase: new URL("https://www.civilens.solutions"),
  openGraph: {
    title: "CiviLens — Civic Intelligence for Government & Nonprofits",
    description: "Veteran-owned AI consulting. Free 30-minute AI workflow consult for government & nonprofits.",
    url: "https://www.civilens.solutions",
    siteName: "CiviLens",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CiviLens — Civic Intelligence for Government & Nonprofits",
    description: "Veteran-owned AI consulting. Free 30-minute AI workflow consult for government & nonprofits.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
