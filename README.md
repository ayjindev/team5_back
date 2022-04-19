# :tangerine: 제주 넘는 차
> 제주도 렌터카 사이트 구현

![logo](https://user-images.githubusercontent.com/96156114/163924691-ade76b37-7dee-4527-ad2d-329afa162ee8.gif)

[![Npm version][npm-image]][npm-url]
[![Node version][node-image]][node-url]
[![Vue version][vue-image]][vue-url]

- 프로젝트 기간 2022-02-21 ~ 2022-03-15
- 최종 보고서 [notion](https://broad-industry-94e.notion.site/5-fd47990816c541dd809367e8d942d7a1) 문서 참고

<br/>

## :mag: Features

**로그인 및 회원가입 기능**
- 예약 화면 접속 시 로그인 필요
- 회원가입 · 로그인 유효성 및 공란 체크

**정렬 기능**
- 렌터카 가격/평점 오름차/내림차순 정렬
- 이미지 클릭 시 해당 차량의 상세 페이지로 연결

**예약 · 결제 기능**
- 예약폼에서 필요 정보 입력
- 예약 확인 페이지에서 입력한 정보 확인 가능

**리뷰 기능**
- 마이 페이지에서 리뷰 작성 가능
- 등록된 리뷰 확인 가능

_보다 자세한 기능은 [notion](https://broad-industry-94e.notion.site/5-fd47990816c541dd809367e8d942d7a1) 문서 참고_

<br/>

## :page_facing_up: Installation

front:

+ Project setup
```
npm install
```

+ Compiles and hot-reloads for development
```
npm run serve
```

+ Compiles and minifies for production
```
npm run build
```

+ Lints and fixes files
```
npm run lint
```

back:

_설치 전 DB에 `project` 직접 생성 필요_
```sh
npm install // 설치
npm start // nodemon
```

<br/>

## :books: Used

* [Node.js](https://nodejs.org/)
    * [Sequelize](https://sequelize.org/)
    * [Express.js](https://expressjs.com/)
    * [Postman](https://www.postman.com/)
    * [ngnix](https://www.nginx.com/)
* [Vue.js](https://v2.vuejs.org/)
    * [Bootstrap-vue](https://bootstrap-vue.org/)
* [PostgreSQL](https://www.postgresql.org/)
    * [Dbeaver](https://dbeaver.io/)

<br/>

## :eyes: Members

김희선
+ [Github](https://github.com/legavin1023)
+ legavin1023@gmail.com

<br/>

진아영
+ [Github](https://github.com/jay0v0)
+ [Blog](https://keepgoinglog.tistory.com/)
+ ayjindev@gmail.com

<br/>

이보람
+ [Github](https://github.com/bestDevBB)
+ cnn93@naver.com

<br/>

하정욱
+ [Github](https://github.com/Ha-jeongwook)

<br/>


<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/badge/npm-v6.14.15-orange?style=flat-square
[npm-url]: https://www.npmjs.com/
[node-image]: https://img.shields.io/badge/node-v14.18.1-blue?style=flat-square
[node-url]: https://nodejs.org/
[vue-image]: https://img.shields.io/badge/vue-v2.6.14-brightgreen?style=flat-square
[vue-url]: https://v2.vuejs.org/
