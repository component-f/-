import React from 'react'
import { twMerge } from 'tailwind-merge'

type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'text' | 'contained' | 'outlined'
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  children?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, TButtonProps>(
  ({ className, variant = 'text', startIcon, endIcon, children, ...props }, ref) => {
    const isIconOnly = !startIcon && !endIcon && React.isValidElement(children)

    const baseClassName = twMerge(
      'flex justify-center items-center duration-100 font-medium text-sm	disabled:opacity-50',
      isIconOnly ? 'p-2' : 'py-2 px-4',
    )

    const variantClassNames = {
      text: 'text-ring hover:opacity-50',
      contained: 'bg-ring text-background  hover:opacity-50 rounded-lg ',
      outlined: ' border text-ring hover:opacity-50 rounded-lg ',
    }

    return (
      <button ref={ref} className={twMerge(baseClassName, variantClassNames[variant], className)} {...props}>
        {startIcon && <span className="start-icon mr-2 ">{startIcon}</span>}
        {children || 'BUTTON'}
        {endIcon && <span className="end-icon ml-2">{endIcon}</span>}
      </button>
    )
  },
)

export { Button }
