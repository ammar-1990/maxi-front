"use server";

import prisma from "@/lib/prisma";

export async function searchPosts(query: string) {
  if (!query.trim()) return [];

  const posts = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: `${query}`,
            mode: "insensitive",
          },
        },
        {
          excerpt: {
            contains: `${query}`,
            mode: "insensitive",
          },
       
        },
      {  subCategory:{
          name:{
            contains: `${query}`,
            mode:'insensitive'
          },
          
        }}
      ],
      published: true,
    },
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      subCategory: {
        select: {
          slug: true,
          name: true,
          category: {
            select: {
              slug: true,
              name: true,
            },
          },
        },
      },
    },
    take: 10,
    orderBy: {
        createdAt: "desc"
      }
  });

  return posts;
}
