import { PATH } from '@/constants/path'
import Link from 'next/link'

/**
 * 문서 메인 페이지 컴포넌트
 */
export default function DocsPage() {
  return (
    <>
      <div className="flex flex-col space-y-1 w-[100px]">
        <Link href={PATH.input}>input</Link>
        <Link href={PATH.label}>label</Link>
        <Link href={PATH.alert}>alert</Link>
        <Link href={PATH.avatar}>avatar</Link>
        <Link href={PATH.radio}>radio</Link>
        <Link href={PATH.textarea}>textarea</Link>
        <Link href={PATH.skeleton}>skeleton</Link>
        <Link href={PATH.breadcrumb}>breadcrumb</Link>
        <Link href={PATH.button}>button</Link>
        <Link href={PATH.switch}>switch</Link>
        <Link href={PATH.pagination}>pagination</Link>
        <Link href={PATH.sheet}>sheet</Link>
        <Link href={PATH.accordion}>accordion</Link>
        <Link href={PATH.dropdown}>dropdown</Link>
        <Link href={PATH.checkbox}>checkbox</Link>
        <Link href={PATH.table}>table</Link>
      </div>
    </>
  )
}
