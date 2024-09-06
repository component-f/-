import ModeToggle from './mode-toggle'
import Logo from '/public/images/logo.svg'
import { PATH } from '@/constants/path'
import List from './list'

/**
 * 전체 페이지에서 쓰이는 header 컴포넌트
 */

/**
 * @todos 검색 기능
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 h-14 flex items-center justify-between bg-background px-4 md:px-6">
      <nav>
        <ul className="text-sm text-gray200 font-medium flex items-center gap-4">
          <List path={PATH.root}>
            <Logo height={32} className="text-foreground" alt="Logo" />
          </List>
          <List path={PATH.docs}>Docs</List>
          <List path={PATH.examples}>Examples</List>
        </ul>
      </nav>
      <ModeToggle />
    </header>
  )
}
