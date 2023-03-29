// Definição de tipos

import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  // Crianda tipagem
  export interface DefaultTheme extends ThemeType {}
}
