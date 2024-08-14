import React from 'react'
import { twMerge } from 'tailwind-merge'

type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'text' | 'contained' | 'outlined'
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, TButtonProps>(
  ({ className, variant = 'text', startIcon, endIcon, children, ...props }, ref) => {
    const baseClassName =
      'py-2 px-4 rounded-[8px] font-medium flex justify-center items-center gap-2 duration-100 disabled:opacity-50'

    const variantClassNames = {
      text: 'border-none hover:opacity-50',
      contained: 'bg-primary text-background  hover:opacity-50',
      outlined: ' border border-border hover:opacity-50',
    }

    return (
      <button ref={ref} className={twMerge(baseClassName, variantClassNames[variant], className)} {...props}>
        {startIcon && <span className="start-icon mr-2">{startIcon}</span>}
        {children || 'BUTTON'}
        {endIcon && <span className="end-icon ml-2">{endIcon}</span>}
      </button>
    )
  },
)

export default Button
