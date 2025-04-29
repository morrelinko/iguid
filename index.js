/**
 * @param prefix
 * @return {import('./index.d.ts').IGuid}
 */
export function createIGuid (prefix) {
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

export const iguid = createIGuid(Date.now())
