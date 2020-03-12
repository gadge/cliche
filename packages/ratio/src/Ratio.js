import { isNumeric } from '@typen/num-strict'

export class Ratio {
  constructor (digit = 0) {
    this.fm = new Intl.NumberFormat(undefined,
      { style: 'percent', minimumFractionDigits: digit })
  }

  static build (digit) { return new Ratio(digit) }

  parse (any) { return isNumeric(any) ? this.fm.format(any) : String(any) }

  format (num) { return this.fm.format(num) }
}
