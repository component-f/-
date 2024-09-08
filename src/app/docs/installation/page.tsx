'use client'

import { Button } from '@/components/ui/button'
import { Copy, Clock, CopyCheck } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import GitHub from '/public/images/github-icon.svg'

export default function InstallationPage() {
  const [copied, setCopied] = useState(false)

  const code = 'npm install @component-factory/theme'

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <>
      <h1 className="text-3xl font-bold mt-8">How to Install Component Factory</h1>

      <h2 className="text-xl font-semibold mt-6">Install via npm</h2>
      <p className="text-gray-700 mt-2">
        Once published, you can install the package by running the following command:
      </p>
      <div className="flex items-center justify-between bg-foreground text-background py-2 px-4 rounded-lg w-[500px] mt-2">
        <code>{code}</code>

        <div className="flex items-center justify-center w-[20px]">
          {copied ? (
            <CopyCheck size={20} className="text-[#0090FF]" />
          ) : (
            <Copy size={15} onClick={handleCopy} className="hover:text-[#0090FF] cursor-pointer" />
          )}
        </div>
      </div>

      <div className="p-4 border-l-4 border-yellow-400 bg-yellow-50 w-[700px] mt-6">
        <p className="text-yellow-700 flex items-center">
          <Clock size={18} className="mr-2" />
          The package has not been published yet. Stay tuned for the release!
        </p>
      </div>

      {/* CTA to view documentation or updates */}
      <div className="flex gap-2 mt-6">
        <Button variant="contained" endIcon={<GitHub height={16} alt="GitHub" />}>
          <Link target="_blank" rel="noreferrer" href="https://github.com/component-f/component-factory">
            Subscribe for Updates
          </Link>
        </Button>
        <Button variant="outlined" className="mr-4">
          <Link href="/docs/components/accordion">View Components</Link>
        </Button>
      </div>
    </>
  )
}
