import React from 'react'

type TSheetComponentProps = {
  children: React.ReactNode
  sheet?: boolean
  toggleSheet?: () => void
}

export function Sheet({ children }: TSheetComponentProps) {
  return (
    <>
      <div>{children}</div>
    </>
  )
}

export function SheetTrigger({ children }: TSheetComponentProps) {
  return <>{children}</>
}

export function SheetContent({ children, sheet, toggleSheet }: TSheetComponentProps) {
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out z-40"
        onClick={toggleSheet}
      />
      <div
        className={`fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm ${
          sheet ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {children}
      </div>
    </>
  )
}

export function SheetHeader({ children }: TSheetComponentProps) {
  return <div className="flex flex-col space-y-2">{children}</div>
}

export function SheetTitle({ children }: TSheetComponentProps) {
  return <h1 className="text-xl font-semibold">{children}</h1>
}

export function SheetDescription({ children }: TSheetComponentProps) {
  return <p className="">{children}</p>
}

export function SheetFooter({ children }: TSheetComponentProps) {
  return <div className="flex flex-row-reverse">{children}</div>
}

export function SheetClose({ children }: TSheetComponentProps) {
  return <>{children}</>
}
