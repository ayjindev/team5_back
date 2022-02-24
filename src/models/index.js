"use strict";

const { sequelize } = require('./connection.js');
const User = require('./user.js');
const Car = require('./car.js');

const db = {};

db.sequelize = sequelize;

// model
db.User = User;
db.Car = Car;

// model init
User.init(sequelize);
Car.init(sequelize);

module.exports = db;