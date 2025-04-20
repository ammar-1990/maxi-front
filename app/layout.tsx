import type { Metadata } from "next";

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";



export const metadata: Metadata = {
  title: 'MAXI – Blogs, Videos & Stories That Matter',
  description:
    'Explore deep blogs, bold videos, and visual content across tech, health, philosophy, and more — all crafted for curious minds.',
  alternates: {
    canonical: `https://${BASE_URL}/`,
  },
  openGraph: {
    title: 'MAXI – Blogs, Videos & Stories That Matter',
    description:
      'Explore deep blogs, bold videos, and visual content across tech, health, philosophy, and more — all crafted for curious minds.',
    url: `https://${BASE_URL}`,
    siteName: 'MAXI',
    type: 'website',
    images: [
      {
        url: `https://themaxiworld.com/maxi-seo.png`,
        width: 1200,
        height: 630,
        alt: 'MAXI Hero',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAXI – Blogs, Videos & Stories That Matter',
    description:
      'Explore blogs, videos, and visual content crafted for every curious mind.',
    images: ['https://themaxiworld.com/maxi-seo.png'],
  },
  keywords: [
    'MAXI',
    'Blog platform',
    'AI blogs',
    'Spirituality content',
    'Tech articles',
    'Philosophy media',
    'YouTube shorts',
    'Instagram reels',
    'Content for curious minds',
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        
        {children}
        <Toaster richColors/>
      </body>
    </html>
  );
}
