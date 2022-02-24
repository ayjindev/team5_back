// /* ejs 파일의 script 부분 -> DOM으로 태그들을 컨트롤함!
// 프론트에서 이루어지는 것들을 조작
// 클라이언트가 데이터를 보내서 요청을 하는 부분 */
// "use strict";

// const userId = document.getElementById("user_id"),
//     password = document.getElementById("password"),
//     loginBtn = document.getElementById("button");

// loginBtn.addEventListener('click', login);

// function login() {
//     if(!userId.value) return alert("아이디를 입력해주세요.");
//     if(!password.value) return alert("비밀번호를 입력해주세요.");

//     const req = {
//         user_id: userId.value,
//         password: password.value
//     };

//     fetch("/login", { // 로그인을 요청하는 fetch, 서버에 전달
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json" // 내가 보내는 데이터의 타입
//         }, // JSON 데이터라고 알려줌
//         body: JSON.stringify(req) // req를 문자열로 바꿔줌
//       })
    
//     .then((res) => res.json())
//     .then((res) => {
//         console.log(res);
//         if(res.success) {
//             location.href = '/';
//         } else {
//             return alert(res.msg);
//         }
//     })
//     .catch((err) => {
//         console.error(new Error("로그인 중 에러 발생!"));
//     })
// }