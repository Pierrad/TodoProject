import gql from 'graphql-tag';

import { mutationServiceCreator } from '../GraphqlHelpers';

const mutation = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      token
      username
    }
  }
`

const transformer = ({ login }: any) => login

type variables = {
  email: string 
  password: string
}

export default mutationServiceCreator<variables>(mutation, transformer)
