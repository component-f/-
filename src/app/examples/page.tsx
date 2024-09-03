import RecentActivity from '@/components/examples/recent-activity'
import ReportForm from '@/components/examples/report-form'

export default function ExamplesPage() {
  return (
    <>
      <div className="grid items-start">
        <ReportForm />
        <RecentActivity />
      </div>
    </>
  )
}
