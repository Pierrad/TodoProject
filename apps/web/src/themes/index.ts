import { createTheme } from "@mui/material"
import { theme } from '@todo-project/themes'
import { declarations } from "./fonts"


export const muiTheme = () => createTheme({
  ...theme,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          '@font-face': Object.values(declarations).map((declaration) => {
            return {
              fontFamily: declaration.fontFamily,
              fontStyle: 'normal',
              fontDisplay: 'swap',
              fontWeight: declaration.fontWeight,
              src: `
                  url("/fonts/${declaration.basename}/${declaration.basename}.woff2") format("woff2"), 
                  url("/fonts/${declaration.basename}/${declaration.basename}.woff") format("woff");
                `,
            }
          }),
          html: {
            fontSize: '62.5%',
            '& .hMxmxV.hMxmxV.hMxmxV.hMxmxV.hMxmxV.hMxmxV.hMxmxV': {
              transform: 'scale(0.6)!important',
              left: '0!important',
              [`@media screen and (min-width: ${theme.breakpoints.values.md}px)`]: {
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