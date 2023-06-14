import { IGuest } from './types'
import { useSelector } from 'react-redux'
import { guestDataSelector } from './selectors'

export const useSelectGuest: () => IGuest | undefined = () => {
  return useSelector(guestDataSelector)
}
