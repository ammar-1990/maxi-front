import Container from "@/app/_components/Container";
import React from "react";
import CategoriesFeed from "./_components/CategoriesFeed";
import Filter from "./_components/Filter";
import SuspenseComponent from "@/components/SuspensComponent";
import BlogsFeed from "./_components/BlogsFeed";
import Breadcrumbs from "@/app/_components/BreadCrumps";
import { Metadata } from "next";
import { BASE_URL } from "@/lib/Types";

type Props = {
  searchParams: Promise<{
    category: string | undefined;
    topic: string[] | undefined;
    blogStyle: string[] | undefined;
    pageNumber:string | undefined
  }>;
};

export const metadata: Metadata = {
  title: 'Explore Blogs | MAXI',
  description:
    'Browse all MAXI blog posts — from tech and health to philosophy and storytelling. Use filters to discover exactly what matters to you.',
  alternates: {
    canonical: `https://${BASE_URL}/blog`,
  },
  keywords: [
    'MAXI blogs',
    'Tech articles',
    'Health content',
    'AI blogs',
    'Spirituality stories',
    'Philosophy blog',
  ],
  openGraph: {
    title: 'Explore Blogs | MAXI',
    description:
      'Discover our full collection of blogs — searchable by category, topic, or post type. Curated to inform and inspire.',
    url: `https://${BASE_URL}/blog`,
    siteName: 'MAXI',
    type: 'website',
    images: [
      {
        url: `https://themaxiworld.com/maxi-seo.png`,
        width: 1200,
        height: 630,
        alt: 'MAXI Hero',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Explore Blogs | MAXI',
    description:
      'Find exactly what you need — tech, health, philosophy, or storytelling. Filtered, refined, and worth your time.',
      images: [
        {
          url: `https://themaxiworld.com/maxi-seo.png`,
          width: 1200,
          height: 630,
          alt: 'MAXI Hero',
        },
      ],
  },
  robots: {
    index: true,
    follow: true,
  },
};



export const revalidate = 0

const page = async ({ searchParams }: Props) => {
  const { category, topic, blogStyle,pageNumber } = await searchParams;
  let usedPageNumber = +(pageNumber ?? 1)
  if (
    !usedPageNumber ||
    isNaN(Number(usedPageNumber)) ||
    Number(usedPageNumber) < 1 ||
    !Number.isInteger(Number(usedPageNumber))
  ) {
    console.warn("Invalid page param::", pageNumber);
    usedPageNumber = 1;
  }
  return (
    <div className="p-3">
      <Container>
      <Breadcrumbs
      categorySlug={category}
    
      className="mb-10"
      items={[{title:'Home',href:'/'},{title:'Blog',href:'/blog'}]}
      />
      </Container>
 
      <CategoriesFeed category={category} />
      <Container className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 mt-12 gap-2">
        {/* filter */}
        <SuspenseComponent className="" key={category}>
          <Filter category={category} topic={topic} blogStyle={blogStyle} />
        </SuspenseComponent>

        {/* blogs */}
        <div className="md:col-span-2 xl:col-span-4">
          <SuspenseComponent>
            <BlogsFeed postType={blogStyle} subCategory={topic} category={category} pageNumber={+usedPageNumber}/>
          </SuspenseComponent>
        </div>
      </Container>
    </div>
  );
};

export default page;
