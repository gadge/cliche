import { delogger } from '@spare/logger'
import XRegExp from 'xregexp'
import { body } from './assets/nested.naive'

XRegExp.matchRecursive(body, '{', '}', 'gs') |> delogger
