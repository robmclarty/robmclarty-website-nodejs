'use strict'

const cred = require('../cred')

const isAdmin = req =>
  req.cred &&
  req.cred.payload &&
  req.cred.payload.isAdmin

const isOwner = req =>
  req.cred &&
  req.cred.payload &&
  req.cred.payload.userId &&
  req.params &&
  req.params.userId &&
  Number(req.cred.payload.userId) === Number(req.params.userId)

const isAdminOrOwner = req => isAdmin(req) || isOwner(req)

// Blog Posts
// ----------
const requireReadBlogPosts = (req, res, next) => isAdminOrOwner(req) ?
  next() :
  cred.requirePermission('blogPosts:read')

const requireWriteBlogPosts = (req, res, next) => isAdminOrOwner(req) ?
  next() :
  cred.requirePermission('blogPosts:write')

// Artwork
// -------
const requireReadArtwork = (req, res, next) => isAdminOrOwner(req) ?
  next() :
  cred.requirePermission('artwork:read')

const requireWriteArtwork = (req, res, next) => isAdminOrOwner(req) ?
  next() :
  cred.requirePermission('artwork:write')

// Webwork
// -------
const requireReadWebwork = (req, res, next) => isAdminOrOwner(req) ?
  next() :
  cred.requirePermission('webwork:read')

const requireWriteWebwork = (req, res, next) => isAdminOrOwner(req) ?
  next() :
  cred.requirePermission('webwork:write')

// Textwork
// --------
const requireReadTextwork = (req, res, next) => isAdminOrOwner(req) ?
  next() :
  cred.requirePermission('textwork:read')

const requireWriteTextwork = (req, res, next) => isAdminOrOwner(req) ?
  next() :
  cred.requirePermission('textwork:write')

// Pictures
// --------
const requireReadPictures = (req, res, next) => isAdminOrOwner(req) ?
  next() :
  cred.requirePermission('pictures:read')

const requireWritePictures = (req, res, next) => isAdminOrOwner(req) ?
  next() :
  cred.requirePermission('pictures:write')

module.exports = {
  isAdmin,
  isOwner,
  isAdminOrOwner,
  requireReadBlogPosts,
  requireWriteBlogPosts,
  requireReadArtwork,
  requireWriteArtwork,
  requireReadWebwork,
  requireWriteWebwork,
  requireReadPictures,
  requireWritePictures,
  requireReadTextwork,
  requireWriteTextwork
}
