import { IGuestRequestPayload } from '../redux/guest/types'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { guestRequest } from '../redux/guest/actions'

export function useGuestRequest (): (guestInput: IGuestRequestPayload) => void {
  const dispatch = useDispatch()
  return useCallback(
    (guestInput) => {
      dispatch(guestRequest(guestInput))
    },
    [dispatch]
  )
}
