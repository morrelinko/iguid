'use strict'

import { assert } from 'chai'
import { iguid, createIGuid } from '../index.js'

const time = Date.now()

describe('iguid', function () {
  it('generates unique incremental id', function () {
    const uid = iguid()
    const uid1 = iguid()
    const uid2 = iguid()

    assert.isOk(uid)
    assert.strictEqual(uid, time + '0')
    assert.strictEqual(uid1, time + '1')
    assert.strictEqual(uid2, time + '2')
  })

  it('creates a new iguid generator with prefix configured', function () {
    const uid = createIGuid(null)
    const uidp = createIGuid('p')

    assert.isOk(uid)
    assert.isFunction(uid)
    assert.strictEqual(uid(), '0')
    assert.strictEqual(uid(), '1')

    assert.isOk(uidp)
    assert.isFunction(uidp)
    assert.strictEqual(uidp(), 'p0')
    assert.strictEqual(uidp(), 'p1')
  })
})
