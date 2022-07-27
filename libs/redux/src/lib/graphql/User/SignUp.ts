import gql from 'graphql-tag'

import { mutationServiceCreator } from '../GraphqlHelpers'

const mutation = gql`
  mutation Register($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
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
