import React from 'react'
import { twMerge } from 'tailwind-merge'

type TTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = React.forwardRef<HTMLTextAreaElement, TTextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={twMerge(
        `border text-sm placeholder:text-gray200 focus-visible:outline-none  focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 rounded-lg w-full h-[100px] pt-[8px] pl-[16px] bg-transparent`,
        className,
      )}
      {...props}
    />
  )
})

export { Textarea }
