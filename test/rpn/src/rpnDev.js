import { delogger } from '@spare/logger'
import { isNumeric } from '@typen/num-loose'

export const rpnDev = (exp) => {
  const s = [], ve = exp.split(' ')
  ve |> delogger
  for (const n of ve) {
    if (isNumeric(n))
      s.push(+n)
    else {
      const o2 = s.pop(), o1 = s.pop()
      if (n === '+') { s.push(o1 + o2) }
      else if (n === '-') { s.push(o1 - o2) }
      else if (n === '*') { s.push(o1 * o2) }
      else if (n === '/') { s.push(o1 / o2) }
      else if (n === '^') { s.push(o1 ** o2) }
    }
  }
  return s
}

const expression = '3 4 2 * 1 5 - 2 3 ^ ^ / +'

expression |> rpnDev |> delogger
