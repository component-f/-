import create from 'zustand'

type TDropdownState = {
  isOpen: Record<string, boolean> // key: string, value: boolean
  toggleDropdown: (keyId: string) => void
}

export const useDropdownStore = create<TDropdownState>((set) => ({
  isOpen: {}, // 여러 dropdown 상태를 저장할 객체
  toggleDropdown: (keyId) =>
    set((state) => ({
      isOpen: {
        ...state.isOpen,
        [keyId]: !state.isOpen[keyId],
      },
    })),
}))
