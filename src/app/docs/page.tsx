import { PATH } from '@/constants/path'
import Link from 'next/link'

/**
 * 문서 메인 페이지 컴포넌트
 */
export default function DocsPage() {
  return (
    <>
      <div className="flex space-x-2">
        <Link href={PATH.input}>input</Link>
        <Link href={PATH.alert}>alert</Link>
        <Link href={PATH.avatar}>avatar</Link>
        <Link href={PATH.textarea}>textarea</Link>
        <Link href={PATH.skeleton}>skeleton</Link>
      </div>
    </>
  )
}
