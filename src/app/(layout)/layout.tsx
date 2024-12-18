import React from 'react'
import '@/styles/globals.css'
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </>
  )
}
