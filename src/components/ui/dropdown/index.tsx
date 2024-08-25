import React, { useRef, useEffect } from 'react'

type TDropdownMenu = {
  children: React.ReactNode
  className?: string
  asChild?: true
  onClick?: () => void
  showStatusBar?: boolean
  toggleStatusBar?: (status: boolean) => void
  href?: string
}

export function DropdownMenu({ children }: TDropdownMenu) {
  return <div className="relative">{children}</div>
}

export function DropdownMenuTrigger({ children }: TDropdownMenu) {
  return <div>{children}</div>
}

export function DropdownMenuContent({ children, showStatusBar, toggleStatusBar }: TDropdownMenu) {
  const menuRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      toggleStatusBar?.(false)
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
  return <>{children}</>
}

export function DropdownMenuItem({ children, ...props }: TDropdownMenu) {
  return (
    <a className="flex px-2 text-sm text-foreground cursor-pointer" {...props}>
      {children}
    </a>
  )
}
