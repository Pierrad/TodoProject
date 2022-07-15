import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 10px 24px;
  width: 100%;
  border-radius: 1rem;
  align-items: center;
  border: 1px solid #e0e0e0;
  margin-bottom: 1rem;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  width: 100%;
  cursor: pointer;
`

export const Name = styled.h3`
  margin: 0;
  ${(props) => ({ ...props.theme.typography.h5 })}
`

export const DueDate = styled.h5`
  margin: 0;
  ${(props) => ({ ...props.theme.typography.subtitle1 })}
`