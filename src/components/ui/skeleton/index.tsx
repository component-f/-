import React from 'react'
import { twMerge } from 'tailwind-merge'

type TSkeletonProps = React.ComponentPropsWithoutRef<'div'>

export default function Skeleton({ className }: TSkeletonProps) {
  return (
    <>
      <div className="animate-pulse">
        <div className={twMerge('bg-foreground rounded-full h-10 w-10', className)}></div>
      </div>
    </>
  )
}
