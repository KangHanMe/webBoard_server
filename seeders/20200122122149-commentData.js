"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "comments",
      [
        {
          isLogin: false,
          userId: null,
          author: "고양이언니",
          content: "고양이랑 자주 시간을 보내세요",
          password: "1111",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 1
        },
        {
          isLogin: false,
          userId: null,
          author: "먼지누나",
          content: "물을 자주먹는게 좋다네요",
          password: "9095560",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 1
        },
        {
          isLogin: false,
          userId: null,
          author: "캣맘11",
          content: "1번을 추천합니다.",
          password: "3551235",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 3
        },
        {
          isLogin: false,
          userId: null,
          author: "용산동집사",
          content: "고양이가 너무 귀여워.",
          password: "1234561",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 4
        },
        {
          isLogin: false,
          userId: null,
          author: "고양이1004",
          content: "포인핸드 애플리케이션을 다운 받아보세요",
          password: "1222234",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 5
        }
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("comments", null, {});
  }
};
