import create from 'zustand'

type TSheetState = {
  sheet: boolean
  toggleSheet: () => void
}
const useSheetStore = create<TSheetState>((set) => ({
  sheet: false,
  toggleSheet: () => set((state) => ({ sheet: !state.sheet })),
}))

export default useSheetStore
