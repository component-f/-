import ModeToggle from './mode-toggle'
import Logo from '/public/images/logo.svg'
import { PATH } from '@/constants/path'
import List from './list'
import { Search } from './search'

/**
 * 전체 페이지에서 쓰이는 header 컴포넌트
 */

/**
 * @todos 검색 기능
 */
export default function Header() {
  return (
    <header className="container h-14 flex items-center justify-between">
      <nav>
        <ul className="text-sm text-gray200 font-medium flex items-center gap-4">
          <List path={PATH.root}>
            <Logo height={32} className="text-foreground" alt="Logo" />
          </List>
          <List path={PATH.docs}>Docs</List>
          <List path={PATH.examples}>Examples</List>
        </ul>
      </nav>

      <div className="flex flex-row space-x-3 justify-center ">
        <Search />
        <ModeToggle />
      </div>
    </header>
  )
}
