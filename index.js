'use strict'

/**
 * @param prefix
 * @return {function}
 */
function newUp (prefix) {
  const uid = function uid () {
    const prefix = uid.prefix
    return `${prefix
      ? (typeof prefix === 'function'
        ? prefix()
        : prefix)
      : ''}${uid.state++}`
  }

  uid.state = 0
  uid.prefix = prefix

  return uid
}

module.exports = newUp(Date.now())
module.exports.newUp = newUp
