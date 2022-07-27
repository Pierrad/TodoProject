import gql from 'graphql-tag'

import { mutationServiceCreator } from '@todo-project/utils'

const mutation = gql`
  mutation Register($user: UserInput) {
    register(user: $user) {
      username
      email
      password
    }
  }
`

const transformer = ({ register }: any) => register

type variables = {
  username: string
  email: string
  password: string
}

export default mutationServiceCreator<variables>(mutation, transformer)
