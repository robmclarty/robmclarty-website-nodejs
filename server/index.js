'use strict'

const express = require('express')
const handlebars = require('express-handlebars')
const RateLimit = require('express-rate-limit')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const cred = require('./cred')
const config = require('../config/server')

const app = express()

// Store reusable values.
app.set('assets-path', config.assetsPath)
app.set('app-name', config.appName)
app.set('port', config.port)

// Setup view engine(s).
app.engine('hbs', handlebars({
  layoutsDir: `${ __dirname }/views/layouts`,
  defaultLayout: 'simple',
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', `${ __dirname }/views`)

// Only accept application/json requests.
app.use(bodyParser.json({ limit: '2mb' }))

// Enable cross-origin resource sharing.
app.use(cors({
  origin: config.origin,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: false
}))

// Pass remote address through proxy so that limiter knows about it.
app.enable('trust proxy')

// Disable X-Powered-By header.
app.disable('x-powered-by')

// Serve static files from /build in development or test environment (on the
// production server, this would be handled by a web server/proxy, like nginx).
// if (process.env.NODE_ENV === ('development' || 'test')) {
//   app.use('/', express.static('./build'))
// }

if (process.env.NODE_ENV === 'test') {
  app.use('/', express.static('./build'))
} else {
  app.use('/', express.static('/srv/opt/app'))
}

// Rate limiter
const limiter = new RateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: config.rateLimit, // requests per windowMs
  delayAfter: 0,
  delayMs: 0,
  message: 'Too many requests, please try again later.',
  handler: (req, res) => {
    console.log(`Rate limit exceeded for IP ${ req.ip }`)
    res.format({
      html: () => res.status(options.statusCode).end(options.message),
      json: () => res.status(options.statusCode).json({ message: options.message })
    })
  }
})

// Apply limiter globally.
// Alternatively, we could create different limiters and apply them on specific
// routes like `app.use('/my-route', limiter)`.
app.use(limiter)

// Logs
if (process.env.NODE_ENV === ('development' || 'test')) {
  app.use(morgan('dev'))
}

// Routes
app.use('/', [
  require('./routes/basic_routes'),
  require('./routes/blogPost_routes')
])

// Error handling
const errorHandler = require('./middleware/error_middleware')

app.use([
  errorHandler.sequelizeError,
  errorHandler.unauthorized,
  errorHandler.forbidden,
  errorHandler.conflict,
  errorHandler.badRequest,
  errorHandler.unprocessable,
  errorHandler.notFound,
  errorHandler.genericError,
  errorHandler.catchall
])

module.exports = app
