import { SagaIterator } from 'redux-saga'
import { takeEvery } from 'redux-saga/effects'
import { GET_GUEST_REQUEST } from '../../actionTypes'
import { getGuestWorker } from './worker'

export function * getGuestWatcher (): SagaIterator {
  yield takeEvery(GET_GUEST_REQUEST, getGuestWorker)
}
