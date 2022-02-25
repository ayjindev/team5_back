"use strict";

const carGrade = document.getElementById("carGrade"),
    carFuel = document.getElementById("carFuel"),
    loginBtn = document.getElementById("button");

loginBtn.addEventListener('click', check);

function check() {
    const req = {
        userId: userId.value,
        userPw: userPw.value
    };

    fetch("/login", { // 로그인을 요청하는 fetch, 서버에 전달
        method: "POST",
        headers: {
            "Content-Type": "application/json" // 내가 보내는 데이터의 타입
        }, // JSON 데이터라고 알려줌
        body: JSON.stringify(req) // req를 문자열로 바꿔줌
      })
    
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
        if(res.success) {
            location.href = '/';
        } else {
            return alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("로그인 중 에러 발생!"));
    })
}