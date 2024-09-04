'use client'

import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbText,
} from '@/components/ui/breadcrumb'
import { usePathname } from 'next/navigation'

export default function BreadCrumb() {
  const pathname = usePathname()
  const componentName = pathname.split('/')[3]

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
        <BreadcrumbSeparator />
        <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
        <BreadcrumbSeparator />
        <BreadcrumbText>{componentName}</BreadcrumbText>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
