"use strict";

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const cors = require('cors');
// const corsConfig = require('./src/config/corsConfig.json');
// const session = require('session');
const dotenv = require('dotenv');
// const passport = require('passport');


dotenv.config();
const { sequelize } = require('./src/models/index.js');
// const passportConfig = require('./src/passport/index.js');

const app = express();
// passportConfig(); // 패스포트 설정

const router = require('./src/routes/index.js');
const logger = require('./src/config/logger.js');

// DB Connection
sequelize.sync({ force: false })
// DB가 초기화 될 때 DB에 필요한 테이블을 생성하는 함수
    .then(() => {
        logger.info("데이터베이스 연결 성공!");
    })
    .catch((err) => {
        logger.info("연결 실패!");
        // logger.error(err);
        console.error("ERROR :", err);
    });


// app setting
app.set("views", "./src/views");
app.set("views engine", "ejs");

// middleware
app.use(express.static(`${__dirname}/src/public`));
// app.use(cors(corsConfig));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
// app.use(session({
//     resave: false,
//     saveUninitialized: false,
//     secret: process.env.COOKIE_SECRET,
//     cookie: {
//         httpOnly: true,
//         secure: false
//     }
// }));
// app.use(passport.initialize());
// app.use(passport.session());

app.use('/', router);

module.exports = app;