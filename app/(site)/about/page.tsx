import Container from "@/app/_components/Container";
import ImageComponent from "@/components/ImageComponent";
import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "About MAXI | More Than a Blog",
  description:
    "Learn what drives MAXI — a multi-platform content brand combining insightful blog posts, short videos, original series, and kids anime to inspire and inform across every medium.",
  keywords: [
    "MAXI",
    "About MAXI",
    "content platform",
    "video blog",
    "tech blog",
    "health blog",
    "short videos",
    "YouTube series",
    "TikTok blog",
    "Instagram content",
    "kids anime",
    "original storytelling",
  ],
  openGraph: {
    title: "About MAXI | More Than a Blog",
    description:
      "Discover how MAXI brings together thoughtful articles, visual storytelling, and platform-driven content across YouTube, TikTok, Instagram, and beyond.",
    url: "https://yourdomain.com/about",
    siteName: "MAXI",
    images: [
      {
        url: "https://yourdomain.com/images/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "MAXI About Page Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About MAXI | More Than a Blog",
    description:
      "Get to know MAXI — the media brand blending blogs, videos, and visual storytelling across modern platforms.",
    images: ["https://yourdomain.com/images/og-about.jpg"],
    creator: "@yourtwitterhandle", // Optional if you have one
  },
  metadataBase: new URL("https://yourdomain.com"),
  alternates: {
    canonical: "/about",
  },
};

const page = (props: Props) => {
  return (
    <Container className="min-h-[70vh]">
      <main className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">About MAXI</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A multi-platform content brand that transforms ideas into immersive
            stories — through blogs, short videos, and original series.
          </p>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="rounded-lg mx-auto shadow-sm w-full max-w-[900px]"
          />
        </section>

        {/* Mission Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              What is MAXI?
            </h2>
            <p>
              MAXI is a digital-first content studio and platform — built to
              inform, inspire, and entertain across every format. We create
              content that lives across blogs, videos, shorts, and visual
              stories — all centered around themes like:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>
                🔍 Thought-provoking blog posts across tech, health, lifestyle,
                and creativity
              </li>
              <li>📺 Original YouTube videos and mini-series</li>
              <li>🎬 Short-form content for TikTok and Instagram Reels</li>
              <li>👶 Animated stories and future kids&apos; series</li>
            </ul>
          </div>
          <ImageComponent
            src="/what-is-maxi.jpeg"
            alt="Formats we publish"
            className="rounded-lg shadow-sm w-full overflow-hidden"
            aspect="square"
          />
        </section>

        {/* Platform Reach */}
        <section className="bg-muted/40 p-8 rounded-lg shadow-inner text-center space-y-6">
          <h2 className="text-2xl font-semibold">Where We Publish</h2>
          <p className="text-sm max-w-2xl mx-auto">
            Every piece of content we publish starts with an idea and grows into
            multiple formats tailored to each platform.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div className="bg-white dark:bg-muted p-4 rounded-md shadow">
              <h3 className="font-medium mb-2">📖 Blog</h3>
              <p>
                Home of long-form thought pieces, how-tos, and top 5s across
                every category.
              </p>
            </div>
            <div className="bg-white dark:bg-muted p-4 rounded-md shadow">
              <h3 className="font-medium mb-2">📺 YouTube</h3>
              <p>
                Weekly video breakdowns, story-driven content, and animated
                explainers.
              </p>
            </div>
            <div className="bg-white dark:bg-muted p-4 rounded-md shadow">
              <h3 className="font-medium mb-2">🎬 TikTok & Instagram</h3>
              <p>
                Short-form visual content: quick tips, moments, and creative
                hooks.
              </p>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <ImageComponent
            src="/why-we-exist.png"
            alt="Our vision"
            className="rounded-lg shadow-sm w-full overflow-hidden"
            aspect="square"
          />
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Why We Exist
            </h2>
            <p>
              In a noisy world full of distractions, MAXI is about bringing
              clarity, creativity, and context. We want our content to spark
              thought, inspire ideas, and give people something worth sharing —
              across every medium.
            </p>
            <p>
              Whether you're a curious reader, a visual learner, or a future fan
              of animated stories — MAXI is built for you.
            </p>
          </div>
        </section>
      </main>
    </Container>
  );
};

export default page;
