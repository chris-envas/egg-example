/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1605054855218_4580';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // use sql
  config.sequelize = {
    dialect: 'mysql',
    datbase: 'miao',
    host: '134.175.245.200',
    port: '3306',
    username: 'root',
    password: 'ljx5201314',
  };

  return {
    ...config,
    ...userConfig,
  };
};
