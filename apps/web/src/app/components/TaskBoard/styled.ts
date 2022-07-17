import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 100%;
`

export const Title = styled.h2`
  margin: 0 0 16px 0;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`

export const Tasks = styled.div``

export const CompletedTasks = styled.div``

export const CompletedTasksTitle = styled.h3`
  color: ${({ theme }) => theme.palette.primary.contrastText};
  margin: 0 0 16px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`