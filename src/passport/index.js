// const passport = require('passport');
// const local = require('./localStrategy.js');
// const User = require('../models/User.js');
// // const dao = require('../dao/userDao.js');

// module.exports = () => {
//   passport.serializeUser((user, done) => { // 로그인 시 실행
//     done(null, user.id);
//   });
  
//   passport.deserializeUser((id, done) => { // 매 요청 시 실행
//     User.findOne({ where: id })
//     .then(user => done(null, user))
//     .catch(err => done(err));
//   })

//   local();
// };