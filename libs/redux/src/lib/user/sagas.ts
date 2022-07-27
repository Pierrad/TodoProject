import {
  call,
  put,
  takeLeading,
} from 'redux-saga/effects'
import { mutate } from '../api/sagas';
import { LOGIN, REGISTER } from "./actions";

import { SignInMutation, SignUpMutation } from '../graphql/User';
import { ResponseGenerator } from '@todo-project/models';

// import * as userSelectors from './selectors'



function* signIn({ payload }: { payload: { email: string, password: string }, type: string }) {
  const { email, password } = payload;

  console.log(email, password);

  const result: ResponseGenerator = yield call(mutate, SignInMutation({
      email,
      password,
    })
  );

  console.log(result);
}


function* signUp( { payload }: { payload: { username: string, email: string, password: string }, type: string }) {
  const { username, email, password } = payload;

  console.log(username, email, password);

  const result: ResponseGenerator = yield call(mutate, SignUpMutation({
      username,
      email,
      password,
    })
  );

  console.log(result);
}

export default function* appSagas() {
  yield takeLeading(LOGIN, signIn);
  yield takeLeading(REGISTER, signUp);
}
