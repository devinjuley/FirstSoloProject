'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users' }
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(55)
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING(55)
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING(55)
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(75)
      },
      details: {
        allowNull: false,
        type: Sequelize.STRING(55)
      },
      aboutThisSpace: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Spots');
  }
};