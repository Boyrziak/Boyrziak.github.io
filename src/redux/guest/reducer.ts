import { GuestActionType, IGuestState } from './types'

import {
  GET_GUEST_FAILURE,
  GET_GUEST_REQUEST,
  GET_GUEST_SUCCESS
} from './actionTypes'

const initialState: IGuestState = {
  loading: false,
  error: '',
  data: undefined
}

export default (state = initialState, action: GuestActionType): IGuestState => {
  switch (action.type) {
    case GET_GUEST_REQUEST:
      return {
        ...initialState,
        loading: true
      }
    case GET_GUEST_SUCCESS:
      return {
        ...initialState,
        data: action.payload.data
      }
    case GET_GUEST_FAILURE:
      return {
        ...initialState,
        error: action.payload.error
      }
    default:
      return {
        ...state
      }
  }
}
