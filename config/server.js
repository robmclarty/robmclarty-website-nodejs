'use strict'

module.exports = {
  appName: process.env.APP_NAME || 'robmclarty-website',
  port: process.env.PORT || 3000,
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
