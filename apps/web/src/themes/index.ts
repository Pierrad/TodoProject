import { createTheme } from "@mui/material"
import { theme } from '@todo-project/themes'
import { declarations } from "./fonts"


export const muiTheme = () => createTheme({
  ...theme,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
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
      },
    },
  },
})