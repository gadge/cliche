export const LocaleToCurrency = new Map([
  ['en-US', 'USD'],
  ['en-GB', 'GBP'],
  ['de-DE', 'EUR'],
  ['es-ES', 'EUR'],
  ['en-IN', 'INR'],
  ['zh-CN', 'CNY'],
  ['ja-JP', 'JPY'],
  ['ru-RU', 'RUB']
])

// currencyDisplay: "symbol"}};//'symbol','code','name'
export const toCurrencyConfig = locale => ({
  locale: locale,
  options: {
    style: 'currency',
    currency: LocaleToCurrency.get(locale),
    currencyDisplay: 'symbol'
  }
})
