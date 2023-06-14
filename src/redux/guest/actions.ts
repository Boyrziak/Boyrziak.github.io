import {
  GuestFailureType,
  GuestRequestType,
  GuestSuccessType,
  IGuestErrorPayload,
  IGuestRequestPayload,
  IGuestSuccessPayload
} from './types'
import { GET_GUEST_FAILURE, GET_GUEST_REQUEST, GET_GUEST_SUCCESS } from './actionTypes'

export const guestRequest = (payload: IGuestRequestPayload): GuestRequestType => ({
  type: GET_GUEST_REQUEST,
  payload
})

export const guestSuccess = (payload: IGuestSuccessPayload): GuestSuccessType => ({
  type: GET_GUEST_SUCCESS,
  payload
})

export const guestFailure = (payload: IGuestErrorPayload): GuestFailureType => ({
  type: GET_GUEST_FAILURE,
  payload
})
