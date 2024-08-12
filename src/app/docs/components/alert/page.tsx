/**
 * Alert 컴포넌트에 대한 문서 페이지 컴포넌트
 */
import Alert from '@/components/ui/alert'

export default function AlertPage() {
  return (
    <div className="item-middle">
      <Alert
        className=""
        title="Default title"
        btn={() => alert('Undo action')}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        }
      >
        This is Success alert
      </Alert>
    </div>
  )
}
