import { cn } from '@/lib/utils'
import React, { PropsWithChildren } from 'react'

type Props = {className?:string} & PropsWithChildren

const Container = ({children,className}: Props) => {
  return (
    <div className={cn("mx-auto max-w-[1200px]",className)}>
        {children}
    </div>
  )
}

export default Container