import create from 'zustand'
import { persist } from 'zustand/middleware'

import { Theme } from '@/constants/theme'

type Config = {
  theme: Theme['name']
  setTheme: (theme: Theme['name']) => void
}

const useConfigStore = create<Config>()(
  persist(
    (set) => ({
      theme: 'zinc',
      setTheme: (theme: Theme['name']) => set({ theme }),
    }),
    {
      name: 'config',
    },
  ),
)

export function useConfig() {
  const theme = useConfigStore((state: Config) => state.theme)
  const setTheme = useConfigStore((state: Config) => state.setTheme)

  return { theme, setTheme }
}
