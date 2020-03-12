import { isNumeric } from '@typen/num-strict';

const LocaleToCurrency = new Map([['en-US', 'USD'], ['en-GB', 'GBP'], ['de-DE', 'EUR'], ['es-ES', 'EUR'], ['en-IN', 'INR'], ['zh-CN', 'CNY'], ['ja-JP', 'JPY'], ['ru-RU', 'RUB']]); // currencyDisplay: "symbol"}};//'symbol','code','name'

const toCurrencyConfig = locale => ({
  locale: locale,
  options: {
    style: 'currency',
    currency: LocaleToCurrency.get(locale),
    currencyDisplay: 'symbol'
  }
});

class Fin {
  constructor(region) {
    var _region;

    const {
      locale,
      options
    } = (_region = region, toCurrencyConfig(_region));
    this.fm = new Intl.NumberFormat(locale, options);
  }

  static build(region) {
    return new Fin(region);
  }

  parse(any) {
    return isNumeric(any) ? this.fm.format(any) : String(any);
  }

  format(num) {
    return this.fm.format(num);
  }

}

export { Fin };
