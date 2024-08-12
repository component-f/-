/**
 * Alert 컴포넌트에 대한 문서 페이지 컴포넌트
 */
import Alert from '@/components/ui/alert'
import { CircleCheckBig, ChevronRight, Clipboard } from 'lucide-react'

export default function AlertPage() {
  const sectionBtn = ['Preview', 'Code']
  return (
    <div className="w-full text-sm">
      <nav className="flex items-center mb-2">
        Docs
        <ChevronRight size={15} />
        <span className="font-semibold">Alert</span>
      </nav>
      <h1 className="text-3xl font-bold mb-2">Alert</h1>
      <p>사용자의 주의를 끌기 위한 콜아웃을 표시합니다.</p>
      <h2 className="text-2xl font-semibold border-b py-2 mt-2">Examples</h2>
      <h3 className="text-xl font-semibold mt-4">Default</h3>
      <div className="w-full">
        <section className="border-b">
          {sectionBtn.map((btn) => (
            <button className="p-2 border-b-2 border-primary">{btn}</button>
          ))}
        </section>
        <div className="border w-[700px] h-[400px] mt-4 rounded-lg flex flex-col">
          <div className="flex justify-between m-2">
            <select name="style" className="border p-1 rounded-lg bg-transparent focus:outline-none">
              <option value="">Choose a style</option>
              <option value="New York">Style: New York</option>
            </select>
            <div className="item-middle border rounded-lg w-[25px] h-[25px]">
              <Clipboard size={13} />
            </div>
          </div>
          <div className="flex-grow flex justify-center items-center">
            <Alert className="" title="Default title" btn={() => alert('Undo action')} icon={<CircleCheckBig />}>
              This is Success alert
            </Alert>
          </div>
        </div>
      </div>
    </div>
  )
}
