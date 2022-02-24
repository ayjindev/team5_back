const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.STRING(50),
          allowNull: false,
          primaryKey: true,
        },
        user_pw: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        salt: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        user_name: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        user_email: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        user_phonenumber: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        user_birth: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        user_zip: {
          type: Sequelize.STRING(50),
          allowNull: true,
        },
        user_address1: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        user_address2: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "User",
        tableName: "users",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {}
};
