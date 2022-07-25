export type DispatchType = {
  type: string,
  payload?: any
}

export type AppStateType = {
  theme: string
}

export type GlobalStateType = {
  app: AppStateType
}
