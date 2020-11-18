'use strict';

const {DataTypes} = require(`sequelize`)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(`userTable`, {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      first_name:{
        type:DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(`userTable`)

  }
};
