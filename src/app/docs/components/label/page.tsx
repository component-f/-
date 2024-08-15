import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

/**
 * Label 컴포넌트에 대한 문서 페이지 컴포넌트
 * @todos 현재 테스트용 임시 제작, 추후 수정 예정 - 스타일, 세부내용, 코드 리팩토링
 */
export default function LabelPage() {
  return (
    <>
      <div className="mt-8 text-3xl font-bold">Label</div>
      <p className="mt-2 text-lg text-gray200">
        Displays a form input field or a component that looks like an input field
      </p>
      <div className="flex flex-col gap-8 mt-12">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <input id="checkboxDiabled" className="peer" type="checkbox" disabled />
            <Label htmlFor="checkboxDiabled">checkbox</Label>
          </div>
          <pre>
            <code>
              {`<input id="checkboxDiabled" className="peer" type="checkbox" disabled />
<Label htmlFor="checkboxDiabled">checkbox</Label>
              `}
            </code>
          </pre>
          <div className="flex gap-2">
            <input id="checkbox" className="peer" type="checkbox" />
            <Label htmlFor="checkbox">checkbox</Label>
          </div>
          <pre>
            <code>
              {`<input id="checkbox" className="peer" type="checkbox" />
<Label htmlFor="checkbox">checkbox</Label>
              `}
            </code>
          </pre>
        </div>
        <div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="text" className="text-lg">
              text label
            </Label>
            <Input id="text" className="w-60" type="text" />
          </div>
          <pre>
            <code>{`<Label htmlFor="text" className="text-lg">text label</Label>`}</code>
          </pre>
        </div>
      </div>
    </>
  )
}
