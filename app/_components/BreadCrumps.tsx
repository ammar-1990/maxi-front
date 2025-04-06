// components/Breadcrumbs.tsx

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import prisma from "@/lib/prisma";

type BreadcrumbItem = {
  title: string;
  href?: string; // Last item might not be a link
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?:string,
  categorySlug?:string,
 
};

export default async function Breadcrumbs({ items,className, separator = <ChevronRight className="w-4 h-4 text-gray-400" />,categorySlug }: BreadcrumbsProps) {
    const [category] = await Promise.all([
        categorySlug
          ? prisma.category.findUnique({ where: { slug: categorySlug },select:{name:true} })
          : null,
   
      ]);
    
      const fullItems: BreadcrumbItem[] = [...items];
    
      if (category) {
        fullItems.push({
          title: category.name,
          href: `/blog/${categorySlug}`,
        });
      }
 
 
  
  return (
    <nav className={cn("text-sm text-gray-600 ",className)} aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1">
        {fullItems.map((item, index) => {
          const isLast = index === fullItems.length - 1;
          return (
            <li key={index} className="flex items-center gap-1">
              {!isLast && item.href ? (
                <Link
                  href={item.href}
                  className="text-site-primary hover:underline font-medium capitalize"
                >
                  {item.title}
                </Link>
              ) : (
                <span className="text-gray-500 font-medium capitalize">{item.title}</span>
              )}
              {!isLast && <span>{separator}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
