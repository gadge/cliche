'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// let protoType = function (it) {
//   const raw = typeof it;
//   if (raw === "object") {
//     switch (true) {
//       case (it instanceof Array):
//         return "array";
//       case (it instanceof Map):
//         return "map";
//       case (it instanceof Set):
//         return "set";
//       case (it instanceof Function):
//         return "function";
//       default:
//         return raw;
//     }
//   } else {
//     return raw
//   }
// };
const oc = Object.prototype.toString;
/**
 * const rxObj = /^\[object (.*)]$/
 * Equivalent to: Object.prototype.stringify.call(o).match(rxObj)[1]
 * @param {*} o
 * @return {string}
 */

const otype = o => oc.call(o).slice(8, -1);
/**
 * validate
 * @param x
 * @param y
 * @returns {number}
 */


const vdt = (x, y) => isNaN(x - y) ? NaN : y;

class Num {
  // Angular 4.3
  static isNumeric(x) {
    return !isNaN(x - parseFloat(x));
  }

  static numeric(x) {
    return vdt(x, parseFloat(x));
  }

  static inferData(x) {
    const t = typeof x;
    return t === 'string' ? isNaN(x - parseFloat(x)) ? 'string' : 'numstr' : t === 'object' ? otype(x).toLowerCase() : t;
  }

}

const {
  isNumeric
} = Num;

class ClicheMag {
  constructor(digit = 2, sep = 3) {
    this.dg = digit;
    this.reg = new RegExp(`\\d(?=(\\d{${sep || 3}})+${digit > 0 ? '\\.' : '$'})`, 'g');
  }

  form(any) {
    return isNumeric(any) ? this.format(any) : String(any);
  }

  format(num) {
    return num.toFixed(this.dg).replace(this.reg, '$&,');
  }

}

exports.ClicheMag = ClicheMag;
