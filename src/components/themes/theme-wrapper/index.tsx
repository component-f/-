'use client'

import * as React from 'react'
import { cn } from '@/utils/cn'
import { useConfig } from '@/hooks/use-config'

interface ThemeWrapperProps extends React.ComponentProps<'div'> {
  defaultTheme?: string
}

export function ThemeWrapper({ defaultTheme, children, className }: ThemeWrapperProps) {
  const { theme } = useConfig()

  return <div className={cn(`theme-${defaultTheme || theme}`, 'w-full', className)}>{children}</div>
}
