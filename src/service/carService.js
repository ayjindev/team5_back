"use strict";

const dao = require('../dao/carDao.js');

class Car {
    constructor(body) {
        this.body = body;
    };

    
    async selectCheckBox() {
        const selCheck = this.body;

        try {
            const car = await dao.selectCarCheckBox(selCheck.carGrade);
            console.log(car);

            if(car) {
                if(car.carGrade === selCheck.carGrade && car.carFuel === selCheck.carFuel) {
                    return { success: true };
                }
            return { success: true };
            }
        } catch(err) {
            return { success: false, err };
        }
    };
};

module.exports = Car;


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