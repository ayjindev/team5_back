const Sequelize = require("sequelize");

module.exports = class Reservation extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        reservation_no: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        user_id: {
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
        client_name: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        driver_name: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        driver_birth: {
          type: Sequelize.DATEONLY,
          allowNull: true,
        },
        driver_phonenumber: {
          type: Sequelize.STRING(50),
          allowNull: true,
        },
        start_date: {
          type: Sequelize.DATEONLY,
          allowNull: true,
        },
        end_date: {
          type: Sequelize.DATEONLY,
          allowNull: true,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Reservation",
        tableName: "reservations",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Reservation.belongsTo(db.User, {
      foreignKey: "user_id",
      targetKey: "user_id",
    });
  }
};
