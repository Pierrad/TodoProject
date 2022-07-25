import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { PaletteMode } from '@mui/material'


import { GlobalStyles } from '@todo-project/themes'
import { GlobalStateType } from '@todo-project/models'

import Layout from './layouts'
import { muiTheme } from '../themes'

type AppProps = {
  theme: string
}

const App = (props: AppProps) => {
  const { theme } = props

  return (
    <React.Fragment>
      <CssBaseline />
      <GlobalStyles />
      <StyledThemeProvider theme={muiTheme(theme as PaletteMode)}>
        <ThemeProvider theme={muiTheme(theme as PaletteMode)}>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </ThemeProvider>
      </StyledThemeProvider>
    </React.Fragment>
  )
}


const mapStateToProps = (state: GlobalStateType) => ({
  theme: state.app?.theme,
})

const mapDispatchToProps = (dispatch: () => void) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
