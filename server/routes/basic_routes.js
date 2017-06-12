'use strict'

const router = require('express').Router()

// Homepage route (should be overriden by web server with static html page).
router.route('/')
  .get((req, res) => res.sendFile('index.html', {
    root: req.app.get('assets-path')
  }))

// Admin app
// In production this route should really never be hit and should instead be
// handled by nginx.
router.route('/admin*')
  .get((req, res, next) => res.sendFile('index.html', {
    root: `${ req.app.get('assets-path') }/admin`
  }))

module.exports = router
