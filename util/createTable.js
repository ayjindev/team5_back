const { Client } = require("pg");

const pg = new Client({
  user: "postgres",
  host: "localhost",
  database: "project",
  password: "postgres", // check your postgres password
  port: 5432,
});
const create = async (query) => {
  try {
    await pg.connect(); //gets connection
    await pg.query(query); //sends queries
    return true;
  } catch (error) {
    console.error(error.stack);
    return false;
  } finally {
    await pg.end(); //closes connection
  }
};

const users = `
    CREATE TABLE IF NOT EXISTS "users" (
	    "user_Id" VARCHAR(50) PRIMARY KEY,
	    "user_Name" VARCHAR(30) NOT NULL,
	    "user_Password" VARCHAR(30) NOT NULL,
      "user_Birthday" VARCHAR(10) NOT NULL,
      "user_Address" VARCHAR(15) NOT NULL,
      "user_Phonenumber" VARCHAR(15) NOT NULL,
      "user_Email" VARCHAR(50) NOT NULL
      );`;

const cars = `
    CREATE TABLE IF NOT EXISTS "cars" (
	    "car_Id" VARCHAR(30) PRIMARY KEY,
	    "car_Price" VARCHAR(30) NOT NULL,
	    "car_Brand" VARCHAR(30) NOT NULL,
      "car_Preference" VARCHAR(10) NOT NULL,
      "car_Grade" VARCHAR(15) NOT NULL,
      "car_Fuel" VARCHAR(15) NOT NULL,
      "car_img" VARCHAR(100) NOT NULL
       );`;

create(users).then((result) => {
  if (result) {
    console.log("유저 테이블 생성완료");
  }
});

create(cars).then((result) => {
  if (result) {
    console.log("자동차 테이블 생성완료");
  }
});
