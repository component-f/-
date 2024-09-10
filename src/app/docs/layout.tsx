import React from 'react'
import Sidebar from '@/components/common/sidebar'
import BreadCrumb from '@/components/common/bread-crumb'
import '@/styles/globals.css'

export const metadata = {
  title: 'Docs - Component-Factory',
  description: '컴포넌트 UI 라이브러리 문서 페이지입니다.',
}
export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex grow mt-4">
      <div className="ml-0 sm:ml-0 md:ml-4 lg:ml-12 xl:ml-16 hidden md:block">
        <Sidebar />
      </div>
      <main className="grow ml-4 mr-0 sm:mr-0 md:mr-4 lg:mr-12 xl:mr-16">
        <BreadCrumb />
        <div className="pb-14">{children}</div>
      </main>
    </div>
  )
}
