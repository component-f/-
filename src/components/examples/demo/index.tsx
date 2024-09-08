import Chat from '@/components/examples/chat'
import CookieSettings from '@/components/examples/cookie-settings'
import RecentActivity from '@/components/examples/recent-activity'
import ReportForm from '@/components/examples/report-form'
import SignUpForm from '@/components/examples/signup-form'
import Todo from '@/components/examples/to-do'
import Notifications from '@/components/examples/notifications'
import TeamMembers from '@/components/examples/team-members'

export default function Demo() {
  return (
    <div className="space-y-8 w-full">
      <div className="md:grids-col-2 grid md:gap-4 lg:grid-cols-10 xl:grid-cols-11 xl:gap-4">
        <div className="space-y-4 lg:col-span-4 xl:col-span-6 xl:space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="space-y-4 xl:space-y-4">
              <SignUpForm />
              <CookieSettings />
              <ReportForm />
            </div>
            <div className="space-y-4 xl:space-y-4">
              <Chat />
              <Todo />
            </div>
          </div>
        </div>
        <div className="space-y-4 lg:col-span-6 xl:col-span-5 xl:space-y-4">
          <RecentActivity />
          <TeamMembers />
          <Notifications />
        </div>
      </div>
    </div>
  )
}
