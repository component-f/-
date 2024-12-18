'use client'

import { cn } from '@/utils/cn'
import React, { useState } from 'react'

type TTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  maxLength?: number
  counterClassName?: string // counterClassName 스타일링을 위함
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TTextareaProps>(
  ({ className, maxLength, counterClassName = 'text-gray-500', ...props }, ref) => {
    const [text, setText] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      // maxLength가 있는 경우에만 글자 수 제한 적용
      if (!maxLength || e.target.value.length <= maxLength) {
        setText(e.target.value)
      }
    }

    return (
      <div className="flex flex-col">
        <textarea
          ref={ref}
          className={cn(
            `w-full border text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 rounded-lg pt-2 pl-4 bg-transparent`,
            className,
          )}
          value={text}
          onChange={handleChange}
          {...props}
        />
        {maxLength && (
          <p className={cn('ml-auto text-sm mt-1', counterClassName)}>
            {text.length}/{maxLength}
          </p>
        )}
      </div>
    )
  },
)

export { Textarea }
