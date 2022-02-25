/* User DB Operation 
index.js에서 User DB만 불러옴 */
const { Op } = require('sequelize');
const { User } = require('../models/index.js');

const dao = {
    // 로그인(for User lookup)
    // async selectUser(params) {
    //   try {
    //     return await User.findOne({
    //       attributes: ['user_id', 'userPw'],
    //       where: { user_id: params },
    //       raw: true
    //     });
    //   } catch(err) {
    //     return err;
    //   };
    // },

    // 로그인(for User lookup)
    selectUser(params) {
      return new Promise((resolve, reject) => {
        User.findOne({
          attributes: ['userId', 'userPw'],
          where: { userId: params },
          raw: true,
        }).then((result) => {
          console.log(result);
          resolve(result);
        }).catch((err) => {
          reject(err);
        });
      });
    },

    // select
    async selectUserAll() {
      try {
        return await User.findAll()
      } catch(err) {
        return err;
      }
    },

    // insert
    async insertUser(params) {
      try {
        await User.create(params)
        return params;
      } catch(err) {
        return err;
      }
    },

    // update
    updateUser(params) {
      User.update(params)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.error(err);
      })
    },

    // delete
    deleteUser(params) {
      User.destroy({
        where: { userId: params }
      }).then((result) => {
        resolve( { resultCount: result });
      }).catch((err) => {
        reject(err);
      })
    }
};

module.exports = dao;