'use strict'

const router = require('express').Router()
const {
  getBlogPostsHTML,
  getBlogPostHTML,
  getBlogPosts,
  getBlogPost,
  postBlogPosts,
  putBlogPost,
  deleteBlogPost
} = require('../controllers/blogPost_controller')
const {
  requireReadBlogPosts,
  requireWriteBlogPosts
} = require('../middleware/auth_middleware')

router.route('/blog')
  .get(getBlogPostsHTML)

router.route('/blog/:slug')
  .get(getBlogPostHTML)

router.route('/api/blog-posts')
  .get(getBlogPosts)
  // .get(requireReadBlogPosts, getBlogPosts)
  // .post(requireWriteBlogPosts, postBlogPosts)

router.route('/api/blog-posts/:id')
  .get(requireReadBlogPosts, getBlogPost)
  .put(requireWriteBlogPosts, putBlogPost)
  .delete(requireWriteBlogPosts, deleteBlogPost)

module.exports = router
