// 유저
"use strict";

const dao = require('../dao/userDao.js');

class User {
    constructor(body) { // body에서 입력한 값을 담아줌
        this.body = body;
    };

    // 로그인
    async login() {
        const client = this.body;

        try {
            const user = await dao.selectUser(client.userId); // userDao.js
            // 클라이언트에서 입력한 아이디의 정보를 user에 가져옴
            console.log(user);

            if(user) {
                if(user.userId === client.userId && user.userPw === client.userPw) {
                    return { success: true };
                };
                return { success: false, msg: "비밀번호가 틀렸습니다." };
            };
            return { success: false, msg: "존재하지 않는 아이디입니다." };
        } catch(err) {
            return { success: false, err } // err: err
        };
    };

    // 회원가입
    async register() {
        const client = this.body;

        try {
            const result = await dao.insertUser(client);
            console.log(result);
            return { success: true };
        } catch(err) {
            return { success: false, err };
        };
    };

    // 회원정보 수정
};

module.exports = User;