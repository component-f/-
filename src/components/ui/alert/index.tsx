import { twMerge } from 'tailwind-merge'
import React from 'react'
import { cn } from '@/utils/cn'

type TAlertProps = React.ComponentPropsWithoutRef<'div'> & {
  icon?: React.ReactNode
}

const Alert = React.forwardRef<HTMLDivElement, TAlertProps>(({ className, icon, children, ...props }, ref) => (
  <div
    ref={ref}
    className={twMerge('flex items-center text-sm rounded-lg w-[500px] h-[54px] px-[16px] border', className)}
    {...props}
  >
    {icon && <div className="mr-4">{icon}</div>}
    {children}
  </div>
))

const AlertHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('flex flex-col space-y-1', className)} {...props} />,
)

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('font-semibold leading-none tracking-tight', className)} {...props} />
  ),
)

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn('text-sm text-foreground', className)} {...props} />,
)

const AlertButton = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button ref={ref} className={cn('ml-auto px-4 py-2 text-sm font-medium', className)} {...props} />
  ),
)

export { Alert, AlertHeader, AlertTitle, AlertDescription, AlertButton }
