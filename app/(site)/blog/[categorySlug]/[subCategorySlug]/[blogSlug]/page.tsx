import Container from "@/app/_components/Container";
import BlogEditor from "@/components/BlogEditor";
import ImageComponent from "@/components/ImageComponent";
import prisma from "@/lib/prisma";
import { Metadata, ResolvingMetadata } from "next";
import dynamic from "next/dynamic";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import React from "react";
import { subHours } from "date-fns";
import Link from "next/link";
import BlogCard from "../../../_components/BlogCard";
import Breadcrumbs from "@/app/_components/BreadCrumps";
import { BASE_URL } from "@/lib/Types";

type Props = {
  params: Promise<{
    blogSlug: string;
    categorySlug: string;
    subCategorySlug: string;
  }>;
};

// export async function generateStaticParams() {
//   const blogsSlug = await prisma.post.findMany({
//     select: {
//       slug: true,
//       subCategory:{
//         select:{
//           slug:true,
//           category:{
//             select:{
//               slug:true
//             }
//           }
//         }
//       }
//     },
//   });

//   return blogsSlug.map((item) => ({
//     blogSlug: item.slug,
//     categorySlug:item.subCategory.category.slug,
//     subCategorySlug:item.subCategory.slug

//   }));
// }

export const revalidate = 0;

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { blogSlug,categorySlug,subCategorySlug } = await params;
  console.log("SLUG", blogSlug);

  const blog = await prisma.post.findUnique({
    where: {
      slug: blogSlug,
      
    },
    include:{
      tags:{
        select:{
          name:true
        }
      }
    }
  });
  if (!blog) {
    return {
      title: "Not Found",
      description: "Blog Was Not Found",
      openGraph: {
        title: "Not Found",
        description: "Blog Was Not Found",
      },
    };
  }

  return {
    title: blog.seoTitle,
    description: blog.seoDescription,
    alternates:{
      canonical:`https://${BASE_URL}/blog/${categorySlug}/${subCategorySlug}/${blogSlug}`
    },
    metadataBase: new URL(`https://${BASE_URL}`),
    openGraph: {
      title: blog.seoTitle,
      description: blog.seoDescription,
      ...(blog.imageUrl && { images: [{  width: 1200,
        height: 630,
        alt: blog.title,url:blog.imageUrl}] }),
      url: `https://${BASE_URL}/blog/${categorySlug}/${subCategorySlug}/${blogSlug}`,
      siteName:'MAXI',
      type:'article',
      tags:blog.tags.map(tag=>(tag.name)),
      
      
    },
    keywords: blog.tags.map(tag => tag.name).join(', '),
    twitter: {
      card: 'summary_large_image',
      title: blog.seoTitle || blog.title,
      description: blog.seoDescription || blog.excerpt,
      ...(blog.imageUrl && { images: [{  width: 1200,
        height: 630,
        alt: blog.title,url:blog.imageUrl}] }),
    },
  };
}

const page = async ({ params }: Props) => {
  const { blogSlug, categorySlug, subCategorySlug } = await params;
  const blog = await prisma.post.findUnique({
    where: {
      slug: blogSlug,
      subCategory: {
        slug: subCategorySlug,

        category: {
          slug: categorySlug,
        },
      },
    },
    include: {
      subCategory: {
        select: {
          slug: true,
          name:true,
          category: {
            select: {
              slug: true,
              name:true
            },
          },
        },
      },
      postType: {
        select: {
          slug: true,
          name: true,
        },
      },
    },
  });

  if (!blog) return notFound();

  const headerList = await headers();
  const ip = headerList.get("x-forwarded-for") || "unknown";
  const userAgent = headerList.get("user-agent") || "unknown";
  const existing = await prisma.view.findFirst({
    where: {
      postId: blog.id,
      ip,
      createdAt: {
        gte: subHours(new Date(), 24),
      },
    },
  });

  if (!existing) {
    await prisma.view.create({
      data: {
        postId: blog.id,
        ip,
        userAgent,
      },
    });
  }

  const relatedBlogsRes = prisma.post.findMany({
    where: {
      AND: [
        {
          subCategory: {
            slug: blog.subCategory.slug,
          },
        },
        {
          NOT: {
            slug: blog.slug,
          },
        },
      ],
    },
    include: {
      subCategory: {
        select: {
          slug: true,
          name: true,
          category: {
            select: {
              name: true,
              slug: true,
            },
          },
        },
      },
      postType: {
        select: {
          slug: true,
        },
      },
    },
    take: 4,
  });

  const relatedTopicsRes = prisma.post.findMany({
    where: {
      AND: [
        {
          postType: {
            slug: blog.postType.slug,
          },
        },
        {
          NOT: {
            slug: blog.slug,
          },
        },
      ],
    },
    include: {
      subCategory: {
        select: {
          slug: true,
          name: true,
          category: {
            select: {
              name: true,
              slug: true,
            },
          },
        },
      },
      postType: {
        select: {
          slug: true,
        },
      },
    },
    take: 4,
  });

  const [relatedBlogs, relatedTopics] = await Promise.all([
    relatedBlogsRes,
    relatedTopicsRes,
  ]);

  return (
    <Container className="p-3">
      <Breadcrumbs
      className="my-8"
        items={[
          {
            title:'Home',
            href: `/`,
          },
          {
            title:blog.subCategory.category.name,
            href: `/blog?category=${blog.subCategory.category.slug}`,
          },
          {
            title: blog.subCategory.name,
            href: `/blog?category=${blog.subCategory.category.slug}&topic=${blog.subCategory.slug}`,
          },
          {
            title:blog.title,
            href: ``,
          },
        ]}
      />
      <p className="capitalize font-semibold text-5xl">{blog.title}</p>
      {blog.imageUrl && (
        <div className="relative border mt-4 h-[350px] rounded-md overflow-hidden">
          <ImageComponent
            imgClassName="object-contain"
            src={blog.imageUrl}
            alt={blog.title + "image"}
            className=" overflow-hidden absolute top-0 left-[50%] translate-x-[-50%] z-30 h-full"
          />
          <ImageComponent
            src={blog.imageUrl}
            alt={blog.title + "image"}
            className=" w-full   rounded-lg overflow-hidden h-full"
            imgClassName="blur-[5px]"
          />
        </div>
      )}
      {/* Editor */}
      <div className="mt-12">
        <BlogEditor content={blog.content} />
      </div>
      {/* related blogs */}
      {relatedBlogs.length ? (
        <div className="mt-8">
          <p className="font-semibold capitalize tracking-wide text-4xl">
            Related Blogs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
            {relatedBlogs.map((blog) => (
              <BlogCard key={blog.id} post={blog} isMain={true} />
            ))}
          </div>
        </div>
      ) : undefined}

      {/* related topics */}
      {relatedTopics.length ? (
        <div className="mt-8">
          <p className="font-semibold capitalize tracking-wide text-4xl">
            Other &apos;{blog.postType.name}&apos; blogs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
            {relatedTopics.map((blog) => (
              <BlogCard key={blog.id} post={blog} isMain={true} />
            ))}
          </div>
        </div>
      ) : undefined}
    </Container>
  );
};

export default page;
