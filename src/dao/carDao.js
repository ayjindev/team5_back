"use strict";

const { Op } = require('sequelize');
const { Car } = require('../models/index.js');

const dao = {
// select - 체크박스에 체크한 조건에 맞는 차 목록
//★★ 이 코드 확실치 않음!!!
  async selectCarCheckbox(params) {
    try {
      return await Car.findAll({
        where: {
          [Op.and]: {
            [Op.in]:[{ carGrade: params }],
            [Op.in]:[{ carFuel: params }]
          }
        }
      })
    } catch(err) {
      return err;
    }
  },
  
  // select - 차 브랜드로 검색하여 조회
  // selectCarSearch(params) {
  //   const setQuery = {};
  //   try {

  //   }
  // },

  // insert
  async insertCar(params) {
    try {
      await User.create(params)
      return params;
    } catch(err) {
      return err;
    }
  }
};

module.exports = dao;