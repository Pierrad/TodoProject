import breakpoints from "./breakpoints"
import typography from "./typography"
import { PaletteMode } from '@mui/material'

export const theme = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === "light" ? {
            primary: {
                main: '#00bcd4',
            },
            secondary: {
                main: '#326eb3'
            }
        } : {
            primary: {
                main: '#3F8AE0'
            },
            secondary: {
                main: '#326eb3'
            }
        }),
    },
    breakpoints: breakpoints,
    typography: typography,
})
