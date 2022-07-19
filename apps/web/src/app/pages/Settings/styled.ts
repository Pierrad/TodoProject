import styled from 'styled-components'
import { Avatar, Button, Paper, TextField, ToggleButtonGroup, Typography } from '@mui/material'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.breakpoints.values.md}px;
  margin: 0 auto;
`

export const Settings = styled.div`
  display: flex;
`

export const Card = styled(Paper)`
  display: flex;
  flex-direction: column;
  min-width: 16.5rem;
  max-width: max-content;
  padding: 1rem 1.5rem;
  margin-right: 1rem;
`

export const User = styled(Card)``

export const UserAvatarBox = styled.div`
  display: flex;
  align-items: center;
`

export const UserAvatar = styled(Avatar)`
  width: 80px;
  height: 80px;
  margin-right: 1rem;
`

export const ActionButton = styled(Button)`
  height: max-content;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;
`

export const Input = styled(TextField)`
  margin-bottom: 1.3rem;
  max-width: 16.5rem;
`

export const Front = styled(Card)``

export const FrontTitle = styled(Typography)`
  margin-bottom: 1rem;
`

export const ToggleGroup = styled(ToggleButtonGroup)`
  margin-bottom: 1.6rem;
`

export const Statistics = styled(Card)`
  min-width: 100%;
  margin-top: 1.6rem;
`

export const StatisticsTop = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StatisticsTitle = styled(Typography)`
  margin-bottom: 1rem;
`