'use client'

import { useToast } from '@/hooks/useToast'

/**
 * Toast 컴포넌트에 대한 문서 페이지 컴포넌트
 * @todos 현재 테스트용 임시 제작, 추후 수정 예정 - 스타일, 세부내용, 코드 리팩토링
 */
export default function ToastPage() {
  const { toast } = useToast()

  return (
    <>
      <div className="flex flex-col gap-2">
        <label className="text-lg">Toast</label>
        <button
          type="button"
          onClick={() => {
            toast({ title: 'Title', description: '설명입니다', variant: 'destructive' })
          }}
        >
          show Toast
        </button>
        <pre>
          <code>{`<button
            type="button"
            onClick={() => {
              toast({ title: 'Title', description: '설명입니다', variant: 'destructive' })
            }}
          >
            show Toast
          </button>`}</code>
        </pre>
        <button
          type="button"
          onClick={() => {
            toast({ title: 'Title2', description: '설명입니다', duration: 5000 })
          }}
        >
          show Toast
        </button>
        <pre>
          <code>{`<button
          type="button"
          onClick={() => {
            toast({ title: 'Title2', description: '설명입니다', duration: 5000 })
          }}
        >
          show Toast
        </button>`}</code>
        </pre>
        <button
          type="button"
          onClick={() => {
            toast({ title: 'Title3', description: '설명입니다' })
          }}
        >
          show Toast
        </button>
        <pre>
          <code>{`<button
          type="button"
          onClick={() => {
            toast({ title: 'Title3', description: '설명입니다' })
          }}
        >
          show Toast
        </button>`}</code>
        </pre>
      </div>
    </>
  )
}
