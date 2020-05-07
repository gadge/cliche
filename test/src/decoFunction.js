import { SP } from '@spare/enum-chars'
import { parenth } from '@spare/bracket'

export const LAMB_REG = /function\s*(\w*)\s*\(([\w\s,]+)\)\s*\{\s*return(.+);?\s*\}/gs
export const THIS_REG = /\bthis\b/
export const FUNC_INI = /^function/
export const MULTI_LF = /\n\s*(\n\s*)/g

export const decoFunction = (func) => {
  let text = func
    .toString()
    .replace(MULTI_LF, (_, p1) => p1)
  const temp = text.replace(/\s+/g, ' ')
  if (temp.length <= 160) text = temp.replace(/;\s*}/g, ' }')
  if (!THIS_REG.test(text)) text = text
    .replace(LAMB_REG, (_, name, args, body) => name + SP + parenth(args) + SP + '=>' + body)
  return text.replace(FUNC_INI, '').trim()
}
