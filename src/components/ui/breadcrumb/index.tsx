import React from 'react'
import { ChevronRight } from 'lucide-react'

type TBreadcrumbComponentProps = {
  children: React.ReactNode
  href?: string
}

export function Breadcrumb({ children }: TBreadcrumbComponentProps) {
  return <nav>{children}</nav>
}

export function BreadcrumbList({ children }: TBreadcrumbComponentProps) {
  return <ol className="flex items-center">{children}</ol>
}

export function BreadcrumbItem({ children }: TBreadcrumbComponentProps) {
  return <li>{children}</li>
}

export function BreadcrumbSeparator() {
  return <ChevronRight size={20} className="text-gray-500" />
}

export function BreadcrumbLink({ children, ...props }: TBreadcrumbComponentProps) {
  return (
    <a className="text-gray-500 hover:text-foreground" {...props}>
      {children}
    </a>
  )
}

export function BreadcrumbText({ children }: TBreadcrumbComponentProps) {
  return <span>{children}</span>
}
