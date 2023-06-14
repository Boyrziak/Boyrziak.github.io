import { IGuest, IGuestState } from '../guest/types'

export const guestList: IGuest[] = [
  {
    id: 'pick1',
    name: 'Пик'
  },
  {
    id: 'pap1',
    name: 'Папс'
  }
]

export const defaultGuest: IGuest = {
  id: 'default',
  name: 'Гость'
}

export const getGuestByID = (id: string): IGuest | undefined => {
  return guestList.find((guest) => {
    return guest.id.localeCompare(id) === 0
  })
}
