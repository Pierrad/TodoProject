import { spawn } from 'redux-saga/effects';

import appSagas from "./app/sagas";
import userSagas from "./user/sagas";


export default function* rootSaga() {
  yield spawn(appSagas);
  yield spawn(userSagas);
}
