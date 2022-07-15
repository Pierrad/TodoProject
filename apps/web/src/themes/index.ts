import { createTheme } from "@mui/material"
import { theme } from '@todo-project/themes'

export const muiTheme = () => {
  const customTheme = theme('light')
  return createTheme({
    ...customTheme,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '@global': {
            html: {
              fontSize: '62.5%',
              '& .hMxmxV.hMxmxV.hMxmxV.hMxmxV.hMxmxV.hMxmxV.hMxmxV': {
                transform: 'scale(0.6)!important',
                left: '0!important',
                [`@media screen and (min-width: ${customTheme.breakpoints.values.md}px)`]: {
                  left: '5px!important',
                  transform: 'scale(0.8)!important',
                },
              },
            },
          },
        },
      },
    },
  })
}