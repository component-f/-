'use client'
import React, { useState } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbText,
} from '@/components/ui/breadcrumb'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown'
import Button from '@/components/ui/button'

export default function DropdownPage() {
  const [showStatusBar, setShowStatusBar] = useState(false)

  const toggleStatusBar = () => {
    setShowStatusBar((prevState) => !prevState)
  }

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbText>Breadcrumb</BreadcrumbText>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button
            variant="outlined"
            className="text-gray-500 hover:text-foreground hover:opacity-100"
            onClick={toggleStatusBar}
          >
            Open
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent showStatusBar={showStatusBar} toggleStatusBar={toggleStatusBar}>
          <DropdownMenuItem href="/">Documentation</DropdownMenuItem>
          <DropdownMenuItem href="/docs/components/alert">Themes</DropdownMenuItem>
          <DropdownMenuItem href="/github">Github</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
