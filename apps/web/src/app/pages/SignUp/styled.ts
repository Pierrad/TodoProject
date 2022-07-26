import { Button, Card, FormControl, TextField, Typography } from '@mui/material';
import styled from 'styled-components';
import Link from '../../components/Link';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Content = styled(Card)`
  width: 30rem;
  padding: 1rem 2rem;
`

export const Title = styled(Typography)`
  text-align: center;
  margin-bottom: 1rem;
`

export const Form = styled(FormControl)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Input = styled(TextField)`
  margin-bottom: 1rem;
  width: 80%;
`

export const Submit = styled(Button)`
  margin-bottom: 1rem;
`

export const RedirectToLogin = styled(Link)`
  justify-content: center;
`