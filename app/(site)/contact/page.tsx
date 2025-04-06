import Breadcrumbs from "@/app/_components/BreadCrumps";
import Container from "@/app/_components/Container";
import { Mail, MessageCircle, Send } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <Container className="min-h-[70vh]">
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
                href="mailto:your@email.com"
                className="text-sm underline text-primary"
              >
                your@email.com
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
              <p className="text-sm">
                DM me on{" "}
                <Link
                  href="https://instagram.com/themaxiworld_"
                  className="underline text-primary"
                  target="_blank"
                >
                  Instagram
                </Link>{" "}
                or{" "}
                <Link
                  href="https://tiktok.com/@themaxiworld_"
                  className="underline text-primary"
                  target="_blank"
                >
                  TikTok
                </Link>
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Follow for updates, behind-the-scenes, and more.
              </p>
            </div>
          </div>
        </section>

        {/* Optional Contact Form Placeholder */}
        <section className="border-t pt-8 space-y-4 text-center">
          <p className="text-sm text-muted-foreground">
            Prefer using a form? We’re working on it! For now, shoot us an email or DM.
          </p>
          <p className="text-xs text-muted-foreground italic">
            MAXI is all about real human conversations.
          </p>
        </section>
      </main>
    </Container>
  );
};

export default page;
