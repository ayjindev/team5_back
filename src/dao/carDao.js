"use strict";

const { Op } = require('sequelize');
const { Car } = require('../models/index.js');

const dao = {

  // 조회
  selectCarAll(params) {
    return new Promise((resolve, reject) => {
      Car.findAll({
        
      })
    })
  },

  // 등록
  async insertCar(params) {
    try {
      await Car.create(params)
      return params;
    } catch(err) {
      return err;
    }
  },

  // 수정
  async updateCar(params) {
    try {
      await Car.update(params, {
        where: { id: params }
      })
      return params;
    } catch(err) {
      return err;
    }
  },

  // 삭제
  async deleteCar(params) {
    try {
      await Car.destroy(params, {
        
      })
    } catch {

    }
  }
};

module.exports = dao;


// select - 체크박스에 체크한 조건에 맞는 차 목록
  // async selectCarCheckbox(params) {
  //   try {
  //     await Car.findAll({
  //       where: {
  //         [Op.and]: {
  //           [Op.in]:[{ carGrade: params }],
  //           [Op.in]:[{ carFuel: params }]
  //         }
  //       }
  //     })
  //     return params;
  //   } catch(err) {
  //     return err;
  //   }
  // },

    // selectCarCheckBox(params) {
    //   return new Promise((resolve, reject) => {
    //     Car.findAll({
    //       // attributes: ['carGrade', 'carFuel'],
    //       attributes: ['carGrade'],
    //     //   where: {
    //     //   [Op.and]: 
    //     //   {
    //     //     [Op.in]:[{ carGrade: params }],
    //     //     [Op.in]:[{ carFuel: params }]
    //     //   }
    //     // },
    //       // {[Op.and]: 
    //       //   {
    //       //   [Op.in]:[{ carGrade: params }],
    //       //   [Op.in]:[{ carFuel: params }]
    //       // },
    //       // where: { carGrade: params, carFuel: params },
    //       // where: { carGrade: params },
    //     // },
    //     // where: { carGrade: params },
    //       raw: true
    //     }).then((result) => {
    //       console.log(result);
    //       resolve(result);
    //     }).catch((err) => {
    //       reject(err);
    //     });
    //   });
    // },



  // selectList(params) {
  //   // where 검색 조건
  //   const setQuery = {};
  //   if (params.name) {
  //     setQuery.where = {
  //       ...setQuery.where,
  //       name: { [Op.like]: `%${params.name}%` }, // like검색
  //     };
  //   }
  //   if (params.userid) {
  //     setQuery.where = {
  //       ...setQuery.where,
  //       userid: params.userid, // '='검색
  //     };
  //   }

  //   // order by 정렬 조건
  //   setQuery.order = [['id', 'DESC']];

  //   return new Promise((resolve, reject) => {
  //     User.findAndCountAll({
  //       ...setQuery,
  //       attributes: { exclude: ['password'] }, // password 필드 제외
  //       include: [
  //         {
  //           model: Department,
  //           as: 'Department',
  //         },
  //       ],
  //     }).then((selectedList) => {
  //       resolve(selectedList);
  //     }).catch((err) => {
  //       reject(err);
  //     });
  //   });
  // },
  

  // select - 차 브랜드로 검색하여 조회
  // selectCarSearch(params) {
  //   const setQuery = {};
  //   try {

  //   }
  // },