"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SheetClose } from "@/components/ui/sheet";

type Props = {
  menu?: boolean;
};

const NavLinks = ({ menu }: Props) => {
  const pathname = usePathname();

  const Links = [
    {
      title: "home",
      href: "/",
      active: pathname === "/",
    },
    {
      title: "blogs",
      href: "/blog",
      active: pathname.includes("blog"),
    },
    {
      title: "newsletter",
      href: "/newsletter",
      active: pathname.includes("newsletter"),
    },
    {
      title: "about",
      href: "/about",
      active: pathname.includes("about"),
    },
    {
      title: "contact",
      href: "/contact",
      active: pathname.includes("contact"),
    },
  ];

  if (menu) {
    return (
      <nav className="flex items-start gap-6 flex-col">
        {Links.map((item, index) => (
          <SheetClose   asChild    key={`navlink-${index}`}>
            <Link
         
              href={item.href}
              className={cn(
                "capitalize font-[500]",
                item.active && "text-site-primary"
              )}
            >
              {item.title}
            </Link>
          </SheetClose>
        ))}
      </nav>
    );
  } else
    return (
      <nav className="flex items-center gap-6">
        {Links.map((item, index) => (
          <Link
            key={`navlink-${index}`}
            href={item.href}
            className={cn(
              "capitalize font-[500]",
              item.active && "text-site-primary"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    );
};

export default NavLinks;
