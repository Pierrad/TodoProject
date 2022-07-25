import { spawn } from 'redux-saga/effects'
import appSagas from "../app/sagas";


export default function* rootSaga() {
  yield spawn(appSagas);
}
