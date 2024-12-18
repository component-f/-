import * as React from 'react'

import '@/styles/themes.css'

import { ThemeWrapper } from '../theme-wrapper'
import SignUpForm from '@/components/examples/signup-form'
import CookieSettings from '@/components/examples/cookie-settings'
import ReportForm from '@/components/examples/report-form'
import Chat from '@/components/examples/chat'
import Todo from '@/components/examples/to-do'
import FnQ from '@/components/examples/fnq'
import RecentActivity from '@/components/examples/recent-activity'
import TeamMembers from '@/components/examples/team-members'
import Notifications from '@/components/examples/notifications'
import Payments from '@/components/examples/payments'

export default function ThemeExamples() {
  return (
    <ThemeWrapper>
      <div className="space-y-8 w-full pt-6 pb-12">
        <div className="pr-20 md:grids-col-1 grid md:gap-4 xl:grid-cols-11 xl:gap-4">
          <div className="space-y-4 xl:col-span-6">
            <RecentActivity />
            <CookieSettings />
            <ReportForm />
            <Todo />
            <FnQ />
          </div>
          <div className="space-y-4 xl:col-span-5">
            <Chat />
            <SignUpForm />
            <Notifications />
            <Payments />
            <TeamMembers />
          </div>
        </div>
      </div>
    </ThemeWrapper>
  )
}
