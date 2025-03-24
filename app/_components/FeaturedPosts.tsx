import prisma from "@/lib/prisma";
import React from "react";
import BlogCard from "../(site)/blog/_components/BlogCard";

type Props = {};

const FeaturedPosts = async (props: Props) => {
  const featuredPosts = await prisma.post.findMany({
    where: {
      isFeatured: true,
      published: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 6,
    include: {
      subCategory: {
        select: {
          name: true,
          category: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
  return <div>
    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center">Featured Insights</h2>
    <div className="mt-2 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredPosts.map(post=><BlogCard key={post.id} post={post}  isMain={true}/>)}

    </div>
  </div>;
};

export default FeaturedPosts;
