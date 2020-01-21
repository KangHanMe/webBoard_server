const { comments } = require("../../models");

module.exports = {
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const { password } = req.body;

      const commentPassword = await comments.findOne({
        attributes: ["password"],
        where: { id: id }
      });

      if (password === commentPassword.dataValues.password) {
        await comments.destroy({
          where: { id: id }
        });
        res.sendStatus(200);
      } else {
        res.status(400).send("wrong password");
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
