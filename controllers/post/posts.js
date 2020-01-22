const { posts, comments } = require("../../models");
const sequelize = require("sequelize");

module.exports = {
  get: async (req, res) => {
    try {
      const postsComments = await posts.findAll({
        attributes: [
          "id",
          "isLogin",
          "author",
          "title",
          "createdAt",
          [
            sequelize.fn("COUNT", sequelize.col("comments.postId")),
            "commentCount"
          ]
        ],
        include: [
          {
            model: comments,
            attributes: []
          }
        ],
        group: "posts.id"
      });
      res.status(200).json(postsComments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
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
