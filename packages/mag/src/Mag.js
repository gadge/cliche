import { isNumeric } from '@typen/num-strict'

export class Mag {
  constructor (digit = 2, sep = 3) {
    this.dg = digit
    this.reg = new RegExp(
      `\\d(?=(\\d{${sep || 3}})+${digit > 0 ? '\\.' : '$'})`, 'g')
  }

  static build (digit, sep) { return new Mag(digit, sep) }

  parse (any) { return isNumeric(any) ? this.format(any) : String(any) }

  format (num) { return num.toFixed(this.dg).replace(this.reg, '$&,') }
}
