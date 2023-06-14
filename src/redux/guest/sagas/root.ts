import { SagaIterator } from 'redux-saga'
import { fork } from 'redux-saga/effects'
import { getGuestWatcher } from './getGuest/watcher'

export function * guestRootSaga (): SagaIterator {
  yield fork(getGuestWatcher)
}
