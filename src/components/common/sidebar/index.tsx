'use client'

import React from 'react'
import Link from 'next/link'
import { PATH } from '@/constants/path'

export default function Sidebar() {
  const componentPaths = Object.entries(PATH).filter(([, path]) => path.startsWith('/docs/components'))

  return (
    <div className="flex flex-col space-y-1 w-[200px] p-4 border-r h-full min-h-screen">
      <h1 className="font-bold">Components</h1>
      {componentPaths.map(([key, path]) => (
        <Link key={key} href={path} replace className="hover:text-border capitalize block">
          {key}
        </Link>
      ))}
    </div>
  )
}
