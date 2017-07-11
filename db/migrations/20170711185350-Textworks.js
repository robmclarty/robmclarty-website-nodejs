'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Textworks', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: ''
      },
      body: {
        allowNull: true,
        type: Sequelize.TEXT,
        defaultValue: ''
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue: ''
      },
      slug: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      isActive: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Textworks')
  }
}
