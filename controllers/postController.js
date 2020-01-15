module.exports = {
  posts: (req, res) => {
    res.status(200).send("/posts");
  },
  postDetail: (req, res) => {
    res.status(200).send(`/post/${req.params.id}`);
  }
};
