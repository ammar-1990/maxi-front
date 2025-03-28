import Link from "next/link";
import NewsletterForm from "../(site)/newsletter/_component/NewsletterForm";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-muted/50 text-muted-foreground py-10 mt-12 border-t">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-xl font-bold text-foreground">MAXI</h2>
          <p className="text-sm mt-2">
            Thoughtful blog content crafted to inform, inspire, and empower. One
            scroll at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2 text-foreground">Site </h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-semibold mb-2 text-foreground">Categories</h4>
          <ul className="space-y-1 text-sm capitalize">
            <li>
              <Link href="/health">Health</Link>
            </li>
            <li>
              <Link href="/tech">Tech</Link>
            </li>
            <li>
              <Link href="/lifestyle">Lifestyle</Link>
            </li>
          </ul>
        </div>

        {/* Social / Newsletter */}
        <div>
          <h4 className="font-semibold mb-2 text-foreground">Stay Connected</h4>
          <ul className="space-y-1 text-sm">
            {" "}
            <li>
              <div>
                <NewsletterForm
                  showLabel={false}
                  placeholder={"Join our weekly email list"}
                />
              </div>
            </li>
            <li className="flex items-center gap-4 mt-8">
              <Link href="https://twitter.com/yourhandle" target="_blank">
              <FaTiktok className="hover:text-black size-6" />
              </Link>
              <Link href="https://instagram.com/yourhandle" target="_blank">
                <FaInstagram className="hover:text-[#E1306C] size-6" />
              </Link>
              <Link href="https://youtube.com/@yourchannel" target="_blank">
              <FaYoutube className="hover:text-red-600 transition size-6" />
              </Link>
            </li>
       
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} MAXI. All rights reserved.
        <span className="mx-2">|</span>
        <Link href="/privacy">Privacy Policy</Link>
        <span className="mx-2">|</span>
        <Link href="/terms">Terms of Service</Link>
      </div>
    </footer>
  );
};

export default Footer;
