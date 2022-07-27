import gql from 'graphql-tag'
import { MutationOptions, QueryOptions } from '@apollo/client'

const queryOptions = (q: any, variables: any, headers = {}): QueryOptions => ({
  query: gql`
    ${q}
  `,
  variables,
  fetchPolicy: 'no-cache',
  errorPolicy: 'all',
  context: {
    headers,
  },
})

const mutationOptions = (
  q: any,
  variables: any,
  headers = {}
): MutationOptions => ({
  mutation: gql`
    ${q}
  `,
  variables,
  fetchPolicy: 'no-cache',
  errorPolicy: 'all',
  context: {
    headers,
  },
})

type QueryService<T> = (
  variables?: T,
  headers?: any
) => {
  query: QueryOptions
  transformer?: (data: any) => any
}

type MutationService<T> = (
  variables?: T,
  headers?: any
) => {
  mutation: MutationOptions
  transformer?: (data: any) => any
}

export const queryServiceCreator = <T>(
  query: any,
  transformer?: (data: any) => any
): QueryService<T> => (variables, headers) => ({
  query: queryOptions(query, variables, headers),
  transformer: transformer,
})

export const mutationServiceCreator = <T>(
  mutation: any,
  transformer?: (data: any) => any
): MutationService<T> => (variables, headers) => ({
  mutation: mutationOptions(mutation, variables, headers),
  transformer: transformer,
})
