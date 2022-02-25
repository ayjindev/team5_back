const jwt = require("jsonwebtoken");
const cookie = require("cookie");
const redisClient = require("./redis");
const secretKey = process.env.SECRET_KEY;

const accessToken = jwt.sign(
  {
    loginId,
  },
  secretKey,
  { expiresIn: "1h" }
);

module.exports = accessToken;
