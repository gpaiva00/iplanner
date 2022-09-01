export default function phoneMask(phone: string) {
  if (!phone.length) return null

  const formattedPhone = phone.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/)

  phone = !formattedPhone[2]
    ? formattedPhone[1]
    : '(' + formattedPhone[1] + ') ' + formattedPhone[2] + (formattedPhone[3] ? '-' + formattedPhone[3] : '')
    
  return phone
}