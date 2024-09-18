import { useDropdownStore } from '@/store/useDropdownStore'
import { cn } from '@/utils/cn'
import React, { useEffect, useImperativeHandle, useRef } from 'react'

const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative">{children}</div>
}

const DropdownMenuTrigger = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'> & { keyId: string }>(
  ({ className, keyId, ...props }, ref) => {
    const { isOpen, toggleDropdown } = useDropdownStore((state) => ({
      isOpen: state.isOpen,
      toggleDropdown: state.toggleDropdown,
    }))

    const handleClick = (e: React.MouseEvent) => {
      e.stopPropagation()
      if (!isOpen[keyId]) {
        toggleDropdown(keyId)
      }
    }

    return (
      <div ref={ref} className={cn('hover:cursor-pointer', className)} {...props} onClick={handleClick}>
        {props.children}
      </div>
    )
  },
)

const DropdownMenuContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'> & { keyId: string }>(
  ({ children, className, keyId, ...props }, ref) => {
    const { isOpen, toggleDropdown } = useDropdownStore((state) => ({
      isOpen: state.isOpen,
      toggleDropdown: state.toggleDropdown,
    }))

    const contentRef = useRef<HTMLDivElement | null>(null)

    useImperativeHandle(ref, () => contentRef.current!)

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
          toggleDropdown(keyId)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [keyId, toggleDropdown])

    return isOpen[keyId] ? (
      <div
        ref={contentRef}
        className={cn(
          'absolute flex flex-col border rounded-lg shadow-md bg-background mt-1 w-auto p-1 z-50',
          className,
        )}
        onClick={() => toggleDropdown(keyId)}
        {...props}
      >
        {children}
      </div>
    ) : null
  },
)

const DropdownMenuLabel = ({ children }: { children: React.ReactNode }) => {
  return <label className="flex items-center justify-center py-2 border-b text-sm">{children}</label>
}

const DropdownMenuItem = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <>
      {href ? (
        <a
          className="flex p-2 text-sm text-foreground cursor-pointer rounded-md hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          href={href}
        >
          {children}
        </a>
      ) : (
        <div className="flex p-2 text-sm text-foreground cursor-pointer rounded-md hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          {children}
        </div>
      )}
    </>
  )
}

export { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger }
