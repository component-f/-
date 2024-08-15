'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils/cn'

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}
const labelVariants = cva('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70')

const Label = React.forwardRef<HTMLLabelElement, LabelProps & VariantProps<typeof labelVariants>>(
  ({ className, htmlFor, ...props }, ref) => {
    return (
      <label
        htmlFor={htmlFor}
        className={cn(labelVariants(), className)}
        {...props}
        ref={ref}
        onMouseDown={(event) => {
          const target = event.target as HTMLElement
          if (target.closest('button, input, select, textarea')) return
          props.onMouseDown?.(event)
          // 더블클릭 시 텍스트 선택(하이라이트) 방지
          if (!event.defaultPrevented && event.detail > 1) event.preventDefault()
        }}
      />
    )
  },
)

Label.displayName = 'Label'

export { Label }
