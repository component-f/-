import { PATH } from '@/constants/path'
import Link from 'next/link'

/**
 * 문서 메인 페이지 컴포넌트
 */
export default function DocsPage() {
  return (
    <>
      <Link href={PATH.input}>input</Link>
    </>
  )
}
