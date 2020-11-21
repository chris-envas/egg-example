'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, TINYINT } = Sequelize;
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      email: STRING(40),
      password: STRING,
      username: STRING(40),
      weibo: STRING(40),
      weixin: TINYINT(1),
      team_id: INTEGER,
      receive_remote: TINYINT(1),
      email_verifyed: TINYINT(1),
      avatar: STRING(40),
      created_at: {
        allowNull: false,
        type: DATE,
      },
      updated_at: {
        allowNull: false,
        type: DATE,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Users');
  },
};
