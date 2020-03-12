'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var util = require('@spare/util');

class ClicheRatio {
  constructor(digit = 0) {
    this.fm = new Intl.NumberFormat(undefined, {
      style: 'percent',
      minimumFractionDigits: digit
    });
  }

  form(any) {
    return util.isNumeric(any) ? this.fm.format(any) : String(any);
  }

  format(num) {
    return this.fm.format(num);
  }

}

exports.ClicheRatio = ClicheRatio;
