import { deco, decoObject, logger, says } from '@spare/logger'
import { funcToString } from './src/funcToString'
import { FunctionCollection } from './assets/FunctionCollection'
import { decoFunction, LAMB_REG } from './src/decoFunction'

const FUNC_CLY = /function\s\w+\((\w+)\)\s{\s*\n\s*return(\w+)\n}/g

const LINE_REG = /([{;])\s*[\r\n](.+?)\s*(?=[;}])/gs

for (const [key, func] of Object.entries(FunctionCollection)) {
  ({
    body: funcToString(func),
    deco: decoFunction(func),
    test: !!func.toString().match(LAMB_REG)
  }) |> decoObject |> says[key].br(func.name |> deco).br(func.length |> deco)
  '' |> logger
}
