import Breadcrumbs from "@/app/_components/BreadCrumps";
import Container from "@/app/_components/Container";
import React from "react";
import {
  ShieldCheck,
  User,
  Activity,
  Cookie,
  FileText,
  Shield,
  CheckCircle,
  RefreshCw,
} from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <Container>
      <Breadcrumbs
        className="mb-8"
        items={[
          { title: "Home", href: "/" },
          { title: "Privacy Policy" },
        ]}
      />

      {/* Intro Block */}
      <div className="flex items-start gap-4 bg-gray-50 border p-4 rounded-lg mb-8">
        <ShieldCheck className="w-6 h-6 text-site-primary mt-1" />
        <div>
          <h2 className="font-semibold text-lg">We value your privacy</h2>
          <p className="text-sm text-muted-foreground">
            This policy outlines what we collect, why we collect it, and how we protect it. We believe in transparency and keeping things simple.
          </p>
        </div>
      </div>

      <main className="max-w-3xl   px-4 pb-20 space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Effective Date: March 26, 2025
          </p>
        </div>

        {/* Section: Info Collected */}
        <section>
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-site-primary" />
            <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          </div>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <strong>Personal Information</strong> – like email addresses when you subscribe.
            </li>
            <li>
              <strong>Usage Data</strong> – such as <code>IP address</code>, <code>browser type</code>, and <code>page activity</code>.
            </li>
            <li>
              <strong>Cookies</strong> – for analytics or improving performance.
            </li>
          </ul>
        </section>

        {/* Section: Use of Info */}
        <section>
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-site-primary" />
            <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
          </div>
          <p className="mt-2">We may use your data to:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Send newsletters (with consent)</li>
            <li>Track post engagement and site usage</li>
            <li>Improve user experience and website functionality</li>
          </ul>
        </section>

        {/* Section: Third-party */}
        <section>
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-site-primary" />
            <h2 className="text-xl font-semibold">3. Third-Party Services</h2>
          </div>
          <p className="mt-2">
            We may use trusted third-party tools such as Google Analytics or email platforms
            to process your data in accordance with their own privacy terms.
          </p>
        </section>

        {/* Section: Affiliate Disclosure */}
        <section>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-site-primary" />
            <h2 className="text-xl font-semibold">4. Affiliate Disclosure</h2>
          </div>
          <p className="mt-2">
            Some of our posts may contain affiliate links. If you purchase through them, we may earn
            a small commission at no extra cost to you.
          </p>
        </section>

        {/* Section: Data Protection */}
        <section>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-site-primary" />
            <h2 className="text-xl font-semibold">5. Data Protection</h2>
          </div>
          <p className="mt-2">
            We use appropriate technical and organizational measures to keep your data secure.
          </p>
        </section>

        {/* Section: Your Rights */}
        <section>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-site-primary" />
            <h2 className="text-xl font-semibold">6. Your Rights</h2>
          </div>
          <p className="mt-2">
            You may request to access, update, or delete your personal data at any time by contacting us.
          </p>
        </section>

        {/* Section: Updates */}
        <section>
          <div className="flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-site-primary" />
            <h2 className="text-xl font-semibold">7. Updates</h2>
          </div>
          <p className="mt-2">
            This policy may be updated occasionally. Please review it periodically.
          </p>
        </section>

        {/* Last Updated */}
        <p className="text-xs text-muted-foreground italic mt-8 border-t pt-4">
          Last updated: March 26, 2025
        </p>
      </main>
    </Container>
  );
};

export default PrivacyPolicyPage;
