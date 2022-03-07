const express = require("express");
const Car = require("../models/car");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const main = await Car.findAll();
    console.log(main);
    res.json(main);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
