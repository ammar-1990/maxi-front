import React, { ReactNode } from 'react'
import Header from '../_components/Header'
import Footer from '../_components/Footer'

type Props = {children:ReactNode}

const layout = ({children}: Props) => {
  return (
    <div>
      <Header/>
        <main className='mt-8'>
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export default layout