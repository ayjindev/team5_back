"use strict";

const express = require('express');
const logger = require('../config/logger');
const router = express.Router();

const mainRouter = require('./main.js');
const loginRouter = require('./login.js');
const registerRouter = require('./register.js');

// router.use('/login', loginRouter.ctrl.login);
router.use('/', mainRouter);
router.use('/login', loginRouter);
router.use('/register', registerRouter);

module.exports = router;