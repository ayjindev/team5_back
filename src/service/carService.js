"use strict";

const dao = require('../dao/carDao.js');

class Car {
    constructor(body) {
        this.body = body;
    };
    
    // select() {
    //     const select = this.body;

    //     try {
    //         const car = dao.selectCar();
    //     } catch(err) {

    //     }
    // };


    // 관리자 페이지 작업
    // 차 등록
    // carInsert() {
    //     const admin = this.body;

    //     try {
    //         const result = await dao.insertCar(admin);
    //         console.log(result);
    //         return { success: true };
    //     } catch(err) {
    //         return { success: false, err };
    //     };
    // };
};

module.exports = Car;