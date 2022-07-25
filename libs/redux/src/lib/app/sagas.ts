import {
  put,
  select,
  takeLeading,
} from 'redux-saga/effects'
import { SET_LANGUAGE, SET_THEME, SWITCH_LANGUAGE, SWITCH_THEME } from "./actions";

import { i18n } from '@todo-project/i18n';

import * as appSelectors from './selectors'

function* switchTheme() {
  const theme: string = yield select(appSelectors.theme)

  if (theme === 'light') {
    yield put({ type: SET_THEME, payload: 'dark' })
  } else {
    yield put({ type: SET_THEME, payload: 'light' })
  }
}

function* switchLanguage( { payload }: { payload: string, type: string }) {
  yield put({ type: SET_LANGUAGE, payload })
  i18n.changeLanguage(payload);
}

export default function* appSagas() {
  yield takeLeading(SWITCH_THEME, switchTheme);
  yield takeLeading(SWITCH_LANGUAGE, switchLanguage);
}
