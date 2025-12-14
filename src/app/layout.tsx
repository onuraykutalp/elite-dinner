import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.elitedinnercruise.com"),
  title: {
    default: "Elite Dinner Cruise | Luxury Bosphorus Dinner Cruise Istanbul",
    template: "%s | Elite Dinner Cruise",
  },
  description: "Join Elite Dinner Cruise for an unforgettable full-course meal experience with stunning Bosphorus views, premium drinks, Turkish night shows, and excellent service. Book your luxury dinner cruise in Istanbul today.",
  keywords: [
    "dinner cruise",
    "luxury dining",
    "Bosphorus cruise",
    "Istanbul dinner cruise",
    "Turkish night",
    "fix menu dinner",
    "VIP dinner",
    "unlimited drinks",
    "fine dining Istanbul",
    "Bosphorus tour",
    "Istanbul cruise",
    "dinner boat",
    "luxury cruise Istanbul",
  ],
  authors: [{ name: "Elite Dinner Cruise" }],
  creator: "Elite Dinner Cruise",
  publisher: "Elite Dinner Cruise",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.elitedinnercruise.com",
    siteName: "Elite Dinner Cruise",
    title: "Elite Dinner Cruise | Luxury Bosphorus Dinner Cruise Istanbul",
    description: "Join Elite Dinner Cruise for an unforgettable full-course meal experience with stunning Bosphorus views, premium drinks, Turkish night shows, and excellent service.",
    images: [
      {
        url: "https://www.elitedinnercruise.com/img/logo1.png",
        width: 1200,
        height: 630,
        alt: "Elite Dinner Cruise - Luxury Bosphorus Dinner Cruise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Dinner Cruise | Luxury Bosphorus Dinner Cruise Istanbul",
    description: "Join Elite Dinner Cruise for an unforgettable full-course meal experience with stunning Bosphorus views, premium drinks, Turkish night shows, and excellent service.",
    images: ["https://www.elitedinnercruise.com/img/logo1.png"],
  },
  alternates: {
    canonical: "https://www.elitedinnercruise.com",
  },
  category: "Travel & Tourism",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/img/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
