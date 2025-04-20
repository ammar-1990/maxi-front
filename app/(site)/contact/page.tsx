import Breadcrumbs from "@/app/_components/BreadCrumps";
import Container from "@/app/_components/Container";
import { BASE_URL, EMAIL, INSTAGRAM, TIKTOK, YOUTUBE } from "@/lib/Types";
import { Mail, MessageCircle, Send } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

type Props = {};

export const metadata: Metadata = {
  title: 'Contact Us | MAXI',
  description:
    'Have questions, feedback, or collaboration ideas? Reach out to the MAXI team — we’d love to hear from you.',
  alternates: {
    canonical: `https://${BASE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact MAXI',
    description:
      'Whether it’s a business inquiry or a friendly hello — get in touch with the team behind MAXI.',
    url: `https://${BASE_URL}/contact`,
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
    title: 'Contact MAXI',
    description:
      'Have a question, collaboration request, or feedback? Get in touch — we’re listening.',
      images: [
        {
          url: `https://themaxiworld.com/maxi-seo.png`,
          width: 1200,
          height: 630,
          alt: 'MAXI Hero',
        },
      ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const page = (props: Props) => {
  return (
    <Container className="min-h-[70vh] p-3">
      <Breadcrumbs
        className="mb-8"
        items={[{ title: "Home", href: "/" }, { title: "Contact Us" }]}
      />

      <main className="max-w-3xl mx-auto space-y-12 py-12">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <div className="flex justify-center">
            <MessageCircle className="w-8 h-8 text-site-primary" />
          </div>
          <h1 className="text-3xl font-bold">Get in Touch</h1>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm">
            Have feedback, a question, or want to collaborate? I’d love to hear from you.
          </p>
        </section>

        {/* Contact Methods */}
        <section className="grid sm:grid-cols-2 gap-6">
          <div className="flex items-start gap-4 p-4 bg-muted/40 border rounded-lg shadow-sm">
            <Mail className="w-6 h-6 text-site-primary mt-1" />
            <div>
              <h3 className="font-semibold text-sm">Email</h3>
              <Link
                href={EMAIL}
                className="text-sm underline text-primary"
              >
                {EMAIL}
              </Link>
              <p className="text-xs text-muted-foreground mt-1">
                I usually reply within 1–2 business days.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-muted/40 border rounded-lg shadow-sm">
            <Send className="w-6 h-6 text-site-primary mt-1" />
            <div>
              <h3 className="font-semibold text-sm">Social</h3>
              <div className="flex items-center gap-4 mt-2 text-muted-foreground">
              <Link href={TIKTOK} target="_blank">
              <FaTiktok className="hover:text-black size-6" />
              </Link>
              <Link href={INSTAGRAM} target="_blank">
                <FaInstagram className="hover:text-[#E1306C] size-6" />
              </Link>
              <Link href={YOUTUBE} target="_blank">
              <FaYoutube className="hover:text-red-600 transition size-6" />
              </Link>
            </div>
              <p className="text-xs text-muted-foreground mt-3">
                Follow for updates, behind-the-scenes, and more.
              </p>
            </div>
          </div>
        </section>

        {/* Optional Contact Form Placeholder */}
        <section className="border-t pt-8 space-y-4 text-center">
      
          <p className="text-xs text-muted-foreground italic">
            MAXI is all about real human conversations.
          </p>
        </section>
      </main>
    </Container>
  );
};

export default page;
