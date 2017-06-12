'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development'
const dbconfig = require('../../config/database')
const sequelize = new Sequelize(dbconfig[env].url, {
  dialect: dbconfig[env].dialect,
  logging: false
})
const models = {}

fs.readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== 'index.js')
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))

    models[model.name] = model
  })

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) models[modelName].associate(models)
})

models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models
