import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { createContext } from 'react'
import { CyclesContextProvider } from './contexts/CyclesContext'
// import { Home } from './Home'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter />
      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>
      <BrowserRouter />
      <GlobalStyle />
    </ThemeProvider>
  )
}
