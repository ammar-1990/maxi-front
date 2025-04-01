import React from 'react'

type Props = {}

const LoadingPage = (props: Props) => {
  return (
    <div className='w-full h-[100vh] fixed top-0 left-0 flex items-center justify-center bg-white'>
        <span className='text-black uppercase font-bold text-6xl animate-pulse'>MAXI</span>
    </div>
  )
}

export default LoadingPage