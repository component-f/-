import React from 'react'
import { twMerge } from 'tailwind-merge'

type TTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = React.forwardRef<HTMLTextAreaElement, TTextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={twMerge(
        `border border-border text-sm focus:ring-2 focus:ring-offset-2 focus:ring-black focus:outline-none rounded-lg w-full h-[100px] pt-[8px] pl-[16px] bg-transparent disabled:cursor-not-allowed`,
        className,
      )}
      {...props}
    />
  )
})

export default Textarea
