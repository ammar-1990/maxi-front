import ImageComponent from '@/components/ImageComponent';
import SuperButton from '@/components/SuperButton';
import { Category } from '@prisma/client';
import Link from 'next/link';
import React from 'react'

type Props = {
    category:Category
}

const CategoryCard = ({category}: Props) => {
  return (
    <Link href={`/blog?category=${category.slug}`} className="border flex flex-col transition hover:scale-95">
    {category.image && <ImageComponent src={category.image} aspect="video" alt="category-img"  />}
    <div className="p-4  flex  gap-3 flex-col flex-1">
 <h3 className="font-[500] text-lg capitalize">{category.name}</h3>
 <p className="text-xs text-muted-foreground first-letter:capitalize line-clamp-3">
   {category.description}
 </p>

 
</div>
</Link>
  )
}

export default CategoryCard