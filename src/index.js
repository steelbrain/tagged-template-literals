'use strict'

/* @flow */

import invariant from 'assert'

function noOp(param: string): string {
  return param
}

function taggedTemplateLiterals(
  strings: Array<string>,
  values: Array<string>,
  callback: ?((param: string) => string)
): string {
  invariant(Array.isArray(values), 'Values should be an array')
  invariant(Array.isArray(strings), 'Strings should be an array')

  const length = strings.length > values.length ? strings.length : values.length
  const toReturn = []
  const filterCallback = typeof callback === 'function' ? callback : noOp
  for (let i = 0; i < length; ++i) {
    const string = strings[i]
    const value = values[i]
    if (string) {
      toReturn.push(string)
    }
    if (value) {
      toReturn.push(filterCallback(value))
    }
  }
  return toReturn.join('')
}

module.exports = taggedTemplateLiterals
