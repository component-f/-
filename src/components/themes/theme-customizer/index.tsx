'use client'
import * as React from 'react'
import { useTheme } from 'next-themes'

import '@/styles/themes.css'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown'
import { ThemeWrapper } from '../theme-wrapper'
import { useConfig } from '@/hooks/use-config'
import { themes } from '@/constants/theme'
import { cn } from '@/utils/cn'
import Usage from '@/components/common/usage'
import SignUpForm from '@/components/examples/signup-form'
import CookieSettings from '@/components/examples/cookie-settings'
import ReportForm from '@/components/examples/report-form'
import Chat from '@/components/examples/chat'
import Todo from '@/components/examples/to-do'
import FnQ from '@/components/examples/fnq'
import RecentActivity from '@/components/examples/recent-activity'
import TeamMembers from '@/components/examples/team-members'
import Notifications from '@/components/examples/notifications'

export default function ThemeCustomizer() {
  //모드 theme - 'light' or 'dark'
  const { systemTheme, theme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  const [open, setOpen] = React.useState(false)
  const menuRef = React.useRef<HTMLDivElement>(null)
  const buttonRef = React.useRef<HTMLDivElement>(null)

  const handleToggle = () => {
    setOpen((prevState) => !prevState)
  }

  const { setTheme } = useConfig()
  return (
    <>
      <div className="4xl:fixed 4xl:h-1/2 4xl:transform 4xl:translate-y-1/2">
        <Usage />
      </div>

      <div className="flex sm:justify-end">
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger toggleStatusBar={handleToggle} buttonRef={buttonRef}>
              <Button variant="contained" className="mb-4">
                Customize
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              showStatusBar={open}
              toggleStatusBar={handleToggle}
              menuRef={menuRef}
              buttonRef={buttonRef}
            >
              {themes.map((theme, index) => {
                const activeColor = theme.activeColor[currentTheme as 'light' | 'dark']

                return (
                  <DropdownMenuItem key={index}>
                    <span
                      className={cn('flex h-5 w-5 items-center justify-center rounded-full mr-2')}
                      style={{ backgroundColor: `hsl(${activeColor})` }}
                    ></span>
                    <div onClick={() => setTheme(`${theme.name}`)}>{theme.name}</div>
                  </DropdownMenuItem>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          <ThemeWrapper>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(400px,_2fr))] gap-4">
              <div className="space-y-4">
                <SignUpForm />
                <CookieSettings />
                <ReportForm />
              </div>
              <div className="space-y-4">
                <Chat />
                <Todo />
                <FnQ />
              </div>
              <div className="space-y-4">
                <RecentActivity />
                <TeamMembers />
                <Notifications />
              </div>
            </div>
          </ThemeWrapper>
        </div>
      </div>
    </>
  )
}
