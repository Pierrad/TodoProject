export type DispatchType = {
  type: string,
  payload?: any
}

export type AppStateType = {
  theme: string
}

export type ApiStateType = {
  headers: {
    [key: string]: string
  }
  token: string | null
}

export type UserStateType = {
  user: Record<string, unknown> | null
}

export type GlobalStateType = {
  app: AppStateType
  api: ApiStateType
  user: UserStateType
}
