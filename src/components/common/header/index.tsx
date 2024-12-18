/**
 * 전체 페이지에서 쓰이는 header 컴포넌트
 */

import ModeToggle from './mode-toggle'
import Logo from '/public/images/logo.svg'
import GitHub from '/public/images/github-icon.svg'
import { PATH } from '@/constants/path'
import List from './list'
import { Search } from './search'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import MenuDrawer from './menuDrawer'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 h-14 flex items-center justify-between bg-background px-auto md:px-6">
      <nav>
        <ul className="text-sm text-gray200 font-medium flex items-center gap-1 ">
          <MenuDrawer />
          <List path={PATH.main}>
            <Logo height={32} className="text-foreground" alt="Logo" />
          </List>
          {/* 반응형 */}
          <div className="hidden md:flex ml-2 gap-4">
            <List path={PATH.docs}>Docs</List>
            <List path={PATH.examples}>Examples</List>
          </div>
        </ul>
      </nav>

      <nav className="flex">
        <div className="mr-2">
          <Search />
        </div>
        <Button className="w-8 h-8">
          <Link target="_blank" rel="noreferrer" href="https://github.com/component-f/component-factory">
            <GitHub height={16} alt="GitHub" />
          </Link>
        </Button>
        <ModeToggle />
      </nav>
    </header>
  )
}
