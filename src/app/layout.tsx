import React from 'react'
import ThemeProviders from '@/components/providers'
import pretendard from '@/styles/fonts'
import '@/styles/globals.css'
import Header from '@/components/common/header'

export const metadata = {
  title: 'Component-Factory',
  description: '컴포넌트 UI 라이브러리입니다.',
  icons: {
    icon: '/images/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={pretendard.variable}>
      <body className="flex flex-col min-h-screen">
        <ThemeProviders attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="grow container">{children}</main>
        </ThemeProviders>
      </body>
    </html>
  )
}
