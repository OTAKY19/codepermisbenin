import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeScript } from "@/components/theme-script";
import { StructuredData } from "@/components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://codepermisbenin.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Code Permis Bénin — Réussis ton code du premier coup",
    template: "%s | Code Permis Bénin",
  },
  description:
    "Prépare-toi à l'examen du code de la route au Bénin. Quiz interactifs, examens blancs chronométrés et suivi de progression.",
  keywords: [
    "code permis bénin",
    "examen permis conduire bénin",
    "quiz code de la route",
    "preparation permis bénin",
    "exam blanc permis",
    "code route bénin",
    "app permis conduire",
    "permis auto bénin",
    "apprentissage code route",
    "codepermisbenin",
  ],
  authors: [{ name: "Bénin Technologie Consulting" }],
  creator: "Bénin Technologie Consulting",
  publisher: "Bénin Technologie Consulting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_BJ",
    url: SITE_URL,
    siteName: "Code Permis Bénin",
    title: "Code Permis Bénin — Réussis ton code du premier coup",
    description:
      "Prépare-toi à l'examen du code de la route au Bénin. Quiz, examens blancs, suivi de progression.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Code Permis Bénin — Application de préparation au permis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Permis Bénin",
    description:
      "Réussis ton code du premier coup. Quiz, examens blancs et suivi de progression.",
    images: ["/og-image.png"],
    creator: "@codepermisbenin",
  },
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
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "Cr1rCXj8uT_04ftZDSUYZy_-5q-Elvnm0ZqVVCnSdFU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo_pastel.png" />
        <meta name="theme-color" content="#7BAF8E" />
        <ThemeScript />
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
