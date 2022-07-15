import React from 'react'
import { GlobalStyles } from '@todo-project/themes'
import { ThemeProvider } from '@mui/material/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import Layout from './layouts'
import { BrowserRouter } from 'react-router-dom'
import { muiTheme } from '../themes'
import { CssBaseline } from '@mui/material'

export function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <GlobalStyles />
      <StyledThemeProvider theme={muiTheme()}>
        <ThemeProvider theme={muiTheme()}>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </ThemeProvider>
      </StyledThemeProvider>
    </React.Fragment>
  )
}

export default App
