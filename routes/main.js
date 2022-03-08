const express = require("express");
const Car = require("../models/car");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const CarInfo = await Car.findAll();
    console.log(CarInfo);
    res.json(CarInfo);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
