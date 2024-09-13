import create from 'zustand'

type TDropdownState = {
  dropdown: boolean
  toggleDropdown: () => void
}
const useDropdownStore = create<TDropdownState>((set) => ({
  dropdown: false,
  toggleDropdown: () => set((state) => ({ dropdown: !state.dropdown })),
}))

export { useDropdownStore }
