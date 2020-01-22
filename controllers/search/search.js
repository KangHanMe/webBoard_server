const sequelize = require("sequelize");
const Op = sequelize.Op;
const { posts } = require("../../models");

module.exports = {
  post: async (req, res) => {
    try {
      const { query } = req.body;

      if (query === "" || typeof query !== "string") {
        res.status(400).send("잘못된 요청입니다");
      } else {
        const seachedPosts = await posts.findAll({
          attributes: { exclude: ["content", "password", "updatedAt"] },
          where: {
            [Op.or]: [
              {
                author: {
                  [Op.like]: `%${query}%`
                }
              },
              {
                title: {
                  [Op.like]: `%${query}%`
                }
              },
              {
                content: {
                  [Op.like]: `%${query}%`
                }
              }
            ]
          }
        });

        res.status(200).json(seachedPosts);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
