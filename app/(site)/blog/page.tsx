import Container from '@/app/_components/Container'
import React from 'react'
import CategoriesFeed from './_components/CategoriesFeed'
import Filter from './_components/Filter'
import SuspenseComponent from '@/components/SuspensComponent'
 

type Props = {
  searchParams:Promise<{category:string | undefined,topic:string[] | undefined}>
}

const page = async ({searchParams}: Props) => {

  const {category, topic} = await searchParams
  return (
    <div>
<CategoriesFeed category={category}/>
      <Container className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 mt-12 gap-2'>

    {/* filter */}
    <SuspenseComponent className='' key={category}>
      <Filter  category={category}  topic={topic} />
    </SuspenseComponent>

    {/* blogs */}
    <div className='md:col-span-2 xl:col-span-3'>
      blogs
    </div>
      </Container>
    </div>
  )
}

export default page