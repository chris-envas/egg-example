'use strict';

const utils = require('utility');

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: '382967255@qq.com',
      password: utils.md5('123456'),
      team_id: 0,
      weixin: null,
      weibo: null,
      receive_remote: 0,
      email_verifyed: 1,
      avatar: null,
      created_at: new Date(),
      updated_at: new Date(),
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Users');
  },
};
