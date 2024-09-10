'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'

import '@/styles/themes.css'
import { cn } from '@/utils/cn'

import { Button } from '@/components/ui/button'
import { useConfig } from '@/hooks/use-config'
import { themes } from '@/constants/theme'

export default function ThemeCustomizer() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  //모드 theme - 'light' or 'dark'
  const { systemTheme, theme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  const { setTheme } = useConfig()

  return (
    <div className="flex flex-col gap-2">
      <div className="text-lg font-medium text-muted-foreground">Live Colors</div>
      {mounted && (
        <div className="flex items-center gap-2">
          {themes.map((theme) => {
            const activeColor = theme.activeColor[currentTheme as 'light' | 'dark']

            return (
              <Button key={theme.name} variant="text" onClick={() => setTheme(`${theme.name}`)} className="px-0">
                <span className={cn('h-1 w-8 rounded-full')} style={{ backgroundColor: `hsl(${activeColor})` }}></span>
              </Button>
            )
          })}
        </div>
      )}
    </div>
  )
}
