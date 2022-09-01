import { Guest, GuestList } from '../graphql/generated'

export const DEFAULT_GUESTS_LIST: GuestList = {
  id: '',
  items: [],
  description: '',
  imageUrl: '',
  listName: ''
}

export const DEFAULT_GUEST: Guest = {
  id: '',
  name: '',
  phone: '',
  confirmationCode: '',
  response: false
}