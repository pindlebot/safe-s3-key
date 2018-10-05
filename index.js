const crypto = require('crypto')

module.exports = (name) => {
  if (typeof name !== 'string') {
    if (name.constructor.prototype.hasOwnProperty('toString')) {
      name = name.toString()
    } else {
      throw new Error('argument must be a string')
    }
  }
  if (name.startsWith('/')) {
    name = name.slice(1, name.length)
  }
  let filename = decodeURIComponent(name).replace(/[^A-Za-z0-9!\-_.*'()]/g, '')  
  return filename || crypto.randomBytes(10).toString('hex')
}
