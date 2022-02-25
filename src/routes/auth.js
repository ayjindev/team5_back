"use strict";

const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('../passport/middlewares.js');
const User = require('../models/user.js');

const router = express.Router();

router.post('/register', isNotLoggedIn, async(req, res, next) => {
  const { userId, userName, userPw } = req.body;
  try {
    const exUser = await User.findOne({ where: userId })
    if(exUser) {
      return res.redirect('/register?error=exist')
    }
    const hash = await bcrypt.hash(userPw, 12);
    await User.create({
      userId, userName, userPw: hash
    });
    return res.redirect('/');
  } catch(err) {
    console.error(err);
    return next(error);
  }
})