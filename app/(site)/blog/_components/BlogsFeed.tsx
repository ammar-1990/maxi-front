import prisma from '@/lib/prisma'
import React from 'react'
import BlogCard from './BlogCard'

type Props = {subCategory:string[] | undefined, postType:string[] | undefined,category:string  | undefined}

const BlogsFeed =async ({postType, subCategory, category}: Props) => {
    
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
            }}),
            published:true,
       
        },
        include:{
            subCategory:{
                select:{
                    name:true,
                    category:{
                        select:{
                            name:true
                        }
                    }
                }
            }
        }
    })
 
  return (
    <div className='flex flex-col gap-2'>
        {blogs.map(blog=> <BlogCard key={blog.id}  post={blog}/>
         )}
    </div>
  )
}

export default BlogsFeed