import { useDropdownStore } from '@/store/useDropdownStore'
import { cn } from '@/utils/cn'
import React from 'react'

const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative">{children}</div>
}

const DropdownMenuTrigger = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
  ({ className, ...props }, ref) => {
    const toggleDropdown = useDropdownStore((state) => state.toggleDropdown)
    return <div ref={ref} className={cn('hover:cursor-pointer', className)} {...props} onClick={toggleDropdown} />
  },
)

const DropdownMenuContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
  ({ children, className, ...props }, ref) => {
    const { dropdown, toggleDropdown } = useDropdownStore((state) => ({
      dropdown: state.dropdown,
      toggleDropdown: state.toggleDropdown,
    }))

    return dropdown ? (
      <div
        ref={ref}
        className={cn(
          'absolute flex flex-col border rounded-lg shadow-md bg-background mt-1 w-auto p-1 z-50',
          className,
        )}
        onClick={toggleDropdown}
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
