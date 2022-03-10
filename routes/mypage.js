const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.headers.cookie.split("=")[1]);
  try {
    const verfiytoken = jwt.verify(
      req.headers.cookie.split("=")[1],
      process.env.SECRET_KEY
    );
    //예약테이블에서 정보 가져오기
    console.log(verfiytoken);
  } catch (err) {
    console.error(err);
  }

  res.send("ok");
});

// router.get("/", (req, res) => {
//   console.log(req);
//   res.send("ok");
// });

module.exports = router;
