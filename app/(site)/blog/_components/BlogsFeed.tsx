import prisma from '@/lib/prisma'
import React from 'react'
import BlogCard from './BlogCard'
import NoResult from '@/app/_components/NoResult'
import Pagination from '@/components/Pagination'
import { TAKE_BLOGS } from '@/lib/Types'

type Props = {subCategory:string[] | undefined, postType:string[] | undefined,category:string  | undefined,pageNumber:number}

const BlogsFeed =async ({postType, subCategory, category,pageNumber}: Props) => {
    
    const blogsRes =  prisma.post.findMany({
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
                    slug:true,
                    category:{
                        select:{
                            name:true,
                            slug:true
                        }
                    }
                }
            }
        },
        take: TAKE_BLOGS,
        skip: (pageNumber - 1) * TAKE_BLOGS,
    })

    const blogsCountRes = prisma.post.count({
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
    })

    const [blogs,blogsCount] = await Promise.all([blogsRes, blogsCountRes])
 
  return (
 <div>
       <div className='flex flex-col gap-2'>
        {!blogs.length && <NoResult title='No Result' description='No Blogs Found' />}
        {blogs.map(blog=> <BlogCard key={blog.id}  post={blog}/>
         )}
    </div>
    <div className='mt-4'>
    <Pagination href='/blog' count={blogsCount} />
    </div>
  
 </div>
  )
}

export default BlogsFeed