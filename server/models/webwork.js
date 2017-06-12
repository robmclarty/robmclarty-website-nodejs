'use strict'

const config = require('../../config/server')

const toJSON = webwork => ({
  id: webwork.id,
  title: webwork.title,
  body: webwork.body,
  description: webwork.description,
  pictureUrl: webwork.pictureUrl,
  slug: webwork.slug,
  isActive: webwork.isActive,
  createdAt: webwork.createdAt,
  updatedAt: webwork.updatedAt
})

const WebworkSchema = function (sequelize, DataTypes) {
  const Webwork = sequelize.define('Webwork', {
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
      singular: 'webwork',
      plural: 'webworks'
    },
    tableName: 'Webworks',
    instanceMethods: {
      toJSON: function () {
        return toJSON(this.get())
      }
    }
  })

  return Webwork
}

module.exports = WebworkSchema
