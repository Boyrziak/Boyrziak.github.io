import { AppState } from '../rootReducer'
import { createSelector } from '@reduxjs/toolkit'

const getGuest = (state: AppState) => state.guest.data
const getGuestError = (state: AppState) => state.guest.error

export const guestDataSelector = createSelector(getGuest, (guest) => guest)
export const guestErrorSelector = createSelector(getGuestError, (error) => error)
