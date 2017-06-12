'use strict'

const config = require('../../config/server')

const toJSON = textwork => ({
  id: textwork.id,
  title: textwork.title,
  body: textwork.body,
  description: textwork.description,
  slug: textwork.slug,
  isActive: textwork.isActive,
  createdAt: textwork.createdAt,
  updatedAt: textwork.updatedAt
})

const TextworkSchema = function (sequelize, DataTypes) {
  const Textwork = sequelize.define('Textwork', {
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
      singular: 'textwork',
      plural: 'textworks'
    },
    tableName: 'Textworks',
    instanceMethods: {
      toJSON: function () {
        return toJSON(this.get())
      }
    }
  })

  return Textwork
}

module.exports = TextworkSchema
