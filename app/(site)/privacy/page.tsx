import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 space-y-6">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground">Effective Date: March 26, 2025</p>

      <p>
        This Privacy Policy explains how we collect, use, and protect your personal information
        when you visit our blog site (“Site”, “we”, “us”, or “our”).
      </p>

      <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li><strong>Personal Information</strong> – like email addresses when you subscribe.</li>
        <li><strong>Usage Data</strong> – such as IP address, browser type, and page activity.</li>
        <li><strong>Cookies</strong> – for analytics or improving performance.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">2. How We Use Your Information</h2>
      <p>We may use your data to:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Send newsletters (with consent)</li>
        <li>Track post engagement and site usage</li>
        <li>Improve user experience and website functionality</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">3. Third-Party Services</h2>
      <p>
        We may use trusted third-party tools such as Google Analytics or email platforms
        to process your data in accordance with their own privacy terms.
      </p>

      <h2 className="text-xl font-semibold mt-6">4. Affiliate Disclosure</h2>
      <p>
        Some of our posts may contain affiliate links. If you purchase through them, we may earn
        a small commission at no extra cost to you.
      </p>

      <h2 className="text-xl font-semibold mt-6">5. Data Protection</h2>
      <p>We use appropriate technical measures to keep your data secure.</p>

      <h2 className="text-xl font-semibold mt-6">6. Your Rights</h2>
      <p>
        You may request to access, update, or delete your personal data at any time by contacting us.
      </p>

      <h2 className="text-xl font-semibold mt-6">7. Updates</h2>
      <p>This policy may be updated occasionally. Please review it periodically.</p>

      <p className="text-sm text-muted-foreground">Last updated: March 26, 2025</p>
    </main>
  );
};

export default PrivacyPolicyPage;
