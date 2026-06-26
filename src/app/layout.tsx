import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollObserver from "@/components/layout/ScrollObserver";
import "./globals.css";

/* ── Font Loading ─────────────────────────────────────────
   JetBrains Mono → headings, display, code, counters
   Inter          → body, UI labels, forms, captions
   ──────────────────────────────────────────────────────── */

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

/* ── SEO Constants ────────────────────────────────────── */

const SITE_URL = "https://datapulse.io";
const SITE_NAME = "DataPulse";
const SITE_DESCRIPTION =
  "The AI automation engine that connects, transforms, and ships your data at machine speed. Automate pipelines, enrich datasets, and deliver insights in minutes.";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

/* ── Metadata (full SEO) ──────────────────────────────── */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "DataPulse — AI Data Automation Platform",
    template: "%s | DataPulse",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "data automation",
    "AI data pipeline",
    "ETL",
    "data transformation",
    "SaaS",
    "DataPulse",
    "real-time sync",
    "machine learning",
    "data integration",
  ],
  authors: [{ name: "DataPulse Team", url: SITE_URL }],
  creator: "DataPulse",
  publisher: "DataPulse Inc.",

  /* ── Canonical ── */
  alternates: {
    canonical: "/",
  },

  /* ── Robots ── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ── Open Graph ── */
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "DataPulse — AI Data Automation Platform",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "DataPulse — AI-powered data automation platform dashboard",
      },
    ],
  },

  /* ── Twitter Card ── */
  twitter: {
    card: "summary_large_image",
    title: "DataPulse — AI Data Automation Platform",
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
    creator: "@datapulse_io",
  },

  /* ── Icons ── */
  icons: {
    icon: "/favicon.ico",
  },
};

/* ── Viewport (separate export per Next.js 14+) ──────── */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#114C5A",
};

/* ── JSON-LD Structured Data ──────────────────────────── */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DataPulse",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    lowPrice: "1499",
    highPrice: "14999",
    offerCount: "3",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "2400",
    bestRating: "5",
    worstRating: "1",
  },
  featureList: [
    "AI-powered data pipelines",
    "Real-time sync across 25+ integrations",
    "Advanced analytics with anomaly detection",
    "SOC 2 & HIPAA compliance",
    "Custom scheduling and webhook support",
  ],
};

/* ── Root Layout ──────────────────────────────────────── */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-arctic text-oceanic-noir font-body">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-forsythia focus:text-oceanic-noir focus:font-display focus:font-bold focus:top-0 focus:left-0"
        >
          Skip to main content
        </a>
        <ScrollObserver />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
