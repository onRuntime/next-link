
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./next-link.cjs.production.min.js')
} else {
  module.exports = require('./next-link.cjs.development.js')
}
