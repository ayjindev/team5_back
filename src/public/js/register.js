"use strict";

const userId = document.getElementById("user_id"),
    userName = document.getElementById("name"),
    userPw = document.getElementById("password"),
    confirmPassword = document.getElementById("confirm-password"),
    registerBtn = document.getElementById("button");

registerBtn.addEventListener('click', register);

function register() {
    if(!userId.value) return alert("아이디를 입력해주세요.");
    if(!userName.value) return alert("이름을 입력해주세요.");
    if(!userPw.value) return alert("비밀번호를 입력해주세요.");
    if(!confirmPassword.value) return alert("비밀번호를 확인해주세요.");
    if(userPw.value !== confirmPassword.value) return alert('비밀번호가 일치하지 않습니다.');

    const req = {
        userId: userId.value,
        userName: userName.value,
        userPw: userPw.value
        // confirm_password: confirmPassword.value
    };
    
    fetch('/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href = "/login";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.log(new Error("회원가입 중 에러 발생"));
    });
};