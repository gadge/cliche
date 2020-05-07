import { LF, SP } from '@spare/enum-chars'

const functionLinerBeta = function (lines) {
  let i = lines.length, line, lv = 0, isLf = false
  this.output = ''
  this.block = []
  this.enblock = function (text) { this.block.unshift(text) }
  this.enqueue = function (ve) {
    isLf = sumlen(ve) > 32
    const block = isLf
      ? joinLines(ve, LF, lv)
      : ve.join(' ')
    this.output = block + SP + this.output
    ve.length = 0
  }
  while ((line = lines[--i])) {
    if (line === '}') {
      ++lv
      this.enblock(line)
      this.enqueue(this.block)
    }
    else if (line.endsWith('{')) {
      --lv
      this.enblock(line)
      this.enqueue(this.block)
    }
    else {
      this.enblock(line)
    }
  }
  return this.output
}
