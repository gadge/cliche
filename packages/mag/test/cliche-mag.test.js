import { Mag } from '../src/Mag'
import { logger } from '@spare/logger'

class ClicheMagTest {
  static test () {
    const candidates = [
      0, 64, 256, 1024, 4096, 16384, 65536, 262144, 1048576
    ]
    const fin = new Mag(0, 3)
    for (let candidate of candidates) {
      `[${candidate}] (${fin.format(candidate)})` |> logger
    }
  }
}

ClicheMagTest.test()
