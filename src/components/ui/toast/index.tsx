import { cn } from '@/utils/cn'
import { VariantProps, cva } from 'class-variance-authority'
import dynamic from 'next/dynamic'

import * as React from 'react'

const Portal = dynamic(() => import('@/components/common/portal').then((mod) => mod.Portal), { ssr: false })

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[state=open]:animate-in data-[state=closed]:fade-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full ',
  {
    variants: {
      variant: {
        default: 'border bg-background text-foreground',
        destructive: 'destructive group border-destructive bg-destructive text-destructive-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

type TToastProps = {
  open: boolean
} & React.ComponentPropsWithRef<'div'> &
  VariantProps<typeof toastVariants>

const Toast = React.forwardRef<HTMLDivElement, TToastProps>(({ className, variant, ...props }, ref) => {
  const { open } = props

  return (
    <>
      {open && (
        <div
          data-state={open ? 'open' : 'closed'}
          ref={ref}
          className={cn(toastVariants({ variant }), className)}
          {...props}
        />
      )}
    </>
  )
})

/* -------------------------------------------------------------------------------------------------
 * ToastPortal
 * -----------------------------------------------------------------------------------------------*/

const ToastPortal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Portal className="fixed bottom-0 right-0 z-[100] max-h-screen w-full p-4 flex flex-col overflow-hidden md:max-w-[420px]">
      {children}
    </Portal>
  )
}

/* -------------------------------------------------------------------------------------------------
 * ToastTitle
 * -----------------------------------------------------------------------------------------------*/

const ToastTitle = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn('text-sm font-semibold', className)} {...props} />
  },
)

/* -------------------------------------------------------------------------------------------------
 * ToastDescription
 * -----------------------------------------------------------------------------------------------*/

const ToastDescription = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn('text-sm opacity-90', className)} {...props} />
  },
)

export { ToastPortal, Toast, ToastTitle, ToastDescription, type TToastProps }
