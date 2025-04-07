import Breadcrumbs from "@/app/_components/BreadCrumps";
import Container from "@/app/_components/Container";
import React from "react";
import {
  FileText,
  Info,
  ExternalLink,
  ShieldCheck,
  Book,
  AlertTriangle,
  PenLine,
  RefreshCw,
  Slash,
  Link as LinkIcon,
} from "lucide-react";

const TermsPage = () => {
  return (
    <Container className="p-3">
      <Breadcrumbs
        className="mb-8"
        items={[{ title: "Home", href: "/" }, { title: "Terms and Conditions" }]}
      />

      {/* Intro */}
      <div className="flex items-start gap-4 bg-gray-50 border p-4 rounded-lg mb-8">
        <FileText className="w-6 h-6 text-site-primary mt-1" />
        <div>
          <h2 className="font-semibold text-lg">Please Read Carefully</h2>
          <p className="text-sm text-muted-foreground">
            These Terms and Conditions govern your access to and use of this website. By using the site, you agree to follow these terms in full.
          </p>
        </div>
      </div>

      <main className="max-w-3xl  px-4 pb-20 space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Terms & Conditions</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Effective Date: March 26, 2025
          </p>
        </div>

        {/* Section 1 */}
        <section>
          <div className="flex items-center gap-2">
            <Book className="w-5 h-5 text-site-primary" />
            <h2 className="text-xl font-semibold">1. Intellectual Property</h2>
          </div>
          <p className="mt-2">
            All content is the property of the site owner unless otherwise stated.
            You may not reproduce or distribute content without permission.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <div className="flex items-center gap-2">
            <Info className="w-5 h-5 text-site-primary" />
            <h2 className="text-xl font-semibold">2. Content Disclaimer</h2>
          </div>
          <p className="mt-2">
            All blog content is for informational purposes only. We do not guarantee its accuracy or completeness and are not liable for any actions taken based on it.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-site-primary" />
            <h2 className="text-xl font-semibold">3. Affiliate Disclosure</h2>
          </div>
          <p className="mt-2">
            Some links on the blog may be affiliate links. We may earn a commission if you purchase through them, at no extra cost to you.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-site-primary" />
            <h2 className="text-xl font-semibold">4. Limitation of Liability</h2>
          </div>
          <p className="mt-2">
            We are not liable for any losses or damages related to your use of this site or reliance on its content.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <div className="flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-site-primary" />
            <h2 className="text-xl font-semibold">5. External Links</h2>
          </div>
          <p className="mt-2">
            We may link to third-party websites. We are not responsible for their content or policies.
          </p>
        </section>

        {/* Section 6 */}
        <section>
          <div className="flex items-center gap-2">
            <PenLine className="w-5 h-5 text-site-primary" />
            <h2 className="text-xl font-semibold">6. Modifications</h2>
          </div>
          <p className="mt-2">
            We reserve the right to update, remove, or modify content or features on this site without notice.
          </p>
        </section>

        {/* Section 7 */}
        <section>
          <div className="flex items-center gap-2">
            <Slash className="w-5 h-5 text-site-primary" />
            <h2 className="text-xl font-semibold">7. User Conduct</h2>
          </div>
          <p className="mt-2">
            Users agree not to submit harmful, offensive, or illegal content. We reserve the right to remove such content.
          </p>
        </section>

        {/* Section 8 */}
        <section>
          <div className="flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-site-primary" />
            <h2 className="text-xl font-semibold">8. Updates</h2>
          </div>
          <p className="mt-2">
            We may update these terms at any time. Continued use of the site constitutes agreement to the updated terms.
          </p>
        </section>

        {/* Footer note */}
        <p className="text-xs text-muted-foreground italic mt-8 border-t pt-4">
          Last updated: March 26, 2025
        </p>
      </main>
    </Container>
  );
};

export default TermsPage;
