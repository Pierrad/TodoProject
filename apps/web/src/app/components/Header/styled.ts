import styled from 'styled-components'
import { Toolbar } from '@mui/material'

export const Wrapper = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Right = styled.div`
  display: flex;
  align-items: center;

  & button {
    margin-right: 1rem;
  }
`