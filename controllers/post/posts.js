const { posts } = require("../../models");

module.exports = {
  get: (req, res) => {
    posts
      .findAll({
        attributes: { exclude: ["content", "password", "updatedAt"] }
      })
      .then(data => {
        if (data) {
          res.status(200).send(data);
        } else {
          res.sendStatus(204);
        }
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  post: (req, res) => {
    const { isLogin, author, password, title, content } = req.body;

    posts
      .create({
        isLogin: isLogin,
        author: author,
        password: password,
        title: title,
        content: content
      })
      .then(() => {
        res.status(200).send("게시글이 정상적으로 등록되었습니다");
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(404);
      });
  }
};
