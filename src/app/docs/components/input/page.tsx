import { Input } from '@/components/ui/input'

/**
 * Input 컴포넌트에 대한 문서 페이지 컴포넌트
 * @todos 현재 테스트용 임시 제작, 추후 수정 예정 - 스타일, 세부내용, 코드 리팩토링
 */
export default function InputPage() {
  return (
    <>
      <div className="mt-8 text-3xl font-bold">Input</div>
      <p className="mt-2 text-lg text-gray200">
        Displays a form input field or a component that looks like an input field
      </p>
      <div className="flex flex-col gap-8 mt-12">
        <div className="flex flex-col gap-2">
          <label className="text-lg">Default</label>
          <Input type="text" className="" placeholder="placeholder" />
          <pre>
            <code>{`<Input type="text" className="" placeholder="placeholder" />`}</code>
          </pre>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg">File</label>
          <Input type="file" className="" placeholder="placeholder" />
          <pre>
            <code>{`<Input type="file" className="" placeholder="placeholder" />`}</code>
          </pre>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg">Disabled</label>
          <Input type="email" className="" placeholder="placeholder" disabled />
          <pre>
            <code>{`<Input type="email" className="" placeholder="placeholder" disabled />`}</code>
          </pre>
        </div>
      </div>
    </>
  )
}
