'use client'
import * as React from 'react'
import { useTheme } from 'next-themes'

import '@/styles/themes.css'

import Chat from '@/components/examples/chat'
import Notifications from '@/components/examples/notifications'
import RecentActivity from '@/components/examples/recent-activity'
import ReportForm from '@/components/examples/report-form'
import SignUpForm from '@/components/examples/signup-form'
import Todo from '@/components/examples/to-do'
import Button from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown'
import { ThemeWrapper } from '../theme-wrapper'
import { useConfig } from '@/hooks/use-config'
import { themes } from '@/constants/theme'
import { cn } from '@/utils/cn'

export default function ThemeCustomizer() {
  //모드 theme - 'light' or 'dark'
  const { systemTheme, theme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  const [open, setOpen] = React.useState(false)
  const menuRef = React.useRef<HTMLDivElement>(null)
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  const handleToggle = () => {
    setOpen((prevState) => !prevState)
  }

  const { setTheme } = useConfig()
  return (
    <>
      <div className="flex justify-between w-full relative">
        <div className="">
          install
          <div></div>
        </div>
        <div className="">
          <ThemeWrapper>
            <DropdownMenu>
              <DropdownMenuTrigger toggleStatusBar={handleToggle} buttonRef={buttonRef}>
                <Button variant="contained">Customize</Button>
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

            <Button onClick={() => setTheme('orange')}>orange</Button>
            <div className="flex gap-4 justify-between absolute left-1/2">
              <div className="flex flex-col gap-4 w-[480px]">
                <SignUpForm />
                <Chat />
                <Notifications />
              </div>
              <div className="flex flex-col gap-4 w-[312px]">
                <RecentActivity />
                <Todo />
                <ReportForm />
              </div>
            </div>
          </ThemeWrapper>
        </div>
      </div>
    </>
  )
}
