const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const Reservation = require("../models/reservation");

dotenv.config();
const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.headers.cookie.split("=")[1]);
  try {
    const verfiytoken = jwt.verify(
      req.headers.cookie.split("=")[1],
      process.env.SECRET_KEY
    );
    //예약테이블에서 정보 가져오기 로직 추가
    console.log(verfiytoken.id);
    const resInfo = await Reservation.findAll({
      raw: true,
      where: {
        user_id: `${verfiytoken.id}`,
      },
    });
    console.log(resInfo);
    res.json(resInfo);
  } catch (err) {
    console.error(err);
  }
});

// router.get("/", (req, res) => {
//   console.log(req);
//   res.send("ok");
// });

module.exports = router;
