import { Button, Dialog, DialogTitle, TextField } from '@mui/material'
import styled from 'styled-components'

export const Container = styled(Dialog)``

export const Title = styled(DialogTitle)``

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem 2rem;
`

export const Input = styled(TextField)`
  margin-bottom: 0.6rem;
`

export const Submit = styled(Button)`
  margin-bottom: 0.6rem;
`