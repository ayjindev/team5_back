const Sequelize = require("sequelize");

module.exports = class Car extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        car_num: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        car_name: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        car_rank: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        car_fuel: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        car_price: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        car_star: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        car_img: {
          type: Sequelize.STRING(200),
          allowNull: false,
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
  }
  static associate(db) {}
};
