import prisma from "@/lib/prisma";
import Link from "next/link";
import React from "react";

type Props = {};

const FooterCategories = async (props: Props) => {
  const categories = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
    },
    take: 4,
  });
  return (
    <ul className="space-y-1 text-sm capitalize">
      {categories.map((item) => (
        <li key={item.id}>
          <Link className="capitalize" href={`/blog?category=${item.slug}`}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterCategories;
