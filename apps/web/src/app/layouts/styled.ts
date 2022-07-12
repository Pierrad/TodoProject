import styled from 'styled-components'
import ContainerC from '@mui/material/Container'

export const Container = styled(ContainerC)`
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: stretch;
  background: bottom center / cover no-repeat;
  padding-left: 0;
  padding-right: 0;
  ${(props) => props.theme.breakpoints.up('md')} {
    max-width: none;
  }
`
