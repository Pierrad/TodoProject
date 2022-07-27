import React, { useRef } from 'react'
import { connect } from 'react-redux'

import { DispatchType, GlobalStateType } from '@todo-project/models'
import { LOGIN } from '@todo-project/redux'

import * as SC from './styled'

type SignInProps = {
  login: (email: string, password: string) => void
}

const SignIn = (props: SignInProps) => {
  const { login } = props
  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)

  const handleLogin = () => {
    const emailValue = email.current?.value
    const passwordValue = password.current?.value
    if (emailValue && passwordValue) {
      login(emailValue, passwordValue)
    }
  }

  return (
    <SC.Container>
      <SC.Content>
        <SC.Title variant='h2'>Bienvenue !</SC.Title>
        <SC.Form>
          <SC.Input id="email" label="Email" variant="outlined" type="email" inputRef={email} />
          <SC.Input id="password" label="Password" variant="outlined" type="password" inputRef={password} />
          <SC.Submit onClick={handleLogin} variant="contained">Se connecter</SC.Submit>
        </SC.Form>
        <SC.RedirectToRegister to="/register">Pas encore inscrit ?</SC.RedirectToRegister>
      </SC.Content>
    </SC.Container>
  )
}

const mapStateToProps = (state: GlobalStateType) => ({
})

const mapDispatchToProps = (dispatch: (action: DispatchType) => void) => ({
  login: (email: string, password: string) => dispatch({ type: LOGIN, payload: { email, password } }),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

