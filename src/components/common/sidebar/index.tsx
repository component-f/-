'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PATH } from '@/constants/path'

export default function Sidebar() {
  const pathname = usePathname()
  const componentPaths = Object.entries(PATH)
    .filter(([, path]) => path.startsWith('/docs/components'))
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))

  return (
    <div className="flex flex-col space-y-1 w-[200px] px-4 h-full min-h-screen">
      <h1 className="font-bold">Components</h1>
      {componentPaths.map(([key, path]) => {
        const isActive = pathname === path
        return (
          <Link
            key={key}
            href={path}
            replace
            className={`capitalize block  text-sm text-gray200 font-medium hover:text-primary-hover ${isActive ? 'font-black text-primary' : ''}`}
          >
            {key}
          </Link>
        )
      })}
    </div>
  )
}
