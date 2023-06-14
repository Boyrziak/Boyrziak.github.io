import { GET_GUEST_FAILURE, GET_GUEST_REQUEST, GET_GUEST_SUCCESS } from './actionTypes'

export interface IGuest {
  id: string
  name: string
}

export interface IGuestState {
  data: IGuest | undefined
  loading: boolean
  error: string
}

export interface IGuestRequestPayload {
  id: string
}

export interface IGuestSuccessPayload {
  data: IGuest
}

export interface IGuestErrorPayload {
  error: string
}

export interface GuestRequestType {
  type: typeof GET_GUEST_REQUEST
  payload: IGuestRequestPayload
}

export interface GuestSuccessType {
  type: typeof GET_GUEST_SUCCESS
  payload: IGuestSuccessPayload
}

export interface GuestFailureType {
  type: typeof GET_GUEST_FAILURE
  payload: IGuestErrorPayload
}

export type GuestActionType =
    | GuestRequestType
    | GuestSuccessType
    | GuestFailureType
