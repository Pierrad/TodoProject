import styled from 'styled-components'
import ContainerC from '@mui/material/Container'
import HeaderC from '../components/Header'
import NavBar from '../components/NavBar'


const drawerWidth = 240;

export const Container = styled(ContainerC)`
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: stretch;
  background: bottom center / cover no-repeat;
  padding-left: 0;
  padding-right: 0;
  ${(props) => props.theme.breakpoints.up('md')} {
    max-width: none;
  }
`

export const Header = styled(HeaderC)`
  display: flex;
  background-color: ${({ theme }) => theme.palette.primary.main};
`

export const Main = styled.div<{ open: boolean; isAuthorized: boolean }>`
  flex-grow: 1;
  margin-left: ${({ open, isAuthorized }) => (isAuthorized ? open ? drawerWidth : 0 : 0)}px;
`

export const Navigation = styled(NavBar)<{ open: boolean }>`
  width: ${(props) => (props.open ? `calc(100% - ${drawerWidth}px)` : 0)};
  margin-left: ${drawerWidth}px;
`

export const Content = styled.div<{ isAuthorized: boolean }>`
  flex-grow: 1;
  margin-top: ${({ isAuthorized }) => (isAuthorized ? 64 : 0)}px;
  padding: ${({ isAuthorized }) => (isAuthorized ? '24px' : 0)};
  background-color: ${({ theme }) => theme.palette.background.default};
  min-height: ${({ isAuthorized }) => (isAuthorized ? 'calc(100vh - 64px)' : '100vh')};
  /* max-width: 1080px;
  margin-left: auto;
  margin-right: auto; */
`