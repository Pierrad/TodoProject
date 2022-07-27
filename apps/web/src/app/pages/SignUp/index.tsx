import { DispatchType, GlobalStateType } from '@todo-project/models'
import { REGISTER } from '@todo-project/redux'
import React, { useRef } from 'react'
import { connect } from 'react-redux'

import * as SC from './styled'

type SignUpProps = {
  register: (username: string, email: string, password: string) => void
}

const SignUp = (props: SignUpProps) => {
  const { register } = props
  const username = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)

  const handleRegister = () => {
    const usernameValue = username.current?.value
    const emailValue = email.current?.value
    const passwordValue = password.current?.value
    if (usernameValue && emailValue && passwordValue) {
      register(usernameValue, emailValue, passwordValue)
    }
  }



  return (
    <SC.Container>
      <SC.Content>
        <SC.Title variant='h2'>Bienvenue !</SC.Title>
        <SC.Form>
          <SC.Input id="username" label="Username" variant="outlined" inputRef={username} />
          <SC.Input id="email" label="Email" variant="outlined" type="email" inputRef={email} />
          <SC.Input id="password" label="Password" variant="outlined" type="password" inputRef={password} />
          <SC.Submit onClick={handleRegister} variant="contained">S'inscrire</SC.Submit>
        </SC.Form>
        <SC.RedirectToLogin to="/login">Déjà inscrit ?</SC.RedirectToLogin>
      </SC.Content>
    </SC.Container>
  )
}

const mapStateToProps = (state: GlobalStateType) => ({
})

const mapDispatchToProps = (dispatch: (action: DispatchType) => void) => ({
  register: (username: string, email: string, password: string) => dispatch({ type: REGISTER, payload: { username, email, password } }),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)


