import breakpoints from "./breakpoints"
import typography from "./typography"
import { PaletteMode } from '@mui/material'

export const theme = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === "light" ? {
            primary: {
                main: '#3F72AF',
            },
            secondary: {
                main: '#DBE2EF'
            },
            text: {
                primary: '#000',
                secondary: '#8c8c8c',
            },
            background: {
                default: '#F9F7F7',
                paper: '#fff',
                link: '#c6defbb0',
            },
        } : {
            primary: {
                main: '#00ADB5'
            },
            secondary: {
                main: '#393E46'
            },
            text: {
                primary: '#fff',
                secondary: '#8c8c8c',
            },
            background: {
                default: '#222831',
                paper: '#393E46',
                link: '#c6defbb0',
            },
        }),
    },
    breakpoints: breakpoints,
    typography: typography,
})
