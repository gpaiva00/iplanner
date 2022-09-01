import { Guest } from "../graphql/generated"

export const getConfirmedGuests = (guests: Guest[]) => 
  guests.filter(guest => guest.response === true)