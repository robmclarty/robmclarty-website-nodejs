'use strict'

const router = require('express').Router()
const {
} = require('../controllers/textwork_controller')
const {
  requireReadTextworks,
  requireWriteTextworks
} = require('../middleware/auth_middleware')

router.route('/api/pictures')
  .get(requireReadTextworks, getTextworks)
  .post(requireWriteTextworks, postTextworks)

router.route('/api/pictures/:id')
  .get(requireReadTextworks, getTextwork)
  .put(requireWriteTextworks, putTextwork)
  .delete(requireWriteTextworks, deleteTextwork)

module.exports = router
