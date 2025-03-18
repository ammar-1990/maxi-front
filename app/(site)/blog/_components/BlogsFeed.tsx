import prisma from '@/lib/prisma'
import React from 'react'
import BlogCard from './BlogCard'

type Props = {subCategory:string[] | undefined, postType:string[] | undefined,category:string  | undefined}

const BlogsFeed =async ({postType, subCategory, category}: Props) => {
    console.log("SubCategory",subCategory)
    console.log("PostType",postType)
    const blogs = await prisma.post.findMany({
        where:{
            ...(category && {subCategory:{
                category:{
                    slug:category
                }
            }}),
            ...(postType && {postType:{slug:{
                in: Array.isArray(postType) ? postType : [postType]
            }}}),
            ...(subCategory && {subCategory:{
                slug:{
                    in: Array.isArray(subCategory) ? subCategory : [subCategory]
                }
            }})
        }
    })
    console.log("Blogs",blogs)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2'>
        {blogs.map(blog=> <BlogCard key={blog.id}  post={blog}/>
         )}
    </div>
  )
}

export default BlogsFeed