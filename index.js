'use strict'

function iguid () {
  return `${iguid.prefix}${iguid.state++}`
}

iguid.state = 0
iguid.prefix = Date.now()

/**
 * Compatibility with v1.x 
 */
iguid.create = () => iguid()

module.exports = iguid
