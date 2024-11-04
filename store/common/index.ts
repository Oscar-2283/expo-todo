import { Colors } from '@/constants/Colors';
import { create } from 'zustand'

interface CommonStore {
  themeType: 'dark' | 'light' | 'light_accent' | 'dark_accent';  
  setThemeType: (themeType: 'dark' | 'light' | 'light_accent' | 'dark_accent') => void;
}

const useCommonStore = create<CommonStore>((set) => ({
  themeType: 'dark',
  // setThemeType: (themeType) => set({ themeType }),
  setThemeType: (themeType: 'dark' | 'light' | 'light_accent' | 'dark_accent') => set({ themeType }),
}))

export default useCommonStore