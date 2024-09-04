import React from 'react'
import { twMerge } from 'tailwind-merge'

type TdividerProps = React.HTMLAttributes<HTMLDivElement> & { className?: string }
export default function Divider({ className, ...props }: TdividerProps) {
  return <div className={twMerge('flex-grow border-t  my-0', className)} {...props}></div>
}
