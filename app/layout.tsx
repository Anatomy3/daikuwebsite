// app/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { LayoutContent } from "../components/LayoutContent";
import { Footer } from "../components/Footer";
import TawkToChat from "../components/TawkToChat";
import Navbar from "../components/Navbar";
import { AuthProvider } from "../contexts/AuthContext";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.daikuinterior.com'),
  title: 'Daiku Design Interior & Exterior Pekanbaru',
  description: 'Spesialis desain interior dan eksterior serta furniture berkualitas untuk rumah, kantor, dan usaha di Pekanbaru. Melayani Residential - Office - Commercial dengan design profesional.',
  keywords: ['daiku interior', 'interior pekanbaru', 'design interior', 'furniture pekanbaru', 'interior design pekanbaru', 'jasa interior pekanbaru'],
  openGraph: {
    type: 'website',
    title: 'Daiku Design Interior & Exterior Pekanbaru',
    description: 'Spesialis desain interior dan eksterior serta furniture berkualitas untuk rumah, kantor, dan usaha di Pekanbaru',
    url: 'https://www.daikuinterior.com',
    siteName: 'Daiku Interior',
    images: [
      {
        url: '/icons/logo.png',
        width: 512,
        height: 512,
        alt: 'Daiku Interior Logo',
        type: 'image/png',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/icons/logo.png', sizes: '512x512', type: 'image/png' },
      { url: '/icons/logo.png', sizes: '96x96', type: 'image/png' },
      { url: '/icons/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/logo.png', sizes: '16x16', type: 'image/png' }
    ],
    shortcut: { url: '/icons/logo.png', sizes: '512x512', type: 'image/png' },
    apple: [
      { url: '/icons/logo.png', sizes: '512x512', type: 'image/png' },
      { url: '/icons/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="id" className={`${geistSans.variable} overflow-x-hidden`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icons/logo.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/logo.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icons/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/logo.png" />
        <link rel="shortcut icon" type="image/png" sizes="512x512" href="/icons/logo.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/png" />
      </head>
      <body className="overflow-x-hidden">
        <AuthProvider>
          <div className="relative w-full overflow-x-hidden">
            <Navbar />
            <LayoutContent>
              <main className="overflow-x-hidden">
                {children}
              </main>
              <Footer />
            </LayoutContent>
            <TawkToChat />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
