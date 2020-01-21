const { posts } = require("../../models");
const { comments } = require("../../models");

module.exports = {
  get: async (req, res) => {
    // 글 내용 가져오기 & 댓글 가져오기
    try {
      const { id } = req.params;
      const post = await posts.findOne({
        where: { id: id }
      });
      const commentsList = await comments.findAll({
        attributes: ["isLogin", "userId", "author", "content", "createdAt"],
        where: {
          postId: id
        }
      });
      Promise.all([post, commentsList]).then(data => {
        res.status(200).json(data);
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  put: async (req, res) => {
    // 글 수정
    try {
      const { id } = req.params;
      const { password, title, content } = req.body;

      if (!password || !title || !content) {
        res.sendStatus(404);
      } else {
        const postPassword = await posts.findOne({
          attributes: ["password"],
          where: { id: id }
        });

        if (password === postPassword.dataValues.password) {
          await posts.update(
            { title: title, content: content },
            {
              where: { id: id }
            }
          );
          res.sendStatus(200);
        } else {
          res.status(404).send("wrong password");
        }
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

      if (password === postPassword.dataValues.password) {
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
