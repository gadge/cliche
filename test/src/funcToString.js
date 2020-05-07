import { LF, TB } from '@spare/enum-chars'

export const funcToString = (func, level = 0) => {
  const tab = LF + TB.repeat(level + 1)
  const written = func.toString()
  return written
    .replace(/\n\s*(\n\s*)/g, (_, p1) => p1)
    .replace(/\n/g, tab)
}
