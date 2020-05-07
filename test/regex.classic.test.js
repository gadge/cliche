import { body } from './assets/nested.naive'
import { deco, DecoSamples, delogger } from '@spare/logger'
import { matches } from './src/matches'

const REG = /\(([^()]*|\([^()]*\))*\)/g

matches(body, REG) |> delogger
