const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const Reservation = require("../models/reservation");

dotenv.config();
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const resInfo = req.body;
    console.log(req.headers.cookie);
    const verfiytoken = jwt.verify(
      req.headers.cookie.split("=")[1],
      process.env.SECRET_KEY
    );
    console.log(verfiytoken.id);
    console.log(resInfo);

    await Reservation.create({
      user_id: verfiytoken.id,
      car_name: req.body.car_name,
      car_rank: req.body.car_rank,
      car_fuel: req.body.car_fuel,
      car_price: req.body.car_price,
      client_name: req.body.resClientName,
      driver_name: req.body.resDriverName,
      driver_birth: req.body.resDriverBirth,
      driver_phonenumber: req.body.resPhoneNumber,
      start_date: req.body.resStart,
      end_date: req.body.resEnd,
    })
      .then(() => {
        console.log("예약 완료");
        res.json({ success: true });
      })
      .catch((err) => {
        console.error(err);
      });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
