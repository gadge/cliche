import { isNumeric } from '@typen/num-strict'
import { toCurrencyConfig } from './currencyConfig'

export class Fin {
  constructor (region) {
    const { locale, options } = region|> toCurrencyConfig
    this.fm = new Intl.NumberFormat(locale, options)
  }

  static build (region) { return new Fin(region) }

  parse (any) { return isNumeric(any) ? this.fm.format(any) : String(any) }

  format (num) { return this.fm.format(num) }
}
