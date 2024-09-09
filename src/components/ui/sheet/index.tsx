import React from 'react'
import { Button } from '../button'
import { X } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

type TSheetComponentProps = {
  children: React.ReactNode
  sheet?: boolean
  toggleSheet?: () => void
  className?: string
}

function Sheet({ children, className }: TSheetComponentProps) {
  return (
    <>
      <div className={twMerge(className)}>{children}</div>
    </>
  )
}

function SheetTrigger({ children, className }: TSheetComponentProps) {
  return (
    <div className={twMerge('inline-flex items-center justify-center border rounded-lg', className)}>{children}</div>
  )
}

function SheetContent({ children, sheet, toggleSheet, className }: TSheetComponentProps) {
  return (
    <>
      {sheet && (
        <>
          <div
            className={`fixed inset-0 z-10 bg-black bg-opacity-90 transition-opacity duration-300 ease-in-out ${
              sheet ? 'opacity-90' : 'opacity-0'
            }`}
            onClick={toggleSheet}
          />
          <div
            className={twMerge(
              `fixed inset-y-0 right-0 z-10 gap-4 bg-background p-6 transition ease-in-out h-full w-3/4 sm:max-w-sm ${
                sheet ? 'translate-x-0' : 'translate-x-full'
              }`,
              className,
            )}
          >
            <Button className="absolute right-4 top-4 p-1" variant="outlined" onClick={toggleSheet}>
              <X size={15} />
            </Button>
            {children}
          </div>
        </>
      )}
    </>
  )
}

function SheetHeader({ children, className, ...props }: TSheetComponentProps) {
  return (
    <div className={twMerge('flex flex-col space-y-2', className)} {...props}>
      {children}
    </div>
  )
}

function SheetTitle({ children, className, ...props }: TSheetComponentProps) {
  return (
    <h1 className={twMerge('text-xl font-semibold', className)} {...props}>
      {children}
    </h1>
  )
}

function SheetDescription({ children, className, ...props }: TSheetComponentProps) {
  return (
    <p className={twMerge('', className)} {...props}>
      {children}
    </p>
  )
}

function SheetFooter({ children, className }: TSheetComponentProps) {
  return <div className={twMerge('flex flex-row-reverse', className)}>{children}</div>
}

function SheetClose({ children, className }: TSheetComponentProps) {
  return <div className={twMerge(className)}>{children}</div>
}

export { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose }
