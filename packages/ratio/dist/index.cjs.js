'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var numStrict = require('@typen/num-strict');

class Ratio {
  constructor(digit = 0) {
    this.fm = new Intl.NumberFormat(undefined, {
      style: 'percent',
      minimumFractionDigits: digit
    });
  }

  static build(digit) {
    return new Ratio(digit);
  }

  parse(any) {
    return numStrict.isNumeric(any) ? this.fm.format(any) : String(any);
  }

  format(num) {
    return this.fm.format(num);
  }

}

exports.Ratio = Ratio;
