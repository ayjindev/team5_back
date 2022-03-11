const Sequelize = require("sequelize");
const User = require("./user");
const Car = require("./car");
const Reservation = require("./reservation");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;

db.User = User;
db.Car = Car;
db.Reservation = Reservation;

User.init(sequelize);
Car.init(sequelize);
Reservation.init(sequelize);

User.associate(db);
Car.associate(db);
Reservation.associate(db);

module.exports = db;
