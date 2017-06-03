'use strict'

const router = require('express').Router()
const {
} = require('../controllers/webwork_controller')
const {
  requireReadWebworks,
  requireWriteWebworks
} = require('../middleware/auth_middleware')

router.route('/api/pictures')
  .get(requireReadWebworks, getWebworks)
  .post(requireWriteWebworks, postWebworks)

router.route('/api/pictures/:id')
  .get(requireReadWebworks, getWebwork)
  .put(requireWriteWebworks, putWebwork)
  .delete(requireWriteWebworks, deleteWebwork)

module.exports = router
