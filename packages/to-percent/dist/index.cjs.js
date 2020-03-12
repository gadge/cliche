'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const toPercent = (num, dg = 0) => (num * 100).toFixed(dg) + '%';

exports.toPercent = toPercent;
