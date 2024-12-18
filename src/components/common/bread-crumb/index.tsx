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
  const pathSegments = pathname.split('/')

  // 첫 문자 대문자로 변환
  const formatName = (name: string | undefined) => (name ? name[0].toUpperCase() + name.slice(1) : null)

  const formattedGetStartedName = formatName(pathSegments[2])
  const formattedComponentName = formatName(pathSegments[3])

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
        <BreadcrumbSeparator className="text-gray200" />

        {formattedComponentName ? (
          <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
        ) : pathname === '/docs' ? (
          <BreadcrumbText>Introduction</BreadcrumbText>
        ) : (
          <BreadcrumbText>{formattedGetStartedName}</BreadcrumbText>
        )}

        {formattedComponentName && (
          <>
            <BreadcrumbSeparator className="text-gray200" />
            <BreadcrumbText>{formattedComponentName}</BreadcrumbText>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
