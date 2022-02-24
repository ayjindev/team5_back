const express = require("express");
const crypto = require("crypto");
const User = require("../models/user");

const router = express.Router();

router.route("/").post(async (req, res) => {
  console.log(req.body);

  try {
    const register = await User.findAll({
      //데이터베이스에 아이디 조회하여 회원가입 여부 확인
      attributes: ["user_id"],
      where: { user_id: req.body.userId },
    });
    if (register.length === 0) {
      const createSalt = () =>
        new Promise((resolve, reject) => {
          crypto.randomBytes(64, (err, buf) => {
            if (err) reject(err);
            resolve(buf.toString("base64"));
          });
        });
      const createHashedPassword = (plainPassword) =>
        new Promise(async (resolve, reject) => {
          const salt = await createSalt();
          crypto.pbkdf2(plainPassword, salt, 9999, 64, "sha512", (err, key) => {
            if (err) reject(err);
            resolve({ password: key.toString("base64"), salt });
          });
        });

      const { password, salt } = await createHashedPassword(req.body.userPw); // 비밀번호 암호화

      //register(배열) 길이가 0이면 미회원
      await User.create({
        user_id: req.body.userId,
        user_pw: password,
        salt: salt,
        user_name: req.body.userName,
        user_email: req.body.userEmail,
        user_phonenumber: req.body.userPhoneNumber,
        user_birth: req.body.userBirth,
        user_zip: req.body.userZip,
        user_address1: req.body.userAddr1,
        user_address2: req.body.userAddr2,
      })
        .then(() => {
          console.log("회원가입 완료");
          res.json({ success: true });
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      //register(배열) 길이가 1이상이면 회원
      console.log(register.length);
      console.log("이미 존재하는 회원입니다");
      res.json({ success: false });
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
