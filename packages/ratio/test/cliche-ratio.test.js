import { Ratio } from '../src/Ratio'
import { logger } from '@spare/logger'

class ClicheRatioTest {
  static test () {
    const candidates = [
      Math.PI, Math.E, Number.EPSILON, Number.NaN
    ]
    const ratio = new Ratio(2)
    for (let candidate of candidates) {
      `[${candidate}] (${ratio.format(candidate)})` |> logger
    }
  }
}

ClicheRatioTest.test()
