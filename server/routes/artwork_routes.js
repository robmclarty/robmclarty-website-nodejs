'use strict'

const router = require('express').Router()
const {
} = require('../controllers/artwork_controller')
const {
  requireReadArtworks,
  requireWriteArtworks
} = require('../middleware/auth_middleware')

router.route('/api/pictures')
  .get(requireReadArtworks, getArtworks)
  .post(requireWriteArtworks, postArtworks)

router.route('/api/pictures/:id')
  .get(requireReadArtworks, getArtwork)
  .put(requireWriteArtworks, putArtwork)
  .delete(requireWriteArtworks, deleteArtwork)

module.exports = router
