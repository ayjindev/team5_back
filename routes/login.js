const express = require("express");
const crypto = require("crypto");
const User = require("../models/user");

const router = express.Router();

router.route("/").post(async (req, res) => {
  console.log(req.body);
  res.send("ok");
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
      } else {
        console.log("비밀번호가 다릅니다");
      }
    }
  } catch {}
});

module.exports = router;
