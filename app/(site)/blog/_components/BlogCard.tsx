import ImageComponent from '@/components/ImageComponent'
import { Post } from '@prisma/client'
import React from 'react'

type Props = {post:Post}

const BlogCard = ({post}: Props) => {
  return (
    <div className='rounded-md  border overflow-hidden'>
        {post.imageUrl && <ImageComponent src={post.imageUrl} aspect='video' alt='blog-image' className='mb-2' />}
        <div className=' flex flex-col p-2 gap-2'>
            <h3 className='font-semibold capitalize'>{post.title}</h3>
            <p className='line-clamp-4 first-letter:capitalize text-muted-foreground text-xs'>{post.excerpt}</p>
        </div>
    </div>
  )
}

export default BlogCard