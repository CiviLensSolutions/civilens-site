import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "CiviLens — AI Consulting for Government & Nonprofits",
  description: "Veteran-owned AI company building smarter tools for the public sector. Book a free 30-minute AI workflow consult.",
  metadataBase: new URL("https://www.civilens.solutions"),
  alternates: {
    canonical: "https://www.civilens.solutions",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "CiviLens — AI Consulting for Government & Nonprofits",
    description: "Veteran-owned AI consulting. Free 30-minute AI workflow consult for government & nonprofits.",
    url: "https://www.civilens.solutions",
    siteName: "CiviLens",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CiviLens — AI Consulting for Government & Nonprofits",
    description: "Veteran-owned AI consulting. Free 30-minute AI workflow consult for government & nonprofits.",
  },
};

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "Organization"],
      "@id": "https://www.civilens.solutions/#organization",
      "name": "CiviLens",
      "legalName": "Civilens LLC",
      "url": "https://www.civilens.solutions",
      "email": "shea@civilens.solutions",
      "description": "Veteran-owned AI consulting firm specializing in AI integration, process automation, and web development for government agencies and nonprofits.",
      "slogan": "Civic Intelligence for Government & Nonprofits",
      "foundingDate": "2026",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "608 E Hickory St Suite 128",
        "addressLocality": "Denton",
        "addressRegion": "TX",
        "postalCode": "76205",
        "addressCountry": "US",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 33.21488,
        "longitude": -97.13307,
      },
      "areaServed": { "@type": "Country", "name": "United States" },
      "knowsAbout": ["Artificial Intelligence", "AI Integration", "Government Technology", "Process Automation", "Web Application Development", "Public Sector Software"],
      "founder": { "@id": "https://www.civilens.solutions/#shea-scott" },
      "sameAs": [],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.civilens.solutions/#website",
      "url": "https://www.civilens.solutions",
      "name": "CiviLens",
      "description": "Veteran-owned AI consulting and software development for government & nonprofits.",
      "publisher": { "@id": "https://www.civilens.solutions/#organization" },
      "inLanguage": "en-US",
    },
    {
      "@type": "Person",
      "@id": "https://www.civilens.solutions/#shea-scott",
      "name": "Shea Scott",
      "givenName": "Shea",
      "familyName": "Scott",
      "email": "shea@civilens.solutions",
      "url": "https://www.civilens.solutions/#about",
      "jobTitle": "Founder & Principal Consultant",
      "worksFor": { "@id": "https://www.civilens.solutions/#organization" },
      "knowsAbout": ["Government Technology", "Artificial Intelligence", "Web Application Development", "Process Automation", "Public Sector IT"],
      "description": "Veteran and 17-year government technology professional. Founded CiviLens to bring practical AI tools and modern web development to government agencies and nonprofits.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Denton",
        "addressRegion": "TX",
        "addressCountry": "US",
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.civilens.solutions/#service-ai-integration",
      "name": "AI Integration",
      "serviceType": "AI Integration Consulting",
      "description": "Embed AI into the workflows your team already uses. We find the slow, repetitive parts and remove them.",
      "provider": { "@id": "https://www.civilens.solutions/#organization" },
      "areaServed": { "@type": "Country", "name": "United States" },
      "audience": { "@type": "Audience", "audienceType": "Government agencies and nonprofit organizations" },
    },
    {
      "@type": "Service",
      "@id": "https://www.civilens.solutions/#service-process-automation",
      "name": "Process Automation",
      "serviceType": "Business Process Automation",
      "description": "Reduce manual overhead so your team can focus on people, not paperwork. We map the process before we touch the code.",
      "provider": { "@id": "https://www.civilens.solutions/#organization" },
      "areaServed": { "@type": "Country", "name": "United States" },
    },
    {
      "@type": "Service",
      "@id": "https://www.civilens.solutions/#service-web-software",
      "name": "Web & Software Development",
      "serviceType": "Custom Software Development",
      "description": "Modern, accessible web applications built to government scale. Designed to last.",
      "provider": { "@id": "https://www.civilens.solutions/#organization" },
      "areaServed": { "@type": "Country", "name": "United States" },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://app.cal.com" />
        <script type="application/ld+json">{JSON.stringify(schemaGraph)}</script>
      </head>
      <body>{children}</body>
    </html>
  );
}
