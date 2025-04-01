import ImageComponent from '@/components/ImageComponent';
import SuperButton from '@/components/SuperButton';
import { cn } from '@/lib/utils';
import { Category } from '@prisma/client';
import Link from 'next/link';
import React from 'react'

type Props = {
    category:Category
}

const CategoryCard = ({category}: Props) => {
  return (
    <Link href={`/blog?category=${category.slug}`} className="shadow-sm flex flex-col transition hover:scale-95 rounded-md overflow-hidden">
    {category.image &&   <div className="h-[200px] relative overflow-hidden">
          <ImageComponent
            src={category.image}
            alt="blog-image"
            className={cn("h-full w-full")}
            imgClassName="blur-[5px]"
          />
          <ImageComponent
            src={category.image}
            alt="blog-image"
            className={cn("absolute top-0 left-[50%] translate-x-[-50%] z-10 h-full")}
               imgClassName="object-contain"
          />
        </div>}
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