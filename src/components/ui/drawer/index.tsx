import React, { useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import { X } from 'lucide-react'
import { Button } from '../button'

export type TDrawerProps = {
  open: boolean
  toggleDrawer: (open: boolean) => (event: React.MouseEvent<Element> | React.KeyboardEvent<Element>) => void
  children: React.ReactNode
  className?: string
  drawerLogo?: React.ReactNode
} & React.ComponentPropsWithRef<'div'>

const Drawer: React.FC<TDrawerProps> = ({ open, toggleDrawer, children, className, drawerLogo, ...props }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleClose = () => {
    toggleDrawer(false)({} as React.MouseEvent)
  }

  const handleChildClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    handleClose()
  }

  return (
    <>
      {/* 오버레이 */}
      {open && <div className="fixed inset-0 bg-black/80 z-10 md:hidden" onClick={handleClose} aria-hidden="true" />}

      {/* Drawer 컴포넌트 */}
      <div
        className={twMerge(
          'fixed top-0 left-0 h-full w-64 transform transition-transform duration-300 z-20   overflow-scroll',
          open ? 'translate-x-0' : '-translate-x-full',
          'md:hidden',
          className,
        )}
        {...props}
        onClick={handleClose}
      >
        {/* 헤더 */}
        <div className={twMerge('sticky top-0 flex items-center justify-between p-2 z-30 ', className)} {...props}>
          {drawerLogo && <div className="flex items-center">{drawerLogo}</div>}
          <Button onClick={handleClose}>
            <X />
          </Button>
        </div>
        <div className="overflow-y-auto" onClick={handleChildClick}>
          {children}
        </div>
      </div>
    </>
  )
}

export { Drawer }
