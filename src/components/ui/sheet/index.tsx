import React from 'react'
import { Button } from '../button'
import { X } from 'lucide-react'

type TSheetComponentProps = {
  children: React.ReactNode
  sheet?: boolean
  toggleSheet?: () => void
}

function Sheet({ children }: TSheetComponentProps) {
  return (
    <>
      <div>{children}</div>
    </>
  )
}

function SheetTrigger({ children }: TSheetComponentProps) {
  return <div className="inline-flex items-center justify-center border rounded-lg">{children}</div>
}

function SheetContent({ children, sheet, toggleSheet }: TSheetComponentProps) {
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
            className={`fixed inset-y-0 right-0 z-10 gap-4 bg-background p-6 transition ease-in-out h-full w-3/4 sm:max-w-sm ${
              sheet ? 'translate-x-0' : 'translate-x-full'
            }`}
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

function SheetHeader({ children }: TSheetComponentProps) {
  return <div className="flex flex-col space-y-2">{children}</div>
}

function SheetTitle({ children }: TSheetComponentProps) {
  return <h1 className="text-xl font-semibold">{children}</h1>
}

function SheetDescription({ children }: TSheetComponentProps) {
  return <p className="">{children}</p>
}

function SheetFooter({ children }: TSheetComponentProps) {
  return <div className="flex flex-row-reverse">{children}</div>
}

function SheetClose({ children }: TSheetComponentProps) {
  return <>{children}</>
}

export { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose }
