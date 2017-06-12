'use strict'

const config = require('../../config/server')

const toJSON = artwork => ({
  id: artwork.id,
  title: artwork.title,
  description: artwork.description,
  pictureUrl: artwork.pictureUrl,
  isActive: artwork.isActive,
  createdAt: artwork.createdAt,
  updatedAt: artwork.updatedAt
})

const ArtworkSchema = function (sequelize, DataTypes) {
  const Artwork = sequelize.define('Artwork', {
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
    isActive: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    name: {
      singular: 'artwork',
      plural: 'artworks'
    },
    tableName: 'Artworks',
    instanceMethods: {
      toJSON: function () {
        return toJSON(this.get())
      }
    }
  })

  return Artwork
}

module.exports = ArtworkSchema
