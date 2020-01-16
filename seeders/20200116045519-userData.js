'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', [{
      isLogin: /*변수로 데이터를 넣는다.*/,
      userId:,
      author: ,
      title: ,
      content: ,
      password:,
      createdAt:,
      updatedAt:
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {});
  }
};
