"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "posts",
      [
        {
          isLogin: false,
          userId: null,
          author: "냥냥이",
          title: "나도 고양이 키우고 싶어요",
          content:
            "나만 고양이 없어요. 나도 고양이 키우고 싶어요. 고양이 고양이",
          password: "1234",
          createdAt: "2020-01-01",
          updatedAt: "2020-01-02"
        },
        {
          isLogin: false,
          userId: null,
          author: "캔따개",
          title: "오늘도 츄르 털렸습니다",
          content:
            "고양이들은 츄르를 엄청나게 좋아하는 군요. 캔따개는 오늘도 내일도 열심히 돈 벌겠습니다.",
          password: "9090",
          createdAt: "2020-01-05",
          updatedAt: "2020-01-11"
        },
        {
          isLogin: false,
          userId: null,
          author: "캣맘",
          title: "자주 보이던 고양이가 안 보여요ㅠㅠ",
          content:
            "날씨가 점점 추워지고 있는데, 자주 보던 고양이가 안보여요. 잘 지내고 있는거겠죠??",
          password: "3535",
          createdAt: "2020-02-01",
          updatedAt: "2020-02-02"
        },
        {
          isLogin: false,
          userId: null,
          author: "용산동집사",
          title: "우리집 고양이 좀 보세요",
          content: "고양이가 너무 귀여워. 우리집 고양이는 존재자체가 귀여워요",
          password: "123456",
          createdAt: "2020-11-01",
          updatedAt: "2020-11-02"
        },
        {
          isLogin: false,
          userId: null,
          author: "고양이천사",
          title: "사지말고 입양하세요!",
          content:
            "저희집 고양이는 포인핸드 어플을 통해서 입양을 했어요! 고양이 키우고 싶은 예비집사분, 포인핸드 애플리케이션을 다운 받아보세요",
          password: "1222234",
          createdAt: "2020-12-01",
          updatedAt: "2020-01-09"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("posts", null, {});
  }
};
