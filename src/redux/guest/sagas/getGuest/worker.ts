import { SagaIterator } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { GuestRequestType, IGuest } from '../../types'
import { defaultGuest, getGuestByID } from '../../../types/guestList'
import { guestSuccess } from '../../actions'

export function * getGuestWorker ({
  payload: { id }
}: GuestRequestType): SagaIterator {
  const guestResult = yield call(getGuestByID, id)
  if (guestResult) {
    const data = guestResult as IGuest
    yield put(guestSuccess({ data }))
  } else {
    yield put(guestSuccess({ data: defaultGuest }))
  }
}
