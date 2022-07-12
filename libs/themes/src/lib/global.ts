import { createGlobalStyle } from 'styled-components'

// import fonts, { fontsFaces } from './fonts'

export const GlobalStyles = createGlobalStyle`
  :root {
    --vh: 1vh;
  }
  * {
    box-sizing: border-box;
    &:before, &:after {
      box-sizing: border-box;
    }
  }
  html, body {
    height: 100%;
  }
  body {
    padding: 0;
    margin: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }  
  p, ul, ol, dl, dt, dd, li, figure {
    margin: 0;
    padding: 0;
  }
  a {
    cursor: pointer;
  }
  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle
  }
  button {
    padding: 0;
    border: 0;
  }  
  input, select, textarea, button {
    &:focus:not([keyboard-focus]) {
      outline-width: 0;
    }
  }
  input::-ms-clear {
    display: none;
  }
`
