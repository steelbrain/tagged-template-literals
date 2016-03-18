'use strict'

/* @flow */

function noOp(param: string): string {
  return param
}

function taggedTemplateLiterals(
  values: Array<string>,
  strings: Array<string>,
  callback: ?((param: string) => string)
): string {
  const length = values.length
  const toReturn = []
  const filterCallback = typeof callback === 'function' ? callback : noOp
  for (let i = 0; i < length; ++i) {
    toReturn.push(strings[i], filterCallback(values[i]))
  }
  return toReturn.join('')
}

module.exports = taggedTemplateLiterals
