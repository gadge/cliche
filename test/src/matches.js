import { DecoVector } from '@spare/logger'

const offSpace = x => x?.replace(/\s+/g, ' ')
const decoVector = DecoVector({ indexed: false, abstract: offSpace, delim: ', ', bracket: true })
/**
 *
 * @param body
 * @param {RegExp} reg
 */
export const matches = (body, reg) => {
  const samples = []
  let ms, wd, group
  while ((ms = reg.exec(body)) && ([wd, ...group] = ms)) {
    samples.push({
      start: ms.index,
      diff: wd?.length,
      end: reg.lastIndex,
      match: offSpace(wd),
      group: group |> decoVector
    })
  }
  return samples
}

export const fracture = (body, reg) => {
  let ms, prev = 0, curr = 0, block, match, group
  const samples = []
  while ((ms = reg.exec(body)) && ([match, ...group] = ms)) {
    curr = ms.index
    block = body.slice(prev, curr).trim()
    samples.push({ prev, curr, block, match: offSpace(match), group: group |> decoVector })
    prev = reg.lastIndex
  }
  return samples
}
