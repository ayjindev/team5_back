"use strict";

const express = require('express');
const router = express.Router();

const logger = require('../config/logger.js');
const Car = require('../service/carService.js');

// GET
router.get('/', (req, res) => {
  logger.info('GET \'/\' \'홈 화면으로 이동\'')
  res.render('index.ejs', { title: 'Home' });
  // console.log(req.body.color);
  // res.send('완료')
});

router.post('/', async (req, res) => {
  // console.log('post body : ', req.body.color)
  console.log('router: ', req.body);
  const car = new Car(req.body);
  const response = await car.selectCheckBox();

  const url = {
    method: "POST",
    path: "/",
    status: response.err ? 400 : 200
};

    log(response, url);
    return res.status(url.status).json(response);
});


module.exports = router;

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