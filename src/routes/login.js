/* 로그인 화면 라우터
get, post 요청이 들어왔을 때 수행할 것을 컨트롤
userService.js를 불러와서 컨트롤함 */
"use strict";

const express = require('express');
const router = express.Router();

const logger = require('../config/logger.js');
const User = require('../service/userService.js');

// GET
router.get('/', (req, res) => {
    logger.info("GET \'/login\' \'로그인 화면으로 이동\'");
    res.render('login.ejs');
});

// POST
router.post('/', async (req, res) => {
    const user = new User(req.body); // userService.js import
    const response = await user.login();

    const url = {
        method: "POST",
        path: "/login",
        status: response.err ? 400 : 200
    };

    log(response, url);
    return res.status(url.status).json(response);
});

module.exports = router;

// 페이지 이동시 로그 띄움
const log = (response, url) => {
    if(response.err) {
        logger.error(
            `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.err}`
        );
    } else {
        logger.info(
            `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.msg || ""}`
        );
    };
}