/* eslint-env mocha */

const assert = require('assert')

describe('index.js', function () {
  it('runs error free', function () {
    assert.doesNotThrow(() => {
      require('../index')
    })
  })
})
