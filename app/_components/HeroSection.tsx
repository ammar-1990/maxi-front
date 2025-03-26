import React from 'react'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div>
   <div className="text-center max-w-2xl mx-auto mb-6 p-3">
    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
    Ideas That Stick. Stories That Matter.
    </h1>
    <p className="text-muted-foreground mt-2 text-sm">
    In a world full of distractions, this space offers focus. Insightful ideas, practical reflections, and stories that connect — thoughtfully curated for those who want to read with intention.
    </p>
  </div>
 {/* video */}
 <div className='w-full max-w-[900px] mx-auto aspect-video border rounded-md'>
    
 </div>
    </div>
 
  )
}

export default HeroSection