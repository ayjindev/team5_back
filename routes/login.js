const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const crypto = require("crypto");
const User = require("../models/user");

const router = express.Router();
dotenv.config();

router.route("/").post(async (req, res) => {
  console.log(req.body);
  const { loginId, loginPw } = req.body; //input id 명 통일 해야함

  try {
    const login = await User.findOne({
      attributes: ["user_id"],
      where: { user_id: loginId },
    });
    if (login.length === 0) {
      console.log("등록되지 않은 회원입니다");
      res.json({ success: false });
    } else {
      const makePasswordHashed = (loginId, loginPw) =>
        new Promise(async (resolve, reject) => {
          const salt = await User.findOne({
            attributes: ["salt"],
            raw: true,
            where: { user_id: loginId },
          }).then((result) => result.salt);

          crypto.pbkdf2(loginPw, salt, 9999, 64, "sha512", (err, key) => {
            if (err) reject(err);
            resolve(key.toString("base64"));
          });
        });

      const password = await makePasswordHashed(loginId, loginPw);
      console.log(password);
      const passwordCheck = await User.findOne({
        attributes: ["user_pw"],
        raw: true,
        where: { user_id: loginId },
      }).then((result) => result.user_pw);
      if (password === passwordCheck) {
        console.log("로그인 성공");
        const secretKey = process.env.SECRET_KEY;
        const accessToken = jwt.sign(
          {
            id: loginId,
          },
          secretKey,
          { expiresIn: "1h" }
        );
        console.log(accessToken);
        res.cookie("auth", accessToken, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 1, // 유효기간 1시간
        });
        res.status(201).json({
          success: true,
          accessToken: accessToken,
        });
      } else {
        console.log("비밀번호가 다릅니다");
        res.json({ success: false });
      }
    }
  } catch (err) {
    (err) => console.error(err);
  }
});

module.exports = router;
