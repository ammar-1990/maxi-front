import ImageComponent from "@/components/ImageComponent";
import { cn } from "@/lib/utils";
import { Post, SubCategory } from "@prisma/client";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";

type Props = {
  post: Post & {
    subCategory: {
      name: string;
      slug: string;
      category: {
        name: string;
        slug: string;
      };
    };
  };
  isMain?: boolean;
};

const BlogCard = ({ post, isMain }: Props) => {
  return (
    <Link
      href={`/blog/${post.subCategory.category.slug}/${post.subCategory.slug}/${post.slug}`}
      className={cn(
        "rounded-md  shadow-sm overflow-hidden relative group cursor-pointer w-full flex flex-col md:flex-row",
        isMain && "md:flex-col"
      )}
    >
      <span className="top-3 right-3 bg-site-primary z-20 text-white text-xs rounded-full px-3 py-1 absolute capitalize font-[500]">
        {post.subCategory.category.name}
      </span>
      <div className="absolute top-0 left-0 bg-black/70 opacity-0 group-hover:opacity-100 z-50 transition flex items-center justify-center w-full h-full">
        <p className="text-white capitalize text-md font-[500]">Read More</p>
      </div>
      {post.imageUrl && (
        <div className="h-[200px] relative overflow-hidden">
          <ImageComponent
            src={post.imageUrl}
            alt="blog-image"
            className={cn("h-full w-full")}
            imgClassName="blur-[5px]"
          />
          <ImageComponent
            src={post.imageUrl}
            alt="blog-image"
            className={cn("absolute top-0 left-[50%] translate-x-[-50%] z-10 h-full")}
               imgClassName="object-contain"
          />
        </div>
      )}
      <div className=" flex flex-col p-4 gap-2 flex-1">
        <p className="text-xs font-[500] ">{post.subCategory.name}</p>
        <h3 className="font-semibold capitalize">{post.title}</h3>
        <p className="line-clamp-4 first-letter:capitalize text-muted-foreground text-xs">
          {post.excerpt}
        </p>
        <div className="mt-auto flex justify-between">
          {post.author && (
            <p className="self-end text-xs text-muted-foreground font-[500] capitalize">
              By {post.author}
            </p>
          )}
          <p className="self-end text-xs text-muted-foreground font-[500]  ">
            Published on: {format(new Date(post.createdAt), "MMMM dd, yyyy")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
