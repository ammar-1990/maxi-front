import Container from "@/app/_components/Container";
import SuperButton from "@/components/SuperButton";
import prisma from "@/lib/prisma";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {category:string | undefined};

const CategoriesFeed = async ({category}: Props) => {
  const categories = await prisma.category.findMany();
  return (
    <Container className="flex items-center gap-3 justify-center">
      <SuperButton
        buttonType="pushButton"
        href="/blog"
        title="All"
        className={cn("cursor-pointer",category && " bg-white text-black hover:bg-site-primary/50")}
      />
      {categories.map((item) => (
        <SuperButton
          className={cn("cursor-pointer capitalize",category!==item.slug && 'text-black bg-white hover:bg-site-primary/50')}
          key={item.id}
          buttonType="pushButton"
          href={`/blog?category=${item.slug}`}
          title={item.name}
        />
      ))}
    </Container>
  );
};

export default CategoriesFeed;
