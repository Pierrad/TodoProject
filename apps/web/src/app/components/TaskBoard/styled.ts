import { Button, Card } from '@mui/material'
import styled from 'styled-components'

export const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 100%;
  border-radius: 1rem;
`

export const Title = styled.h2`
  margin: 0 0 8px 0;
`

export const Tasks = styled.div``

export const AddTask = styled(Button)`
  max-width: 10rem;
`