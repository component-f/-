// HeaderDrawer.tsx (MenuDrawer)
'use client'

import React, { useState } from 'react'
import { Drawer } from '@/components/ui/drawer'
import List from '../list'
import { PATH } from '@/constants/path'
import Logo from '/public/images/logo.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

const MenuDrawer: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (isOpen: boolean) => (event: React.MouseEvent<Element> | React.KeyboardEvent<Element>) => {
    if ('key' in event && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setDrawerOpen(isOpen)
  }

  const pathname = usePathname()

  const isDocsActive = pathname.startsWith('/docs')
  const isExamplesActive = pathname === PATH.examples

  const docsPaths = Object.entries(PATH)
    .filter(([, path]) => path.startsWith('/docs') && !path.startsWith('/docs/components'))
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
  const componentPaths = Object.entries(PATH)
    .filter(([, path]) => path.startsWith('/docs/components'))
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))

  return (
    <>
      <Button onClick={toggleDrawer(true)} className="md:hidden m-0">
        <Menu />
      </Button>

      <Drawer
        open={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        className="md:hidden bg-background"
        drawerLogo={<Logo height={32} className="text-foreground ml-2 mt-1" alt="Logo" />}
      >
        <nav className="flex flex-col p-4 space-y-1 ml-3 text-foreground">
          <ul className="font-bold">
            <List path={PATH.docs}>
              <span
                className={`${
                  isDocsActive ? 'text-primary' : 'text-gray200'
                } hover:text-primary-hover font-medium text-sm`}
              >
                Docs
              </span>
            </List>
            <List path={PATH.examples}>
              <span
                className={`${
                  isExamplesActive ? 'text-primary' : 'text-gray200'
                } hover:text-primary-hover font-medium text-sm`}
              >
                Examples
              </span>
            </List>
          </ul>

          <h1 className="font-bold pt-2">Get Started</h1>
          {docsPaths.map(([key, path]) => {
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
                {key === 'docs' ? 'Introduction' : key}
              </Link>
            )
          })}
          <h1 className="font-bold pt-2">Components</h1>
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
        </nav>
      </Drawer>
    </>
  )
}

export default MenuDrawer
