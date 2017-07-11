'use strict'

const {
  createError,
  BAD_REQUEST,
  UNPROCESSABLE,
  FORBIDDEN,
  NOT_FOUND
} = require('../helpers/error_helper')
const { BlogPost } = require('../models')
const cred = require('../cred')

const findBlogPostById = id => BlogPost.findById(id).then(blogPost => {
  if (!blogPost) throw createError({
    status: NOT_FOUND,
    message: `No blog post found with the id '${ id }'`
  })

  return blogPost
})

// GET /blog
const getBlogPostsHTML = (req, res, next) => {
  BlogPost.findAll()
    .then(blogPosts => res.render('blog/index', {
      layout: 'blog',
      blogPosts
    }))
    .catch(next)
}

// GET /blog/:slug
const getBlogPostHTML = (req, res, next) => {
  const slug = req.params.slug

  BlogPost.findOne({ where: { slug } })
    .then(blogPost => res.render('blog/post', {
      layout: 'blog',
      blogPost
    }))
    .catch(next)
}

// GET /api/blog-posts
const getBlogPosts = (req, res, next) => {
  BlogPost.findAll()
    .then(blogPosts => res.json({
      ok: true,
      message: 'blog posts found',
      blogPosts
    }))
    .catch(next)
}

// GET /api/blog-posts/:id
const getBlogPost = (req, res, next) => {
  const blogPostId = req.params.id

  findBlogPostById(blogPostId)
    .then(blogPost => res.json({
      ok: true,
      message: 'blog post found',
      blogPost
    }))
    .catch(next)
}

// POST /api/blog-posts
const postBlogPosts = (req, res, next) => {
  BlogPost.create(req.body)
    .then(blogPost => res.json({
      ok: true,
      message: 'blog post created',
      blogPost
    }))
    .catch(next)
}

// PUT /api/blog-posts/:id
const putBlogPost = (req, res, next) => {
  const blogPostId = req.params.id

  findBlogPostById(blogPostId)
    .then(blogPost => blogPost.update(req.body))
    .then(blogPost => res.json({
      ok: true,
      message: 'blog post updated',
      blogPost
    }))
    .catch(next)
}

// DELETE /api/blog-posts/:id
const deleteBlogPost = (req, res, next) => {
  const blogPostId = req.params.id

  findBlogPostById(blogPostId)
    .then(blogPost => blogPost.destroy())
    .then(blogPost => res.json({
      ok: true,
      message: 'blog post deleted'
    }))
    .catch(next)
}

module.exports = {
  getBlogPostsHTML,
  getBlogPostHTML,
  getBlogPosts,
  getBlogPost,
  postBlogPosts,
  putBlogPost,
  deleteBlogPost
}
