import Skeleton from '@/components/ui/skeleton'

export default function SkeletonPage() {
  return (
    <>
      <div className="mt-8 text-3xl font-bold">Skeleton</div>
      <p className="mt-2 text-lg text-gray200">콘텐츠가 로딩되는 동안 플레이스홀더를 표시하는 데 사용됩니다.</p>
      <div className="flex flex-col gap-8 mt-12">
        <div className="flex flex-col gap-2">
          <label className="text-lg">Default</label>
          <div className="flex space-x-2">
            <Skeleton className="rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-10 rounded-sm" />
              <Skeleton className="h-4 w-40 rounded-sm" />
            </div>
          </div>
          <pre>
            <code>{`
<div className="flex space-x-2">
  <Skeleton className="rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-10 rounded-sm" />
    <Skeleton className="h-4 w-40 rounded-sm" />
  </div>
</div>`}</code>
          </pre>
        </div>
      </div>
    </>
  )
}
