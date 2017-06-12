'use strict'

const config = require('../../config/server')
const blogStatusObj = require('../../server/constants/blog_status')
const blogStatuses = Object.keys(blogStatusObj).map(status => blogStatusObj[status])

const toJSON = blogPost => ({
  id: blogPost.id,
  title: blogPost.title,
  body: blogPost.body,
  description: blogPost.description,
  pictureUrl: blogPost.pictureUrl,
  status: blogPost.status,
  slug: blogPost.slug,
  createdAt: blogPost.createdAt,
  updatedAt: blogPost.updatedAt
})

const BlogPostSchema = function (sequelize, DataTypes) {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: ''
    },
    body: {
      allowNull: true,
      type: DataTypes.TEXT,
      defaultValue: ''
    },
    description: {
      allowNull: true,
      type: DataTypes.STRING,
      defaultValue: ''
    },
    pictureUrl: {
      allowNull: true,
      type: DataTypes.STRING,
      defaultValue: ''
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM,
      values: blogStatuses,
      defaultValue: blogStatusObj.DRAFT
    },
    slug: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    isActive: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    name: {
      singular: 'blogPost',
      plural: 'blogPosts'
    },
    tableName: 'BlogPosts',
    instanceMethods: {
      toJSON: function () {
        return toJSON(this.get())
      }
    }
  })

  return BlogPost
}

module.exports = BlogPostSchema
