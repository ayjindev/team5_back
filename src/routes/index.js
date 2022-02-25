"use strict";

const express = require('express');
const logger = require('../config/logger');
const router = express.Router();

// const { isLoggedIn, isNotLoggedIn } = require('../passport/middlewares.js');

const mainRouter = require('./main.js');
const loginRouter = require('./login.js');
const registerRouter = require('./register.js');

// router.use((req, res, next) => {
//   res.locals.user = req.user;
// })

// router.use('/login', loginRouter.ctrl.login);
router.use('/', mainRouter);
router.use('/login', loginRouter);
router.use('/register', registerRouter);
// router.use('/register', isNotLoggedIn, registerRouter);

module.exports = router;