'use strict'

const { readFileSync } = require('fs')
const gotCred = require('cred')
const config = require('../config/server')

const cred = gotCred({
  resource: config.appName,
  issuer: config.jwt.issuer,
  accessOpts: {
    publicKey: readFileSync(config.jwt.access.publicKey),
    algorithm: config.jwt.access.algorithm
  }
}, true)

module.exports = cred
