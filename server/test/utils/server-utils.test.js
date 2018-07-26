/* eslint-env mocha */

const assert = require('assert')
const ServerUtils = require('../../src/utils/server-utils')

describe('ServerUtils', function () {
  // normalizePort (int|string) -> string|number
  describe('normalizePort', function () {
    it('accepts named pipes', function () {
      let testCases = ['named', 'pipe', 'helloWorld', '']
      testCases.forEach(test => {
        assert.strictEqual(ServerUtils.normalizePort(test), test)
      })
    })

    it('returns string numbers as ints', function () {
      let testInts = [0, 1, '0', '1']
      let expected = [0, 1, 0, 1]
      testInts.forEach((test, i) => {
        assert.strictEqual(
          ServerUtils.normalizePort(test),
          expected[i]
        )
      })
    })

    it('converts numbers to ints', function () {
      let testNums = [0.0, 1.0, 2.1234]
      let expected = [0, 1, 2]
      testNums.forEach((test, i) => {
        assert.strictEqual(
          ServerUtils.normalizePort(test),
          expected[i]
        )
      })
    })

    it('throws error for negative numbers', function () {
      let testCases = [-1, '-1']
      testCases.forEach(test => {
        assert.throws(function () {
          ServerUtils.normalizePort(test)
        }, Error)
      })
    })

    it('throws error if NaN nor named pipe', function () {
      let testCases = [{}, [], true, false]
      testCases.forEach(test => {
        assert.throws(function () {
          ServerUtils.normalizePort(test)
        }, Error)
      })
    })
  })
})
