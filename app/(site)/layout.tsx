import React, { ReactNode } from 'react'
import Header from '../_components/Header'

type Props = {children:ReactNode}

const layout = ({children}: Props) => {
  return (
    <div>
      <Header/>
        <main className='mt-8'>
            {children}
        </main>
    </div>
  )
}

export default layout