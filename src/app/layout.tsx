import React from 'react'
import ThemeProviders from '@/components/providers'
import pretendard from '@/styles/fonts'
import '@/styles/globals.css'
import Header from '@/components/common/header'
import { Toaster } from '@/components/ui/toaster'

export const metadata = {
  title: 'Component-Factory',
  description: 'Component library you always wanted. Accessible. Customizable.',
  icons: {
    icon: '/images/favicon.ico',
  },
  openGraph: {
    title: 'Component-Factory',
    description: 'Component library you always wanted. Accessible. Customizable.',
    images: ['/images/thumbnail.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={pretendard.variable}>
      <body className="flex flex-col min-h-screen">
        <ThemeProviders attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <Toaster />
          <main className="grow container">{children}</main>
        </ThemeProviders>
      </body>
    </html>
  )
}
