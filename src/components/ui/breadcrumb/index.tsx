import React from 'react'
import { ChevronRight } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

type TBreadcrumbComponentProps = {
  children?: React.ReactNode
  separator?: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
}

function Breadcrumb({ children }: TBreadcrumbComponentProps) {
  return <nav>{children}</nav>
}

function BreadcrumbList({ children, className, ...props }: TBreadcrumbComponentProps) {
  return (
    <li className={twMerge('flex items-center', className)} {...props}>
      {children}
    </li>
  )
}

function BreadcrumbSeparator({ separator, className, ...props }: TBreadcrumbComponentProps) {
  return separator ? (
    <div className={twMerge('px-2 text-gray200', className)} {...props}>
      {separator}
    </div>
  ) : (
    <ChevronRight size={20} className={twMerge('text-ring', className)} {...props} />
  )
}

function BreadcrumbLink({ children, className, ...props }: TBreadcrumbComponentProps) {
  return (
    <a
      className={twMerge(
        'flex items-center text-gray200 hover:text-accent-foreground focus:text-accent-foreground ',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}

function BreadcrumbText({ children, className, ...props }: TBreadcrumbComponentProps) {
  return (
    <span className={twMerge('', className)} {...props}>
      {children}
    </span>
  )
}

export { Breadcrumb, BreadcrumbList, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbText }
