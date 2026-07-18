import type { Metadata, Viewport } from "next";
import { AppLoader } from "@/components/AppLoader";
import { CursorGlow } from "@/components/CursorGlow";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { PageTransition } from "@/components/PageTransition";
import "./globals.css";
import "./mobile.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kalpana Devi T | Python & AI Developer",
    template: "%s | Kalpana Devi T"
  },
  description:
    "Portfolio of Kalpana Devi T, a Python and AI Developer specializing in Generative AI, RAG systems, FastAPI, backend development, intelligent automation and AI-powered applications.",
  keywords: [
    "Kalpana Devi",
    "Python Developer",
    "AI Developer",
    "Generative AI Developer",
    "RAG Developer",
    "FastAPI Developer",
    "Backend Developer",
    "AI Automation Engineer",
    "Machine Learning Developer",
    "Tamil Nadu Developer",
    "OpenAI API Developer",
    "FAISS Developer"
  ],
  authors: [{ name: "Kalpana Devi T" }],
  creator: "Kalpana Devi T",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Kalpana Devi T Portfolio",
    title: "Kalpana Devi T | Python & AI Developer",
    description:
      "Python, Generative AI, RAG, backend engineering and intelligent automation portfolio.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Kalpana Devi T - Python & AI Developer" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalpana Devi T | Python & AI Developer",
    description: "Building intelligent systems with Python, APIs, RAG and Generative AI.",
    images: ["/og-image.svg"]
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  },
  alternates: { canonical: siteUrl }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#05070D" },
    { media: "(prefers-color-scheme: light)", color: "#F4F7FB" }
  ]
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kalpana Devi T",
  jobTitle: "Python & AI Developer",
  email: "mailto:kalpanadevi7e@gmail.com",
  telephone: "+91 82200 93277",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Theni",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN"
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Jansons Institute of Technology"
  },
  sameAs: [
    "https://github.com/kalpanadevi07",
    "https://linkedin.com/in/kalpana-devi-4b1140264"
  ],
  knowsAbout: ["Python", "FastAPI", "Generative AI", "RAG", "FAISS", "Backend Development", "AI Automation"]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <AppLoader />
        <CursorGlow />
        <div className="ambient-background" aria-hidden="true">
          <div className="ambient-orb ambient-orb-one" />
          <div className="ambient-orb ambient-orb-two" />
          <div className="ambient-grid" />
          <div className="ambient-noise" />
        </div>
        <Navigation />
        <PageTransition>
          <main id="main-content">{children}</main>
        </PageTransition>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
