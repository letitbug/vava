'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"dev"',
  BASE_API: '"https://dev.api.com"',
  TINYMCE_RES: '"http://127.0.0.1:9999/"'
})