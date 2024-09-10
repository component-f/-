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
      <div className="w-[400px] mt-6 xl:[550px] xl:m-6 xl:fixed xl:h-1/3 xl:transform xl:translate-y-1/3 z-40">
        <Usage />
      </div>

      <div className="w-full xl:w-2/3 mt-4 xl:mt-0 xl:pl-8 xl:absolute xl:right-0 xl:top-0">
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
                  <div className="flex items-center justify-center" onClick={() => setTheme(`${theme.name}`)}>
                    <span
                      className={cn('h-5 w-5 rounded-full mr-2')}
                      style={{ backgroundColor: `hsl(${activeColor})` }}
                    ></span>
                    <div>{theme.name}</div>
                  </div>
                </DropdownMenuItem>
              )
            })}
          </DropdownMenuContent>
        </DropdownMenu>

        <ThemeWrapper>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-4">
            <div className="space-y-4">
              <SignUpForm />
              <CookieSettings />
              <FnQ />
            </div>
            <div className="space-y-4">
              <ReportForm />
              <RecentActivity />
              <TeamMembers />
              <Chat />
            </div>
            <div className="space-y-4">
              <Todo />
              <Notifications />
            </div>
          </div>
        </ThemeWrapper>
      </div>
    </>
  )
}
