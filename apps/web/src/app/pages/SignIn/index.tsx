import React from 'react'

import * as SC from './styled'

const SignIn = () => {
  return (
    <SC.Container>
      <SC.Content>
        <SC.Title variant='h2'>Bienvenue !</SC.Title>
        <SC.Form>
          <SC.Input id="email" label="Email" variant="outlined" type="email" />
          <SC.Input id="password" label="Password" variant="outlined" type="password" />
          <SC.Submit variant="contained">Se connecter</SC.Submit>
        </SC.Form>
        <SC.RedirectToRegister to="/register">Pas encore inscrit ?</SC.RedirectToRegister>
      </SC.Content>
    </SC.Container>
  )
}

export default SignIn
