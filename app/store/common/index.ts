import { create } from 'zustand'

interface CommonStore {
  themeType: 'dark' | 'light' | 'light_accent' | 'dark_accent';  
  setThemeType: (themeType: 'dark' | 'light' | 'light_accent' | 'dark_accent') => void;
}

const useCommonStore = create<CommonStore>((set) => ({
  themeType: 'light_accent',
  setThemeType: (themeType) => set({ themeType }),
}))

export default useCommonStore