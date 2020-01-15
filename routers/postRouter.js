const express = require("express");
const routes = require("../routes");
const { posts, postDetail } = require("../controllers/postController");

const postRouter = express.Router();

postRouter.get("/", posts);

postRouter.get(routes.postDetail, postDetail);

module.exports = postRouter;
