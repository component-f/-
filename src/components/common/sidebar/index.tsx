'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PATH } from '@/constants/path'

export default function Sidebar() {
  const pathname = usePathname()
  const docsPaths = Object.entries(PATH)
    .filter(([, path]) => path.startsWith('/docs') && !path.startsWith('/docs/components'))
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
  const componentPaths = Object.entries(PATH)
    .filter(([, path]) => path.startsWith('/docs/components'))
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))

  return (
    // md 이상에서만 보이는 사이드바
    <div className="hidden md:flex flex-col space-y-1 w-[200px] px-4 h-full min-h-screen">
      <h1 className="font-bold">Get Started</h1>
      {docsPaths.map(([key, path]) => {
        const isActive = pathname === path
        return path === '/docs' ? (
          <Link
            key={key}
            href={path}
            replace
            className={`capitalize block text-sm text-gray200 font-medium hover:text-primary-hover ${
              isActive ? 'font-black text-primary' : ''
            }`}
          >
            Introduction
          </Link>
        ) : (
          <Link
            key={key}
            href={path}
            replace
            className={`capitalize block text-sm text-gray200 font-medium hover:text-primary-hover ${
              isActive ? 'font-black text-primary' : ''
            }`}
          >
            {key}
          </Link>
        )
      })}
      <h1 className="font-bold pt-5">Components</h1>
      {componentPaths.map(([key, path]) => {
        const isActive = pathname === path
        return (
          <Link
            key={key}
            href={path}
            replace
            className={`capitalize block text-sm text-gray200 font-medium hover:text-primary-hover ${
              isActive ? 'font-black text-primary' : ''
            }`}
          >
            {key}
          </Link>
        )
      })}
    </div>
  )
}
