const { posts } = require("../../models");

module.exports = {
  get: async (req, res) => {
    // 글 내용 가져오기
    try {
      const { id } = req.params;
      const post = await posts.findOne({
        attributes: { exclude: ["password", "updatedAt"] },
        where: { id: id }
      });
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  post: async (req, res) => {
    // (비밀번호 확인하는 부분) -- 비밀번호가 맞으면, 쿠키-세션을 이용해 인증 권한을 준다.
    try {
      const { id } = req.params;
      const { password } = req.body;
      const sess = req.session;

      if (password === "" || typeof password !== "string") {
        res.status(404).send("wrong password");
      } else {
        const postPassword = await posts.findOne({
          attributes: ["password"],
          where: { id: id }
        });

        if (password === postPassword.password) {
          sess.postid = id;
          res.status(200).send("세션 발급됨");
        } else {
          res.status(404).send("wrong password");
        }
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  put: async (req, res) => {
    // 글 수정
    try {
      const { id } = req.params;
      const { author, title, content } = req.body;
      const sess = req.session;

      if (sess.postid === id) {
        if (
          author === "" ||
          title === "" ||
          content === "" ||
          typeof author !== "string" ||
          typeof title !== "string" ||
          typeof content !== "string"
        ) {
          res.sendStatus(404);
        } else {
          await posts.update(
            { author: author, title: title, content: content },
            {
              where: { id: id }
            }
          );

          sess.destroy();
          res.status(200).send("수정됨");
        }
      } else {
        res.status(401).send("Not found Session");
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  delete: async (req, res) => {
    // 글 삭제
    try {
      const { id } = req.params;
      const { password } = req.body;

      const postPassword = await posts.findOne({
        attributes: ["password"],
        where: { id: id }
      });

      if (password === postPassword.password) {
        await posts.destroy({
          where: { id: id }
        });
        res.sendStatus(200);
      } else {
        res.status(404).send("wrong password");
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
