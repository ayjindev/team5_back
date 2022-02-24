"use strict";

const express = require('express');
const router = express.Router();

const logger = require('../config/logger.js');
const Car = require('../service/carService.js');

// GET
router.get('/', (req, res) => {
  logger.info('GET \'/\' \'홈 화면으로 이동\'')
  res.render('index.ejs', { title: 'Home' });
  console.log(req.body.color);
  // res.send('완료')
});

router.post('/', (req, res) => {
  // console.log('post body : ', req.body.color)
  console.log(req.body);
});

module.exports = router;

