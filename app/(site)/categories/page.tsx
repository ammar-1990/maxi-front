import Container from '@/app/_components/Container'
import React from 'react'
import CategoriesFeed from './_components/CategoriesFeed'

type Props = {
  searchParams:Promise<{category:string | undefined}>
}

const page = async ({searchParams}: Props) => {

  const {category} = await searchParams
  return (
    <div>
<CategoriesFeed category={category}/>
      <Container className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 mt-12'>

    {/* filter */}
    <div className=''>
      filter
    </div>

    {/* blogs */}
    <div className='md:col-span-2 xl:col-span-3'>
      blogs
    </div>
      </Container>
    </div>
  )
}

export default page