import Chat from '@/components/examples/\bchat'
import RecentActivity from '@/components/examples/recent-activity'
import ReportForm from '@/components/examples/report-form'

export default function ExamplesPage() {
  return (
    <>
      <div className="grid items-start gap-4">
        <ReportForm />
        <Chat />
        <RecentActivity />
      </div>
    </>
  )
}
