import { Button } from '@mui/material'
import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 1rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem 1rem;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid #e6e6e6;
  margin-bottom: 0.5rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const PrimaryInput = styled.input`
  border: none;
  background: none;
  ${(props) => ({ ...props.theme.typography.body1 })}

`

export const SecondaryInput = styled.input`
  border: none;
  background: none;
  ${(props) => ({ ...props.theme.typography.subtitle1 })}
`

export const DateInput = styled.input`
  border: none;
  background: none;
  ${(props) => ({ ...props.theme.typography.subtitle2 })}
  width: max-content;
  color: ${(props) => props.theme.palette.text.secondary};
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Cancel = styled(Button)`
  margin-right: 0.5rem;
`

export const Submit = styled(Button)``

