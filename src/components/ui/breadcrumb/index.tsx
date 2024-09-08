import React from 'react'
import { ChevronRight } from 'lucide-react'

type TBreadcrumbComponentProps = {
  children?: React.ReactNode
  separator?: React.ReactNode
  href?: string
  onClick?: () => void
}

function Breadcrumb({ children }: TBreadcrumbComponentProps) {
  return <nav>{children}</nav>
}

function BreadcrumbList({ children }: TBreadcrumbComponentProps) {
  return <li className="flex items-center">{children}</li>
}

function BreadcrumbSeparator({ separator }: TBreadcrumbComponentProps) {
  return separator ? (
    <div className="px-2 text-gray200">{separator}</div>
  ) : (
    <ChevronRight size={20} className="text-gray200" />
  )
}

function BreadcrumbLink({ children, ...props }: TBreadcrumbComponentProps) {
  return (
    <a className="flex items-center text-gray200 hover:text-accent-foreground focus:text-accent-foreground " {...props}>
      {children}
    </a>
  )
}

function BreadcrumbText({ children }: TBreadcrumbComponentProps) {
  return <span>{children}</span>
}

export { Breadcrumb, BreadcrumbList, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbText }
