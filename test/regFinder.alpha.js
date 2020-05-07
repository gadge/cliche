import { matches, matchesTesterSplit } from './src/matches'
import { decoSamples, decoVector, delogger, says } from '@spare/logger'
import { SP, TB } from '@spare/enum-chars'

const FUNC_REG = /fn(.+?)\s{\s|\s}\s/g
// const FUNC_REG = /\(([^()]*)\)/g

const body = `
  fn () {
    fn adt (a) { return ++a }
    fn par (b) { if (isNum(b)) { return +b } else { return NaN } }
    fn dev (x, y) {
      const foo = 255
      const g1 = fn () { return this.x }
      const g2 = fn ({ a=gen() } = {}) { return ++a }
    }
  }
`

body |> delogger
matches(body, FUNC_REG) |> decoSamples |> says['matches tester']
matchesTesterSplit(body, FUNC_REG) |> decoSamples |> says['matches tester'].br('split')

const functionLines = func => {
  const written = func.toString()
  let ms, start = 0, end = 0, block, match, head, tail = '}'
  let lines = []
  while ((ms = FUNC_REG.exec(written)) && ([match, head] = ms)) {
    end = ms.index
    block = written.slice(start, end).trim()
    if (head && (head = 'func' + SP + head.trim() + SP + '{')) {
      block.length ? lines.push(block, head) : lines.push(head)
    }
    else {
      block.length ? lines.push(block, tail) : lines.push(tail)
    }
    start = FUNC_REG.lastIndex
  }
  return lines
}

const tab = lv => lv > 0 ? TB.repeat(lv) : ''
const functionLiner = function (lines, level = 0) {
  let i = lines.length, line, lv = level, isLf = false, firstContent = true
  const output = []
  while ((line = lines[--i])) {
    if (line === '}') {
      ++lv
      output.push({ index: i, level: lv, line: tab(lv) + line })
    }
    else if (line.includes('{')) {
      output.push({ index: i, level: lv, line: tab(lv) + line })
      lv--
    }
    else {
      output.push({ index: i, level: lv, line: tab(lv + 1) + line })
    }
  }
  return output.reverse()
}

const sumlen = ve => ve.reduce((a, b) => a.length + b.length)
const combineLiner = function (lines, level = 0) {
  return []
  let prev = 0, mark = 0, temp = [], tlen = 0, output = []
  for (let { index, level, line } of lines) {
    if (index !== prev) {

    }
    if (line.includes('{')) {

    }
    if (line === '}') mark = index
    prev = index

    temp.push(line)
    tlen += line.length
  }
  return output
}

const lines = functionLines(body, FUNC_REG)
lines |> decoVector |> says['functionLines']
const formattedLines = functionLiner.call({}, lines)
formattedLines |> decoSamples |> says['functionLiner']
const text = combineLiner.call({}, lines)
text |> decoVector |> says['functionLiner']
