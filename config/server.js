'use strict'

module.exports = {
  port: process.env.PORT || 3002,
  appName: process.env.APP_NAME || 'robmclarty-website',
  assetsPath: process.env.ASSETS_PATH || '../build',
  origin: process.env.ORIGIN || '*',
  jwt: {
    issuer: process.env.ISSUER || 'cred-auth-manager',
    access: {
      publicKey: process.env.ACCESS_PUBLIC_KEY || './config/keys/public-key.pem.sample',
      algorithm: process.env.ACCESS_ALG || 'ES384'
    }
  },
  rateLimit: process.env.RATE_LIMIT || 300
}
