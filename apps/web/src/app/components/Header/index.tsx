import React, { useState } from 'react'
import { AppBar, Avatar, IconButton, Menu, MenuItem, useTheme } from '@mui/material'
import { ArrowBack, ArrowForward, Brightness4, Brightness7, Flag, Settings } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'


import * as SC from './styled'

type HeaderProps = {
  className?: string,
  open: boolean,
  onMenuClick: () => void,
  onThemeClick: () => void,
  onLanguageClick: (value: string) => void,
}

const Header = (props: HeaderProps) => {
  const { className, open, onMenuClick, onThemeClick, onLanguageClick } = props
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(null)
  const [openLanguage, setOpenLanguage] = useState(false);

  const handleFlagClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenLanguage(!openLanguage);
    setLanguageAnchorEl(event.currentTarget);
  };
  const handleFlagClose = () => {
    setOpenLanguage(false);
    setLanguageAnchorEl(null);
  };

  const handleFrLanguageClick = () => {
    onLanguageClick('fr');
    handleFlagClose();
  }

  const handleEnLanguageClick = () => {
    onLanguageClick('en');
    handleFlagClose();
  }

  const theme = useTheme()
  const navigate = useNavigate()


  const navigateToSettings = () => {
    return navigate('/settings')
  }

  return (
    <AppBar position="fixed" className={className}>
      <SC.Wrapper>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onMenuClick}
          edge="start"
        >
          {open ? <ArrowBack /> : <ArrowForward />}
        </IconButton>
        <SC.Right>
          <IconButton color="secondary" onClick={handleFlagClick}>
            <Flag />
            <Menu
              id="basic-menu"
              open={openLanguage}
              onClose={handleFlagClose}
              anchorEl={languageAnchorEl}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleFrLanguageClick}>FR</MenuItem>
              <MenuItem onClick={handleEnLanguageClick}>EN</MenuItem>
            </Menu>
          </IconButton>
          <IconButton onClick={onThemeClick} color="secondary">
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <IconButton color="secondary" onClick={navigateToSettings}>
            <Settings />
          </IconButton>
          <Avatar
            src="assets/images/avatar.jpg"
            alt="avatar"
          />
        </SC.Right>
      </SC.Wrapper>
    </AppBar>
  )
}

export default Header
