'use strict'

const router = require('express').Router()
const {
} = require('../controllers/picture_controller')
const {
  requireReadPictures,
  requireWritePictures
} = require('../middleware/auth_middleware')

router.route('/api/pictures')
  .get(requireReadPictures, getPictures)
  .post(requireWritePictures, postPictures)

router.route('/api/pictures/:id')
  .get(requireReadPictures, getPicture)
  .put(requireWritePictures, putPicture)
  .delete(requireWritePictures, deletePicture)

module.exports = router
