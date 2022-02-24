"use strict";

const express = require('express');
const router = express.Router();

const logger = require('../config/logger.js');
const User = require('../service/userService.js');

router.get('/', (req, res) => {
    logger.info("GET \'/register\' \'회원가입 화면으로 이동\'");
    res.render('register.ejs');
});

router.post('/', async (req, res) => {
    const user = new User(req.body);
    console.log(req.body, "이거");
    const response = await user.register(); // userService.js

    const url = {
        method: "POST",
        path: "/register",
        status: response.err ? 409 : 201
    };

    log(response, url);
    return res.status(url.status).json(response);
})

module.exports = router;

const log = (response, url) => {
    if(response.err) {
        logger.error(
            `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.err}`
        )
    } else {
        logger.info(
            `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.msg || ""}`
        )
    };
};