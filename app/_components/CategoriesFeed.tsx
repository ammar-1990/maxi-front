import prisma from '@/lib/prisma'
import React from 'react'
import CategoryCard from './CategoryCard'

type Props = {}

const CategoriesFeed = async(props: Props) => {
    const categories = await prisma.category.findMany()
  return (
    <div>
           <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center">Categories</h2>
       <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-3'>
        {categories.map(item=><CategoryCard category={item} key={item.id} />)}
    </div>
      </div>

   
  )
}

export default CategoriesFeed