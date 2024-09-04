import CookieSettings from '@/components/examples/cookie-settings'
import Chat from '@/components/examples/\bchat'
import RecentActivity from '@/components/examples/recent-activity'
import ReportForm from '@/components/examples/report-form'
import SignUpForm from '@/components/examples/signup-form'

export default function ExamplesPage() {
  return (
    <>
      <div className="grid items-start gap-4">
        <ReportForm />
        <CookieSettings />
        <SignUpForm />
        <Chat />
        <RecentActivity />
      </div>
    </>
  )
}
