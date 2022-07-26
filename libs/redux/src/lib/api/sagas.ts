import { MutationOptions, QueryOptions } from "@apollo/client"
import { ApiStateType } from "@todo-project/models"
import { call, put, select } from "redux-saga/effects"

import { getClient } from "../graphql/client"

import * as ApiSelectors from "./selectors"

export type ApiTransformer = (data: any) => any

function *getHeaders(): any {
  const headers = yield select(ApiSelectors.headers)

  const token = yield select(ApiSelectors.token)
  return {
    ...headers,
    ...(token && { authorization: `${token}` }),
  }
}

export function *query(service: {
  query: QueryOptions
  transformer?: (data: any) => any
}) {
  return yield APICall(
    getClient().query,
    service.query,
    service?.transformer
  )
}


export function *mutate(service: {
  mutation: MutationOptions
  transformer?: (data: any) => any
}) {
  return yield APICall(
    getClient().mutate,
    service.mutation,
    service?.transformer
  )
}



function *transform(result: any, transformer?: ApiTransformer) {
  if (!result.data || !transformer) {
    return result
  }

  const data = yield call(transformer, result.data as any)

  return { ...result, data }
}

function *APICall(method: any, service: any, transformer?: (data: any) => any) {
  const headers: ApiStateType = yield call(getHeaders)

  let result
  try {
    result = yield call(method, {
      ...defaultConfig,
      ...service,
      context: {
        ...service?.context,
        headers: {
          ...service?.context?.headers,
          ...headers,
        },
      },
    })
  } catch (e) {
    console.error(`ApiSagas:`, e, service?.variables)

    // if (e?.message === 'Unauthenticated.') {
    //   yield put(actions.user.setUser(null))
    // }

    return {
      errors: e,
    }
  }

  if (result.errors) {
    console.error(`ApiSagas:`, result.errors)
  }

  return yield call(
    transform,
    result,
    transformer || service?.transformer
  )
}

