import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aakash Joshi | Systems Engineer",
  description: "High-performance systems engineering portfolio. Python Developer & ML Engineer specializing in scalable infrastructure.",
  keywords: ["Aakash Joshi", "Systems Engineer", "Python Developer", "Machine Learning", "Portfolio", "Web Development", "Next.js"],
  authors: [{ name: "Aakash Joshi" }],
  openGraph: {
    title: "Aakash Joshi | Systems Engineer",
    description: "Building reliable, high-performance systems. AI, Tooling & Infrastructure.",
    url: "https://aakash-joshi.vercel.app", // Placeholder, user can update
    siteName: "Aakash Joshi Portfolio",
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Aakash Joshi | Systems Engineer",
    description: "High-performance systems engineering portfolio.",
    creator: "@avianage", // Assuming handle from github/context or placeholder
  },

};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

import { PROFILE } from "@/lib/data";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PROFILE.name,
    url: 'https://aakash-joshi.vercel.app',
    jobTitle: PROFILE.role,
    sameAs: [
      PROFILE.socials.github,
      PROFILE.socials.linkedin,
      PROFILE.socials.twitter
    ].filter(Boolean),
    description: PROFILE.about
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-[#121212] text-white font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
