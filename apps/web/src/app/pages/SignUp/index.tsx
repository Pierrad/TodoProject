import React from 'react'

import * as SC from './styled'

const SignUp = () => {
  return (
    <SC.Container>
      <SC.Content>
        <SC.Title variant='h2'>Bienvenue !</SC.Title>
        <SC.Form>
          <SC.Input id="username" label="Username" variant="outlined" />
          <SC.Input id="email" label="Email" variant="outlined" type="email" />
          <SC.Input id="password" label="Password" variant="outlined" type="password" />
          <SC.Submit variant="contained">S'inscrire</SC.Submit>
        </SC.Form>
        <SC.RedirectToLogin to="/login">Déjà inscrit ?</SC.RedirectToLogin>
      </SC.Content>
    </SC.Container>
  )
}

export default SignUp
