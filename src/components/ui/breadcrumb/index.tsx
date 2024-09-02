import React from 'react'
import { ChevronRight } from 'lucide-react'

type TBreadcrumbComponentProps = {
  children?: React.ReactNode
  separator?: React.ReactNode
  href?: string
  onClick?: () => void
}

export function Breadcrumb({ children }: TBreadcrumbComponentProps) {
  return <nav>{children}</nav>
}

export function BreadcrumbList({ children }: TBreadcrumbComponentProps) {
  return <li className="flex items-center">{children}</li>
}

export function BreadcrumbSeparator({ separator }: TBreadcrumbComponentProps) {
  return separator ? (
    <div className="px-2 text-gray-500">{separator}</div>
  ) : (
    <ChevronRight size={20} className="text-gray-500" />
  )
}

export function BreadcrumbLink({ children, ...props }: TBreadcrumbComponentProps) {
  return (
    <a className="flex items-center text-gray-500 hover:text-foreground" {...props}>
      {children}
    </a>
  )
}

export function BreadcrumbText({ children }: TBreadcrumbComponentProps) {
  return <span>{children}</span>
}
