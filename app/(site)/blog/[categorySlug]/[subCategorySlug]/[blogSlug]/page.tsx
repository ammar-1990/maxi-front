import Container from "@/app/_components/Container";
import BlogEditor from "@/components/BlogEditor";
import ImageComponent from "@/components/ImageComponent";
import prisma from "@/lib/prisma";
import { Metadata, ResolvingMetadata } from "next";
import dynamic from "next/dynamic";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import React from "react";
import {subHours} from 'date-fns'

type Props = {
  params: Promise<{ blogSlug: string,categorySlug:string,subCategorySlug:string }>;
};
export async function generateStaticParams() {
  const blogsSlug = await prisma.post.findMany({
    select: {
      slug: true,
      subCategory:{
        select:{
          slug:true,
          category:{
            select:{
              slug:true
            }
          }
        }
      }
    },
  });

  return blogsSlug.map((item) => ({
    blogSlug: item.slug,
    categorySlug:item.subCategory.category.slug,
    subCategorySlug:item.subCategory.slug

  }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { blogSlug } = await params;
  console.log("SLUG", blogSlug);

  const blog = await prisma.post.findUnique({
    where: {
      slug: blogSlug,
    },
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
    openGraph: {
      title: blog.seoTitle,
      description: blog.seoDescription,
      ...(blog.imageUrl && { images: [blog.imageUrl] }),
    },
  };
}

const page = async ({ params }: Props) => {
  const { blogSlug,categorySlug,subCategorySlug } = await params;
  const blog = await prisma.post.findUnique({
    where: {
      slug: blogSlug,
      subCategory:{
        slug:subCategorySlug,
        category:{
          slug:categorySlug
        }
      }
    },
  });

  if (!blog) return notFound();

  const headerList =await headers()
  const ip = headerList.get('x-forwarded-for') || 'unknown'
  const userAgent = headerList.get('user-agent') || 'unknown';
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
  return (
    <Container>
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
    </Container>
  );
};

export default page;
