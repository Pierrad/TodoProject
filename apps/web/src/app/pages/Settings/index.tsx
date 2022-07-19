import React, { useState } from 'react'
import { MenuItem, Select, SelectChangeEvent, ToggleButton, useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Pie, PieChart, ResponsiveContainer } from 'recharts'

import * as SC from './styled'

const Settings = () => {
  const { t } = useTranslation()
  const globalTheme = useTheme()
  const [language, setLanguage] = useState('fr')
  const [theme, setTheme] = useState('light')
  const [statGroup, setStatGroup] = useState('');

  const handleLanguageChange = (
    event: React.MouseEvent<HTMLElement>,
    newLang: string,
  ) => {
    setLanguage(newLang)
  }

  const handleThemeChange = (
    event: React.MouseEvent<HTMLElement>,
    newTheme: string,
  ) => {
    setTheme(newTheme)
  }

  const handleStatGroupChange = (event: SelectChangeEvent) => {
    setStatGroup(event.target.value as string)
  }

  const data01 = [
    {
      "name": "IUT 1",
      "value": 400
    },
    {
      "name": "IUT 2",
      "value": 300
    },
    {
      "name": "IUT 3",
      "value": 300
    },
  ]

  return (
    <SC.Container>
      <SC.Settings>
        <SC.User>
          <SC.UserAvatarBox>
            <SC.UserAvatar
              src="assets/images/avatar.jpg"
              alt="avatar"
            />
            <SC.ActionButton
              variant="outlined"
              color="primary"
            >
              {t('settings_user_change_picture')}
              <input hidden accept="image/*" multiple type="file" />
            </SC.ActionButton>
          </SC.UserAvatarBox>
          <SC.UserInfo>
            <SC.Input
              name="name"
              label={t('settings_user_input_name_label')}
              variant="outlined"
              defaultValue="John Doe"
              size="small"
            />
            <SC.Input
              name="email"
              label={t('settings_user_input_email_label')}
              variant="outlined"
              defaultValue="test@gmail.com"
              size="small"
            />
            <SC.ActionButton
              variant="contained"
              color="primary"
            >
              {t('settings_user_save')}
            </SC.ActionButton>
          </SC.UserInfo>
        </SC.User>
        <SC.Front>
          <SC.FrontTitle variant="h6">{t('settings_front_language_label')}</SC.FrontTitle>
          <SC.ToggleGroup
            color="primary"
            value={language}
            exclusive
            onChange={handleLanguageChange}
          >
            <ToggleButton value="fr">{t('settings_front_language_fr')}</ToggleButton>
            <ToggleButton value="en">{t('settings_front_language_en')}</ToggleButton>
          </SC.ToggleGroup>
          <SC.FrontTitle variant="h6">{t('settings_front_theme_label')}</SC.FrontTitle>
          <SC.ToggleGroup
            color="primary"
            value={theme}
            exclusive
            onChange={handleThemeChange}
          >
            <ToggleButton value="light">{t('settings_front_theme_light')}</ToggleButton>
            <ToggleButton value="dark">{t('settings_front_theme_dark')}</ToggleButton>
          </SC.ToggleGroup>
        </SC.Front>
      </SC.Settings>
      <SC.Statistics>
        <SC.StatisticsTop>
          <SC.StatisticsTitle variant="h6">{t('settings_statistics_label')}</SC.StatisticsTitle>
          <Select
            id="selectGroup"
            value={statGroup}
            label="Groupe"
            onChange={handleStatGroupChange}
            size="small"
          >
            <MenuItem value={"IUT"}>IUT</MenuItem>
            <MenuItem value={"Vie"}>Vie</MenuItem>
            <MenuItem value={"Pro"}>Pro</MenuItem>
          </Select>
        </SC.StatisticsTop>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart width={500} height={250}>
            <Pie
              data={data01}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              fill={globalTheme.palette.primary.main}
              label={(entry) => entry.name}
            />
          </PieChart>
        </ResponsiveContainer>
      </SC.Statistics>
    </SC.Container>
  )
}

export default Settings
