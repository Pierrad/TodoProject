import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 5px 16px;
  width: 100%;
  border-radius: 1rem;
  align-items: center;
  border: 1px solid #e0e0e0;
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme.palette.background.paper};
  box-shadow: 0px 0.3px 0.9px rgba(0,0,0,0.1),0px 1.6px 3.6px rgba(0,0,0,0.1);
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  width: 100%;
  cursor: pointer;
`

export const Name = styled.h3<{ checked: boolean }>`
  margin: 0;
  ${(props) => ({ ...props.theme.typography.h5 })}
  font-size: 1.2rem;
  text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
  color: ${(props) => (props.checked ? props.theme.palette.text.secondary : props.theme.palette.text.primary)};
`

export const DueDate = styled.h5`
  margin: 0;
  ${(props) => ({ ...props.theme.typography.subtitle1 })}
  font-size: 1rem;
`