import { GlobalStateType } from "@todo-project/models";

export const headers = (state: GlobalStateType) => state.api.headers;
export const token = (state: GlobalStateType) => state.api.token;