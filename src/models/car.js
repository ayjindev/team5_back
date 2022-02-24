"use strict";

const Sequelize = require("sequelize");

module.exports = class Car extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        carNum: {
          type: Sequelize.STRING(9),
          allowNull: false,
          primaryKey: true,
        },
        carPrice: {
          type: Sequelize.STRING(7),
          allowNull: false,
        },
        carBrand: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        carPreference: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        carGrade: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        carFuel: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        carImg: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Car",
        tableName: "cars",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  };
  static associate(db) {

  };
};