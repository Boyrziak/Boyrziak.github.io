import { all, fork } from 'redux-saga/effects'
import { guestRootSaga } from './guest/sagas/root'

export function * rootSaga (): Iterator<unknown> {
  yield all([
    fork(guestRootSaga)
  ])
}
