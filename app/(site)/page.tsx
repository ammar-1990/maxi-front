import SuspenseComponent from "@/components/SuspensComponent";
import Container from "../_components/Container";
import HeroSection from "../_components/HeroSection";
import FeaturedPosts from "../_components/FeaturedPosts";
import TrendingPosts from "../_components/TrendingPosts";
import CategoriesFeed from "../_components/CategoriesFeed";
import { Metadata } from "next";
import { BASE_URL } from "@/lib/Types";

export const revalidate = 0
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

export default function Home() {
  return (
    <div className="p-3">
      <Container>
        <HeroSection />
        <div className="mt-16">
          <SuspenseComponent>
            <CategoriesFeed />
          </SuspenseComponent>
        </div>
        <div className="mt-26">
          <SuspenseComponent>
            <FeaturedPosts />
          </SuspenseComponent>
        </div>
        <div className="mt-26">
          <SuspenseComponent>
            <TrendingPosts />
          </SuspenseComponent>
        </div>
      </Container>
    </div>
  );
}
