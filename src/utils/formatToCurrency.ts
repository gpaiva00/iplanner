import currency from 'currency.js'

export const BRL = (value: number) =>
  currency(value, { symbol: 'R$ ', decimal: ',', separator: '.' })

export const formatToCurrency = (value: number) =>
  currency(value, { symbol: '', decimal: ',', separator: '.' })

export const moneyMask = (value: string) => {
  value = String(value)

  if (!value.length) return null

  value = value.replace('.', '').replace(',', '').replace(/\D/g, '')

  const options = { minimumFractionDigits: 2 }
  const result = new Intl.NumberFormat('pt-BR', options).format(
    parseFloat(value) / 100
  )

  return result
}
