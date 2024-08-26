import React, { useEffect } from 'react'

type TDropdownMenu = {
  children: React.ReactNode
  className?: string
  asChild?: true
  onClick?: () => void
  showStatusBar?: boolean
  toggleStatusBar?: (event: React.MouseEvent) => void
  href?: string
  menuRef?: React.RefObject<HTMLDivElement>
}

export function DropdownMenu({ children }: TDropdownMenu) {
  return <div className="relative">{children}</div>
}

export function DropdownMenuTrigger({ children }: TDropdownMenu) {
  return <div>{children}</div>
}

export function DropdownMenuContent({ children, showStatusBar, toggleStatusBar, menuRef }: TDropdownMenu) {
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef?.current && !menuRef.current.contains(event.target as Node)) {
      toggleStatusBar?.(event as unknown as React.MouseEvent)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return showStatusBar ? (
    <div ref={menuRef} className="absolute flex flex-col space-y-1 py-1 border rounded-lg shadow-md bg-background">
      {children}
    </div>
  ) : null
}

export function DropdownMenuLabel({ children }: TDropdownMenu) {
  return <label className="pb-2 mb-2 border-b border-border">{children}</label>
}

export function DropdownMenuItem({ children, href, ...props }: TDropdownMenu) {
  return (
    <>
      {href ? (
        <a className="flex px-2 text-sm text-foreground cursor-pointer" {...props}>
          {children}
        </a>
      ) : (
        <>{children}</>
      )}
    </>
  )
}

export function DropdownCheckboxItem({ children }: TDropdownMenu) {
  return <>{children}</>
}
