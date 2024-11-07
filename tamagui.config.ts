import * as themes from './themes'
import { createInterFont } from '@tamagui/font-inter';
import { tokens } from '@tamagui/config/v3'
import { createTamagui } from 'tamagui'



const headingFont = createInterFont();
const bodyFont = createInterFont();
const config = createTamagui({
  tokens,
  themes,
  defaultTheme: 'dark',
  themeClassNameOnRoot: false,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
})

export default config