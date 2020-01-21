const { comments } = require("../../models");

module.exports = {
  post: (req, res) => {
    try {
      const { isLogin, postId, author, password, content } = req.body;
      if (
        author === "" ||
        password === "" ||
        content === "" ||
        typeof author !== "string" ||
        typeof password !== "string" ||
        typeof content !== "string"
      ) {
        res.status(400).send("잘못된 요청입니다");
      } else {
        comments
          .create({
            isLogin: isLogin,
            author: author,
            password: password,
            content: content,
            postId: postId
          })
          .then(() => {
            comments
              .findAll({
                where: {
                  postId: postId
                }
              })
              .then(data => {
                res.status(200).json(data);
              });
          });
      }
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
};
