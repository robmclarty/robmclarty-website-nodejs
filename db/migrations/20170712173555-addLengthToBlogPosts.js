'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn('BlogPosts', 'length', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 5
    })
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('BlogPosts', 'length')
  }
}
