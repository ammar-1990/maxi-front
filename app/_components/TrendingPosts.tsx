import prisma from '@/lib/prisma';
import React from 'react'
import BlogCard from '../(site)/blog/_components/BlogCard';

type Props = {}

const TrendingPosts =async (props: Props) => {
    const trendingPosts = await prisma.$queryRaw<
    { postId: string; viewCount: number }[]
  >`
    SELECT 
      "postId", COUNT(*) as "viewCount"
    FROM "View"
    WHERE "createdAt" >= NOW() - INTERVAL '7 days'
    GROUP BY "postId"
    ORDER BY "viewCount" DESC
    LIMIT 5;
  `;

  const posts = await prisma.post.findMany({
    where: {
      id: {
        in: trendingPosts.map(p => p.postId),
      },
      published: true,
    },
    include: {
      subCategory: {
        include: { category: true },
      },
    },
  });
  return (
    <div>
    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center">Trending Now</h2>
    <div className="mt-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map(post=><BlogCard key={post.id} post={post}  isMain={true}/>)}

    </div>
  </div>
  )
}

export default TrendingPosts