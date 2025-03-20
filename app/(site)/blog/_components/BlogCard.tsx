import ImageComponent from '@/components/ImageComponent'
import { Post } from '@prisma/client'
import { format } from 'date-fns'
import Link from 'next/link'
import React from 'react'

type Props = {post:Post}

const BlogCard = ({post}: Props) => {
  return (
    <Link href={`/blog/${post.slug}`} className='rounded-md  border overflow-hidden relative group cursor-pointer w-full flex flex-col'>
        <div className='absolute top-0 left-0 bg-black/70 opacity-0 group-hover:opacity-100 z-10 transition flex items-center justify-center w-full h-full'>
        <p className='text-white capitalize text-md font-[500]'>Readt More</p>

        </div>
        {post.imageUrl && <ImageComponent src={post.imageUrl} aspect='video' alt='blog-image' className='mb-2' />}
        <div className=' flex flex-col p-2 gap-2 flex-1'>
            <h3 className='font-semibold capitalize'>{post.title}</h3>
            <p className='line-clamp-4 first-letter:capitalize text-muted-foreground text-xs'>{post.excerpt}</p>
            <p className='self-end text-xs text-muted-foreground font-[500] mt-auto'>Published on: {format(new Date(post.createdAt), "MMMM dd, yyyy")}</p>
        </div>
    </Link>
  )
}

export default BlogCard