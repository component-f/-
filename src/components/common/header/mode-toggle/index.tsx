'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

/**
 * 모드 전환 버튼 컴포넌트( light / dark )
 */
export default function ModeToggle() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  const handleToggle = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <button onClick={handleToggle} className="w-8 h-8 py-auto">
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </>
  )
}
