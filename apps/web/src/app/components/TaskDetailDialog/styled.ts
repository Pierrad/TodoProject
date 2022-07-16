import { Dialog, DialogTitle } from '@mui/material'
import styled from 'styled-components'

export const Container = styled(Dialog)`
`

export const Title = styled(DialogTitle)``

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`

export const Description = styled.p`
  ${(props) => ({ ...props.theme.typography.body1 })}
  margin-bottom: 1rem;
`

export const Date = styled.div`
  ${(props) => ({ ...props.theme.typography.body2 })}
`