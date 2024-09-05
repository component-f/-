import Chat from '@/components/examples/chat'
import CookieSettings from '@/components/examples/cookie-settings'

import RecentActivity from '@/components/examples/recent-activity'
import ReportForm from '@/components/examples/report-form'
import SignUpForm from '@/components/examples/signup-form'
import Todo from '@/components/examples/to-do'
import Notifications from '@/components/examples/notifications'
import TeamMembers from '@/components/examples/team-members'

export default function ExamplesPage() {
  return (
    <>
      <div className="grid items-start gap-4">
        <ReportForm />
        <CookieSettings />
        <SignUpForm />
        <Chat />
        <RecentActivity />
        <Todo />
        <Notifications />
        <TeamMembers />
      </div>
    </>
  )
}
