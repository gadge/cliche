import { delogger } from '@spare/logger'

const LEFT = -1, RIGHT = 1
const peek = (ve) => ve[ve.length - 1]
const Prece = { '^': 4, '*': 3, '/': 3, '+': 2, '-': 2 }
const Assoc = { '^': RIGHT, '*': LEFT, '/': LEFT, '+': LEFT, '-': LEFT }

export const humanToRpn = (infix) => {
  infix = infix.replace(/\s+/g, '')
  const operators = []
  let c, o1, o2, postfix = [], i = 0
  while ((c = infix[i++])) {
    if (c >= '0' && c <= '9') { postfix.push(c)}
    else if (c in Prece) { // if token is an operator
      o1 = c
      o2 = peek(operators)
      while ((c in Prece) && (
        (Assoc[o1] === LEFT && (Prece[o1] <= Prece[o2])) || (Assoc[o1] === RIGHT && (Prece[o1] < Prece[o2]))
      )) {
        postfix.push(o2)
        operators.pop()
        o2 = peek(operators)
      }
      operators.push(o1)
    }
    else if (c === '(') { operators.push(c) }
    else if (c === ')') {
      while (peek(operators) !== '(') { postfix.push(operators.pop()) }
      operators.pop()
    }
  }
  postfix.push(...operators.reverse())
  return postfix
}

const infix = '3 + 4 * 2 / ( 1 - 5 ) ^ 2 ^ 3'
humanToRpn(infix) |> delogger


