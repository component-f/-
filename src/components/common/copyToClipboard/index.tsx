'use client'

import { useState } from 'react'
import { Copy, CopyCheck } from 'lucide-react'

export default function CopyToClipboard({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="flex items-center justify-between bg-foreground text-background py-2 px-4 rounded-lg w-auto max-w-[500px] mt-2">
      <code>{code}</code>

      <div className="flex items-center justify-center w-[20px]">
        {copied ? (
          <CopyCheck size={20} className="text-[#0090FF]" />
        ) : (
          <Copy size={15} onClick={handleCopy} className="hover:text-[#0090FF] cursor-pointer" />
        )}
      </div>
    </div>
  )
}
