import styled from 'styled-components'
import { Dialog, DialogTitle } from '@mui/material'

export const Container = styled(Dialog)`
`

export const Title = styled(DialogTitle)``

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;

  .MuiTextField-root {
    margin-bottom: 1rem;
  }
`

export const Color = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;

  #color {
    margin-right: 1rem;
  }
`
