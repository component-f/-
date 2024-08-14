import React from 'react'
import { twMerge } from 'tailwind-merge'

type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'text' | 'contained' | 'outlined'
}

const Button = React.forwardRef<HTMLButtonElement, TButtonProps>(
  ({ className, variant = 'text', children, ...props }, ref) => {
    const baseClasseName = 'w-[88px] h-[40px] rounded-[8px]  font-medium	duration-100 disabled:opacity-50'

    const variantClassNames = {
      text: 'border-none hover:opacity-50',
      contained: 'bg-primary text-background  hover:opacity-50',
      outlined: 'bg-transparent border border-border hover:opacity-50',
    }

    return (
      <button ref={ref} className={twMerge(baseClasseName, variantClassNames[variant], className)} {...props}>
        {children || 'BUTTON'}
      </button>
    )
  },
)

export default Button
