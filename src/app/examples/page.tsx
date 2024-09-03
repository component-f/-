import Chat from '@/components/examples/\bchat'
import ReportForm from '@/components/examples/report-form'

export default function ExamplesPage() {
  return (
    <>
      <div className="grid items-start gap-4">
        <ReportForm />
        <Chat />
      </div>
    </>
  )
}
