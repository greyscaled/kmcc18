/* eslint-env mocha */

const assert = require('assert')
const request = require('supertest')

describe('app', function () {
  beforeEach(function () {
    this.server = require('../app')
  })

  it('trusts proxies', function () {
    assert(this.server.enabled('trust proxy'))
  })

  describe('GET /', function () {
    it('responds 200 with landing html', function () {
      return request(this.server)
        .get('/')
        .expect(200)
        .then(response => {
          assert.strictEqual(
            response.res.text.slice(0, 15),
            '<!DOCTYPE html>'
          )
        })
    })
  })
})
