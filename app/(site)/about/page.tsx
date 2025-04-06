import Breadcrumbs from "@/app/_components/BreadCrumps";
import Container from "@/app/_components/Container";
import ImageComponent from "@/components/ImageComponent";
import { Metadata } from "next";
import React from "react";
import {
  BookOpen,
  Youtube,
  Camera,
  FileText,
  Video,
  Baby,
} from "lucide-react";
import Link from "next/link";

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
    creator: "@yourtwitterhandle",
  },
  metadataBase: new URL("https://yourdomain.com"),
  alternates: {
    canonical: "/about",
  },
};

const page = (props: Props) => {
  return (
    <Container className="min-h-[70vh]">
      <Breadcrumbs
        className="mb-8"
        items={[
          { title: "Home", href: "/" },
          { title: "About" },
        ]}
      />

      <main className="max-w-6xl mx-auto px-4  space-y-40">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <span className="inline-block text-xs font-semibold text-site-primary bg-site-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">
            More than just a blog
          </span>
          <h1 className="text-4xl font-bold text-foreground">About MAXI</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A multi-platform content brand that transforms ideas into immersive
            stories — through blogs, short videos, and original series.
          </p>
          <video
            src="/maxi.mp4"
            autoPlay
            muted
            playsInline
            controls
            poster="/video-thumbnail.jpg"
            className="rounded-lg mx-auto shadow-sm w-full max-w-[900px]"
          />
        </section>

        {/* What is MAXI */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">What is MAXI?</h2>
            <p>
              MAXI is a digital-first content studio and platform — built to inform,
              inspire, and entertain across every format. We create content that lives
              across blogs, videos, shorts, and visual stories — all centered around:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                {
                  title: "Insightful Blog Posts",
                  description: "Tech, health, lifestyle, and creativity.",
                  icon: FileText,
                },
                {
                  title: "Original YouTube Videos",
                  description: "Breakdowns, story-driven series, and more.",
                  icon: Youtube,
                },
                {
                  title: "Short-form Reels",
                  description: "Visual tips, motion hooks, and trends.",
                  icon: Video,
                },
                {
                  title: "Animated Kids Content",
                  description: "Imaginative stories for younger audiences.",
                  icon: Baby,
                },
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white dark:bg-muted p-4 rounded-xl border shadow-sm flex items-start gap-3"
                  >
                    <div className="p-2 bg-site-primary/10 rounded-full text-site-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <ImageComponent
            src="/what-is-maxi.jpeg"
            alt="Formats we publish"
            className="rounded-lg shadow-sm w-full overflow-hidden"
            aspect="square"
          />
        </section>

        {/* Where We Publish */}
        <section className="bg-muted/40 p-8 rounded-lg  shadow-sm border text-center space-y-6">
          <h2 className="text-2xl font-semibold">Where We Publish</h2>
          <p className="text-sm max-w-2xl mx-auto">
            Every piece of content we publish starts with an idea and grows into
            multiple formats tailored to each platform.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div className="bg-white dark:bg-muted p-4 rounded-md shadow flex flex-col items-center text-center">
              <BookOpen className="w-6 h-6 mb-2 text-site-primary" />
              <h3 className="font-medium mb-1">Blog</h3>
              <p className="text-muted-foreground">
                Long-form thought pieces, how-tos, and top 5s across every category.
              </p>
            </div>
            <div className="bg-white dark:bg-muted p-4 rounded-md shadow flex flex-col items-center text-center">
              <Youtube className="w-6 h-6 mb-2 text-site-primary" />
              <h3 className="font-medium mb-1">YouTube</h3>
              <p className="text-muted-foreground">
                Weekly video breakdowns, story-driven content, and animated explainers.
              </p>
            </div>
            <div className="bg-white dark:bg-muted p-4 rounded-md shadow flex flex-col items-center text-center">
              <Camera className="w-6 h-6 mb-2 text-site-primary" />
              <h3 className="font-medium mb-1">TikTok & Instagram</h3>
              <p className="text-muted-foreground">
                Short-form visual content: quick tips, moments, and creative hooks.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <ImageComponent
            src="/why-we-exist.png"
            alt="Our vision"
            className="rounded-lg shadow-sm w-full overflow-hidden"
            aspect="square"
          />
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Why We Exist</h2>
            <p>
              In a noisy world full of distractions, MAXI is about bringing clarity, creativity,
              and context. We want our content to spark thought, inspire ideas, and give people
              something worth sharing — across every medium.
            </p>
            <p>
              Whether you&apos;re a curious reader, a visual learner, or a future fan of animated stories —
              MAXI is built for you.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center pt-12 border-t mt-16">
          <h2 className="text-xl font-semibold">Ready to explore?</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Browse blog topics, watch a video, or subscribe to the newsletter.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/blog"
              className="inline-block px-5 py-2 text-sm font-medium bg-site-primary text-white rounded-lg shadow hover:bg-site-primary/90 transition"
            >
              Visit Blog
            </Link>
            <Link
              href="/newsletter"
              className="inline-block px-5 py-2 text-sm font-medium border border-site-primary text-site-primary rounded-lg hover:bg-site-primary/10 transition"
            >
              Join Newsletter
            </Link>
          </div>
        </section>
      </main>
    </Container>
  );
};

export default page;
