import React from 'react'
import '@/styles/globals.css'

export const metadata = {
  title: 'Examples - Component-Factory',
  description: '컴포넌트 UI 라이브러리 데모 페이지입니다.',
}

export default function ExamplesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <div className="pb-14">{children}</div>
    </div>
  )
}
