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
    <div className="flex min-h-screen">
      <div className="hidden md:block w-[200px] sticky top-14 h-[calc(100vh-3.5rem)]">
        <Sidebar />
      </div>

      <main className="flex-grow mx-auto px-4 md:px-8 max-w-[80vw] md:max-w-[60vw]">
        <BreadCrumb />
        <div className="pb-14">{children}</div>
      </main>
    </div>
  )
}
