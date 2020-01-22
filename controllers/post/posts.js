const { posts } = require("../../models");

module.exports = {
  get: (req, res) => {
    posts
      .findAll({
        attributes: { exclude: ["content", "password", "updatedAt"] }
      })
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  post: (req, res) => {
    const { isLogin, author, password, title, content } = req.body;

    if (
      author === "" ||
      password === "" ||
      title === "" ||
      content === "" ||
      typeof author !== "string" ||
      typeof password !== "string" ||
      typeof title !== "string" ||
      typeof content !== "string"
    ) {
      res.status(400).send("잘못된 요청입니다");
    } else {
      posts
        .create({
          isLogin: isLogin,
          author: author,
          password: password,
          title: title,
          content: content
        })
        .then(data => {
          res.status(200).json(data.dataValues.id);
        })
        .catch(err => {
          console.log(err);
          res.sendStatus(404);
        });
    }
  }
};
