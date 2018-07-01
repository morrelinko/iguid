'use strict'

const { assert } = require('chai')
const iguid = require('../')
const time = Date.now()

console.log(time, iguid.prefix)

describe('iguid', function () {
  it('generates unique id', function () {
    const uid = iguid()
    const uid1 = iguid()
    const uid2 = iguid()

    assert.isOk(uid)
    assert.strictEqual(uid, time + '0')
    assert.strictEqual(uid1, time + '1')
    assert.strictEqual(uid2, time + '2')
  })

  it('supports version one api', function () {
    assert.isFunction(iguid.create)
    assert.strictEqual(iguid.create(), time + '3')
  })
})
