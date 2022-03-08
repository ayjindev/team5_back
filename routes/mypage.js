const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  console.log(req);
  res.send("ok");
});

router.get("/", (req, res) => {
  console.log(req);
  res.send("ok");
});

module.exports = router;
