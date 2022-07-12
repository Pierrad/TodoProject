import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native'
import { ThemeProvider } from 'styled-components'
import { theme } from '@todo-project/themes'

export const App = () => {
  console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>test</Text>
      </SafeAreaView>
    </ThemeProvider>
  )
}


export default App
