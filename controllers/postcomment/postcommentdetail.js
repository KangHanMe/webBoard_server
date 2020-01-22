const { comments } = require("../../models");

module.exports = {
  get: async (req, res) => {
    // 댓글 가져오기
    try {
      const { id } = req.params;
      const commentsList = await comments.findAll({
        attributes: ["author", "content", "createdAt"],
        where: {
          postId: id
        }
      });
      res.status(200).json(commentsList);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
