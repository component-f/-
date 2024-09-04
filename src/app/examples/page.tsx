import CookieSettings from '@/components/examples/cookie-settings'
import ReportForm from '@/components/examples/report-form'
import SignUpForm from '@/components/examples/signup-form'

export default function ExamplesPage() {
  return (
    <>
      <div className="grid items-start">
        <ReportForm />
        <CookieSettings />
        <SignUpForm />
      </div>
    </>
  )
}
